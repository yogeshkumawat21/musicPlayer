let heart = document.querySelectorAll(".heartlike");
let playbutton = document.querySelectorAll(".btnsongplay");
let nextSong= document.querySelector("#next-song");
let currentttime= document.querySelector("#current-time");
let previoussong= document.querySelector("#previous-song");
let songno=1;

for(let i = 0;i<heart.length;i++)
  {  liked=false;
    heart[i].addEventListener("click",function(e){
  if(liked==true)
    {
      heart[i].style.filter=(" invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg) brightness(94%) contrast(117%)");
       heart[i].style.transform=("scale(1.3)");
      liked=false;
    }
      else
        {
           heart[i].style.filter=("invert(.8)");
          liked=true;
           heart[i].style.transform=("scale(1)");
        
        }
});
  }
  

const audio = document.querySelectorAll(".audio");
const playPauseBtn = document.getElementById("pause-song");
const volumeSlider = document.getElementById("volume");
const progress = document.getElementById("progress");
var seekimageplaypasue=document.getElementById("seekimageplaypasue");

 pause=true;

playPauseBtn.addEventListener("click",function(){
     
     //alert("clicked");
    
  if(pause==true)
    { 
      audio[songno-1].play();
      pause=false;
      seekimageplaypasue.classList.add("imageplaypasue");
       
     }
else if(pause==false)
        {
          audio[songno-1].pause();
          pause=true;
     seekimageplaypasue.classList.remove("imageplaypasue");
        }
});
 
nextSong.addEventListener("click",function()
                         { 
   forwardsong();
  
})

function forwardsong()
{ 
     seekimageplaypasue.classList.remove("imageplaypasue");
    audio[songno-1].pause();
  console.log("Stopped song no "+(songno-1));
    setTimeout(function(){
       audio[songno].play();
seekimageplaypasue.classList.add("imageplaypasue");
       console.log("Playing song no "+(songno));
       songno++;
    },200)
    updateCurrentTime();
updateDuration();
  if(songno==audio.length)
    {
      songno = 0;
    }

}
function backsong()
{
  audio[songno-1].pause();
  console.log("Stopped song no "+(songno-1));
    setTimeout(function(){
       audio[songno].play();
       console.log("Playing song no "+(songno));
       songno++;
    },200)
    updateCurrentTime();
updateDuration();
  if(songno==audio.length)
    {
      songno = 0;
    }

}
previoussong.addEventListener("click",function(){
 backsong();
});




for(let i = 0;i<playbutton.length;i++)
  {
    playbutton[i].addEventListener("click",function(e){
      audio[songno-1].pause();
      audio[songno+1].pause();
      audio[songno].play();
      songno++;
      if(songno==4)
        {
          songno=0;
        }
      
      
});
  }


function updateCurrentTime() {
  const currentTime = audio[songno].currentTime;
  const minutes = Math.floor(currentTime / 60);
  const seconds = Math.floor(currentTime % 60).toString().padStart(2, '0');
  currentttime.textContent = `${minutes}:${seconds}`;
}

function updateDuration() {
  const duration = audio[songno].duration;
  const minutes = Math.floor(duration / 60);
  const seconds = Math.floor(duration % 60).toString().padStart(2, '0');
  currentttime.textContent = `${minutes}:${seconds}`;
}