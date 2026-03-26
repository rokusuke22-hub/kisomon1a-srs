// ========================================
// 基礎問題精講I・A SRS - config.js
// 作成日時: 2026-03-26T19:30:00+09:00
// テンプレート: ネクステタイプ v2.0
// ========================================
// ★ index.html は編集不要。教材固有設定はここに集約。
// ========================================

var APP_CONFIG = {

  // ========================================
  // 1. アプリ識別（★最重要: 他教材と重複するとデータ破壊）
  // ========================================
  APP_NAME: "基礎問題精講I・A SRS",          // ホーム画面タイトル
  STORAGE_KEY: "kisomon1a-srs-v1",           // localStorageキー（一意必須）
  EXPORT_PREFIX: "kisomon1a-srs",            // JSONエクスポートファイル名
  SW_CACHE_NAME: "kisomon1a-srs-v1",         // sw.jsのCACHE_NAMEと一致させる

  // ========================================
  // 2. クラウド同期
  // ========================================
  GAS_URL: "https://script.google.com/macros/s/AKfycbwsaIBwEc6XKsJeGUFS_Y5DRgfWjsAuBLUGEyXn7nCub1X3WozBzwWwaMu33a3RRB9u/exec",  // GASデプロイURL（空文字ならローカルのみ）

  // ========================================
  // 3. 配色（表紙の緑系から抽出、目に優しいトーンに調整）
  //    基礎問題精講I・Aの表紙: 深緑ベース
  // ========================================
  COLORS: {
    // ページ背景・カード
    pageBg:       "#F4F7F4",      // 緑がかったライトグレー（ページ全体）
    cardBorder:   "#C8D6C8",      // カード枠線（薄い緑グレー）
    cardBg:       "#FFFFFF",      // カード背景（白）

    // テキスト
    textPrimary:  "#1A2E1A",      // 主テキスト（深緑ベースのダーク）
    textSecondary:"#4A6B4A",      // 補足テキスト（中間緑）
    textMuted:    "#7A937A",      // 薄いテキスト（グレー緑）

    // ボタン
    btnPrimaryBg:    "#2D6A2D",   // プライマリボタン背景（表紙の深緑）
    btnPrimaryFg:    "#FFFFFF",   // プライマリボタン文字（白）
    btnSecondaryBg:  "#EDF3ED",   // セカンダリボタン背景（薄緑）
    btnSecondaryFg:  "#2D6A2D",   // セカンダリボタン文字（深緑）
    btnSecondaryBorder: "#B8CCB8",// セカンダリボタン枠線

    // 入力フィールド
    inputBorder:  "#B8CCB8",      // 入力枠線
    inputBg:      "#FAFCFA",      // 入力背景

    // ステータス
    statusOk:     "#2D8A2D",      // 正常（緑）
    statusError:  "#C53030",      // エラー（赤）
    statusMuted:  "#7A937A",      // 無効（グレー緑）

    // 判定ボタン（○わかった / ◎余裕）
    judgeCorrectBg:     "#D4EDDA",  // ○背景
    judgeCorrectFg:     "#155724",  // ○文字
    judgeCorrectBorder: "#A3D9A3",  // ○枠線
    judgeEasyBg:        "#C3E6CB",  // ◎背景
    judgeEasyFg:        "#0B4F1A",  // ◎文字
    judgeEasyBorder:    "#82C891",  // ◎枠線

    // バッジ
    badgeNewBg:     "#E8F5E9",    // 新規（薄緑）
    badgeNewFg:     "#2E7D32",    // 新規文字
    badgeGradBg:    "#C8E6C9",    // 卒業（緑）
    badgeGradFg:    "#1B5E20",    // 卒業文字
    badgeNeutralBg: "#E8E8E8",    // 中立（グレー）
    badgeNeutralFg: "#666666",    // 中立文字
    badgePendingBg: "#FFF3E0",    // 未復習（オレンジ系）
    badgePendingFg: "#E65100",    // 未復習文字

    // GAS接続状態
    gasOkBg:   "#E8F5E9",         // 接続OK背景
    gasOkFg:   "#2E7D32",         // 接続OK文字
    gasWarnBg: "#FFF3E0",         // 未設定背景
    gasWarnFg: "#E65100",         // 未設定文字

    // コード表示・診断
    codeBg:    "#F0F4F0",         // コードブロック背景
    diagBg:    "#F5F5F5",         // 診断ボタン背景
    diagFg:    "#333333",         // 診断ボタン文字
    diagBorder:"#CCCCCC"          // 診断ボタン枠線
  },

  // ========================================
  // 4. UI文言（数学・基礎問題精講に最適化）
  // ========================================
  LABELS: {
    unitName:          "問題",                               // 管理単位の名称
    registerBtn:       "問題を登録する",                       // ホーム画面の登録ボタン
    registerTitle:     "問題登録",                             // 登録画面のタイトル
    idLabel:           "問題番号",                             // 入力フィールドのラベル
    idPlaceholder:     "例: 42, 例題3, P45",                  // プレースホルダー
    idHint:            "基礎問題精講I・Aの問題番号や例題番号を入力（50文字以内）", // 入力ヒント
    listTitle:         "登録一覧",                             // 一覧画面のタイトル
    listUnit:          "問",                                  // 単位（「3問」の「問」）
    csvTitle:          "まとめて取り込み",                      // CSV取込画面のタイトル
    reviewUnit:        "問",                                  // 復習単位（「5問 完了」の「問」）
    cardHint:          "基礎問題精講I・Aで該当の問題を解いてください", // カード画面のヒント
    searchPlaceholder: "問題番号で検索..."                      // 検索プレースホルダー
  }
};
