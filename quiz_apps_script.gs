/*
  ============================================================
  ★ クイズ問題管理 Apps Script ★

  【セットアップ手順】
  1. 「クイズ回答集約」スプレッドシートのApps Scriptに貼り付けて保存
  2. 関数「setup」を選択して▶実行
  3. 権限の許可を行う
  4. 完了メッセージが出たらOK

  【フォームの作り方】
  ■ 新規作成フォーム（質問の順番を変えないでください）
    1. 名前を選んでください（プルダウン・必須）
       選択肢：そうまゆうすけ／みやざきりょう／りょーすけ／小島 大和／水谷智也／内藤 颯汰
    2. 問題タイプ（ラジオボタン・必須）：「1（4択）」「2（早押し）」
    3. タイトル（記述式・必須）
    4. 問題文（段落・必須）
    5. 選択肢A（記述式）
    6. 選択肢B（記述式）
    7. 選択肢C（記述式）
    8. 選択肢D（記述式）
    9. 正解（ラジオボタン）：「A」「B」「C」「D」
    10. 正解テキスト・早押し用（記述式）
    11. 解説（段落）

  ■ 編集・削除フォーム（質問の順番を変えないでください）
    1. 名前を選んでください（プルダウン・必須）
       選択肢：そうまゆうすけ／みやざきりょう／りょーすけ／小島 大和／水谷智也／内藤 颯汰
    2. 問題番号（記述式・必須）
    3. この問題を削除しますか？（ラジオボタン・必須）：「はい」「いいえ」
    4. 問題タイプ（ラジオボタン）：「1（4択）」「2（早押し）」
    5. タイトル（記述式）
    6. 問題文（段落）
    7. 選択肢A（記述式）
    8. 選択肢B（記述式）
    9. 選択肢C（記述式）
    10. 選択肢D（記述式）
    11. 正解（ラジオボタン）：「A」「B」「C」「D」
    12. 正解テキスト・早押し用（記述式）
    13. 解説（段落）

  【トリガーの設定】
  Apps Scriptの左側「トリガー」→「＋トリガーを追加」で2つ設定
  ■ 新規フォーム送信時
    実行する関数：onNewFormSubmit
    イベントのソース：スプレッドシートから
    イベントの種類：フォーム送信時
  ■ 編集フォーム送信時
    実行する関数：onEditFormSubmit
    イベントのソース：スプレッドシートから
    イベントの種類：フォーム送信時
  ============================================================
*/

// ============================================================
// ★ スプレッドシートID設定 ★
// メンバーを追加する場合はここに追記してください
// ============================================================
const MEMBER_SHEETS = {
  'そうまゆうすけ' : '1YsTbFdRhVeHRb6rOHd0ifEwmGz5Mku6HMU70dDn2j7U',
  'みやざきりょう' : '18Xcyt6CRmyb0f06ukFIWkHlD0Wv7i8AMwhdM2g9PHGA',
  'りょーすけ'     : '13EW2WUA9gkc2QpwOb8wJ0FBEdyrW-7wVCOxUm2uHYNI',
  '小島 大和'      : '1DmL6rDhv5VNFH9Uvqp0go6_VpGqHaiLm2BUqCnnkwyY',
  '水谷智也'       : '1LBON_HEK778BiRv_dvbwijo_tB-ca2N3rtdhgmxd2sM',
  '内藤 颯汰'      : '1k8x_OItT-4GfIAkJrA-JW27aLrE4JJxDDHGIFKZU2Y4'
};

const SHEET_SUFFIX = 'クイズ問題集';

// 列定義
const COL_NO          = 1;
const COL_STATUS      = 2;
const COL_TYPE        = 3;
const COL_TITLE       = 4;
const COL_TEXT        = 5;
const COL_CHOICE_A    = 6;
const COL_CHOICE_B    = 7;
const COL_CHOICE_C    = 8;
const COL_CHOICE_D    = 9;
const COL_CORRECT     = 10;
const COL_ANSWER      = 11;
const COL_EXPLANATION = 12;
const COL_UPDATED     = 13;

// ============================================================
// セットアップ（初回のみ実行）
// ============================================================
function setup() {
  // 各メンバーのスプレッドシートにシートを作成
  const errors = [];
  for (const [name, ssId] of Object.entries(MEMBER_SHEETS)) {
    try {
      const ss = SpreadsheetApp.openById(ssId);
      getOrCreateSheet(ss, name);
      Logger.log(name + ' のシートを作成しました');
    } catch(e) {
      errors.push(name + '：' + e.message);
      Logger.log(name + ' のシート作成に失敗: ' + e.message);
    }
  }

  // 集約スプレッドシートに回答シートを作成
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  createRawSheetIfNotExists(ss, '回答（新規）');
  createRawSheetIfNotExists(ss, '回答（編集）');

  if (errors.length > 0) {
    SpreadsheetApp.getUi().alert(
      'セットアップ完了（一部エラーあり）\n\n' +
      'エラー：\n' + errors.join('\n') + '\n\n' +
      'スプレッドシートIDを確認してください。'
    );
  } else {
    SpreadsheetApp.getUi().alert(
      'セットアップ完了！\n\n' +
      '全メンバーのシートが作成されました。\n\n' +
      '次の作業：\n' +
      '1. フォームを2つ作成する\n' +
      '2. フォームをこのスプレッドシートにリンクする\n' +
      '3. トリガーを2つ設定する'
    );
  }
}

