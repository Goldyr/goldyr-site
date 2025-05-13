const github_repo_URL = "https://api.github.com/repos/Goldyr/public-notes/contents";
//WARNING: depending where you host this this might need a small change
const base_URL = "../blogs/";


const getTitles = async () => {
  console.log("getTitles");
  try {
    //const github_response = await fetch(github_repo_URL);
    //const github_response_json = await github_response.json();
    //console.log(github_response_json)
    const github_response_json = [{ name: "name_test_large_extra_extra" }, { name: "asfsaogfsahgoianame_test_1" }, { name: "name_test_1" }, { name: "ohrnhognw" }, { name: "giheheo" }, { name: "m1-gm1301-03" }, { name: "name_test_1" }, { name: "name_test_1" }, { name: "aa" }, { name: "bNBBOSJBOIDJ" }, { name: "name_test_1" }, { name: "georihnwio" }, { name: "name_test_1" }, { name: "name_test_1" }, { name: "name_test_1" }, { name: "name_test_1" }, { name: "name_test_1" }, { name: "name_test_1" }, { name: "name_test_1" },]

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
      a.href = `${base_URL}${name}.md`;
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
