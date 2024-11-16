# game-of-life-react

[![Apache-2.0 License](https://img.shields.io/github/license/ytak-sagit/game-of-life-react)](https://github.com/ytak-sagit/game-of-life-react/blob/master/LICENSE)

コンウェイのライフゲーム（Conway's Game of Life）を React で実装した、Single Page Application（SPA）です。

## 🔧技術スタック一覧

<img src="https://img.shields.io/badge/1.1.34-Bun-2f3339.svg?logo=bun&style=for-the-badge">
<img src="https://img.shields.io/badge/5.3.4-Vite-bd34fe.svg?logo=vite&style=for-the-badge">
<img src="https://img.shields.io/badge/18.3.1-React-61dafb.svg?logo=react&style=for-the-badge">
<img src="https://img.shields.io/badge/5.2.2-Typescript-007acc.svg?logo=typescript&style=for-the-badge">
<img src="https://img.shields.io/badge/11.13.0-Emotion-d26ac2.svg?logo=emotion&style=for-the-badge">
<img src="https://img.shields.io/badge/1.8.3-Biome-60a5fa.svg?logo=biome&style=for-the-badge">
<img src="https://img.shields.io/badge/27.1.1-Docker-1488c6.svg?logo=docker&style=for-the-badge">
<img src="https://img.shields.io/badge/2.29.1-Docker_Compose-ff3399.svg?logo=dockercompose&style=for-the-badge">
<img src="https://img.shields.io/badge/-devcontainer-2f3339.svg?logo=devcontainer&style=for-the-badge">
<img src="https://img.shields.io/badge/-GitHub_Actions-2f3339.svg?logo=githubactions&style=for-the-badge">
<img src="https://img.shields.io/badge/-GitHub_Pages-2f3339.svg?logo=githubpages&style=for-the-badge">

## 📂ディレクトリ構成

`/app/src/` 配下は、[bulletproof-react](https://github.com/alan2207/bulletproof-react/tree/master) の考え方に基づくディレクトリ構成を採用しています。
- ただし、テストコードは現状、`/app/tests/` 配下で分けて管理しています（テスト用の `tsconfig.json` を分けるため）。

## 🌐アプリケーションのURL

GitHub Pages にアプリケーションをデプロイして公開しています。興味のある方はアクセスして、遊んでみてください。
- https://ytak-sagit.github.io/game-of-life-react/

### 遊び方

- 画面の初期表示時は、セルがランダムに配置されます。
- セルの描画領域（シャーレ）のサイズは「縦128セル x 横128セル」で固定です。
- 各セルをクリックすることで、セルの生死状態を切り替えることができます。
  - 「生存」セルは <span style="color: #00ff2a; font-size: 1em;">■</span> 、「死滅」セルは <span style="color: #333333; font-size: 1em;">■</span> で表現しています。
- [Start]ボタンを押すと、ライフゲームのルールに基づくセルの生死判定と次世代セルの描画を自動で行います。
  - 自動処理中は、[Stop]ボタンを押す以外の操作は行えません。
- [Stop]ボタンを押すと、生死判定および自動描画が停止します。
- [Next]ボタンを押すと、1世代分だけセルの生死判定と描画を行います。
- 現在の世代数は、画面上の `Generation is #N` の部分で確認できます（`N` が世代数）。
- [Reset]ボタンを押すと、世代数とシャーレ上のセルの生死状態をリセットします。
  - 世代数は0に、セルはすべて「死滅」状態にします。
- 特定のパターンを選択してシャーレ上に描画できます（初期値は「ランダム」）。
  - 世代数の右横のプルダウンリストから、描画したいパターンを選択してください。
  - 選択後、世代数とシャーレ上のセルの生死状態をリセットした後で、パターンを描画します。

### 制限事項

- セルの生死状態をドラッグ操作によって変更することはできません。
- [Start]ボタン押下時の自動描画のスピードは固定です。変更することはできません。

### その他

- ダークモード・ライトモードでの表示に対応しています。
