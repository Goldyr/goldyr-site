// const fetchTitles = async (url) => {
//   try {
//     const response = await fetch(url);
//     if (response.ok) {
//       return await response.json();
//     }
//   } catch (error) {
//     console.log(error.message);
//   }
// };
//
// let topic = document.querySelector(`meta[name="topic"]`);
// let description = document.querySelector(`meta[name="description"]`);
// let tags = document.querySelectorAll(`meta[name="tags"]`);
// let date = document.querySelector(`meta[name="date"]`);
//
// let body = document.querySelector("body");
// let main_div = document.querySelector("div");
//
// let div = document.createElement("div");
// div.className = "rectangle";
// div.style = `
// display:flex;
// flex-direction: row;
// `
// //https://stackoverflow.com/a/3104237
// //var doc = new DOMParser().parseFromString(nav, "text/html");
// //body.prepend(doc.body.firstElementChild);
//
//
// if (topic !== null) {
//   topic = topic.getAttribute("content");
//   let temp_div = document.createElement("div");
//   temp_div.className = "font tag";
//   temp_div.innerHTML = topic;
//   //div.appendChild(temp_div);
// }
// if (description !== null) {
//   description = description.getAttribute("content");
//   let temp_div = document.createElement("div");
//   temp_div.className = "font";
//   temp_div.innerHTML = description;
//   //div.appendChild(temp_div);
//   console.log(description);
// }
// if (tags !== null) {
//   tags.forEach(tag => {
//     let temp_div = document.createElement("div");
//     temp_div.className = "font tag";
//     temp_div.innerHTML = tag.getAttribute("content");
//     div.appendChild(temp_div);
//     console.log("tag:", tag.getAttribute("content"));
//   })
// }
// if (date !== null) {
//   date = date.getAttribute("content");
//   let temp_div = document.createElement("div");
//   temp_div.className = "font tag";
//   temp_div.innerHTML = date;
//   div.appendChild(temp_div);
//   console.log(date);
// }


// fetchTitles("../public/html_data.json")
//   .then(res => console.log(res))
//   .catch((error) => console.error(error.message));
