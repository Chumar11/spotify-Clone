let right1 = document.getElementById("ri1");
let right2 = document.getElementById("ri2");
const music = document.querySelector("audio");
const play = document.getElementById("play");
const img = document.getElementById("img");
const pre = document.getElementById("pre");
const next = document.getElementById("next");
const hh = document.getElementById("hh");
const pp = document.getElementById("pp");
let progress = document.getElementById("proo1");
let time = document.getElementById("currenttime");
let due = document.getElementById("due");
let pr = document.getElementById("progress-div");


// const url = "https://itunes.apple.com/search?term=queen";
// fetch(url)
// .then((res)=>res.json())
// .then((data)=>{
//   console.log(data);
// const artist = data.results;
// console.log(artist);
//   const data1 =artist[2].
//   previewUrl ;
//   console.log(data1);
// }).catch((error)=>{
//   alert("Oops Problem",error);
// })

let array1 = [];
let add = (event) => {
 
  

  const index12 = Array.from(document.querySelectorAll('.e22')).indexOf(event.currentTarget);
  hh.textContent = array1[index12].tittle;
  pp.textContent = array1[index12].artist;
  img.src = array1[index12].pic;
  music.src = array1[index12].name;
  palymusic();
};



const showdiv = (event) => {
  let array = [
    {
      pic: "https://i.scdn.co/image/ab67616100005174cb6926f44f620555ba444fca",
      name: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/1a/eb/61/1aeb61fe-3d68-35f2-7067-e2634628d41d/mzaf_8211969056038230896.plus.aac.p.m4a",
      tittle: "Pritarm",
      artist: " Artitst",
    },
    {
      pic: "	https://i.scdn.co/image/ab67616100005174c40600e02356cc86f0debe84",
      name: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/62/48/9c/62489cd6-5240-0533-c211-4f90e7a8758a/mzaf_13272367863960324967.plus.aac.p.m4a",
      tittle: "Atif Alsam",
      artist: " Artitst",
    },
    {
      pic: "	https://i.scdn.co/image/ab676161000051748f553f96d564d1005a92d131",
      name: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/7a/8d/06/7a8d0635-04fd-ec5b-b83d-49b0af5afe9d/mzaf_190343924058337193.plus.aac.p.m4a",
      tittle: "Shubh",
      artist: " Artitst",
    },
    {
      pic: "	https://i.scdn.co/image/ab676161000051740261696c5df3be99da6ed3f3",
      name: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/13/37/3c/13373c25-0048-d897-4ea7-a790cf4dddb1/mzaf_17725938727166996354.plus.aac.p.m4a",
      tittle: "Arijit Singh",
      artist: " Artitst",
    },
    {
      pic: "	https://i.scdn.co/image/ab67616100005174c81f480a6da366f051cf74cc",
      name: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/00/8c/ea/008ceab0-0680-fbc7-0b36-c98d6cfd8649/mzaf_4377362745401195271.plus.aac.p.m4a",
      tittle: "AP Dhillo",
      artist: " Artitst",
    },
    {
      pic: "	https://i.scdn.co/image/ab676161000051746220fc5e958ab498b96f5835",
      name: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/5b/92/21/5b922108-8aba-bfd2-9848-70720c55630f/mzaf_15928866161795836146.plus.aac.p.m4a",
      tittle: "Vishal Mishra",
      artist: " Artitst",
    },
    {
      pic: "	https://i.scdn.co/image/ab67616100005174fc043bea91ac91c222d235c9",
      name: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/a4/5c/7c/a45c7cc2-1b58-1363-909f-3b0e8bbac7bd/mzaf_11454262620100814742.plus.aac.p.m4a",
      tittle: "Diljit Dosanjh",
      artist: " Artitst",
    },
    {
      pic: "	https://i.scdn.co/image/ab67616100005174af94287a28816f8bfb8776e1",
      name: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/e5/2d/d1/e52dd1d6-d483-d066-c998-3efe65bb8369/mzaf_14726231822630056578.plus.aac.p.m4a",
      tittle: "Karan Aujla",
      artist: " Artitst",
    },
    {
      pic: "	https://i.scdn.co/image/ab67616100005174458081a2d7e4522d05ce48de",
      name: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview123/v4/f1/f1/23/f1f12342-cd21-65a2-d69e-b5e6690c85dc/mzaf_5543233861110946943.std.aac.p.m4a",
      tittle: "Nusrat Fathe..",
      artist: " Artitst",
    },
    {
      pic: "	https://i.scdn.co/image/ab676161000051749973157bdaedef3f77ef8e13",
      name: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/d3/32/a8/d332a8c7-6173-8a15-7925-db3c9c4c503c/mzaf_14088381367531936627.plus.aac.p.m4a",
      tittle: "Sidhu Mossy..",
      artist: " Artitst",
    },
  ];

  let index;
  right1.style.display = "block";
  right2.style.display = "none";
  const artistItems = document.querySelectorAll('.artist-items');
  
  const artistItemsArray = Array.from(artistItems);
  index = artistItemsArray.indexOf(event.currentTarget);
  
  hh.textContent = array[index].tittle;
  pp.textContent = array[index].artist;
  img.src = array[index].pic;
  music.src = array[index].name;


  const url = "https://itunes.apple.com/search?term=queen";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const artist = data.results;
      console.log(artist);
      for (let i = 39; i < 47; i++) {
        array1.push({
          pic: artist[i].artworkUrl100,
          name: artist[i].previewUrl,
          tittle: artist[i].artistName.slice(0,10),
          artist: "Artist",
        });
      }
     
    
  
      let f = 7;
     
      for (let i = 0,  index1 = 0; i <= Math.floor(Math.random() * f), index1 <= Math.floor(Math.random() * f); i++, index1++) {
        let playlist = document.getElementById('mylist');
        var newItem = document.createElement("li");
        newItem.innerHTML = `
          <div class="e22" onclick="add(event)">
              <img class="e23" src="${array1[index1].pic}" alt="">
              <div class="name"><h1>${array1[index1].tittle}</h1><p>Artist</p></div>
              <img class="invert" src="playlist.svg" alt="">
          </div>
        `;
        playlist.appendChild(newItem);
      }
    })
    .catch((error) => {
      alert("Oops Problem");
    });

   palymusic();

};


