let lyric = "hoge"
async function displayLyric(position,playFlag){
  //歌詞の表示を行うための関数
  //positionは再生位置が今どのへんか（ミリ秒)
    //positionは0以上の小数なので普通に四則演算ができる
  //playFlagは今音楽が再生されているか(再生されていたらture,されていなかったらfalse)

  //ビート情報の取得
  let beatInfo = player.findBeat(position)
  //コード情報の取得
  let chordInfo = player.findChord(position)
  //歌詞などの情報を取得
  let iVideoInfo = player.video
  let wordInfo = iVideoInfo.findWord(position)
  let onePhrase = ""
  let endPhraseTime = 0
  //音楽が再生されているときの処理
  if(playFlag){
    //ビート情報の取り方
      //beatInfoにはpositionで指定した時間の情報が全ては言っている
      //console.log(beatInfo)
        //次の情報(次のbeatInfoが見れる)
          //console.log(beatInfo.next)
        //前の情報(前のbeatInfoが見れる)
          //console.log(beatInfo.previous)
        //このビートが始まる時間
          //console.log(beatInfo.startTime)
        //このビートの長さ(4なら4拍分 多分...)
          //console.log(beatInfo.length)
        //何小節目か(多分？)
          //console.log(beatInfo.index)
    //コードの取り方
      //chordtInfoにはpositionで指定した時間の情報が全ては言っている
      //console.log(chordInfo)
      //次の情報を取る(ない場合はnull)
        //onsole.log(chordInfo.next)
      //前の情報を取る(ない場合はnull)
        //console.log(chordInfo.next)
      //このコードが開始される時間(ミリ秒)
        //console.log(chordInfo.startTime)
      //このコードが終了する時間(ミリ秒)
        //console.log(chordInfo.endTime)
      //コードネーム
        //console.log(chordInfo.name)
    //歌詞情報の取りかた
    //wordInfoがnullの時はデータがないのでエラーが出る
    if(wordInfo != null){
      console.log(wordInfo)
        //ワンフレーズのデータ
          //console.log(wordInfo._children)
        //前のワンフレーズのデータ
          //console.log(wordInfo._previous)
        //次のワンフレーズのデータ
          //console.log(wordInfo._next)
        //ワンフレーズのデータ全部
          //console.log(wordInfo._data)
        //ワンフレーズの品詞情報
          //console.log(wordInfo._data.rawPoS)
        //ワンフレーズの終了時間
          //console.log(wordInfo._data.startTime)
        endPhraseTime = wordInfo._data.startTime
        //ワンフレーズの開始時間
          //console.log(wordInfo._data.endTime)
        //ワンフレーズを一文字ずつ取り出す方法１つめ
        for(let i = 0 ; i < wordInfo._children.length ; i++){
          wordInfo._children[i]._color
          wordInfo._children[i]._data
          //歌詞の文字を取り出すには
          wordInfo._children[i]._data.char
          //歌詞を発声開始時間を取り出す
          wordInfo._children[i]._data.startTime
          //歌詞を発声終了時間を取り出す
          wordInfo._children[i]._data.endTime
          onePhrase+=wordInfo._children[i]._data.char
          //ワンフレーズ最後の時間を取得
        }
        //ワンフレーズを一文字ずつ取り出す方法２つめ
        /*
        for(let i = 0 ; i < wordInfo._data.characters.length ; i++){
          
          //文字
            //console.log(wordInfo._data.characters[i].char)
          //発声開始タイミング
            //console.log(wordInfo._data.characters[i].startTime)
          //発声終了タイミング
            //console.log(wordInfo._data.characters[i].endTime)
        }
        */
        //表示している歌詞の更新
        lyric = onePhrase
        //表示位置の調整とかはpixi.jsのホームページ見て（英語）
        lyricText.text = lyric
    }
  }

}