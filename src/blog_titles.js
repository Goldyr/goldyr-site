const github_repo_URL = "https://api.github.com/repos/Goldyr/public-notes/contents";
//WARNING: depending where you host this this might need a small change
const base_URL = "../public/";


const getTitles = async () => {
  console.log("getTitles");
  try {
    const github_response = await fetch(github_repo_URL);
    const github_response_json = await github_response.json();

    const tbody = document.getElementById("blogs_titles");

    github_response_json.forEach((title) => {
      let tr = document.createElement("tr");
      let td = document.createElement("td");
      let div = document.createElement("div");
      //let p = document.createElement("p");
      let a = document.createElement("a");

      //div.classList.add("rectangle");

      const name = title.name.split(".md")[0]
      //p.innerText = name;
      //a.innerText = title.download_url;
      a.innerText = name;
      //a.href = title.download_url;
      a.href = `${base_URL}${name}.html`;
      //div.addEventListener('click', () => window.location.replace(`${base_URL}${name}.html`))

      //div.appendChild(p);
      div.appendChild(a);
      td.appendChild(div);
      tr.appendChild(td);

      tbody.classList.add("table_center")
      tbody.appendChild(tr);
    });
  } catch (err) {
    console.error(err);
  }
  return;
};

getTitles()
