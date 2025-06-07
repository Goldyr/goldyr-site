const fetchTitles = async (url) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.log(error.message);
  }
};


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
    const fetch_response_json = await fetchTitles("../blogs/html_data.json");

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

      //NOTE: This is a link on blog_selection.html in ./ to ./blogs/html
      a.href = `${"./blogs/"}${blog.title}.html`;
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
