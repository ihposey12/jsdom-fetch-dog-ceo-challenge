console.log('%c HI', 'color: firebrick')


//API's
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"

//fetches
function addImages() {
    fetch(imgUrl)
        .then(response => response.json())
        .then(dog => domImages(dog.message))
}
function addBreeds() {
    fetch(breedUrl)
        .then(response => response.json())
        .then(breed => dogBreeds(breed.message))
}

//Global parents
let dogImages = document.querySelector("#dog-image-container")
let ul = document.querySelector("#dog-breeds")

//to the DOM
function domImages(images) {
    for (const element of images) {
        let img = document.createElement("img")
        img.src = element
        dogImages.appendChild(img)
    }
}

function dogBreeds(breeds) {
    for (const key in breeds) {
        let li = document.createElement('li')
        li.textContent = key
        li.id = key
        ul.appendChild(li)
        document.querySelector(`#${key}`).addEventListener('click', changeBreedColor)
    }
}

// function addOptions() {
//     let abc = ['a', 'b', 'c', 'd']
//     abc.forEach(letter => {

//     })
//     let select = document.querySelector('select')
//     select.innerHTML = ''
// }

//handles changing breed color
function changeBreedColor(e) {
    let breed = e.target
    breed.style.color = "blue"
}

//listeners
function addEventListeners() {
    let dropDown = document.querySelector('#breed-dropdown')
    dropDown.addEventListener("change", dogBreeds)
}

// function filerDogBreeds(e) {
//     let dogBreeds = document.querySelector('.dog-breeds')
//     let filteredDogs = 
// }

addBreeds()
addImages()
addEventListeners()