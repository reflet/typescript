# typescript 3.9.10
TypeScriptのバージョン3.9.10の学習用に作ります。

## 前提条件
- MacOS / Windows環境
- Gitコマンド
- Docker for Desktop

## ミドルウェア
- Node 12.x.x
- Typescript 3.9.10

## ファイル構成
```
┗ src
  ┣ html
  ┃  ┣ js
  ┃  ┃  ┣ dist          ← コンパイルされたファイル
  ┃  ┃  ┃  ┣ app.js
  ┃  ┃  ┃  ┗ greeter.js
  ┃  ┃  ┗ ts            ← コンパイル対象ファイル
  ┃  ┃     ┣ app.ts 
  ┃  ┃     ┗ greeter.ts 
  ┃  ┗ index.html       ← greeter.jsを読み込んでいるページ
  ┃
  ┣ package.json
  ┣ package-lock.json
  ┗ tsconfig.json
```

## 準備
必要となるコードをリポジトリからclonseして配置します。
```bash
$ mkdir -p ~/workspace/typescript3.9.10/ && cd ~/workspace/typescript3.9.10
$ git clone https://github.com/reflet/typescript3.9.10.git .
```

## docker構築
dockerイメージを作成し、バージョン確認してみる。

```bash
# dockerイメージ作成
$ docker compose build

$ docker compose run --rm node npx tsc --version
Version 3.9.10
```

## サーバ起動
dockerコンテナを起動します。

```bash
$ docker compose up -d
```

## 動作確認
index.jsを読み込んでいるindex.htmlをブラウザで閲覧してみる。
```bash
$ open http://localhost
```

## トランスコンパイル
TypescriptのコードをJavascriptのコードに変換する。

```bash
$ docker compose exec node npx tsc
  or
$ docker compose exec node npm run build
```

## コマンド実行
`node` コマンドで実行してみる。

```bash
$ docker compose exec node node html/js/dist/app.js
  or
$ docker compose exec node npm run start
```

`ts-node` コマンドで実行してみる。

```bash
$ docker compose exec node npx ts-node html/js/ts/app.ts
  or
$ docker compose exec node npm run dev
```

`ts-node-dev` コマンドで実行してみる。

```bash
$ docker compose exec node npx ts-node-dev --respawn html/js/ts/app.ts
  or
$ docker compose exec node npm run dev:watch
```

## 生成されたファイルの削除

```bash
$ docker compose exec node npm run clean
```

## node_modulesフォルダ
node_modulesフォルダはディスクI/Oの問題があり、ローカルと同期を取っていません。  
IEDなどの関係上でdockerコンテナからローカルにコピーしたい場合は下記コマンドを使ってください。

- **node_modules**
```bash
docker cp $(docker compose ps -q node):/usr/src/app/node_modules ./src/
```

- **dist**
```bash
docker cp $(docker compose ps -q node):/usr/src/app/html/js/dist ./src/html/js/
```

## プロジェクト作成
新規にプロジェクトを作成する場合は、下記コマンドで、各設定ファイルを作成ください。

＜各設定ファイル＞
```
┗ src
  ┣ package.json
  ┣ package-lock.json
  ┗ tsconfig.json
```
下記コマンドを実行することで、上記３つのファイルが作成されます。

### ① 初期化(npm)
`src/package.json` を作成します

```bash
$ docker compose run --rm node npm init -y
```

### ② ライブラリをインストールする
`src/package-lock.json` と `src/node_modules` が作成されます。

```bash
$ docker compose run --rm node npm install -D typescript@3.9.10 @types/node ts-node ts-node-dev rimraf npm-run-all
```

### ③ 初期化 (TypeScript)
TypeScriptの `src/tsconfig.json` ファイルを作成します。

```bash
$ docker compose run --rm node npx tsc --init
```

以上

## 参考サイト
* [TypeScript - JavaScript that scales.](https://www.typescriptlang.org/)
* [入門 TypeScriptとは？](https://www.sejuku.net/blog/93230)
* [TypeScript + Node.js プロジェクトのはじめかた2019](https://qiita.com/notakaos/items/3bbd2293e2ff286d9f49)
* [「がんばらないTypeScript」で、JavaScriptを“柔らかい”静的型付き言語に](https://employment.en-japan.com/engineerhub/entry/2019/04/16/103000)

以上