// ============================================================
// シート作成ヘルパー
// ============================================================
function getOrCreateSheet(ss, name) {
  const sheetName = name + SHEET_SUFFIX;
  let sheet = ss.getSheetByName(sheetName);
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
    const headers = [
      'No', '状態', 'タイプ', 'タイトル', '問題文',
      '選択肢A', '選択肢B', '選択肢C', '選択肢D',
      '正解', '正解テキスト（早押し）', '解説', '最終更新'
    ];
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setBackground('#1a0e2e');
    headerRange.setFontColor('#ffd700');
    headerRange.setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function createRawSheetIfNotExists(ss, name) {
  let sheet = ss.getSheetByName(name);
  if (!sheet) sheet = ss.insertSheet(name);
  return sheet;
}

// ============================================================
// メンバーのシートを取得
// ============================================================
function getMemberSheet(name) {
  const ssId = MEMBER_SHEETS[name];
  if (!ssId) {
    Logger.log('メンバーが見つかりません: ' + name);
    return null;
  }
  const ss = SpreadsheetApp.openById(ssId);
  return getOrCreateSheet(ss, name);
}

// ============================================================
// 新規作成フォーム送信時の処理
// ============================================================
function onNewFormSubmit(e) {
  try {
    const responses = e.values;

    const personName  = responses[1].trim();
    const type        = responses[2].trim();
    const title       = responses[3].trim();
    const text        = responses[4].trim();
    const choiceA     = responses[5].trim();
    const choiceB     = responses[6].trim();
    const choiceC     = responses[7].trim();
    const choiceD     = responses[8].trim();
    const correct     = responses[9].trim();
    const answer      = responses[10].trim();
    const explanation = responses[11].trim();

    const sheet = getMemberSheet(personName);
    if (!sheet) return;

    // 問題番号を採番
    const lastRow = sheet.getLastRow();
    let newNo = 1;
    if (lastRow >= 2) {
      const nos   = sheet.getRange(2, COL_NO, lastRow - 1, 1).getValues();
      const maxNo = Math.max(...nos.map(r => Number(r[0]) || 0));
      newNo = maxNo + 1;
    }

    const now = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'yyyy/MM/dd HH:mm');
    sheet.appendRow([
      newNo, '有効', type, title, text,
      choiceA, choiceB, choiceC, choiceD,
      correct, answer, explanation, now
    ]);

    formatListSheet(sheet);

  } catch(err) {
    Logger.log('onNewFormSubmit エラー: ' + err.message);
  }
}

// ============================================================
// 編集・削除フォーム送信時の処理
// ============================================================
function onEditFormSubmit(e) {
  try {
    const responses = e.values;

    const personName  = responses[1].trim();
    const targetNo    = Number(responses[2].trim());
    const isDelete    = responses[3].trim() === 'はい';
    const type        = responses[4].trim();
    const title       = responses[5].trim();
    const text        = responses[6].trim();
    const choiceA     = responses[7].trim();
    const choiceB     = responses[8].trim();
    const choiceC     = responses[9].trim();
    const choiceD     = responses[10].trim();
    const correct     = responses[11].trim();
    const answer      = responses[12].trim();
    const explanation = responses[13].trim();

    const sheet = getMemberSheet(personName);
    if (!sheet) return;

    // 対象行を検索
    const lastRow = sheet.getLastRow();
    if (lastRow < 2) return;

    const nos = sheet.getRange(2, COL_NO, lastRow - 1, 1).getValues();
    let targetRow = -1;
    for (let i = 0; i < nos.length; i++) {
      if (Number(nos[i][0]) === targetNo) {
        targetRow = i + 2;
        break;
      }
    }

    if (targetRow === -1) {
      Logger.log('問題番号 ' + targetNo + ' が見つかりません（' + personName + '）');
      return;
    }

    const now = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'yyyy/MM/dd HH:mm');

    if (isDelete) {
      sheet.getRange(targetRow, COL_STATUS).setValue('削除済');
      sheet.getRange(targetRow, COL_UPDATED).setValue(now);
      sheet.getRange(targetRow, 1, 1, COL_UPDATED)
        .setBackground('#cccccc').setFontColor('#888888');
    } else {
      sheet.getRange(targetRow, COL_TYPE).setValue(type);
      sheet.getRange(targetRow, COL_TITLE).setValue(title);
      sheet.getRange(targetRow, COL_TEXT).setValue(text);
      sheet.getRange(targetRow, COL_CHOICE_A).setValue(choiceA);
      sheet.getRange(targetRow, COL_CHOICE_B).setValue(choiceB);
      sheet.getRange(targetRow, COL_CHOICE_C).setValue(choiceC);
      sheet.getRange(targetRow, COL_CHOICE_D).setValue(choiceD);
      sheet.getRange(targetRow, COL_CORRECT).setValue(correct);
      sheet.getRange(targetRow, COL_ANSWER).setValue(answer);
      sheet.getRange(targetRow, COL_EXPLANATION).setValue(explanation);
      sheet.getRange(targetRow, COL_STATUS).setValue('有効');
      sheet.getRange(targetRow, COL_UPDATED).setValue(now);
      formatRow(sheet, targetRow);
    }

  } catch(err) {
    Logger.log('onEditFormSubmit エラー: ' + err.message);
  }
}

