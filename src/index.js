console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

//Challenge 1
function fetchImg() {
  return fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => renderImg(json.message));
}

function renderImg(json) {
  const con = document.querySelector('#dog-image-container')
  json.forEach(img => {
    const dog_img = document.createElement('img')
    dog_img.src  = img;
    con.appendChild(dog_img)
  })
}

//Challenge 2

function fetchBreed(){
  return fetch(breedUrl)
  .then(resp => resp.json())
  .then(json => renderBreed(json.message))
}

function renderBreed(json){
  const breeds = document.querySelector('#dog-breeds')
  Object.keys(json).forEach(breed => {
    const li = document.createElement('li');
    li.addEventListener('click', changeColor)
    li.innerHTML = `${breed}`

    document.getElementById('breed-dropdown').addEventListener('change', function(e){
           if (`${breed}`.charAt(0) == e.target.value){
             li.style.display = "block";
           }else li.style.display = "none";
       } )

    breeds.appendChild(li)
  })
}

//Challenge 3

function changeColor(){
  const li = document.querySelector('li');
  this.style.color = "white";
}

document.addEventListener('DOMContentLoaded', function() {
  fetchImg()
  fetchBreed()
});
