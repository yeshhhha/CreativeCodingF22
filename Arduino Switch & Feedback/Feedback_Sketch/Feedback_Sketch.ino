const int PHOTOCELL = A0; // Arduino pin connected to light sensor's  pin
const int O_LED          = 3;  // Arduino pin connected to LED's pin
const int ANALOG_THRESHOLD = 500;

// variables will change:
int analogValue;

void setup() {
  pinMode(O_LED, OUTPUT); // set arduino pin to output mode
  Serial.begin(9600);
}

void loop() {
  analogValue = analogRead(PHOTOCELL); // read the input on analog pin

  if(analogValue < ANALOG_THRESHOLD) {
    digitalWrite(O_LED, HIGH); // turn on LED
    Serial.print("Obstacle");

  } else digitalWrite(O_LED, LOW);  // turn off LED
}
