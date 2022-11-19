int redLed = 12;
int greenLed = 10;
// int statusRed = 0;
// int statusGreen = 0;

void setup() {
  Serial.begin(9600);
  pinMode(redLed, OUTPUT);
  pinMode(greenLed, OUTPUT);
}


void loop() {
  int sensorValue = analogRead(A1);

  if (sensorValue > 980) {
    digitalWrite(redLed, HIGH);
    digitalWrite(greenLed, LOW);
    Serial.print("IT WON'T WORK OUT!!!");
  } else if ((sensorValue < 979) && (sensorValue > 920)) {
    digitalWrite(redLed, LOW);
    digitalWrite(greenLed, HIGH);
    Serial.print("IT'S A MATCH!!!!");
  } else if ((sensorValue <= 919)) {
    digitalWrite(redLed, HIGH);
    digitalWrite(greenLed, HIGH);
    Serial.print("MATCH MADE IN HEAVEN!!!!!");
  } else
    ;

//  Serial.println(sensorValue);
  delay(500);
}
