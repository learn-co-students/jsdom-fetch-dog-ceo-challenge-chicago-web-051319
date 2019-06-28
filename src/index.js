console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function fetchPhotos(){
    return fetch(imgUrl).then(function(response){return response.json()}).then(function(json){addPhotos(json.message)});
};

function addPhotos(json){
    const dogPhotoDiv = document.querySelector('#dog-image-container');
    json.forEach(photo => {
        const p = document.createElement('p')
        const dogPhoto = document.createElement('img');
        dogPhoto.src = photo;
        p.appendChild(dogPhoto);
        dogPhotoDiv.appendChild(p);
    })
};

const breedURL = 'https://dog.ceo/api/breeds/list/all';

function fetchBreeds(){
    return fetch(breedURL).then(response=>response.json()).then(json => addBreeds(json.message));
};

function addBreeds(json){
    const breedsUl = document.querySelector('#dog-breeds');
    for (const breed in json) {
        if (json[breed].length == 0){
            const newLi = document.createElement('li');
            newLi.innerText = breed;
            newLi.className = "dog";
            breedsUl.appendChild(newLi);
        }
        else {
            json[breed].forEach(type=> {
                const li = document.createElement('li');
                li.innerText = `${type} ${breed}`;
                li.className = "dog";
                breedsUl.appendChild(li);  
            })
        }
    }
}

function filterBreeds(filteredArray){
    filteredArray.forEach(dog => {
        console.log(dog)
        const filteredLi = document.createElement('li');
        filteredLi.innerText = dog;
        filteredLi.className = "dog";
        document.getElementById('dog-breeds').appendChild(filteredLi);
        const hr = document.createElement('hr');
        document.getElementById('dog-breeds').appendChild(hr);
    })
}
function clearList(){
    const dogBreedList = document.querySelector('#dog-breeds')
    if (dogBreedList.hasChildNodes()){
        dogBreedList.innerHTML = '';
    }
}
document.addEventListener("DOMContentLoaded",function(){
    fetchPhotos();
    fetchBreeds();
    
    const list = document.getElementsByClassName('dog');
    
    document.getElementById('dog-breeds').addEventListener('click', function(){
        const max = list.length;
        let index = Math.floor(Math.random() * Math.floor(max));
        list[index].style.color= "blue";
    });

    const unFilteredDogs = list;
    document.getElementById('breed-dropdown').addEventListener('change', function(event){
        const filteredDogs = [];
        for(const index of unFilteredDogs){
            // debugger;
            if(index.innerText != undefined){
                if (index.innerText.charAt(0) == event.target.value){
                    filteredDogs.push(index.textContent);
                }
            }
        }
            clearList();
            filterBreeds(filteredDogs);
            unFilteredDogs = fetchBreeds();
    });
});