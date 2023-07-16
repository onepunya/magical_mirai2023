# ReadMe目次

# デモ動画
!!FIXME!!

# 審査にあたって
本WebAppはChatGPTの使用を選択できるようになっております。（以降、GPTモード選択機能）  
すべての機能はchatGPTを用いなくてもWebAppの動作には問題ないですが
GPTモード選択機能があることにより、審査に不利益が生じる場合は、
お手数ですが、本機能を無効化GPT関連の設定を行ったうえで審査をお願いいたします。
大変恐れ入りますが、OpenAI keyの用意はございませんので、必要に応じて取得してください。

# 概要
本作品は、人工無脳とLive2Dを用いてチャットベースのコミュニケーションを実現した作品です。
作品は、ミクさんの控室や握手会といった空間をイメージしており、
チャットを入力し、その入力をリアルタイムに解析し、結果に応じてミクさんが
言葉と仕草で反応してくれます。  
また、楽曲再生やボリュームの変更もすべてチャットベースで操作可能です、
さらに、楽曲再生中には、TextAliveAPIから取得できる覚醒度と感情価から仕草を判定して
楽曲再生中もミクさんがいろんな仕草をして楽しませてくれます。
※使用しているミクさんの言葉の応答はchatGPTによって作成し、仕草は独断と偏見によって割り振りました。皆さんのイメージにマッチしない部分もあるかと思いますがご了承ください。
※なお、GPTに入力したミクさん組成のpromptは、本アプリのGPTモードをONにすることにより利用可能です。

## 作品の操作方法

### トップ画面
最初の画面では次のようなボタンが表示されます。
「PRESS TO START」をクリックすることによりメイン画面に進みます。
!!FIXME!! 画像を入れる

### メイン画面
この画面では、ミクさんと対話やミクさんに歌ってもらうことができます。

**チャット機能**  
チャットを入力し送信をクリックすると、次の図のようにミクがコメントと反応を返してくれます。
!!FIXME!!画像
通常のチャット以外にも次の機能も含まれております。
- 楽曲再生と停止(※1)
  - 「曲を再生して」というと、現在セットされている楽曲が流れます。
  - 「マジミラの曲を流して」や「XX（曲目）を流して」などと、キーワードや曲目を指定するとそれに合った楽曲が流れます。
　- 「曲を止めて」というと、再生を停止します。
- ボリューム変更(※1)
  - ボリュームが小さいときは、「音量上げて」というと音量が10上がります。
  - ボリュームが大きいときは、「音量下げて」というと音量が10下がります。
※1 ： ある程度の表現の揺れには対応してますので、必ずしも上記の通り入力する必要はありません。(参照箇所：コードへのリンク)

**楽曲再生中**
図のように歌詞モニター歌詞が表示されます。※2
また、TextAliveAPIのビート情報をもとにスポットライトが点滅します。※2
さらに、ミクの動きは上述したとおり、TextAliveAPIの覚醒度と感情価から動きを決定しています。
もちろん、チャットを送ることも可能です。
!!FIXME!!画像

**画面の説明**
1. Exitボタン
  - クリックすると終了画面に遷移します
2. 音楽の再生・停止を制御するボタン
  - 音楽を再生したり、停止したりします
3. 設定画面を表示するボタン
  - 設定画面を表示します。
4. チャット入力欄
  - ミクに送信したいチャットの文言を入力します
5. チャット送信ボタン
  - 入力したチャットをミクさんに送ります
6. 歌詞表示用モニター
  - 流れている楽曲の歌詞を表示します
7. チャットログ表示用モニター
  - チャットのログを見れます

### 設定画面
ここでは次の項目を設定できる
- 音量
- 再生する楽曲
- GPTモードのON/OFF
- GPTモードで使用するためのOpen APIKEY
- GPTモードONの時のプロンプト

!!FIXME!!画像

### 終了画面

!!FIXME!!画像

# 詳細説明
## 人工無脳（Chat応答部分）
## live2Dとの連携

# 実行方法
1. スクリプトを取得する
```
cd ${YOUR_WORKING_DIR}
git clone https://github.com/Motohiro-Otsuka/magical_mirai2023.git
```
ディレクトリ構成は下記の通り
```
!!FIXME!!
```

2. HTTPサーバ状に本スクリプトを配置する
次の例を参考にサーバを立てて実行する
- 例1：VScodeのliveserverを使用する。
  - VScodeをダウンロード
  - Extentionsのサイドタブを開く
    - liveserverをinstallする
  - VSCodeで1でcloneしてきたディレクトリを新たに開く
    - `code magical_mirai2023` をVSCodeの統合ターミナルに入力してEnterを入力
    - VScodeのwindowが新たに立ち上がる
  - 新たに立ち上がったVScodeの画面右下の「Go to live」をクリックする(ない場合はVScodeを再起動)
  - ブラウザで、http://localhost:5500 にアクセスする(デフォルトではGo To liveをクリックすると自動的に立ち上がる)
- 例2: nodeのhttp serverを利用する
  - !!FIXME!!去年のコピペ 

# 動作確認環境
- OS
  - Windows10
- ブラウザ
  - vivaldi、chrome
- 対応端末
  - PC

# 対応楽曲
- 
- 
- 
- 
- 
- 
※ただし、`src/musicList.js`に楽曲情報を追加するとSongleで公開されている楽曲すべて利用可能。

# 作品に対する思いなど

# 使用した主なライブラリ

# 開発関係者紹介
- **オメガりん**
- **みなみ**
- **Aoi**
- **ゆはる**
- **椿**

# 免責事項・注意事項
