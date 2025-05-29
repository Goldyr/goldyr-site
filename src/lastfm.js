let user = "goldyr_";
//Dont
let ak = "78b43112ccd42eaa6ac072bfed4a92ed";
let current_listening = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${user}&api_key=${ak}&format=json&limit=1`;
let recent_favorite = `https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${user}&api_key=${ak}&format=json&limit=1`;

const retrieveLFMData = async (url) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.log(error.message);
  }
};

let html_img = document.getElementById("lfm_album_img");
let html_artist = document.getElementById("lfm_artist_name");
let html_song = document.getElementById("lfm_song_name");
let html_album = document.getElementById("lfm_album_name");
retrieveLFMData(current_listening)
  .then((data) => {
    let track = data.recenttracks.track[0];
    html_song.innerHTML = `${track.name}`;
    html_artist.innerHTML = `by ${track.artist[`#text`]}`;
    html_img.setAttribute("src", track.image[2][`#text`]);
    html_album.innerHTML = `${track.album[`#text`]}`;
  })
  .catch((error) => console.error(error.message));

//TODO: List top listened songs
// let fav_html_img = document.getElementById("lfm_fav_album_img");
// let fav_html_artist = document.getElementById("lfm_fav_artist_name");
// let fav_html_song = document.getElementById("lfm_fav_song_name");
// let fav_html_play_count = document.getElementById("lfm_fav_play_count");
// retrieveLFMData(recent_favorite)
//   .then((data) => {
//     console.log(data)
//     let track = data.toptracks.track[0];
//     fav_html_song.innerHTML = `${track.name}`;
//     fav_html_artist.innerHTML = `by ${track.artist.name}`;
//     fav_html_img.setAttribute("src", track.image[2][`#text`]);
//     fav_html_play_count.innerHTML = `played a total of ${track.playcount} times`;
//   })
//   .catch((error) => console.error(error.message));
