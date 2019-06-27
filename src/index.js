

  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const breedUrl = 'https://dog.ceo/api/breeds/list/all';
    //


    const imgApi = fetch(imgUrl)
    .then( res => res.json() )
    .then( json => renderImages(json))
    .catch( err => console.log(err.message));


    function renderImages(json){
      json.message.forEach((img) => {
        const el = document.createElement('p');
        el.innerHTML = `<img src=${img}>`
        const container = document.getElementById("dog-image-container");
        container.append(el)
      });
    };


    const breedApi = fetch(breedUrl)
     .then( res => res.json() )
     .then( json => renderBreeds(json))


    function renderBreeds(json){
      const breeds = Object.keys(json.message)
      breeds.forEach((breed) => {
        const li = document.createElement("li");
        li.innerText = `${breed}`
        li.addEventListener('click', changeColor)
        const ul = document.getElementById("dog-breeds")
        ul.appendChild(li)

        // none block

      });
      dropdown()



    };


      function changeColor(){
        this.style.color="red"
      };

    function dropdown(){

      let li = document.querySelectorAll("li")
      console.log(li[0].innerText)
      const dropdown = document.getElementById("breed-dropdown")
      dropdown.addEventListener("change", function(e){
        let ul = document.getElementById("dog-breeds")
          if (dropdown.value == "a"){
          for (i=0; i<li.length; i++){
            const dog = li[i].innerText
            const node = li[i]
            node.style.display="none"
            if (dog[0] === "a"){
              node.style.display ="block"
            }
          }}else if(dropdown.value == "b"){
            for (i=0; i<li.length; i++){
              const dog = li[i].innerText
              const node = li[i]
              node.style.display="none"
              if (dog[0] === "b"){
                node.style.display ="block"
              }
          }}else if(dropdown.value == "c"){
            for (i=0; i<li.length; i++){
              const dog = li[i].innerText
              const node = li[i]
              node.style.display="none"
              if (dog[0] === "c"){
                node.style.display ="block"

              }
          }}else if(dropdown.value == "d"){
            for (i=0; i<li.length; i++){
              const dog = li[i].innerText
              const node = li[i]
              node.style.display="none"
              if (dog[0] === "d"){
                node.style.display ="block"

              }
          }}









        // if (dropdown.value == "a"){
        //   console.log("you selected A")
        // }else if (dropdown.value == "b") {
        //   console.log("you selected B")
        // }else if (dropdown.value == "c") {
        //   console.log("you selected C")
        // }else if(dropdown.value == "d"){
        //   console.log("you selected D")
        // }
      })


      // get value(alphabet) from dropdown
      // show only breeds with the alphabet


    };
