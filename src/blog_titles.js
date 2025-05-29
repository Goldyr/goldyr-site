const fetchTitles = async (url) => {
  // return [];
  // return [
  //   {
  //     "title": "bass_boost_settings_texto_gigante_blabla_asdasdasd",
  //     "description": "Settings for enhancing bass response on my speakers aosdjiasdjisadjsaoidojisajiosadjioasdjoiasdoijasdhadioasjdoihujasdjioadsjio",
  //     "topic": "music",
  //     "tags": ["bass", "equalizer", "audio"],
  //     "date": "03.07.2023"
  //   },
  //   {
  //     "title": "ambient_playlist_favorites",
  //     "description": "My favorite ambient tracks for focus and relaxation",
  //     "topic": "music",
  //     "tags": ["ambient", "playlist", "favorites"],
  //     "date": "12.08.2023"
  //   },
  //   {
  //     "title": "vinyl_cleaning_guide",
  //     "description": "Steps and materials for cleaning vinyl records",
  //     "topic": "music",
  //     "tags": ["vinyl", "maintenance", "guide"],
  //     "date": "20.09.2023"
  //   },
  //   {
  //     "title": "daily_practice_routine",
  //     "description": "Guitar practice schedule and exercises",
  //     "topic": "music",
  //     "tags": ["practice", "guitar", "routine"],
  //     "date": "05.10.2023"
  //   },
  //   {
  //     "title": "concerts_to_attend_2024",
  //     "description": "List of concerts I want to attend this year",
  //     "topic": "music",
  //     "tags": ["concerts", "events", "2024"],
  //     "date": "01.01.2024"
  //   },
  //   {
  //     "title": "lofi_production_tips",
  //     "description": "Tips for creating lo-fi beats and mixes",
  //     "topic": "music",
  //     "tags": ["lofi", "production", "tips"],
  //     "date": "15.02.2024"
  //   },
  //   {
  //     "title": "dj_setlist_ideas",
  //     "description": "Potential tracks and transitions for my next DJ set",
  //     "topic": "music",
  //     "tags": ["dj", "setlist", "mixing"],
  //     "date": "28.02.2024"
  //   },
  //   {
  //     "title": "album_reviews_q1_2024",
  //     "description": "Short reviews of albums released in the first quarter of 2024",
  //     "topic": "music",
  //     "tags": ["albums", "reviews", "2024"],
  //     "date": "31.03.2024"
  //   },
  //   {
  //     "title": "studio_monitor_comparison",
  //     "description": "Comparing features and sound of different studio monitors",
  //     "topic": "music",
  //     "tags": ["gear", "monitors", "comparison"],
  //     "date": "10.04.2024"
  //   },
  //   {
  //     "title": "synth_presets_to_try",
  //     "description": "List of synth presets to experiment with in my DAW",
  //     "topic": "music",
  //     "tags": ["synth", "presets", "sound design"],
  //     "date": "22.05.2024"
  //   }
  // ]

  try {
    const response = await fetch(url);
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.log(error.message);
  }
};

//WARNING: depending where you host this this might need a small change
const base_URL = "../public/";

const getTitles = async () => {
  let title = document.createElement("h2");
  title.classList.add("border");

  const tbody = document.getElementsByClassName("table_center")[0];
  let tr = document.createElement("tr");
  let td = document.createElement("td");
  td.appendChild(title);
  tr.appendChild(td);
  tbody.appendChild(tr);

  try {
    const fetch_response_json = await fetchTitles("public/html_data.json");

    if (fetch_response_json.length === 0) throw Error("No blogs");
    else fetch_response_json.reverse()

    fetch_response_json.forEach((blog) => {
      let div = document.createElement("div");
      let p = document.createElement("p");
      let p2 = document.createElement("p");
      p2.classList.add("sm_rectangle");
      let h2 = document.createElement("h2");
      let a = document.createElement("a");

      div.classList.add("rectangle", "border", "wide");

      h2.innerText = blog.title;
      p.innerText = blog.description;
      p2.innerText = blog.date;
      // div.addEventListener('', () => window.location.assign(`${"public/"}${blog.title}.html`));

      a.href = `${"public/"}${blog.title}.html`;
      a.style = "text-decoration: none; color: #FAFAFA"
      a.appendChild(div);
      div.appendChild(h2);
      div.appendChild(p2);
      div.appendChild(p);
      td.appendChild(a);
    });
    title.innerHTML = "Blogs";
  } catch (err) {
    title.innerHTML = "No blogs ¯\_(ツ)_/¯";
    console.error(err);
  }
};

getTitles()
