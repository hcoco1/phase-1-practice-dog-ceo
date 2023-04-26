 //console.log("%c HI", "color: firebrick");
document.addEventListener("DOMContentLoaded", () => {
//Challenge 1
//on page load, fetches the images using the url above ⬆️
//parses the response as JSON
//adds image elements to the DOM for each 🤔 image in the array


const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
fetch(imgUrl)
  .then((res) => res.json())
  .then((data) => {
    //console.log(data)
    data.message.forEach((val) => {
      //console.log(val);
      const divImageCont = document.querySelector("#dog-image-container");
      const dogImage = document.createElement("img");
      dogImage.src = val;
      divImageCont.appendChild(dogImage);
    });
  });

//Challenge 2
//on page load, fetches all the dog breeds using the url above ⬆️
//adds the breeds to the page in the <ul> provided in index.html

const breedUrl = "https://dog.ceo/api/breeds/list/all";

fetch(breedUrl)
  .then((res) => res.json())
  .then((data) => {
    for (let [key, name] of Object.entries(data.message)) {
        console.log(key + ': ' + name);
        const ulCont = document.querySelector("ul");
        const liBreeds = document.createElement("li");
        liBreeds.innerHTML = `${key} : ${name} `
        ulCont.appendChild(liBreeds)

//Challenge 3
//Once all of the breeds are rendered in the <ul>,
//add JavaScript so that, when the user clicks on any one
//of the <li>s, the font color of that <li> changes.
//This can be a color of your choosing.

        liBreeds.addEventListener('click', ()=> {
        liBreeds.style.color = 'red';

        const breedDropdown = document.querySelector("breed-dropdown");
        breedDropdown.addEventListener('change', ()=>{
            
        })


        })






    }



        
       
      
  
}); 
})
