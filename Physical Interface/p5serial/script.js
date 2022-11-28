let serial;                            
let inData;                          
let portSelector;

let dataMode;
let potData;

function preload () {
  day = loadImage('Frame1.png');
  night = loadImage('Frame2.png');
  afternoon = loadImage('Frame3.png');
  evening = loadImage('Frame4.png');

}

function setup() {
  createCanvas(600, 600);
  serial = new p5.SerialPort();       // make a new instance of the serialport library
  serial.on('list', printList);       // set a callback function for the serialport list event
  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen);        // callback for the port opening
  serial.on('data', serialEvent);     // callback for when new data arrives
  serial.on('error', serialError);    // callback for errors
  serial.on('close', portClose);      // callback for the port closing

  serial.list();                      // list the serial ports

}

function draw() {
  background(0);
  fill(255);

  if (potData <= 63) {
    image (day, 60, 200, 489, 207)
  } else if (potData >= 190){
    image (night, 60, 200, 489, 207)
  } else if (potData >= 64 && potData <= 127) {
    image (afternoon, 60,200,489,207)
  } else if (potData >= 128 && potData <= 189) {
    image(evening, 60,200,489,207)
  }

}

// make a serial port selector object:
function printList(portList) {
  // create a select object:
  portSelector = createSelect();
  portSelector.position(10, 10);
  // portList is an array of serial port names
  for (var i = 0; i < portList.length; i++) {
    // add this port name to the select object:
    portSelector.option(portList[i]);
  }
  // set an event listener for when the port is changed:
  portSelector.changed(mySelectEvent);
}

function mySelectEvent() {
  let item = portSelector.value();
  // if there's a port open, close it:
  if (serial.serialport != null) {
    serial.close();
  }
  // open the new port:
  serial.openPort(item);
}

function serverConnected() {
  console.log('connected to server.');
}

function portOpen() {
  console.log('the serial port opened.')
}

function serialEvent() {
  // read a byte from the serial port, convert it to a number:
  inString = serial.readLine();

  if (inString === "Potentiometer") {
    dataMode = "Potentiometer"
  // } else if (inString === "Button") {
  //   dataMode = "Button"
  } else if (dataMode === "Potentiometer") {
    potData = inString
  // } else if (dataMode === "Button") {
  //   buttonData = inString
  }

  inData = inString
}

function serialError(err) {
  console.log('Something went wrong with the serial port. ' + err);
}

function portClose() {
  console.log('The serial port closed.');
}