const client_id= "&client_id=V_F4G3tdOMiFNgHYXLWRgDetokuztdzelstvM6ifnXM";

// function preload (){;
//   CC = loadImage('C.png')
// }

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let random_number = getRandomInt(1, 20);
console.log(random_number);
const api_url=`https://api.unsplash.com/search/collections?page=${random_number}&per_page=40&query=spooky`;

let images = [];
function setup() {
  createCanvas(windowWidth, 0)
}



async function photoSet(){
    const response = await fetch(api_url + client_id);
    const data = await response.json();
    console.log(data);

    
    
    images = data.results.map(s => s.preview_photos.map(a => a.urls["small"]));

    
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

photoSet ()

