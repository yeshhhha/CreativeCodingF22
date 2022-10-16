let dogImg;
let url = "https://dog.ceo/api/breeds/image/random"

function setup() {
  createCanvas(windowWidth, windowHeight)
  // fetch("https://dog.ceo/api/breeds/image/random") // possible to move fetch outside of the setup since it is a javascript function so we don't need to wait for setup 
  // .then((response) => {
  //   console.log("response recieved")
  //   console.log(response)
  //   return response.json()

  // }) 
  // .then((data) => {
  //   console.log("json parsed")
  //   console.log(data)

  //   dogImg = loadImage(data.message)
  // })
  // .catch((error) => {
  //   console.error(error)
  // })
}

function draw() {
  background(100)

  if (dogImg != undefined) {
    let dogWidth = dogImg.width
    let dogHeight = dogImg.height
    if (dogImg.width > width) {
      dogHeight /=2
      dogWidth /=2
    }
    image (dogImg, 0, 0)
  }
  
}

async function getDog(url) {
  const response = await fetch(url)
  const data = await response.json()
  dogImg = loadImage (data.message)
  
}