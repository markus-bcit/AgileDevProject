const url =
  "/api/products";
const section = document.querySelector("#display-block");
const searchContainer = document.querySelector("#searchContainer");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((species) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      const img = document.createElement("img");
      const h1 = document.createElement("h1");
      const h2 = document.createElement("h2");
      const h3 = document.createElement("h3");

      li.setAttribute("class", "species");

      a.href = `/store/${species.id}`;
      img.src = species.img;
      h1.textContent = species.name;
      h2.textContent = species.sname;
      h3.textContent = '$' + species.price;

      a.appendChild(img);
      a.appendChild(h1);
      a.appendChild(h2);
      a.appendChild(h3);
      li.appendChild(a);
      section.appendChild(li);
    });
  })
  .catch((error) => console.error(error));

const plantList = document.querySelector('#display-block')
const plantSearch = document.getElementById("searchBox")
function searchItems() {
  for (item of plantList.getElementsByTagName('li')) {
    if (item.innerHTML.includes(plantSearch.value) || item.innerHTML.toUpperCase().includes(plantSearch.value.toUpperCase())) {
      item.removeAttribute('class', 'hidden')
    }
    else {
      item.setAttribute('class', 'hidden')
    }
  }
}
plantSearch.addEventListener('input', searchItems);