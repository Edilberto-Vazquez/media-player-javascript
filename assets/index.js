import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";

const video = document.querySelector("video");
const playPause = document.querySelector("#playButton");
const muteUnmute = document.querySelector("#muteButton");

const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()] });

playPause.onclick = () => player.togglePlay();
muteUnmute.onclick = () => player.toggleMute();
