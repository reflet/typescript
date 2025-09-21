# Make Node.js Web Application Docker
# https://nodejs.org/ja/docs/guides/nodejs-docker-webapp/
FROM node:10

#RUN echo "deb http://archive.debian.org/debian/ stretch main" > /etc/apt/sources.list \
#    && echo "deb http://archive.debian.org/debian-security stretch/updates main" >> /etc/apt/sources.list \
#    && apt-get update  \
#    && apt-get install -y less vim \
#    && apt-get -y autoremove \
#    && apt-get clean \
#    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Create an application directory.
WORKDIR /usr/src/app

# Bundle application sources.
COPY ./src/ /usr/src/app
RUN rm -rf node_modules dist

# 初期化(npm)
# npm プロジェクトの作成します
# ※ `src/package.json` が作成されます
#RUN npm init -y

# ＜ライブラリ＞
# TypeScriptの開発に必要な各種コマンドをインストールします
# ※ `src/package-lock.json` と `src/node_modules` が作成されます
#RUN npm install -D typescript @types/node ts-node ts-node-dev rimraf npm-run-all

# ＜初期化 (TypeScript)＞
# TypeScriptのコンパイラオプションファイルを作成します
# ※ `src/tsconfig.json` が作成されます
#RUN npx tsc --init

# Node.js オプション設定 (memory up)
ENV NODE_OPTIONS "--max-old-space-size=4096"

# Install application dependencies.
#RUN npm install -g n
RUN npm install

# build in test mode and create a dist folder.
RUN npm run build

EXPOSE 8080

# it's very slow, so run it manually
# CMD ["npx", "tsc"]
