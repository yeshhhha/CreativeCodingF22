// let shapeArray = []
let shapeSystem

let systems = []


function setup() {
  createCanvas(windowWidth, windowHeight)
  // console.log(shapeArray)

  // shapeSystem = new ShapeSystem(createVector(0,0))
  // console.log(shapeSystem)

  for (let i = 0; i<10; i++) {
  systems.push(new ShapeSystem (
    random(width),
    random(height)
  ))
  }
}

function draw() {
  background(100)

  
  systems.forEach(system => {
    let temp = system.makeRandomShape()
    system.addNew(temp)
    system.updateShapes()
    system.displayShapes()
  })

  // let temp = shapeSystem.makeRandomShape()

  // shapeSystem.addNew(temp)
  // shapeSystem.displayShapes()
  // shapeSystem.updateShapes()

  // console.log(shapeSystem.shapes.length)

}





