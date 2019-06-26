console.log('%c HI', 'color: firebrick');
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
const imageDiv = document.getElementById("dog-image-container");
const breedList = document.getElementById("dog-breeds");
const breedDrop = document.getElementById("breed-dropdown");

fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => {
    // console.log(json.message);
    for (const url of json.message) {
      const image = document.createElement("img");
      image.src = url;
      imageDiv.appendChild(image);
    };

  });

  fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => {
      const allDogBreeds = json.message
      for (const breed in allDogBreeds) {
        const listItem = document.createElement("li");
        listItem.textContent = breed;
        breedList.appendChild(listItem);
      }
      breedList.addEventListener("click", (e) => {
        const breedItem = e.target;
        breedItem.style.color = "green";
      });

      breedDrop.addEventListener("change", (e) => {
        let filter = e.target.value
        allListItems = breedList.querySelectorAll("li")
        for (const listItem of allListItems) {
          if (listItem.textContent[0] === filter ) {
            listItem.style.display = "list-item";
            // listItem.style.visibility = "initial";
          }else {
            listItem.style.display = "none";
            // listItem.style.visibility = "hidden";
          }
        }

      });
    });
