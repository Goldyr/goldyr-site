const baseURL = "https://blogs-backend-eta.vercel.app/api";

const getTitles = async () => {
  console.log("getTitles");
  try {
    const response = await fetch(`${baseURL}/titles`, {});
    const titles = await response.json();
    /* const body = document.getElementById("body"); */
    /* const div = document.getElementById("placerholder1"); */

    const ul = document.createElement("ul");

    titles.forEach((title) => {
      let li = document.createElement("li");
      li.innerText = `title: ${title.title} topic: ${title.topic} date: ${title.date}`;

      ul.appendChild(li);
    });

    console.log(titles);
    /*  div.appendChild(ul); */
    document.getElementById("placeholder1").appendChild(ul);
  } catch (err) {
    console.error(err);
  }

  return;
};

getTitles();
