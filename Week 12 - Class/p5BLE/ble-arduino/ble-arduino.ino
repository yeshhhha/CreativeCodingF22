/*
  Button LED

  This example creates a BLE peripheral with service that contains a
  characteristic to control an LED and another characteristic that
  represents the state of the button.

  The circuit:
  - Arduino MKR WiFi 1010 or Arduino Uno WiFi Rev2 board
  - Button connected to pin 4

  This example code is in the public domain.
*/

#include <ArduinoBLE.h>

const int ledPin = LED_BUILTIN; // set ledPin to on-board LED
const int buttonPin = 4; // set buttonPin to digital pin 4
const int potPin = A0; 

BLEService ledService("712ff8b3-0aee-42f9-96a6-9b23d395171d"); // create service

// create switch characteristic and allow remote device to read and write
//BLEByteCharacteristic ledCharacteristic("19B10011-E8F2-537E-4F6C-D104768A1214", BLERead | BLEWrite);
// create button characteristic and allow remote device to get notifications
BLEIntCharacteristic buttonCharacteristic("a2c21c5d-9c93-49de-9263-d1f48e73dd83", BLERead | BLENotify);
BLEIntCharacteristic potCharacteristic("8b327aae-cc2d-4416-8fd3-0fcb395cf1e2" , BLERead | BLENotify);

int sensorValue = 255;
void setup() {
  Serial.begin(9600);
  while (!Serial);

  pinMode(ledPin, OUTPUT); // use the LED as an output
  pinMode(buttonPin, INPUT); // use button pin as an input
  pinMode (potPin, INPUT);

  // begin initialization
  if (!BLE.begin()) {
    Serial.println("starting BLE failed!");

    while (1);
  }

  // set the local name peripheral advertises
  BLE.setLocalName("ButtonLED");
  // set the UUID for the service this peripheral advertises:
  BLE.setAdvertisedService(ledService);

  // add the characteristics to the service
  //ledService.addCharacteristic(ledCharacteristic);
  ledService.addCharacteristic(buttonCharacteristic);
  ledService.addCharacteristic(potCharacteristic);

  // add the service
  BLE.addService(ledService);

  //ledCharacteristic.writeValue(0);
  buttonCharacteristic.writeValue(0);
  potCharacteristic.writeValue(0);

  // start advertising
  BLE.advertise();

  Serial.println("Bluetooth device active, waiting for connections...");
}

void loop() {
  // poll for BLE events
  BLE.poll();

  if (millis() % 1000 == 0) {
    sensorValue = digitalRead(buttonPin);
    Serial.println(sensorValue);
    buttonCharacteristic.writeValue(sensorValue);

    float potValue = analogRead(potPin);
    Serial.println(potValue);
    potCharacteristic.writeValue(potValue);
    
    delay(1);
  }

}
