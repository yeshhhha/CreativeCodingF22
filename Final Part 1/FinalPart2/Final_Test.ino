const int trigPin = 9;
const int echoPin = 10;
const int trigPin1 = 8;
const int echoPin1 = 7;

const int potPin = A1;

const int butt1 = 5;
const int butt2 = 4;
const int butt3 = 3;

int butt1State, butt2State, butt3State = 0;

void setup() {
  // set the modes for the trigger pin and echo pin:
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);

  pinMode(trigPin1, OUTPUT);
  pinMode(echoPin1, INPUT);

  pinMode(butt1, INPUT);
  pinMode(butt2, INPUT);
  pinMode(butt3, INPUT);

  // initialize serial communication:
  Serial.begin(9600);

}

void loop() {
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  long duration = pulseIn(echoPin, HIGH);
  int distance = (duration * 0.0343) / 2;

  Serial.print(distance);
  Serial.print(",");


  delayMicroseconds(2);

  digitalWrite(trigPin1, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin1, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin1, LOW);

  long duration1 = pulseIn(echoPin1, HIGH);
  int distance1 = (duration1 * 0.0343) / 2;

  Serial.print(distance1);
  Serial.print(",");


  //  int potValue = analogRead(A0);
  //  Serial.print(potValue);
  //  Serial.print("\n");
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

  Serial.print("\n");


  delay(10);

}
