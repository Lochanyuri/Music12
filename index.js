const h4 = document.querySelector(".box3 h4");
const audio = document.querySelector(".box3 audio");
let durationT = document.querySelector(".duration");
let progress = document.querySelector(".duration");
let box44 = document.querySelector(".box44");
const currentTim = document.getElementById('currentTim');
const durationTim = document.getElementById('durationTim');
const musicbox = [
  {
   songName:"7 Years - Lukas Graham.mp3",
   audio:"7 Years - Lukas Graham  [LyricsVietsub].mp3",
  },
  {
   songName:"Eminem - MockingBird (sped up).mp3",
   audio:"Eminem - MockingBird (sped up).mp3",
  },
  {
   songName:"Famy_-_Ava__Speed_Up.mp3",
   audio:"Famy_-_Ava__Speed_Up_Tiktok_Version___Lyrics(256k).mp3",
  },
  {
   songName:"Fifth_Harmony_-_Work_from_Home.mp3",
   audio:"Fifth_Harmony_-_Work_from_Home_(Official_Video)_ft._Ty_Dolla_$ign(48k).mp3",
  },
  {
   songName:"justin-bieber-yummy.mp3",
   audio:"justin-bieber-yummy-lyrics-128-ytshorts.savetube.me.mp3",
  },
  {
   songName:"Justin_Bieber Ill_Show_You.mp3",
   audio:"Justin_Bieber_-_Ill_Show_You_(getmp3.pro).mp3",
  },
  {
   songName:"Melanie_Martinez_-_Play_Date.mp3",
   audio:"Melanie_Martinez_-_Play_Date___Lyrics(48k).mp3",
  },
  {
   songName:"Night_Changes_-_One_Direction.mp3",
   audio:"Night_Changes_-_One_Direction___Slowed_Reverb___English_Love_Song___YourVibe(48k).mp3",
  },
  {
   songName:"ON_AND_ON_-_Ft._DANIEL_LEVI_.mp3",
   audio:"ON_AND_ON_-_Ft._DANIEL_LEVI___JUSTIN_BIEBER___BEST_SONGS_2018___Must_Watch_Songs___CANDYMATE(48k).mp3",
  },
  {
   songName:"PERFECT-_ED_SHEERAN_LYRICS(256k).mp3",
   audio:"PERFECT-_ED_SHEERAN_LYRICS(256k).mp3",
  },
  {
   songName:"Rosa_Linn_-_SNAP(256k).mp3",
   audio:"Rosa_Linn_-_SNAP_(Lyrics)(256k).mp3",
  },
  {
   songName:"Samarpan_chha_yo_Sabin_Rai.mp3",
   audio:"Samarpan_chha_yo_-_Sabin_Rai_(lyrics)(48k).mp3",
  },
  {
   songName:"The_Kid_LAROI J_B.mp3",
   audio:"The_Kid_LAROI,_Justin_Bieber_-_STAY_(Official_Video)(48k).mp3",
  },
  ]
let audioIndex = 0;
let index = 0;
let playBtn = (box) => {
 index += 1;
console.log(index)
if(index == 1){
 box.src = "8374917.png";
h4.innerHTML = `${musicbox[audioIndex].songName}`
audio.play()
}
if(index == 2){
  box.src = "10860787.png"
  index = 0;
  audio.pause()
}
}
let nextBtn = (box) =>{
  audioIndex = (audioIndex + 1) % musicbox.length;
  h4.innerHTML = `${musicbox[audioIndex].songName}`
  audio.src = `${musicbox[audioIndex].audio}`
  audio.play()
}
let prevBtn = (box) => {
  audioIndex = (audioIndex -1 + musicbox.length) % musicbox.length;
 h4.innerHTML = `${musicbox[audioIndex].songName}`
  audio.src = `${musicbox[audioIndex].audio}`
  audio.play();
}
audio.addEventListener("timeupdate", (event) => {
  let {currentTime,duration} = event.srcElement;
  let progresswidth =currentTime / duration * 100;
 durationT.style.width = `${progresswidth}%`;
 let durationTime = currentTime / duration * 100;
 progress.style.width = `${durationTime}%`;
 let currenttimedis = Math.floor(currentTime);
 if(duration){
 let durationTimdis = duration / 60;
 let sectim = duration % 60;
 if(sectim < 9){
   durationTim.innerHTML =` ${Math.floor(durationTimdis)}:0${Math.floor(sectim)}`
 }
 else{
 durationTim.innerHTML =` ${Math.floor(durationTimdis)}:${Math.floor(sectim)} `
 }
 }
 currentTim.innerHTML = `0:0${currenttimedis}`
 if(currenttimedis > 9){
   currentTim.innerHTML = `0:${currenttimedis}`
 }
 if(currenttimedis > 60){
   currentTim.innerHTML = `1:0${currenttimedis % 60}`
   if(currenttimedis >=70){
     currentTim.innerHTML = `1:${currenttimedis % 60}`
   }
 }
 if(currenttimedis > 120){
   currentTim.innerHTML = `2:0${currenttimedis % 60}`
   if(currenttimedis >=130){
     currentTim.innerHTML = `2:${currenttimedis % 60}`
   }
 }
 if(currenttimedis > 180){
   currentTim.innerHTML = `3:0${currenttimedis % 60}`
      if(currenttimedis >=190){
     currentTim.innerHTML = `3:${currenttimedis % 60}`
   }
 }
 if(currenttimedis > 240){
   currentTim.innerHTML = `4:0${currenttimedis % 60}`
      if(currenttimedis >=250){
     currentTim.innerHTML = `4:${currenttimedis % 60}`
   }
 }
 if(currenttimedis > 300){
   currentTim.innerHTML = `5:0${currenttimedis % 60}`
      if(currenttimedis >=310){
     currentTim.innerHTML = `5:${currenttimedis % 60}`
   }
 }
 
})
box44.addEventListener("click", (event) => {
console.log(event)
let {duration} = audio;
let musicval = event.offsetX / event.srcElement.clientWidth * duration;
audio.currentTime = musicval;
})

let closeBtn = () => {
  alert("back")
}
let menuBtn = () => {
  alert("menu")
}
