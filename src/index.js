document.addEventListener('DOMContentLoaded', () => {

  const main = () => {
    fetchData();
    getBreeds();
  }

  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  const dogImages = document.getElementById('dog-image-container');

  const fetchData = () => {
    fetch(imgUrl).then(response => response.json()).then(results => {
      const images = results.message;
      images.forEach(link => {
        let imgElement = document.createElement("IMG");
        dogImages.class = 'dog-photo';
        imgElement.src = link;
        imgElement.style.maxWidth = "300px";
        imgElement.style.maxHeight = "300px";
        imgElement.style.padding = "20px";
        dogImages.appendChild(imgElement);
      });
    });
  };

  const breedUrl = 'https://dog.ceo/api/breeds/list/all';
  const dogBreeds = document.getElementById('dog-breeds');
  const changeColor = el => el.style.color = "green"
  const breedSelector = document.getElementById('breed-dropdown');
  const chosen = breedSelector.value;

  const getBreeds = () => {

    fetch(breedUrl).then(response => response.json()).then(results => {
      let breeds = Object.keys(results.message);
      const filterBreeds = () => {
        breeds = Object.keys(results.message).filter(b => b[0] == chosen);
        return breeds;
      }
      const appendBreeds = breeds => {
        breeds.forEach(breed => {
          let li = document.createElement("LI");
          li.innerText = breed;
          li.onclick = () => changeColor(li);
          dogBreeds.appendChild(li);
        });
      }
      appendBreeds(breeds);

      breedSelector.onchange = event => {
        event.preventDefault();
        let chosen = breedSelector.value;
        dogBreeds.innerHTML = '';
        newBreeds = breeds.filter(breed => breed.charAt(0) === event.target.value);
        appendBreeds(newBreeds);
      };
    });
  };
  main();
});
