# typescript
TypeScriptを触ってみる。

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

## 初期化(npm)
npm プロジェクトの作成します。
```
$ docker-compose run --rm node npm init -y
```
※ `src/package.json` が作成されます

## ライブラリ
TypeScriptの開発に必要な各種コマンドをインストールします。
```
$ docker-compose run --rm node npm install -D typescript @types/node
$ docker-compose run --rm node npm install -D ts-node ts-node-dev rimraf npm-run-all
```
※ `src/package-lock.json` と `src/node_modules` が作成されます

## バージョン確認
バージョン確認してみる。
```
$ docker-compose run --rm node npx tsc --version
Version 3.8.3
```

## 初期化(TypeScript)
TypeScriptのコンパイラオプションファイルを作成します。
```
$ docker-compose run --rm node npx tsc --init
```
※ `src/tsconfig.json` が作成されます

## サーバ起動
```
$ docker-compose up -d
```

## コンパイル
```
$ docker-compose exec node npx tsc
  or
$ docker-compose exec node npm run build
```

## 動作確認
index.jsを読み込んでいるindex.htmlをブラウザで閲覧してみる。
```
$ open http://localhost:8080
```

## コマンド実行
`node` コマンドで実行してみる。
```
$ docker-compose exec node node html/js/dist/app.js
  or
$ docker-compose exec node npm run start
```

`ts-node` コマンドで実行してみる。
```
$ docker-compose exec node npx ts-node html/js/ts/app.ts
  or
$ docker-compose exec node npm run dev
```

`ts-node-dev` コマンドで実行してみる。
```
$ docker-compose exec node npx ts-node-dev --respawn html/js/ts/app.ts
  or
$ docker-compose exec node npm run dev:watch
```

## 生成されたファイルの削除

```
$ docker-compose exec node npm run clean
```

## 参考サイト
* [TypeScript - JavaScript that scales.](https://www.typescriptlang.org/)
* [入門 TypeScriptとは？](https://www.sejuku.net/blog/93230)
* [TypeScript + Node.js プロジェクトのはじめかた2019](https://qiita.com/notakaos/items/3bbd2293e2ff286d9f49)
