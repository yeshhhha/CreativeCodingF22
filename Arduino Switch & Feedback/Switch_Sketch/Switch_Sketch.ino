const int led_o = 13;
const int led_g = 12;

// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pin LED_BUILTIN as an output.
  pinMode(led_o, OUTPUT);
  pinMode(led_g, OUTPUT);
}

// the loop function runs over and over again forever
void loop() {

  digitalWrite(led_g, HIGH);
//  digitalWrite(led_g, LOW);
  

//  if (led_g == HIGH)
//  {    
  digitalWrite(led_o, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(1000);                       // wait for a second
  digitalWrite(led_o, LOW);    // turn the LED off by making the voltage LOW
  delay(1000);                       // wait for a second
  }
//  else 
//  {
//  digitalWrite(led_g, HIGH);
//  }
//
//  if (led_g == HIGH) 
//  {
//  digitalWrite(led_o, LOW);
//  }
