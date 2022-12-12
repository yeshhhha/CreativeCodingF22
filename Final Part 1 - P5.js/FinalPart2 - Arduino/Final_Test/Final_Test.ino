//Defining the Trig & Echo pins for the ultrasonic sensor
const int trigPin = 9;
const int echoPin = 10;
const int trigPin1 = 8;
const int echoPin1 = 7;

//Defining the button pins
const int butt1 = 5;
const int butt2 = 4;
const int butt3 = 3;

//Setting the intital button state to 0
int butt1State, butt2State, butt3State = 0;

void setup() {
  
  //Setting the modes for the trig echo pin
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);

  pinMode(trigPin1, OUTPUT);
  pinMode(echoPin1, INPUT);

  //Setting the modes for the button
  pinMode(butt1, INPUT);
  pinMode(butt2, INPUT);
  pinMode(butt3, INPUT);

  Serial.begin(9600);

}

void loop() {
  
  //Ultrasonic Sensors

  //Reading the trig pin with delay
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  //Reading the echo pin
  long duration = pulseIn(echoPin, HIGH);

  //Defining the distance for the ultrasonic sensor
  int distance = (duration * 0.0343) / 2;

 //Printing the distance so the P5 serial monitor can read it
  Serial.print(distance);
  Serial.print(",");


  delayMicroseconds(2);

  //Reading the trig pin 1 with delay
  digitalWrite(trigPin1, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin1, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin1, LOW);

  //Reading the echo pin 1
  long duration1 = pulseIn(echoPin1, HIGH);

  //Defining the distance for the ultrasonic sensor 1
  int distance1 = (duration1 * 0.0343) / 2;

  //Printing the distance so the P5 serial monitor can read it
  Serial.print(distance1);
  Serial.print(",");

  //Buttons

  //Defining if the button state is high then to read whatever is pressed
  butt1State = digitalRead(butt1);
  if (butt1State == HIGH) {
    Serial.print("FIRE");
  }


  butt2State = digitalRead(butt2);
  if (butt2State == HIGH) {
    Serial.print("WATER");
  }


  butt3State = digitalRead(butt3);
  if (butt3State == HIGH) {
    Serial.print("EARTH");
  }

  //Printing the states so the P5 serial monitor can read it
  Serial.print("\n");


  delay(10);

}
