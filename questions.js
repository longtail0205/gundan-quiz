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
      { id:1,  type:"kizyutsu", title:"問題1",  text:"問題文をここに入力", media:null, audio:null, answer:"正解をここに入力", answers:"正解をここに入力,ひらがなの正解,別の正解", nagaoType:"未分類", explanation:null },
      { id:2,  type:"kizyutsu", title:"問題2",  text:"問題文をここに入力", media:null, audio:null, answer:"正解をここに入力", answers:"正解をここに入力,ひらがなの正解,別の正解", nagaoType:"未分類", explanation:null },
      { id:3,  type:"kizyutsu", title:"問題3",  text:"問題文をここに入力", media:null, audio:null, answer:"正解をここに入力", answers:"正解をここに入力,ひらがなの正解,別の正解", nagaoType:"未分類", explanation:null },
      { id:4,  type:"kizyutsu", title:"問題4",  text:"問題文をここに入力", media:null, audio:null, answer:"正解をここに入力", answers:"正解をここに入力,ひらがなの正解,別の正解", nagaoType:"未分類", explanation:null },
      { id:5,  type:"kizyutsu", title:"問題5",  text:"問題文をここに入力", media:null, audio:null, answer:"正解をここに入力", answers:"正解をここに入力,ひらがなの正解,別の正解", nagaoType:"未分類", explanation:null },
      { id:6,  type:"kizyutsu", title:"問題6",  text:"問題文をここに入力", media:null, audio:null, answer:"正解をここに入力", answers:"正解をここに入力,ひらがなの正解,別の正解", nagaoType:"未分類", explanation:null },
      { id:7,  type:"kizyutsu", title:"問題7",  text:"問題文をここに入力", media:null, audio:null, answer:"正解をここに入力", answers:"正解をここに入力,ひらがなの正解,別の正解", nagaoType:"未分類", explanation:null },
      { id:8,  type:"kizyutsu", title:"問題8",  text:"問題文をここに入力", media:null, audio:null, answer:"正解をここに入力", answers:"正解をここに入力,ひらがなの正解,別の正解", nagaoType:"未分類", explanation:null },
      { id:9,  type:"kizyutsu", title:"問題9",  text:"問題文をここに入力", media:null, audio:null, answer:"正解をここに入力", answers:"正解をここに入力,ひらがなの正解,別の正解", nagaoType:"未分類", explanation:null },
      { id:10, type:"kizyutsu", title:"問題10", text:"問題文をここに入力", media:null, audio:null, answer:"正解をここに入力", answers:"正解をここに入力,ひらがなの正解,別の正解", nagaoType:"未分類", explanation:null }
      // ★ 問題を追加する場合はここに追記
    ]
  }
];
