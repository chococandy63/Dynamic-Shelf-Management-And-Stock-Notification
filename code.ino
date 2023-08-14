#include <SoftwareSerial.h> //connecting to wifi
#include "WiFiEsp.h"

const char* ssid = "ENTER YOUR SSID";     // Replace with your SSID
const char* password = "ENTER YOUR WIFI PASSWORD"; // Replace with your Wi-Fi password
int status = WL_IDLE_STATUS;     // the Wifi radio's status

SoftwareSerial esp8266(2, 3); // RX, TX

const int trigPin = 8;
const int echoPin = 7;
long duration; //travel time that we will get from sensor
int distance; 

void setup() {
  //wifi configuration
  Serial.begin(115200);
  esp8266.begin(115200);
  WiFi.init(&esp8266);
  pinMode(trigPin, OUTPUT); // Sets the trigPin as an Output
  pinMode(echoPin, INPUT); // Sets the echoPin as an Input

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
}

void loop() {
  // Clears the trigPin
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  // Sets the trigPin on HIGH state for 10 micro seconds
  //generating the ultrasound waves, we set the trigPin on High state for 10ms
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  // Reads the echoPin, returns the sound wave travel time in microseconds
  duration = pulseIn(echoPin, HIGH); 
  // Calculating the distance
  distance = duration * 0.034 / 2;

  // The above formula can be edited to find the number of items by dividing by the length of each item.

  // Prints the distance on the Serial Monitor
  // Serial.print("Distance: ");
  // Serial.println(distance);

  // Code for sending 'distance' to AWS IOT
}