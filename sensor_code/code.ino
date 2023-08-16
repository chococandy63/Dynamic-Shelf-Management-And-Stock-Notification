#include <SoftwareSerial.h> //connecting to wifi
#include "WiFiEsp.h"
#include "ThingSpeak.h" // always include thingspeak header file after other header files and custom macros

WiFiEspClient  client;

const char* ssid = "YOUR_SSID";     // Replace with your SSID
const char* password = "YOUR_PASSWORD"; // Replace with your Wi-Fi password
const char* api = "M3EVMXR34ZRPCYUS";
const char* channel = 2241519;

int status = WL_IDLE_STATUS;     // the Wifi radio's status

SoftwareSerial esp8266(2, 3); // RX, TX

const int distTrigPin = 8;
const int distEchoPin = 7;
// 8 7 13 12
const int countTrigPin = 13;
const int countEchoPin = 12;

const int countTrigPin1 = 5;
const int countEchoPin1 = 4;

int currentState = 0;
int previousState = 0;
int currentState1 = 0;
int previousState1 = 0;

long distDuration; //travel time that we will get from sensor
long countDuration;
long countDuration1;

int distance; 
int countDistance;
int countDistance1;
int counter = 0;

void setup() {
  //wifi configuration
  Serial.begin(9600);
  esp8266.begin(115200);
  WiFi.init(&esp8266);
  pinMode(distTrigPin, OUTPUT); // Sets the trigPin as an Output
  pinMode(distEchoPin, INPUT); // Sets the echoPin as an Input
  pinMode(countTrigPin, OUTPUT); // Sets the trigPin as an Output
  pinMode(countEchoPin, INPUT); // Sets the echoPin as an Input

  //check for the prescence of shield
  if (WiFi.status() == WL_NO_SHIELD) {
    Serial.println("WiFi shield not present");
    // don't continue
    while (true);
  }

  // attempt to connect to WiFi network
  while (status != WL_CONNECTED) {
    Serial.print("Attempting to connect to WPA SSID: ");
    Serial.println(ssid);
    // Connect to WPA/WPA2 network
    status = WiFi.begin(ssid, password);
  }
  Serial.println("You're connected to the network");
  ThingSpeak.begin(client);
}

void loop() {
  // Clears the trigPin
  digitalWrite(distTrigPin, LOW);
  delayMicroseconds(2);
  // Sets the trigPin on HIGH state for 10 micro seconds
  //generating the ultrasound waves, we set the trigPin on High state for 10ms
  digitalWrite(distTrigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(distTrigPin, LOW);
  // Reads the echoPin, returns the sound wave travel time in microseconds
  distDuration = pulseIn(distEchoPin, HIGH); 
  distance = distDuration * 0.034 / 2;



  digitalWrite(countTrigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(countTrigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(countTrigPin, LOW);

  countDuration = pulseIn(countEchoPin, HIGH); 
  // Calculating the distance
  
  countDistance = countDuration * 0.034 / 2;

  digitalWrite(countTrigPin1, LOW);
  delayMicroseconds(2);
  digitalWrite(countTrigPin1, HIGH);
  delayMicroseconds(10);
  digitalWrite(countTrigPin1, LOW);

  countDuration1 = pulseIn(countEchoPin1, HIGH); 
  // Calculating the distance  
  countDistance1 = countDuration1 * 0.034 / 2;

  if(countDistance <= 15) {
    currentState = 1;
  }
  else {
    currentState = 0;
  }
  // delay(100);
  if(currentState != previousState) {
    while(currentState == 1) {
      digitalWrite(countTrigPin1, LOW);
      delayMicroseconds(2);
      digitalWrite(countTrigPin1, HIGH);
      delayMicroseconds(10);
      digitalWrite(countTrigPin1, LOW);

      int countDistance1;
      long countDuration1;
      countDuration1 = pulseIn(countEchoPin1, HIGH); 
      // Calculating the distance
      countDistance1 = countDuration1 * 0.034 / 2;
      if(countDistance1 <= 15) {
        currentState1 = 1;
      }
      else {
        currentState1 = 0;
      }
      // delay(100);
      if(currentState1 == 1 && currentState1 != previousState1) {
        counter ++;
        Serial.println(counter);
        delay(1000);
        ThingSpeak.setField(1, distance);
        ThingSpeak.setField(2, counter);
        int x = ThingSpeak.writeFields(channel, api);
        if(x = 200) {
          Serial.println("Channel update successful");
        }
        else {
          Serial.println("Problem updating channel. HTTP error code " + String(x));
        }        
      }
      return;
    }
  }

  // exiting
  if(countDistance1 <= 15) {
    currentState1 = 1;
  }
  else {
    currentState1 = 0;
  }
  delay(100);
  if(currentState1 != previousState1) {
    while(currentState1 == 1) {
      digitalWrite(countTrigPin, LOW);
      delayMicroseconds(2);
      digitalWrite(countTrigPin, HIGH);
      delayMicroseconds(10);
      digitalWrite(countTrigPin, LOW);

      int countDistance;
      long countDuration;
      countDuration = pulseIn(countEchoPin, HIGH); 
      // Calculating the distance
      countDistance = countDuration * 0.034 / 2;
      if(countDistance <= 15) {
        currentState = 1;
      }
      else {
        currentState = 0;
      }
      delay(100);
      if(currentState == 1 && currentState != previousState) {
        counter --;
        Serial.println(counter);
        delay(1000);
        ThingSpeak.setField(1, distance);
        ThingSpeak.setField(2, counter);
        int x = ThingSpeak.writeFields(channel, api);
        if(x = 200) {
          Serial.println("Channel update successful");
        }
        else {
          Serial.println("Problem updating channel. HTTP error code " + String(x));
        }        
      }
      return;
    }
  }  
}