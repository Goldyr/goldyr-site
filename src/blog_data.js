let topic = document.querySelector(`meta[name="topic"]`);
let description = document.querySelector(`meta[name="description"]`);
let tags = document.querySelectorAll(`meta[name="tags"]`);
let date = document.querySelector(`meta[name="date"]`);

let body = document.querySelector("body");
body.className = "main"

let div = document.createElement("div");
div.className = "rectangle";
div.style = `
display:flex;
flex-direction: row;
`

const nav = `
<table class="table">
        <tbody class="table_nav">
          <tr>
            <td><a href="../index.html">home</a></td>
            <td><a id="blogs" href="../blogs.html">blogs</a></td>
            <td>
              <a href="../sources.html">sources</a>
            </td>
          </tr>
        </tbody>
</table>
`
//https://stackoverflow.com/a/3104237
var doc = new DOMParser().parseFromString(nav, "text/html");
body.prepend(doc.body.firstElementChild);


if (topic !== null) {
  topic = topic.getAttribute("content");
  let temp_div = document.createElement("div");
  temp_div.className = "font tag";
  temp_div.innerHTML = topic;
  //div.appendChild(temp_div);
  console.log(topic);
}
if (description !== null) {
  description = description.getAttribute("content");
  let temp_div = document.createElement("div");
  temp_div.className = "font";
  temp_div.innerHTML = description;
  //div.appendChild(temp_div);
  console.log(description);
}
if (tags !== null) {
  tags.forEach(tag => {
    let temp_div = document.createElement("div");
    temp_div.className = "font tag";
    temp_div.innerHTML = tag.getAttribute("content");
    div.appendChild(temp_div);
    console.log("tag:", tag.getAttribute("content"));
  })
}
if (date !== null) {
  date = date.getAttribute("content");
  let temp_div = document.createElement("div");
  temp_div.className = "font tag";
  temp_div.innerHTML = date;
  div.appendChild(temp_div);
  console.log(date);
}

//div.className = "sm_rectangle border font"
//div.innerHTML = "sm_rectangle"
body.firstElementChild.after(div);
console.log(div)
