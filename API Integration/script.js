const client_id= "&client_id=V_F4G3tdOMiFNgHYXLWRgDetokuztdzelstvM6ifnXM";

// function preload (){;
//   CC = loadImage('C.png')
// }

//Generating Random Number while avoiding decimals
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let random_number = getRandomInt(1, 20);
console.log(random_number);
//Using the random number generated to load a random page of Unsplash on the sketch with a certain query
const api_url=`https://api.unsplash.com/search/collections?page=${random_number}&per_page=40&query=spooky`;

let images = [];

function setup() {
  createCanvas(windowWidth, 0)
}

// Creating the asynchronous function to fetch the API from the database
async function photoSet(){
    const response = await fetch(api_url + client_id);
    const data = await response.json();
    console.log(data);

    
    //Plotting the results of the API onto the sketch
    images = data.results.map(s => s.preview_photos.map(a => a.urls["small"]));

    //Creating a container area for each image and displaying it
    //reference from http://jsfiddle.net/gcjkL5jw/3/ to display images
    let container = document.getElementById('imageContainer');
    let docFrag = document.createDocumentFragment();


    images.forEach(function(unsplash) {
        let img = document.createElement('img');
        img.src = unsplash;
        docFrag.appendChild(img);
        
    });

    container.appendChild(docFrag);
    console.log(data)
    
  }

photoSet () //executing

