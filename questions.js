/*
  ============================================================
  ★ 問題データファイル ★
  quiz-game.html と同じフォルダに置いてください。

  【問題のtype】
    type: "yontaku"  → 4択問題（省略時もyontakuとして扱う）
    type: "hayaoshi" → 早押し問題

  【4択問題の書き方】
    title      : 問題一覧に表示される短いタイトル
    text       : 問題ページに表示される問題文
    media      : 画像/動画パス または URL（不要なら null）
    audio      : 音声ファイルパス または URL（不要なら null）
    choices    : 選択肢の配列（4つ）
    correct    : 正解のインデックス（A=0, B=1, C=2, D=3）
    explanation: 解説文（不要なら null）

  【早押し問題の書き方】
    title      : 問題一覧に表示される短いタイトル
    text       : 一文字ずつ流れる問題文
    media      : 画像/動画パス または URL（不要なら null）
    audio      : 音声ファイルパス または URL（不要なら null）
    answer     : 正解テキスト（停止後に表示される）
    explanation: 解説文（不要なら null）

  【メーカーロゴ画像】
    logo: "images/logo/heiwa_logo.png"  ← パスまたはURL
    logo: null → テキストロゴが自動表示
  ============================================================
*/
const DEFAULT_GENRES = [
  {
    id: "heiwa",
    name: "HEIWA",
    logo: "images/logo/heiwa_logo.png",
    logoText: "HEIWA",
    desc: "平和パチスロのクイズ",
    color: "#ff6600",
    questions: [
      {
        id: 1, type: "yontaku",
        title: "このキャラクターの名前は？",
        text: "このキャラクターの名前は何でしょう？",
        media: "images/heiwa/q1.png", audio: null,
        choices: ["スヌーピー","グミ","定春","シロ"],
        correct: 3, explanation: null
      },
      {
        id: 2, type: "yontaku",
        title: "このキャラクターの必殺技は？①",
        text: "織田信長の必殺技は？",
        media: "images/heiwa/q2.png", audio: null,
        choices: ["紅蓮爆炎刃","地獄ノ火炎","非情ノ大剣","闘気炎斬剣"],
        correct: 2, explanation: null
      },
      {
        id: 3, type: "hayaoshi",
        title: "早押し：HEIWAの代表作は？",
        text: "平和（HEIWA）が手がけた、CR機の大ヒット作で「○○○伝説」と呼ばれるシリーズといえば何でしょう？",
        media: null, audio: null,
        answer: "CR花満開",
        explanation: "CR花満開シリーズは平和の代表的なヒット作です。"
      }
    ]
  },
  {
    id: "sanyo",
    name: "SANYO",
    logo: "images/logo/sanyo_logo.png",
    logoText: "SANYO",
    desc: "三洋物産のクイズ",
    color: "#0088ff",
    questions: [
      {
        id: 1, type: "yontaku",
        title: "山陽新幹線の終点は？",
        text: "山陽新幹線の終点はどこでしょう？",
        media: null, audio: null,
        choices: ["広島駅","岡山駅","博多駅","下関駅"],
        correct: 2,
        explanation: "山陽新幹線は新大阪駅から博多駅を結んでいます。1975年に全線開業しました。"
      },
      {
        id: 2, type: "yontaku",
        title: "瀬戸内海の世界遺産の島は？",
        text: "瀬戸内海に浮かぶ世界遺産の島はどこでしょう？",
        media: null, audio: null,
        choices: ["小豆島","宮島（厳島）","淡路島","直島"],
        correct: 1,
        explanation: "宮島（厳島）は厳島神社が世界遺産に登録されています。"
      },
      {
        id: 3, type: "yontaku",
        title: "岡山県の白桃は全国何位？",
        text: "岡山県の名産品「白桃」の生産量は全国何位でしょう？",
        media: null, audio: null,
        choices: ["1位","2位","3位","4位"],
        correct: 0,
        explanation: "岡山県は白桃の生産量が全国1位です。"
      },
      {
        id: 4, type: "hayaoshi",
        title: "早押し：SANYOの名機は？",
        text: "三洋物産が2004年にリリースし、爆発的な人気を誇ったスロット「○○○祭り」の正式名称は何でしょう？",
        media: null, audio: null,
        answer: "吉宗",
        explanation: "「吉宗」は三洋物産の大ヒット作で、設定6のスペックが話題になりました。"
      }
    ]
  }
  // ★ ジャンルを追加する場合はここにオブジェクトを追加
  ,{
    id: "character",
    name: "キャラクタークイズ",
    logo: null,
    logoText: "CHARACTER",
    desc: "このキャラクターの名前は？",
    color: "#cc44ff",
    questions: [
      { id:1,  type:"kizyutsu", title:"Q1 このキャラクターの名前は？",  text:"このキャラクターの名前は？", media:"images/character/q1.png",  audio:null, answer:"典韋（一騎当千）",              explanation:null },
      { id:2,  type:"kizyutsu", title:"Q2 このキャラクターの名前は？",  text:"このキャラクターの名前は？", media:"images/character/q2.png",  audio:null, answer:"趙雲子龍（一騎当千）",            explanation:null },
      { id:3,  type:"kizyutsu", title:"Q3 このキャラクターの名前は？",  text:"このキャラクターの名前は？", media:"images/character/q3.png",  audio:null, answer:"木下ベッカム（ペンギンの問題）",  explanation:null },
      { id:4,  type:"kizyutsu", title:"Q4 このキャラクターの名前は？",  text:"このキャラクターの名前は？", media:"images/character/q4.png",  audio:null, answer:"サンダース（MAJOR）",             explanation:null },
      { id:5,  type:"kizyutsu", title:"Q5 このキャラクターの名前は？",  text:"このキャラクターの名前は？", media:"images/character/q5.png",  audio:null, answer:"眉村健（MAJOR）",               explanation:null },
      { id:6,  type:"kizyutsu", title:"Q6 このキャラクターの名前は？",  text:"このキャラクターの名前は？", media:"images/character/q6.png",  audio:null, answer:"サイバスター（スパロボOG）",       explanation:null },
      { id:7,  type:"kizyutsu", title:"Q7 このキャラクターの名前は？",  text:"このキャラクターの名前は？", media:"images/character/q7.png",  audio:null, answer:"凰鈴音（IS）",                   explanation:null },
      { id:8,  type:"kizyutsu", title:"Q8 このキャラクターの名前は？",  text:"このキャラクターの名前は？", media:"images/character/q8.png",  audio:null, answer:"シャルロット・デュノア（IS）",    explanation:null },
      { id:9,  type:"kizyutsu", title:"Q9 このキャラクターの名前は？",  text:"このキャラクターの名前は？", media:"images/character/q9.png",  audio:null, answer:"東条英虎（べるぜバブ）",          explanation:null },
      { id:10, type:"kizyutsu", title:"Q10 このキャラクターの名前は？", text:"このキャラクターの名前は？", media:"images/character/q10.png", audio:null, answer:"邦枝葵（べるぜバブ）",             explanation:null },
      { id:11, type:"kizyutsu", title:"Q11 このキャラクターの名前は？", text:"このキャラクターの名前は？", media:"images/character/q11.png", audio:null, answer:"ユークリウッド・ヘルサイズ（これゾン）", explanation:null },
      { id:12, type:"kizyutsu", title:"Q12 このキャラクターの名前は？", text:"このキャラクターの名前は？", media:"images/character/q12.png", audio:null, answer:"大先生・アリエル（これゾン）",     explanation:null },
      { id:13, type:"kizyutsu", title:"Q13 このキャラクターの名前は？", text:"このキャラクターの名前は？", media:"images/character/q13.png", audio:null, answer:"リボンちゃん（ハム太郎）",          explanation:null },
      { id:14, type:"kizyutsu", title:"Q14 このキャラクターの名前は？", text:"このキャラクターの名前は？", media:"images/character/q14.png", audio:null, answer:"タイショーくん（ハム太郎）",        explanation:null },
      { id:15, type:"kizyutsu", title:"Q15 このキャラクターの名前は？", text:"このキャラクターの名前は？", media:"images/character/q15.png", audio:null, answer:"春奈ヒロ子・ロコちゃん（ハム太郎）", explanation:null },
      { id:16, type:"kizyutsu", title:"Q16 このキャラクターの名前は？", text:"このキャラクターの名前は？", media:"images/character/q16.png", audio:null, answer:"神威（銀魂）",                     explanation:null },
      { id:17, type:"kizyutsu", title:"Q17 このキャラクターの名前は？", text:"このキャラクターの名前は？", media:"images/character/q17.png", audio:null, answer:"志村新八（銀魂）",                 explanation:null },
      { id:18, type:"kizyutsu", title:"Q18 このキャラクターの名前は？", text:"このキャラクターの名前は？", media:"images/character/q18.png", audio:null, answer:"クッキー（まじ恋）",               explanation:null },
      { id:19, type:"kizyutsu", title:"Q19 このキャラクターの名前は？", text:"このキャラクターの名前は？", media:"images/character/q19.png", audio:null, answer:"明智光秀（織田信奈の野望）",        explanation:null },
      { id:20, type:"kizyutsu", title:"Q20 このキャラクターの名前は？", text:"このキャラクターの名前は？", media:"images/character/q20.png", audio:null, answer:"前田犬千代（織田信奈の野望）",      explanation:null },
      { id:21, type:"kizyutsu", title:"Q21 このキャラクターの名前は？", text:"このキャラクターの名前は？", media:"images/character/q21.png", audio:null, answer:"ねね（織田信奈の野望）",            explanation:null },
      { id:22, type:"kizyutsu", title:"Q22 このキャラクターの名前は？", text:"このキャラクターの名前は？", media:"images/character/q22.png", audio:null, answer:"サチ（SAO）",                      explanation:null },
      { id:23, type:"kizyutsu", title:"Q23 このキャラクターの名前は？", text:"このキャラクターの名前は？", media:"images/character/q23.png", audio:null, answer:"リズベット（SAO）",                 explanation:null },
      { id:24, type:"kizyutsu", title:"Q24 このキャラクターの名前は？", text:"このキャラクターの名前は？", media:"images/character/q24.png", audio:null, answer:"暁古城（ストライク・ザ・ブラッド）", explanation:null },
      { id:25, type:"kizyutsu", title:"Q25 このキャラクターの名前は？", text:"このキャラクターの名前は？", media:"images/character/q25.png", audio:null, answer:"モグワイ（ストライク・ザ・ブラッド）", explanation:null },
      { id:26, type:"kizyutsu", title:"Q26 このキャラクターの名前は？", text:"このキャラクターの名前は？", media:"images/character/q26.png", audio:null, answer:"姫柊雪菜（ストライク・ザ・ブラッド）", explanation:null },
      { id:27, type:"kizyutsu", title:"Q27 このキャラクターの名前は？", text:"このキャラクターの名前は？", media:"images/character/q27.png", audio:null, answer:"沢村栄純（ダイヤのA）",             explanation:null },
      { id:28, type:"kizyutsu", title:"Q28 このキャラクターの名前は？", text:"このキャラクターの名前は？", media:"images/character/q28.png", audio:null, answer:"御幸一也（ダイヤのA）",             explanation:null },
      { id:29, type:"kizyutsu", title:"Q29 このキャラクターの名前は？", text:"このキャラクターの名前は？", media:"images/character/q29.png", audio:null, answer:"コン（東京レイヴンズ）",            explanation:null },
      { id:30, type:"kizyutsu", title:"Q30 このキャラクターの名前は？", text:"このキャラクターの名前は？", media:"images/character/q30.png", audio:null, answer:"一条楽（ニセコイ）",               explanation:null },
      { id:31, type:"kizyutsu", title:"Q31 このキャラクターの名前は？", text:"このキャラクターの名前は？", media:"images/character/q31.png", audio:null, answer:"橘真里花（ニセコイ）",             explanation:null },
      { id:32, type:"kizyutsu", title:"Q32 このキャラクターの名前は？", text:"このキャラクターの名前は？", media:"images/character/q32.png", audio:null, answer:"桐崎千棘（ニセコイ）",             explanation:null }
    ]
  },
  {
    id: "nagao",
    name: "軍団長からの挑戦状",
    logo: null,
    logoText: "NAGAO",
    desc: "軍団長・長尾が知っている物について答えよ",
    color: "#ff2244",
    questions: [
      /* ── マンガ・アニメ ── */
      { id:1,  type:"kizyutsu", title:"Q1",  text:"「鬼滅の刃」の主人公の名前は？",                                           media:null, audio:null, answer:"竈門炭治郎",     answers:"竈門炭治郎,かまどたんじろう,炭治郎",             nagaoType:"アニメ", explanation:null },
      { id:2,  type:"kizyutsu", title:"Q2",  text:"「進撃の巨人」でエレンたちが暮らす壁の一番外側の名前は？",               media:null, audio:null, answer:"ウォール・マリア", answers:"ウォール・マリア,ウォールマリア,マリア",          nagaoType:"アニメ", explanation:null },
      { id:3,  type:"kizyutsu", title:"Q3",  text:"「ワンピース」でルフィが食べた悪魔の実の名前は？",                       media:null, audio:null, answer:"ゴムゴムの実",    answers:"ゴムゴムの実,ごむごむのみ,ごむごむ,ゴムゴム",     nagaoType:"マンガ", explanation:null },
      { id:4,  type:"kizyutsu", title:"Q4",  text:"「NARUTO」でナルトが最も得意とする忍術は？",                             media:null, audio:null, answer:"影分身の術",     answers:"影分身の術,かげぶんしんのじゅつ,影分身",          nagaoType:"マンガ", explanation:null },
      { id:5,  type:"kizyutsu", title:"Q5",  text:"「ドラゴンボール」で戦闘力が「53万」の敵は誰？",     media:null, audio:null, answer:"フリーザ",       answers:"フリーザ",                                        nagaoType:"アニメ", explanation:null },
      { id:6,  type:"kizyutsu", title:"Q6",  text:"「銀魂」の主人公・坂田銀時が持つ木刀の名前は？",                         media:null, audio:null, answer:"洞爺湖",         answers:"洞爺湖,とうやこ",                                 nagaoType:"マンガ", explanation:null },
      { id:7,  type:"kizyutsu", title:"Q7",  text:"「僕のヒーローアカデミア」で緑谷出久の個性の名前は？",                   media:null, audio:null, answer:"ワン・フォー・オール", answers:"ワン・フォー・オール,ワンフォーオール",          nagaoType:"アニメ", explanation:null },
      { id:8,  type:"kizyutsu", title:"Q8",  text:"「鋼の錬金術師」でエドワードが右腕に持つのは何製の義手？",               media:null, audio:null, answer:"オートメイル",   answers:"オートメイル,automail",                           nagaoType:"マンガ", explanation:null },
      { id:9,  type:"kizyutsu", title:"Q9",  text:"「Hunter×Hunter」でゴンの父親の名前は？",                               media:null, audio:null, answer:"ジン＝フリークス", answers:"ジン＝フリークス,ジン,ジンフリークス",           nagaoType:"マンガ", explanation:null },
      { id:10, type:"kizyutsu", title:"Q10", text:"「SAO（ソードアート・オンライン）」の主人公の本名は？",                   media:null, audio:null, answer:"桐ヶ谷和人",     answers:"桐ヶ谷和人,きりがやかずと,キリト",               nagaoType:"アニメ", explanation:null },
      { id:11, type:"kizyutsu", title:"Q11", text:"「ハイキュー!!」で日向翔陽が所属する高校は？",                             media:null, audio:null, answer:"烏野高校",       answers:"烏野高校,からすのこうこう,烏野",                  nagaoType:"アニメ", explanation:null },
      { id:12, type:"kizyutsu", title:"Q12", text:"「はじめの一歩」で主人公・幕之内一歩の♾️を描きながらブローを叩き込む必殺技は？",                       media:null, audio:null, answer:"デンプシーロール",     answers:"デンプシーロール",                     nagaoType:"マンガ", explanation:null },
      { id:13, type:"kizyutsu", title:"Q13", text:"「ダイヤのA」で主人公・沢村栄純のポジションは？",                         media:null, audio:null, answer:"ピッチャー",     answers:"ピッチャー,投手",                                 nagaoType:"マンガ", explanation:null },
      { id:14, type:"kizyutsu", title:"Q14", text:"「ニセコイ」で一条楽が幼なじみとの約束の証として持つアイテムは？",       media:null, audio:null, answer:"ペンダント(錠前)",       answers:"錠前,ペンダント",                             nagaoType:"マンガ", explanation:null },
      { id:15, type:"kizyutsu", title:"Q15", text:"「ストライク・ザ・ブラッド」の主人公・暁古城の異名は？",                 media:null, audio:null, answer:"第四真祖",       answers:"第四真祖,だいよんしんそ",                         nagaoType:"アニメ", explanation:null },
      { id:16, type:"kizyutsu", title:"Q16", text:"「IS（インフィニット・ストラトス）」で唯一ISを動かせる男性の名前は？",   media:null, audio:null, answer:"織斑一夏",       answers:"織斑一夏,おりむらいちか,一夏",                    nagaoType:"アニメ", explanation:null },
      { id:17, type:"kizyutsu", title:"Q17", text:"「クレヨンしんちゃん」の主人公一家が飼っている犬の名前は？",             media:null, audio:null, answer:"シロ",           answers:"シロ",                                            nagaoType:"アニメ", explanation:null },
      { id:18, type:"kizyutsu", title:"Q18", text:"「べるぜバブ」の主人公・男鹿辰巳が育てる赤ちゃん悪魔の名前は？",         media:null, audio:null, answer:"ベル坊",         answers:"ベル坊,カイゼル・デ・エンペラーナ・ベルゼバブ4世", nagaoType:"マンガ", explanation:null },
      { id:19, type:"kizyutsu", title:"Q19", text:"「これはゾンビですか？」の主人公・相川歩が変身する職業は？",         media:null, audio:null, answer:"魔装少女",       answers:"魔装少女,まそうしょうじょ",                       nagaoType:"アニメ", explanation:null },
      { id:20, type:"kizyutsu", title:"Q20", text:"「東京レイヴンズ」の主人公・土御門春虎の式神の名前は？",                 media:null, audio:null, answer:"コン",           answers:"コン",                                            nagaoType:"アニメ", explanation:null },
      { id:21, type:"kizyutsu", title:"Q21", text:"「名探偵コナン」で主人公・工藤新一が薬で変身した後の名前は？",           media:null, audio:null, answer:"江戸川コナン",   answers:"江戸川コナン,えどがわこなん,コナン",             nagaoType:"アニメ", explanation:null },
      { id:22, type:"kizyutsu", title:"Q22", text:"「MAJOR」の主人公・本田吾郎のポジションは？",                             media:null, audio:null, answer:"ピッチャー",     answers:"ピッチャー,投手",                                 nagaoType:"アニメ", explanation:null },
      { id:23, type:"kizyutsu", title:"Q23", text:"「スーパーロボット大戦OG」に登場するサイバスターのパイロット名は？",     media:null, audio:null, answer:"マサキ・アンドー", answers:"マサキ・アンドー,マサキアンドー,アンドー",        nagaoType:"アニメ", explanation:null },
      { id:24, type:"kizyutsu", title:"Q24", text:"「ハム太郎」でハム太郎の大好物は？",                                     media:null, audio:null, answer:"ひまわりのたね", answers:"ひまわりのたね,ひまわりの種,向日葵の種",          nagaoType:"アニメ", explanation:null },
      { id:25, type:"kizyutsu", title:"Q25", text:"「暗殺教室」で生徒たちが暗殺しようとするタコのような教師の名前は？",     media:null, audio:null, answer:"殺せんせー",     answers:"殺せんせー,ころせんせー",                        nagaoType:"アニメ", explanation:null },
      { id:26, type:"kizyutsu", title:"Q26", text:"「ペンギンの問題」の主人公ペンギンの名前は？",                           media:null, audio:null, answer:"木下ベッカム",   answers:"木下ベッカム,きのしたべっかむ,ベッカム",          nagaoType:"アニメ", explanation:null },
      { id:27, type:"kizyutsu", title:"Q27", text:"「銀魂」で坂田銀時・志村新八・神楽が働く屋号は？",                       media:null, audio:null, answer:"万事屋銀ちゃん", answers:"万事屋銀ちゃん,万事屋,よろずや",                  nagaoType:"マンガ", explanation:null },
      { id:28, type:"kizyutsu", title:"Q28", text:"「らんま1/2」で水をかぶると女になってしまう主人公の名前は？",           media:null, audio:null, answer:"早乙女乱馬",     answers:"早乙女乱馬,さおとめらんま,乱馬",                 nagaoType:"マンガ", explanation:null },
      { id:29, type:"kizyutsu", title:"Q29", text:"「ワンピース」でゾロの技「三千世界」は何刀流の技？",             media:null, audio:null, answer:"三刀流",           answers:"三刀流,さんとうりゅう,3,三",                                   nagaoType:"マンガ", explanation:null },
      { id:30, type:"kizyutsu", title:"Q30", text:"「幽☆遊☆白書」の主人公・浦飯幽助が得意とする技は？",                     media:null, audio:null, answer:"霊丸",           answers:"霊丸,れいがん",                                   nagaoType:"マンガ", explanation:null },
      /* ── パチンコ・スロット ── */
      { id:31, type:"kizyutsu", title:"Q31", text:"パチスロ「モンスターハンター」シリーズのモチーフとなったゲームメーカーは？", media:null, audio:null, answer:"カプコン",     answers:"カプコン,capcom",                                 nagaoType:"スロット", explanation:null },
      { id:32, type:"kizyutsu", title:"Q32", text:"パチスロ「エヴァンゲリオン」シリーズで主人公が乗るロボットの名前は？",   media:null, audio:null, answer:"エヴァンゲリオン初号機", answers:"初号機,エヴァ初号機,エヴァンゲリオン初号機",     nagaoType:"スロット", explanation:null },
      { id:33, type:"kizyutsu", title:"Q33", text:"パチスロ「ルパン三世」シリーズでルパンの相棒である射撃の名手は誰？",     media:null, audio:null, answer:"次元大介",       answers:"次元大介,じげんだいすけ,次元",                   nagaoType:"スロット", explanation:null },
      { id:34, type:"kizyutsu", title:"Q34", text:"「押忍！番長」シリーズの主人公の名前は？",                               media:null, audio:null, answer:"金剛轟",           answers:"轟金剛,とどろきこんごう,轟,とどろき",                                 nagaoType:"スロット", explanation:null },
      { id:35, type:"kizyutsu", title:"Q35", text:"パチスロ「まどか☆マギカ」の主人公の名前は？",                             media:null, audio:null, answer:"鹿目まどか",     answers:"鹿目まどか,かなめまどか,まどか",                 nagaoType:"スロット", explanation:null },
      { id:36, type:"kizyutsu", title:"Q36", text:"パチンコ「CR花の慶次」シリーズで主人公・前田慶次の愛馬の名前は？",       media:null, audio:null, answer:"松風",           answers:"松風,まつかぜ",                                   nagaoType:"パチンコ", explanation:null },
      { id:37, type:"kizyutsu", title:"Q37", text:"パチスロ「バジリスク」シリーズの原作小説のタイトルは？",                 media:null, audio:null, answer:"甲賀忍法帖",     answers:"甲賀忍法帖,こうがにんぽうちょう",                nagaoType:"スロット", explanation:null },
      { id:38, type:"kizyutsu", title:"Q38", text:"「戦国乙女」シリーズでパチスロを出しているメーカーはどこ？",             media:null, audio:null, answer:"平和",           answers:"平和,HEIWA,ピーワールド",                         nagaoType:"スロット", explanation:null },
      { id:39, type:"kizyutsu", title:"Q39", text:"パチンコ「CR花の慶次」の主人公・前田慶次の二つ名は？",                   media:null, audio:null, answer:"傾奇者",         answers:"傾奇者,かぶきもの",                               nagaoType:"パチンコ", explanation:null },
      { id:40, type:"kizyutsu", title:"Q40", text:"パチスロのウェイト時間は何秒？",                                       media:null, audio:null, answer:"4.1秒",          answers:"4.1秒,4.1,よんてんいちびょう",                    nagaoType:"スロット", explanation:null },
      /* ── 混合・雑学系 ── */
      { id:41, type:"kizyutsu", title:"Q41", text:"「ドラゴンボールZ」でフリーザの最終形態は第何形態？",                   media:null, audio:null, answer:"第4形態",        answers:"第4形態,第四形態,4,四",                           nagaoType:"アニメ", explanation:null },
      { id:42, type:"kizyutsu", title:"Q42", text:"「NARUTO」でサスケが初めに使った炎遁の術の名前は？",                             media:null, audio:null, answer:"豪火球の術",     answers:"豪火球の術,ごうかきゅうのじゅつ,火遁豪火球の術", nagaoType:"マンガ", explanation:null },
      { id:43, type:"kizyutsu", title:"Q43", text:"「ワンピース」でサンジの夢は何という海に行くこと？",                     media:null, audio:null, answer:"オールブルー",   answers:"オールブルー",                                    nagaoType:"マンガ", explanation:null },
      { id:44, type:"kizyutsu", title:"Q44", text:"「銀魂」で坂本辰馬が桂小太郎に贈った謎の宇宙生物の名前は？",             media:null, audio:null, answer:"エリザベス",     answers:"エリザベス",                                      nagaoType:"マンガ", explanation:null },
      { id:45, type:"kizyutsu", title:"Q45", text:"「銀魂」で近藤勲が率いる組織の名前は？",                                 media:null, audio:null, answer:"真選組",         answers:"真選組,しんせんぐみ",                             nagaoType:"マンガ", explanation:null },
      { id:46, type:"kizyutsu", title:"Q46", text:"「進撃の巨人」でミカサの苗字は？",                                       media:null, audio:null, answer:"アッカーマン",   answers:"アッカーマン",                                    nagaoType:"マンガ", explanation:null },
      { id:47, type:"kizyutsu", title:"Q47", text:"スロットで、2リール目を止めた時点でボーナス成立が確定することを何と呼ぶ？", media:null, audio:null, answer:"2確",           answers:"2確,にかく,二確",                                 nagaoType:"スロット", explanation:null },
      { id:48, type:"kizyutsu", title:"Q48", text:"「Hunter×Hunter」でゴンとキルアが受験したハンター試験、最終試験の内容は？", media:null, audio:null, answer:"組み手",      answers:"組み手,くみて,格闘,バトル",                       nagaoType:"マンガ", explanation:null },
      { id:49, type:"kizyutsu", title:"Q49", text:"「僕のヒーローアカデミア」でオールマイトの本名は？",                     media:null, audio:null, answer:"八木俊典",       answers:"八木俊典,やぎとしのり,トシノリ",                  nagaoType:"アニメ", explanation:null },
      { id:50, type:"kizyutsu", title:"Q50", text:"「SAO」でキリトとアスナが結婚して暮らした家があるフロアは第何層？",       media:null, audio:null, answer:"第22層",         answers:"第22層,22層,22,二十二層",                         nagaoType:"アニメ", explanation:null }
    ]
  },
  {
    id: "reborn",
    name: "家庭教師ヒットマンREBORN!",
    logo: null,
    logoText: "REBORN",
    desc: "ボンゴレファミリーの絆と炎、どこまで覚えているか試してみよ",
    color: "#ffaa00",
    questions: [
      { id:1,  type:"kizyutsu", title:"Q1",  text:"主人公・沢田綱吉序盤で呼ばれていたあだ名は？（○○ツナ）",                                 media:null, audio:null, answer:"ダメツナ",       answers:"ダメツナ,だめつな,だめ,ダメ",                               nagaoType:"未分類", explanation:null },
      { id:2,  type:"kizyutsu", title:"Q2",  text:"綱吉の家庭教師として現れる、赤ちゃんの姿をした最強の殺し屋の名前は？",   media:null, audio:null, answer:"リボーン",       answers:"リボーン,りぼーん",                               nagaoType:"未分類", explanation:null },
      { id:3,  type:"kizyutsu", title:"Q3",  text:"ボンゴレを英語で書くと？",                                   media:null, audio:null, answer:"VONGOLA", answers:"VONGOLA,vongola",         nagaoType:"未分類", explanation:null },
      { id:4,  type:"kizyutsu", title:"Q4",  text:"綱吉がハイパー化した際に炎をまとう部位はどこ？",                         media:null, audio:null, answer:"額",             answers:"額,ひたい,頭",                                    nagaoType:"未分類", explanation:null },
      { id:5,  type:"kizyutsu", title:"Q5",  text:"綱吉の同級生で、右腕的存在の不良少年の名前は？",                         media:null, audio:null, answer:"獄寺隼人",       answers:"獄寺隼人,ごくでらはやと,獄寺",                   nagaoType:"未分類", explanation:null },
      { id:6,  type:"kizyutsu", title:"Q6",  text:"獄寺隼人の通り名（二つ名）は？",                                         media:null, audio:null, answer:"スモーキング・ボム隼人", answers:"スモーキング・ボム隼人,スモーキングボム隼人,スモーキング・ボム,スモーキングボム,人間爆撃機,ハリケーン・ボム隼人,ハリケーンボム隼人,ハリケーン・ボム,ハリケーンボム",     nagaoType:"未分類", explanation:null },
      { id:7,  type:"kizyutsu", title:"Q7",  text:"野球部に所属する、綱吉の陽気な友人の名前は？",                           media:null, audio:null, answer:"山本武",         answers:"山本武,やまもとたけし,山本",                     nagaoType:"未分類", explanation:null },
      { id:8,  type:"kizyutsu", title:"Q8",  text:"山本武が使う武器は何？",                                                 media:null, audio:null, answer:"刀",             answers:"刀,かたな,日本刀",                                nagaoType:"未分類", explanation:null },
      { id:9, type:"kizyutsu", title:"Q9", text:"雲雀恭弥の口癖として有名な、規則違反者に向けて言う言葉は？",             media:null, audio:null, answer:"咬み殺す",       answers:"咬み殺す,かみころす,咬み殺すよ,かみころすよ",                             nagaoType:"未分類", explanation:null },
      { id:10, type:"kizyutsu", title:"Q10", text:"雲雀恭弥が連れている小動物の名前は？",                           media:null, audio:null, answer:"ヒバード",     answers:"ヒバード,ひばーど",                                      nagaoType:"未分類", explanation:null },
      { id:11, type:"kizyutsu", title:"Q11", text:"綱吉をツナ君（またはツっ君）と呼ぶでヒロイン的存在の女の子の名前は？",                       media:null, audio:null, answer:"笹川京子",         answers:"笹川京子,ささがわきょうこ,京子,きょうこ",                       nagaoType:"未分類", explanation:null },
      { id:12, type:"kizyutsu", title:"Q12", text:"綱吉の使用する武器は？",                 media:null, audio:null, answer:"グローブ", answers:"グローブ,ぐろーぶ",                    nagaoType:"未分類", explanation:null },
      { id:13, type:"kizyutsu", title:"Q13", text:"リボーンが主に銃に変身させる、緑色の爬虫類の相棒の名前は？",                       media:null, audio:null, answer:"レオン",         answers:"レオン,れおん",                                          nagaoType:"未分類", explanation:null },
      { id:14, type:"kizyutsu", title:"Q14", text:"未来編で登場する、ボンゴレ十代目ファミリーの敵となる組織の名前は？",   media:null, audio:null, answer:"ミルフィオーレファミリー", answers:"ミルフィオーレファミリー,ミルフィオーレ",       nagaoType:"未分類", explanation:null },
      { id:15, type:"kizyutsu", title:"Q15", text:"未来編のボスである、大空のマーレリングを所持する人物の名前は？",                               media:null, audio:null, answer:"白蘭",       answers:"白蘭,びゃくらん", nagaoType:"未分類", explanation:null },
      { id:16, type:"kizyutsu", title:"Q16", text:"獄寺隼人の姉で、毒物のスペシャリストである殺し屋の名前は？",             media:null, audio:null, answer:"ビアンキ",       answers:"ビアンキ",                                        nagaoType:"未分類", explanation:null },
      { id:17, type:"kizyutsu", title:"Q17", text:"ランボが所属する殺し屋一家の名前は？",                                   media:null, audio:null, answer:"ボヴィーノファミリー", answers:"ボヴィーノファミリー,ボヴィーノ",               nagaoType:"未分類", explanation:null },
      { id:18, type:"kizyutsu", title:"Q18", text:"ボンゴレ守護者「雲」の役割を担うキャラクターは誰？",                   media:null, audio:null, answer:"雲雀恭弥",       answers:"雲雀恭弥,ひばりきょうや,雲雀",                   nagaoType:"未分類", explanation:null },
      { id:19, type:"kizyutsu", title:"Q19", text:"ボンゴレ守護者「嵐」の役割を担うキャラクターは誰？",                 media:null, audio:null, answer:"獄寺隼人",       answers:"獄寺隼人,ごくでらはやと",                        nagaoType:"未分類", explanation:null },
      { id:20, type:"kizyutsu", title:"Q20", text:"ボンゴレ守護者「雨」の役割を担うキャラクターは誰？",                   media:null, audio:null, answer:"山本武",         answers:"山本武,やまもとたけし",                          nagaoType:"未分類", explanation:null },
      { id:21, type:"kizyutsu", title:"Q21", text:"ボンゴレ守護者「晴」の役割を担うキャラクターは誰？",                         media:null, audio:null, answer:"笹川了平",       answers:"笹川了平,ささがわりょうへい,了平",               nagaoType:"未分類", explanation:null },
      { id:22, type:"kizyutsu", title:"Q22", text:"ボンゴレ守護者「雷」の役割を担うキャラクターは誰？",                   media:null, audio:null, answer:"ランボ",         answers:"ランボ",                                          nagaoType:"未分類", explanation:null },
      { id:23, type:"kizyutsu", title:"Q23", text:"ボンゴレ守護者「霧」の役割を担う男性キャラクターは誰？", media:null, audio:null, answer:"六道骸",         answers:"六道骸,ろくどうむくろ,骸",                       nagaoType:"未分類", explanation:null },
      { id:24, type:"kizyutsu", title:"Q24", text:"六道骸が閉じ込められている監獄の名前は？",                               media:null, audio:null, answer:"ヴィンディチェ", answers:"ヴィンディチェ",                                 nagaoType:"未分類", explanation:null },
      { id:25, type:"kizyutsu", title:"Q25", text:"クローム髑髏の本名は？（苗字不明）",                 media:null, audio:null, answer:"凪",   answers:"凪,なぎ",           nagaoType:"未分類", explanation:null },
      { id:26, type:"kizyutsu", title:"Q26", text:"ボンゴレ守護者「嵐」の役割を担うキャラクターは誰？",                   media:null, audio:null, answer:"獄寺隼人",       answers:"獄寺隼人,ごくでらはやと",                        nagaoType:"未分類", explanation:null },
      { id:27, type:"kizyutsu", title:"Q27", text:"特殊暗殺部隊ヴァリアーのボスの名前は？",   media:null, audio:null, answer:"ザンザス",       answers:"ザンザス,ざんざす",                                        nagaoType:"未分類", explanation:null },
      { id:28, type:"kizyutsu", title:"Q28", text:"綱吉たちが所属する中学校の名前は？",                                     media:null, audio:null, answer:"並盛中学", answers:"並盛中学,並盛,なみもり",             nagaoType:"未分類", explanation:null },
      { id:29, type:"kizyutsu", title:"Q29", text:"未来編で登場する、綱吉が最初に出会った女性の名前は？",                     media:null, audio:null, answer:"ラル・ミルチ",         answers:"ラル・ミルチ,ラルミルチ",                                          nagaoType:"未分類", explanation:null },
      { id:30, type:"kizyutsu", title:"Q30", text:"キャバッローネファミリーのディーノの二つ名は？",                 media:null, audio:null, answer:"跳ね馬",       answers:"跳ね馬,はね馬,はねうま",                                        nagaoType:"未分類", explanation:null },
      { id:31, type:"kizyutsu", title:"Q31", text:"ディーノの側近の名前は？",                         media:null, audio:null, answer:"ロマーリオ",       answers:"ロマーリオ,ろまーりお",                                        nagaoType:"未分類", explanation:null },
      { id:32, type:"kizyutsu", title:"Q32", text:"世界を保つための21個の至宝（ボンゴレリング、マーレリング、アルコバレーノのおしゃぶり）の総称は？", media:null, audio:null, answer:"7³（トゥリニセッテ）",       answers:"7³,トゥリニセッテ",                            nagaoType:"未分類", explanation:null },
      { id:33, type:"kizyutsu", title:"Q33", text:"物語冒頭で綱吉が「ダメツナ」と呼ばれる理由になった、彼の性格・成績の特徴は何？", media:null, audio:null, answer:"落ちこぼれ", answers:"落ちこぼれ,おちこぼれ,ダメ",                     nagaoType:"未分類", explanation:null },
      { id:34, type:"kizyutsu", title:"Q34", text:"初代ボンゴレファミリーの当主（初代ボス）の名前は？",                       media:null, audio:null, answer:"ジョット",       answers:"ジョット",                                        nagaoType:"未分類", explanation:null },
      { id:35, type:"kizyutsu", title:"Q35", text:"初代ボンゴレファミリーで雲の守護者を務めた人物の名前は？",                 media:null, audio:null, answer:"アラウディ",             answers:"アラウディ",                                          nagaoType:"未分類", explanation:null },
      { id:36, type:"kizyutsu", title:"Q36", text:"初代ボンゴレファミリーで嵐の守護者を務めた人物の名前は？",                 media:null, audio:null, answer:"G",             answers:"G,ジー",                                          nagaoType:"未分類", explanation:null },
      { id:37, type:"kizyutsu", title:"Q37", text:"初代ボンゴレファミリーで雨の守護者を務めた人物の名前は？",                 media:null, audio:null, answer:"朝利雨月", answers:"朝利雨月,アサリ・ウゲツ,アサリ,雨月,あさりうげつ",                          nagaoType:"未分類", explanation:null },
      { id:38, type:"kizyutsu", title:"Q38", text:"初代ボンゴレファミリーで晴の守護者を務めた人物の名前は？",               media:null, audio:null, answer:"ナックル",       answers:"ナックル",                                        nagaoType:"未分類", explanation:null },
      { id:39, type:"kizyutsu", title:"Q39", text:"初代ボンゴレファミリーで雷の守護者を務めた人物の名前は？",                 media:null, audio:null, answer:"ランポウ",         answers:"ランポウ",                                          nagaoType:"未分類", explanation:null },
      { id:40, type:"kizyutsu", title:"Q40", text:"初代ボンゴレファミリーで霧の守護者を務めた人物の名前は？",                 media:null, audio:null, answer:"デイモン・スペード", answers:"デイモン・スペード,D・スペード,デイモンスペード,デイモン,スペード",                   nagaoType:"未分類", explanation:null },
      { id:41, type:"kizyutsu", title:"Q41", text:"ボンゴレファミリーはもともと何のための組織として結成された？",             media:null, audio:null, answer:"自警団",         answers:"自警団,じけいだん",                               nagaoType:"未分類", explanation:null },
      { id:42, type:"kizyutsu", title:"Q42", text:"獄寺隼人が主に武器として使うものは？",                                     media:null, audio:null, answer:"ダイナマイト",   answers:"ダイナマイト",                                    nagaoType:"未分類", explanation:null },
      { id:43, type:"kizyutsu", title:"Q43", text:"フータ・デッレ・ステッレの特技は、あらゆる物事に何をつけることか？",         media:null, audio:null, answer:"ランキング",     answers:"ランキング",                                      nagaoType:"未分類", explanation:null },
      { id:44, type:"kizyutsu", title:"Q44", text:"イーピンの出身はどこの国？",                                               media:null, audio:null, answer:"中国",           answers:"中国,ちゅうごく",                                 nagaoType:"未分類", explanation:null },
      { id:45, type:"kizyutsu", title:"Q45", text:"綱吉の母親の名前は？",                                                     media:null, audio:null, answer:"沢田奈々",           answers:"沢田奈々,奈々,なな,ナナ",                                            nagaoType:"未分類", explanation:null },
      { id:46, type:"kizyutsu", title:"Q46", text:"綱吉の父親の名前は？",                         media:null, audio:null, answer:"沢田家光",       answers:"沢田家光,家光,いえみつ,イエミツ",                                        nagaoType:"未分類", explanation:null },
      { id:47, type:"kizyutsu", title:"Q47", text:"笹川京子の親友の名前は？",                                                 media:null, audio:null, answer:"黒川花",       answers:"黒川花,くろかわはな,ハナ,花,はな,黒川,くろかわ",                     nagaoType:"未分類", explanation:null },
      { id:48, type:"kizyutsu", title:"Q48", text:"シモン一族の末裔にあたる転校生のボスの名前は？",       media:null, audio:null, answer:"古里炎真",         answers:"古里炎真,炎真,エンマ,えんま",                                          nagaoType:"未分類", explanation:null },
      { id:49, type:"kizyutsu", title:"Q49", text:"綱吉たちを未来へ送った実は味方だった人物の名前は？",             media:null, audio:null, answer:"入江正一",       answers:"入江正一,いりえしょういち,正一",                 nagaoType:"未分類", explanation:null },
      { id:50, type:"kizyutsu", title:"Q50", text:"X BURNERを完成させるため、コントタクトレンズを作成したの名前は？",                     media:null, audio:null, answer:"スパナ",       answers:"スパナ",                                        nagaoType:"未分類", explanation:null },
      { id:51, type:"kizyutsu", title:"Q51", text:"白蘭が好んで食べているお菓子は何？",                                       media:null, audio:null, answer:"マシュマロ",     answers:"マシュマロ",                                      nagaoType:"未分類", explanation:null },
      { id:52, type:"kizyutsu", title:"Q52", text:"ヴァリアーで「雲」の役割を担うキャラクターは誰？",                   media:null, audio:null, answer:"雲雀恭弥",       answers:"雲雀恭弥,ひばりきょうや,雲雀",                   nagaoType:"未分類", explanation:null },
      { id:53, type:"kizyutsu", title:"Q53", text:"ヴァリアーで「嵐」の役割を担うキャラクターは誰？",                 media:null, audio:null, answer:"ベルフェゴール",       answers:"ベルフェゴール,ベル",                        nagaoType:"未分類", explanation:null },
      { id:54, type:"kizyutsu", title:"Q54", text:"ヴァリアーで「雨」の役割を担うキャラクターは誰？",                   media:null, audio:null, answer:"スクアーロ",         answers:"スクアーロ",                          nagaoType:"未分類", explanation:null },
      { id:55, type:"kizyutsu", title:"Q55", text:"ヴァリアーで「晴」の役割を担うキャラクターは誰？",                         media:null, audio:null, answer:"ルッスーリア",       answers:"ルッスーリア",               nagaoType:"未分類", explanation:null },
      { id:56, type:"kizyutsu", title:"Q56", text:"ヴァリアーで「雷」の役割を担うキャラクターは誰？",                   media:null, audio:null, answer:"レヴィ・ア・タン",         answers:"レヴィ・ア・タン,レヴィ",                                          nagaoType:"未分類", explanation:null },
      { id:57, type:"kizyutsu", title:"Q57", text:"ヴァリアーで「霧」の役割を担うキャラクターは誰？（ヴァリアーでの名前で）",                   media:null, audio:null, answer:"マーモン",         answers:"マーモン",                                          nagaoType:"未分類", explanation:null },
      { id:58, type:"kizyutsu", title:"Q58", text:"アルコバレーノで初代「大空」の役割を担うキャラクターは誰？",                   media:null, audio:null, answer:"ルーチェ",       answers:"ルーチェ",                   nagaoType:"未分類", explanation:null },
      { id:59, type:"kizyutsu", title:"Q59", text:"アルコバレーノで「雲」の役割を担うキャラクターは誰？",                   media:null, audio:null, answer:"スカル",       answers:"スカル",                   nagaoType:"未分類", explanation:null },
      { id:60, type:"kizyutsu", title:"Q60", text:"アルコバレーノで「嵐」の役割を担うキャラクターは誰？",                 media:null, audio:null, answer:"風（フォン）",       answers:"風（フォン）,風,フォン",                        nagaoType:"未分類", explanation:null },
      { id:61, type:"kizyutsu", title:"Q61", text:"アルコバレーノで「雨」の役割を担うキャラクターは誰？",                   media:null, audio:null, answer:"コロネロ",         answers:"コロネロ",                          nagaoType:"未分類", explanation:null },
      { id:62, type:"kizyutsu", title:"Q62", text:"アルコバレーノで「晴」の役割を担うキャラクターは誰？",                         media:null, audio:null, answer:"リボーン",       answers:"リボーン",               nagaoType:"未分類", explanation:null },
      { id:63, type:"kizyutsu", title:"Q63", text:"アルコバレーノで「雷」の役割を担うキャラクターは誰？",                   media:null, audio:null, answer:"ヴェルデ",         answers:"ヴェルデ",                                          nagaoType:"未分類", explanation:null },
      { id:64, type:"kizyutsu", title:"Q64", text:"アルコバレーノで「霧」の役割を担うキャラクターは誰？",                   media:null, audio:null, answer:"バイパー",         answers:"バイパー",                                          nagaoType:"未分類", explanation:null },
      { id:65, type:"kizyutsu", title:"Q65", text:"初代「大空」のアルコバレーノの娘であり、現在の大空の母親であるの名前は？",         media:null, audio:null, answer:"アリア",           answers:"アリア",                                            nagaoType:"未分類", explanation:null },
      { id:66, type:"kizyutsu", title:"Q66", text:"ジッリョネロファミリーのボスであり、アルコバレーノ達を生き返らせるため亡くなった人物は？",         media:null, audio:null, answer:"ユニ",           answers:"ユニ",                                            nagaoType:"未分類", explanation:null },
      { id:67, type:"kizyutsu", title:"Q67", text:"ブーメランを武器とする青い色のハイパー死ぬ気モードで戦う人物名前は？",         media:null, audio:null, answer:"バジル",         answers:"バジル",                                          nagaoType:"未分類", explanation:null },
      { id:68, type:"kizyutsu", title:"Q68", text:"山本武の父親が営む店は何の店？",                                           media:null, audio:null, answer:"寿司屋",         answers:"寿司屋,すしや",                                   nagaoType:"未分類", explanation:null },
      { id:69, type:"kizyutsu", title:"Q69", text:"山本武の父親の名前は？",                                                   media:null, audio:null, answer:"山本剛",         answers:"山本剛,やまもとつよし",                          nagaoType:"未分類", explanation:null },
      { id:70, type:"kizyutsu", title:"Q70", text:"ランボが物語に最初に登場した際の見た目の年齢は？",                         media:null, audio:null, answer:"5歳",            answers:"5歳,五歳",                                        nagaoType:"未分類", explanation:null },
      { id:71, type:"kizyutsu", title:"Q71", text:"獄寺隼人が綱吉を呼ぶときの呼び方は？",                                     media:null, audio:null, answer:"十代目",         answers:"十代目,じゅうだいめ",                             nagaoType:"未分類", explanation:null },
      { id:72, type:"kizyutsu", title:"Q72", text:"綱吉のボックス武器であるライオンの名前は？",                               media:null, audio:null, answer:"ナッツ",           answers:"ナッツ",                                            nagaoType:"未分類", explanation:null },
      { id:73,type:"kizyutsu", title:"Q73",text:"獄寺隼人のボックス武器である猫の名前は？",                                 media:null, audio:null, answer:"瓜",           answers:"瓜,うり,ウリ",                                            nagaoType:"未分類", explanation:null },
      { id:74,type:"kizyutsu", title:"Q74",text:"山本武のボックス武器である犬の名前は？",                                   media:null, audio:null, answer:"次郎",           answers:"次郎,じろう,雨犬",                                     nagaoType:"未分類", explanation:null },
      { id:75,type:"kizyutsu", title:"Q75",text:"山本武のボックス武器であるツバメの名前は？",                                   media:null, audio:null, answer:"小次郎",           answers:"小次郎,こじろう,雨ツバメ",                                     nagaoType:"未分類", explanation:null },
      { id:76,type:"kizyutsu", title:"Q76",text:"ディーノが率いる一族の名前は？",                                           media:null, audio:null, answer:"キャバッローネファミリー", answers:"キャバッローネファミリー,キャバッローネ",       nagaoType:"未分類", explanation:null },
      { id:77,type:"kizyutsu", title:"Q77",text:"「家庭教師ヒットマンREBORN!」が連載されていた雑誌は？",                   media:null, audio:null, answer:"週刊少年ジャンプ", answers:"週刊少年ジャンプ,少年ジャンプ,ジャンプ",       nagaoType:"未分類", explanation:null },
      { id:78,type:"kizyutsu", title:"Q78",text:"「家庭教師ヒットマンREBORN!」の作者の名前は？",                           media:null, audio:null, answer:"天野明",         answers:"天野明,あまのあきら",                             nagaoType:"未分類", explanation:null }
    ]
  }
];

// room-play.htmlからアクセスできるようwindowに公開
if (typeof window !== 'undefined') {
  window.DEFAULT_GENRES = DEFAULT_GENRES;
}
