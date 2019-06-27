function fetchImg(){
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then((resp) => resp.json())
    .then((data) => renderImg(data.message))
    .catch((err) => console.log(err));
}

function fetchBreed(){
    fetch('https://dog.ceo/api/breeds/list/all')
    .then((resp) => resp.json())
    .then((data) => renderBreed(data.message))
    .catch((err) => console.log(err));
}

function renderBreed(breeds){
    const ul = document.querySelector("#dog-breeds")
    const breedsArray = Object.keys(breeds)
    breedsArray.forEach( breed => {
        const appendBreed = buildBreedEl(breed);
        ul.append(appendBreed);
    })
    const breedObject = filterBreed(breedsArray)
    const breedFilterSelector = document.querySelector("#breed-dropdown")
    breedFilterSelector.addEventListener("change", (e) => {const filteredBreed = breedObject[breedFilterSelector.value];
        ul.innerHTML = '';
        filteredBreed.forEach( breed => {
            const appendFilteredBreed = buildBreedEl(breed); 
            ul.append(appendFilteredBreed);})
        })

        
   //set the breed filter variable
   //rebuild the list again with the breed filter
}

function renderImg(images){

    const div = document.querySelector('#dog-image-container')
    //iterate over img 
    images.forEach( image => { 
        const appendImg = buildImgEl(image)
        div.append(appendImg)
    });

}

function buildBreedEl(breed){
    const li = document.createElement('li');
    li.innerHTML = breed;
    return li
}

function buildImgEl(image){
    const img = document.createElement('IMG');
    img.src = image
    img.style = "position: relative; width:250px; height:250px; background-position:50% 50%;background-repeat:no-repeat; background-size:cover; margin: 10px"
    return img
}

function main(){
    fetchImg();
    fetchBreed();
    
}

main();

function filterBreed(breedsArray){
    //iterate through the entire array to create a hash of breeds so for example {a: affenpinsher, african}
    breedObj = {}
    breedsArray.forEach(breed => {
        if (!(breed[0] in breedObj)){
            breedObj[breed[0]] = [breed]
        }    
        else{
            breedObj[breed[0]].push(breed)
        }
    })
    return breedObj
}
const breedUnorderedList = document.querySelector('#dog-breeds')
breedUnorderedList.addEventListener("click", (e) => {
    if (e.target.tagName == 'LI'){
        e.target.style = "color:blue"
    }
} )