// ============================================================
// CSVエクスポート（メニューから実行）
// ============================================================
function exportCSV() {
  const ui = SpreadsheetApp.getUi();

  const result = ui.prompt(
    'CSV出力',
    '出力するメンバーの名前を入力してください\n（' + Object.keys(MEMBER_SHEETS).join('／') + '）',
    ui.ButtonSet.OK_CANCEL
  );

  if (result.getSelectedButton() !== ui.Button.OK) return;

  const name = result.getResponseText().trim();
  const ssId = MEMBER_SHEETS[name];
  if (!ssId) {
    ui.alert('「' + name + '」は登録されていません');
    return;
  }

  const ss    = SpreadsheetApp.openById(ssId);
  const sheet = ss.getSheetByName(name + SHEET_SUFFIX);
  if (!sheet) { ui.alert('シートが見つかりません'); return; }

  const lastRow = sheet.getLastRow();
  if (lastRow < 2) { ui.alert('問題がありません'); return; }

  const data   = sheet.getRange(2, 1, lastRow - 1, COL_UPDATED).getValues();
  const header = 'type(1=4択/2=早押し),タイトル,問題文,選択肢A,選択肢B,選択肢C,選択肢D,正解(A/B/C/D),正解テキスト(早押し),解説,画像URL,音声URL,解説画像URL,解説音声URL\n';

  const rows = data
    .filter(row => row[COL_STATUS - 1] === '有効')
    .map(row => [
      escapeCsv(row[COL_TYPE        - 1]),
      escapeCsv(row[COL_TITLE       - 1]),
      escapeCsv(row[COL_TEXT        - 1]),
      escapeCsv(row[COL_CHOICE_A    - 1]),
      escapeCsv(row[COL_CHOICE_B    - 1]),
      escapeCsv(row[COL_CHOICE_C    - 1]),
      escapeCsv(row[COL_CHOICE_D    - 1]),
      escapeCsv(row[COL_CORRECT     - 1]),
      escapeCsv(row[COL_ANSWER      - 1]),
      escapeCsv(row[COL_EXPLANATION - 1]),
      '', '', '', ''
    ].join(','));

  if (rows.length === 0) { ui.alert('有効な問題がありません'); return; }

  const csvContent = '\uFEFF' + header + rows.join('\n');

  const masterFile = DriveApp.getFileById(SpreadsheetApp.getActiveSpreadsheet().getId());
  const parents    = masterFile.getParents();
  const folder     = parents.hasNext() ? parents.next() : DriveApp.getRootFolder();
  const fileName   = name + '_クイズ問題集.csv';

  const existing = folder.getFilesByName(fileName);
  while (existing.hasNext()) { existing.next().setTrashed(true); }

  folder.createFile(fileName, csvContent, MimeType.PLAIN_TEXT);

  ui.alert(
    'CSVを保存しました！\n' +
    'ファイル名：' + fileName + '\n' +
    '有効な問題数：' + rows.length + '問'
  );
}

// ============================================================
// ユーティリティ
// ============================================================
function escapeCsv(val) {
  const str = String(val || '');
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return '"' + str.replace(/"/g, '""') + '"';
  }
  return str;
}

function formatListSheet(sheet) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return;
  for (let row = 2; row <= lastRow; row++) {
    const status = sheet.getRange(row, COL_STATUS).getValue();
    if (status !== '削除済') formatRow(sheet, row);
  }
  sheet.autoResizeColumns(1, COL_UPDATED);
}

function formatRow(sheet, row) {
  const bg = (row % 2 === 0) ? '#e8e8ff' : '#ffffff';
  sheet.getRange(row, 1, 1, COL_UPDATED)
    .setBackground(bg).setFontColor('#000000');
}

// ============================================================
// メニューに「クイズ管理」を追加
// ============================================================
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('📋 クイズ管理')
    .addItem('CSVを出力する', 'exportCSV')
    .addSeparator()
    .addItem('セットアップ（初回のみ）', 'setup')
    .addToUi();
}
