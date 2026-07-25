/*
  ============================================================
  ★ 問題データファイル ★
  quiz-game.html と同じフォルダに置いてください。

  【問題のtype】
    type: "yontaku"  → 4択問題（省略時もyontakuとして扱う）
    type: "hayaoshi" → 早押し問題

  【4択問題の書き方】
    title           : 問題一覧に表示される短いタイトル
    text            : 問題ページに表示される問題文
    media           : 画像/動画パス または URL（不要なら null）
    audio           : 音声ファイルパス または URL（不要なら null）
    choices         : 選択肢の配列（4つ）
    correct         : 正解のインデックス（A=0, B=1, C=2, D=3）
    explanation     : 解説テキスト（不要なら null）
    explanationMedia: 解説画像/動画パス または URL（不要なら null）
    explanationAudio: 解説音声パス または URL（不要なら null）

  【早押し問題の書き方】
    title           : 問題一覧に表示される短いタイトル
    text            : 一文字ずつ流れる問題文
    media           : 画像/動画パス または URL（不要なら null）
    audio           : 音声ファイルパス または URL（不要なら null）
    answer          : 正解テキスト（停止後に表示される）
    explanation     : 解説テキスト（不要なら null）
    explanationMedia: 解説画像/動画パス または URL（不要なら null）
    explanationAudio: 解説音声パス または URL（不要なら null）

  【ジャンルロゴ画像】
    logo: "images/logo/heiwa_logo.png"  ← パスまたはURL
    logo: null → テキストロゴが自動表示
  ============================================================
*/
const DEFAULT_GENRES = [
  {
    "id": "heiwa",
    "name": "HEIWA",
    "locked": true,
    "logo": "images/logo/heiwa_logo.png",
    "logoText": "HEIWA",
    "desc": "平和パチスロのクイズ",
    "color": "#ff6600",
    "questions": [
      {
        "id": 1,
        "type": "yontaku",
        "title": "このキャラクターの名前は？",
        "text": "このキャラクターの名前は何でしょう？",
        "media": "images/heiwa/q1.png",
        "audio": null,
        "choices": [
          "スヌーピー",
          "グミ",
          "定春",
          "シロ"
        ],
        "correct": 3,
        "explanation": null
      },
      {
        "id": 2,
        "type": "yontaku",
        "title": "このキャラクターの必殺技は？①",
        "text": "織田信長の必殺技は？",
        "media": "images/heiwa/q2.png",
        "audio": null,
        "choices": [
          "紅蓮爆炎刃",
          "地獄ノ火炎",
          "非情ノ大剣",
          "闘気炎斬剣"
        ],
        "correct": 2,
        "explanation": null
      },
      {
        "type": "yontaku",
        "title": "導入時期が最も古いのは？",
        "text": "次の内、導入時期が最も古いのはどれでしょうか？",
        "media": "images/heiwa/q3.png",
        "audio": null,
        "explanation": null,
        "explanationMedia": "images/heiwa/a3.png",
        "explanationAudio": null,
        "choices": [
          "P JAWS3 LIGHT",
          "パチスロ戦国乙女 暁の関ヶ原-DARKNESS",
          "P烈火の炎3",
          "戦国乙女3～天剣を継ぐもの"
        ],
        "correct": 2,
        "id": 3
      }
    ]
  },
  {
    "id": "sanyo",
    "name": "SANYO",
    "logo": "images/logo/sanyo_logo.png",
    "logoText": "SANYO",
    "desc": "三洋物産のクイズ",
    "color": "#0088ff",
    "questions": [
      {
        "id": 1,
        "type": "yontaku",
        "title": "山陽新幹線の終点は？",
        "text": "山陽新幹線の終点はどこでしょう？",
        "media": null,
        "audio": null,
        "choices": [
          "広島駅",
          "岡山駅",
          "博多駅",
          "下関駅"
        ],
        "correct": 2,
        "explanation": "山陽新幹線は新大阪駅から博多駅を結んでいます。1975年に全線開業しました。"
      },
      {
        "id": 2,
        "type": "yontaku",
        "title": "瀬戸内海の世界遺産の島は？",
        "text": "瀬戸内海に浮かぶ世界遺産の島はどこでしょう？",
        "media": null,
        "audio": null,
        "choices": [
          "小豆島",
          "宮島（厳島）",
          "淡路島",
          "直島"
        ],
        "correct": 1,
        "explanation": "宮島（厳島）は厳島神社が世界遺産に登録されています。"
      },
      {
        "id": 3,
        "type": "yontaku",
        "title": "岡山県の白桃は全国何位？",
        "text": "岡山県の名産品「白桃」の生産量は全国何位でしょう？",
        "media": null,
        "audio": null,
        "choices": [
          "1位",
          "2位",
          "3位",
          "4位"
        ],
        "correct": 0,
        "explanation": "岡山県は白桃の生産量が全国1位です。"
      },
      {
        "id": 4,
        "type": "hayaoshi",
        "title": "早押し：SANYOの名機は？",
        "text": "三洋物産が2004年にリリースし、爆発的な人気を誇ったスロット「○○○祭り」の正式名称は何でしょう？",
        "media": null,
        "audio": null,
        "answer": "吉宗",
        "explanation": "「吉宗」は三洋物産の大ヒット作で、設定6のスペックが話題になりました。"
      }
    ]
  }
];