const hidediv = () => {
  right2.style.display = "block";
  right1.style.display = "none";
  let playlist =document.getElementById('mylist');
 playlist.innerHTML="";
 playPause();
};






let isPlaying = false;

const palymusic = () => {
  isPlaying = true;
  music.play();
  play.classList.replace("fa-play", "fa-pause");
  play.style.padding = "15px";
  play.style.height = "50px";
  img.classList.add("anime");
};

const playPause = () => {
  isPlaying = false;
  music.pause();
  play.classList.replace("fa-pause", "fa-play");
  // play.style.padding = "15px";
  // play.style.height = "50px";
  img.classList.remove("anime");
};
const songs = [
  {
    pic: "https://i.scdn.co/image/ab67616100005174cb6926f44f620555ba444fca",
    name: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/1a/eb/61/1aeb61fe-3d68-35f2-7067-e2634628d41d/mzaf_8211969056038230896.plus.aac.p.m4a",
    tittle: "Pritarm",
    artist: " Artitst",
  },
  {
    pic: "	https://i.scdn.co/image/ab67616100005174c40600e02356cc86f0debe84",
    name: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/62/48/9c/62489cd6-5240-0533-c211-4f90e7a8758a/mzaf_13272367863960324967.plus.aac.p.m4a",
    tittle: "Atif Alsam",
    artist: " Artitst",
  },
  {
    pic: "	https://i.scdn.co/image/ab676161000051748f553f96d564d1005a92d131",
    name: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/7a/8d/06/7a8d0635-04fd-ec5b-b83d-49b0af5afe9d/mzaf_190343924058337193.plus.aac.p.m4a",
    tittle: "Shubh",
    artist: " Artitst",
  },
  {
    pic: "	https://i.scdn.co/image/ab676161000051740261696c5df3be99da6ed3f3",
    name: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/13/37/3c/13373c25-0048-d897-4ea7-a790cf4dddb1/mzaf_17725938727166996354.plus.aac.p.m4a",
    tittle: "Arijit Singh",
    artist: " Artitst",
  },
  {
    pic: "	https://i.scdn.co/image/ab67616100005174c81f480a6da366f051cf74cc",
    name: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/00/8c/ea/008ceab0-0680-fbc7-0b36-c98d6cfd8649/mzaf_4377362745401195271.plus.aac.p.m4a",
    tittle: "AP Dhillo",
    artist: " Artitst",
  },
  {
    pic: "	https://i.scdn.co/image/ab676161000051746220fc5e958ab498b96f5835",
    name: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/5b/92/21/5b922108-8aba-bfd2-9848-70720c55630f/mzaf_15928866161795836146.plus.aac.p.m4a",
    tittle: "Vishal Mishra",
    artist: " Artitst",
  },
  {
    pic: "	https://i.scdn.co/image/ab67616100005174fc043bea91ac91c222d235c9",
    name: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/a4/5c/7c/a45c7cc2-1b58-1363-909f-3b0e8bbac7bd/mzaf_11454262620100814742.plus.aac.p.m4a",
    tittle: "Diljit Dosanjh",
    artist: " Artitst",
  },
  {
    pic: "	https://i.scdn.co/image/ab67616100005174af94287a28816f8bfb8776e1",
    name: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/e5/2d/d1/e52dd1d6-d483-d066-c998-3efe65bb8369/mzaf_14726231822630056578.plus.aac.p.m4a",
    tittle: "Karan Aujla",
    artist: " Artitst",
  },
  {
    pic: "	https://i.scdn.co/image/ab67616100005174458081a2d7e4522d05ce48de",
    name: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview123/v4/f1/f1/23/f1f12342-cd21-65a2-d69e-b5e6690c85dc/mzaf_5543233861110946943.std.aac.p.m4a",
    tittle: "Nusrat Fathe..",
    artist: " Artitst",
  },
  {
    pic: "	https://i.scdn.co/image/ab676161000051749973157bdaedef3f77ef8e13",
    name: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/d3/32/a8/d332a8c7-6173-8a15-7925-db3c9c4c503c/mzaf_14088381367531936627.plus.aac.p.m4a",
    tittle: "Sidhu Mossy..",
    artist: " Artitst",
  },
];
play.addEventListener("click", () => {
  if (isPlaying === false) {
    palymusic();
  } else {
    playPause();
  }
});
const loadSong = () => {
  hh.textContent = songs[songindex].tittle;
  pp.textContent = songs[songindex].artist;
  music.src =  songs[songindex].name ;
  img.src = songs[songindex].pic ;
};
songindex = 0;

const nextsong = () => {
  songindex = (songindex + 1) % songs.length;
  loadSong(songs[songindex]);
  palymusic();
};
const presong = () => {
  songindex = (songindex - 1 + songs.length) % songs.length;
  loadSong(songs[songindex]);
  palymusic();
};
// progress js
music.addEventListener("timeupdate", (event) => {
  const { currentTime, duration } = event.srcElement;
  let progress_time = (currentTime / duration) * 100;
  progress.style.width = `${progress_time}%`;

  let mint = Math.floor(duration / 60);
  let sec = Math.floor(duration % 60);
  let total = `${mint}:${sec}`;
  if (duration) {
    due.textContent = `${total}`;
  }

  let mint1 = Math.floor(currentTime / 60);
  let sec2 = Math.floor(currentTime % 60);
  if (sec2 < 10) {
    sec2 = `0${sec2}`;
  }
  let total2 = `${mint1}:${sec2}`;
  time.textContent = `${total2}`;
});
pr.addEventListener("click", (event) => {
  const duration = music;
  let mov = (event.offsetX / event.srcElement.clientWidth) * duration;
  music.currentTime = mov;
});

music.addEventListener("ended", nextsong);
next.addEventListener("click", nextsong);
pre.addEventListener("click", presong);




