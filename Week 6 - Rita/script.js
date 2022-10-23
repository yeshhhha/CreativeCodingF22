let sentence = "the quick brown fox jumps over the lazy dog"

let rData = RiTa.tokenize(sentence)

rData[4] = RiTa.randomWord({pos: RiTa.pos(rData[4])[0]
})

rData[1] = RiTa.randomWord({pos: RiTa.pos(rData[1])[0]
})

let newSentence = rData.join(' ')

let sentences = []

let sentenceData = []

for (let i=0; i<10; i++) {

  let tempData = []
  rData.forEach(element => tempData.push(RiTa.tokenize(sentence)))
  
  tempData[4] = RiTa.randomWord({pos: RiTa.pos(rData[4])[0]
  })
  
  tempData[1] = RiTa.randomWord({pos: RiTa.pos(rData[1])[0]
  })

  let temp = rData.join(' ')

  sentences.push(temp)

}

console.log(rData)
console.log(newSentence)

function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  background(80)
  fill('pink')
  textSize(32)
  text(newSentence, 100,100)
}