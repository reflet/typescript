# typescript （Version 3.9.10）
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

## サーバ起動
```
$ docker compose up -d
```

## バージョン確認
バージョン確認してみる。
```
$ docker compose exec node npx tsc --version
Version 3.8.3
```

## 動作確認
index.jsを読み込んでいるindex.htmlをブラウザで閲覧してみる。
```
$ open http://localhost
```

## コンパイル
```
$ docker compose exec node npx tsc
  or
$ docker compose exec node npm run build
```

## コマンド実行
`node` コマンドで実行してみる。
```
$ docker compose exec node node html/js/dist/app.js
  or
$ docker compose exec node npm run start
```

`ts-node` コマンドで実行してみる。
```
$ docker compose exec node npx ts-node html/js/ts/app.ts
  or
$ docker compose exec node npm run dev
```

`ts-node-dev` コマンドで実行してみる。
```
$ docker compose exec node npx ts-node-dev --respawn html/js/ts/app.ts
  or
$ docker compose exec node npm run dev:watch
```

## 生成されたファイルの削除

```
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

## 参考サイト
* [TypeScript - JavaScript that scales.](https://www.typescriptlang.org/)
* [入門 TypeScriptとは？](https://www.sejuku.net/blog/93230)
* [TypeScript + Node.js プロジェクトのはじめかた2019](https://qiita.com/notakaos/items/3bbd2293e2ff286d9f49)
* [「がんばらないTypeScript」で、JavaScriptを“柔らかい”静的型付き言語に](https://employment.en-japan.com/engineerhub/entry/2019/04/16/103000)

以上
