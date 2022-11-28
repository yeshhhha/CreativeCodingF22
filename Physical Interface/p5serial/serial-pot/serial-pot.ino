void setup() {
  Serial.begin(9600);
}
 
void loop() {
  int potentiometer = analogRead(A0);                  
  int mappedPot = map(potentiometer, 0, 1023, 0, 255); 
  // print it out the serial port:
  Serial.println("Potentiometer");
  delay(100);
  Serial.println(mappedPot);                             
  delay(100);    

                                      
}
