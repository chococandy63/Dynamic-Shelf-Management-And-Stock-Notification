# Dynamic-Shelf-Management-And-Stock-Notification 

Prerequisites:
- Arduino Uno
- USB 2.0 A-B Cable
- Arduino IDE
- Ultrasonic Distance Sensor
- Wifi Module(ESP8266)
- Jumper Wires
- AWS IOT account

Setting up Arduino IDE on Linux: 

Step 1: Install Arduino IDE- `yay -S arduino-ide-bin`

Step 2: To give the necessary permissions to access the device. Add your user to a specific group (e.g., "dialout" or "uucp") that has access to serial devices.

Run `sudo usermod -aG uucp chococandy` to add the user `chococandy` that has access to serial device.

![image](https://github.com/chococandy63/walmart-product-detector/assets/79960426/7d6a32e9-1d5d-430b-a38d-4d0cbbcbe2a1)

Step 3: After adding yourself to the group, log out and log back in for the changes to take effect.

Step 4: 

![image](https://github.com/chococandy63/Dynamic-Shelf-Management-And-Stock-Notification/assets/79960426/ca2bcd7d-7650-49a1-8f81-b2bd0edbab62)



Code:

![image](https://github.com/chococandy63/walmart-product-detector/assets/79960426/64938d83-49fe-4b6c-9f0f-1cec74101002)


Output: Serial Display

![image](https://github.com/chococandy63/walmart-product-detector/assets/79960426/eec8facd-1807-43b4-8c95-95b36f1d2e0f)

Installing library for ESP8266

Step 1: Go to File > Prefernces and add the following URL in the "Additional Boards Manager URLs" field: https://arduino.esp8266.com/stable/package_esp8266com_index.json

Step 2: Go to Tools > Board > Board Manager, search for "esp8266" and install the package to include the necessary libraries for the wifi module.


Project Setup:

Demo Setup:

Website interface-

![image](https://github.com/chococandy63/Dynamic-Shelf-Management-And-Stock-Notification/assets/79960426/1e457984-f15c-4734-98d7-d12e001b6bdb)



![image](https://github.com/chococandy63/Dynamic-Shelf-Management-And-Stock-Notification/assets/79960426/77b041cd-5b74-4269-9574-0db34bbee628)


![image](https://github.com/chococandy63/Dynamic-Shelf-Management-And-Stock-Notification/assets/79960426/bb294b28-e098-4ac7-9d37-4ab15f2cdd53)


![image](https://github.com/chococandy63/Dynamic-Shelf-Management-And-Stock-Notification/assets/79960426/b2b73d47-ecd2-4dc9-93a6-0c519c5d6f8a)
