const { Player } = TextAliveApp;
const DICT_PATH = "./dict"
// プレイヤーの初期化 / Initialize TextAlive Player
const player = new Player({
  // トークンは https://developer.textalive.jp/profile で取得したものを使う
  app: { token: "8KBfjCmqKXJE1Kut" },
  mediaElement: document.querySelector("#media"),
});
  
const overlay = document.querySelector("#overlay");
const bar = document.querySelector("#bar");
const textContainer = document.querySelector("#text");
const seekbar = document.querySelector("#seekbar");
const paintedSeekbar = seekbar.querySelector("div");
let b, c;
let play_flag = false;
let lyrics_id = 0;
let start_latest = 0;
let monitor_start_time = 0;
let timing_id = 0;
let monitor_timing_id=0;
let miku_position = 1;

console.log("read controle text alive api")
player.addListener({
    /* APIの準備ができたら呼ばれる */
    onAppReady(app) {
      if (app.managed) {
        document.querySelector("#control").className = "disabled";
      }
      if (!app.songUrl) {
        document.querySelector("#media").className = "disabled";
  
        // Loading Memories / せきこみごはん feat. 初音ミク
        player.createFromSongUrl("https://piapro.jp/t/RoPB/20220122172830");
      }
    },
  
  
    /* 楽曲情報が取れたら呼ばれる */
    onVideoReady(video) {
      // 最後に表示した文字の情報をリセット
      c = null;
    },
  
    /* 再生コントロールができるようになったら呼ばれる */
    onTimerReady() {
      document.querySelector("#control > a#play").className = "";
      document.querySelector("#control > a#stop").className = "";
    },
  
  
    /* 楽曲の再生が始まったら呼ばれる */
    onPlay() {
      const a = document.querySelector("#control > a#play");
      while (a.firstChild) a.removeChild(a.firstChild);
      a.appendChild(document.createTextNode("⏸️Pause"));
      play_flag = true;  
    },
  
    /* 楽曲の再生が止まったら呼ばれる */
    onPause() {
      const a = document.querySelector("#control > a#play");
      while (a.firstChild) a.removeChild(a.firstChild);
      a.appendChild(document.createTextNode("▶️Start"));
      play_flag = false;
    },
    onStop: () => {
      ;
    },
    onTimeUpdate(position) {
      // シークバーの表示を更新
      paintedSeekbar.style.width = `${
        parseInt((position * 1000) / player.video.duration) / 10
      }%`;
    }
  
  });
  //seekbar
  seekbar.addEventListener("click", (e) => {
    e.preventDefault();
    if (player) {
      player.requestMediaSeek(
        (player.video.duration * e.offsetX) / seekbar.clientWidth
      );
    }
    lyrics = player.video.getChar(lyrics_id)
    if(lyrics.startTime < position){
      timing_id = 0;
      lyrics_id = 0;
    }
    
    return false;
  });
  /* 再生・一時停止ボタン */
  document.querySelector("#control > a#play").addEventListener("click", (e) => {
    e.preventDefault();
    if (player) {
      if (player.isPlaying) {
        player.requestPause();
      } else {
        player.requestPlay();
        //再生を停止したら、歌詞のインデックスをリセットする
        lyrics_id = 0;
        start_latest = 0;
        monitor_start_time = 0;
        timing_id = 0;
        monitor_timing_id=0;
      }
    }
    return false;
  });
  
  /* 停止ボタン */
  document.querySelector("#control > a#stop").addEventListener("click", (e) => {
    e.preventDefault();
    if (player) {
      player.requestStop();
    }
    return false;
  });