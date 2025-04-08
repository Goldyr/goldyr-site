let user = "goldyr_";
//Dont
let ak = "78b43112ccd42eaa6ac072bfed4a92ed";
let baseURL = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${user}&api_key=${ak}&format=json&limit=1`;

const retrieveLFMData = async () => {
  try {
    const response = await fetch(baseURL);
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
retrieveLFMData()
  .then((data) => {
    let track = data.recenttracks.track[0];
    html_song.innerHTML = `${track.name}`;
    html_artist.innerHTML = `by ${track.artist[`#text`]}`;
    html_img.setAttribute("src", track.image[2][`#text`]);
    html_album.innerHTML = `${track.album[`#text`]}`;
  })
  .catch((error) => console.error(error.message));
