# Dynamic-Shelf-Management-And-Stock-Notification 

### Problem Statement 

### Solution



## Prerequisites:
- Arduino Uno
- USB 2.0 A-B Cable
- Arduino IDE
- Ultrasonic Distance Sensor x3
- Wifi Module(ESP8266)
- Jumper Wires
- ThingSpeak Account

## How the sensor code works?

1. **WiFi Connectivity**: For connecting the Arduino Uno board with the ESP8266 WiFi module, WiFiESP library is used and communication between the WiFi module and the Arduino Uno board is done using Software Serial pins defined in our code file.
2. The first segment of the code in the loop function is used to measure the distance betweeen the sensor and the item towards which the sensor is facing.
3. Rest of the code is used for implementing a counter which increases the counter when an object moves inside a box or a shelf, and decreases the counter when an object moves out.
   

## Theory

MQTT- Type of a protocol similar to http which is used to send IOT data to any endpoint(database or website)


## Setting up Arduino IDE on Linux: 

Step 1: Install Arduino IDE- `yay -S arduino-ide-bin`

Step 2: To give the necessary permissions to access the device. Add your user to a specific group (e.g., "dialout" or "uucp") that has access to serial devices.

Run `sudo usermod -aG uucp chococandy` to add the user `chococandy` that has access to serial device.

![image](https://github.com/chococandy63/walmart-product-detector/assets/79960426/7d6a32e9-1d5d-430b-a38d-4d0cbbcbe2a1)

Step 3: After adding yourself to the group, log out and log back in for the changes to take effect.

Step 4: 

![image](https://github.com/chococandy63/Dynamic-Shelf-Management-And-Stock-Notification/assets/79960426/ca2bcd7d-7650-49a1-8f81-b2bd0edbab62)



## Code:

![image](https://github.com/chococandy63/walmart-product-detector/assets/79960426/64938d83-49fe-4b6c-9f0f-1cec74101002)


Output: Serial Display

![image](https://github.com/chococandy63/walmart-product-detector/assets/79960426/eec8facd-1807-43b4-8c95-95b36f1d2e0f)

## Installing library for ESP8266

Step 1: Go to File > Prefernces and add the following URL in the "Additional Boards Manager URLs" field: https://arduino.esp8266.com/stable/package_esp8266com_index.json

Step 2: Go to Tools > Board > Board Manager, search for "esp8266" and install the package to include the necessary libraries for the wifi module.

## WiFi Connectivity

Step 1: Upload an empty sketch and open the Serial Monitor

Step 2: Set the Baud rate to 115200 as it is the baud rate of the ESP8266 used and also select "Both NL & CR" from the dropdown.

Step 3: Type "AT" and wait for the Serail monitor to display "OK" to see if it is functioning properly

Step 4: Use the following commands one by one to connect to the preferred WiFi

```terminal
AT+CWMODE=1
```
Sets our device in client mode.

```terminal
AT+CWLAP
```
Displays all the available WiFi networks.
**NOTE:** Only 2.4 GHz wifi networks are compatible.

```terminal
AT+CWJAP="YOUR_SSID","YOUR_PASSWORD"
```
Connects to the specified WiFi network.

```terminal
AT+CIFSR
```
Returns the IP adress of the network that the device is connected to.

## Required Libraries

Go to Sketch > Include Libraries > Manage Libraries and install the following:
- Wifiesp
- ThingSpeak
 
## Connecting to ThingSpeak IoT

- Make an account
- Create a channel and add 2 fields for distance and counter
- Copy the WRITE API key and the channel ID for them to be used in the code.


## ThingSpeak IoT

![ThingSpeak1](https://github.com/chococandy63/Dynamic-Shelf-Management-And-Stock-Notification/assets/71835184/a424bd99-5b8d-4294-83b2-f59b48663009)

![ThingSpeak2](https://github.com/chococandy63/Dynamic-Shelf-Management-And-Stock-Notification/assets/71835184/9f561320-f80e-40c7-858e-584877f5921e)


## FRONT-END

### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Project Setup:

Demo Setup:

## Website interface-

<img width="1438" alt="Screenshot 2023-08-17 at 9 09 54 PM" src="https://github.com/chococandy63/Dynamic-Shelf-Management-And-Stock-Notification/assets/94912395/540e333b-1990-4250-a142-8e36989eb8e9">


<img width="1439" alt="Screenshot 2023-08-17 at 9 10 05 PM" src="https://github.com/chococandy63/Dynamic-Shelf-Management-And-Stock-Notification/assets/94912395/d59b2eee-6a3e-460d-af9d-ae9e4c4ffa88">



![image](https://github.com/chococandy63/Dynamic-Shelf-Management-And-Stock-Notification/assets/79960426/bb294b28-e098-4ac7-9d37-4ab15f2cdd53)


![image](https://github.com/chococandy63/Dynamic-Shelf-Management-And-Stock-Notification/assets/79960426/b2b73d47-ecd2-4dc9-93a6-0c519c5d6f8a)


## Website Link

[https://shelf-sense.netlify.app/](https://shelf-sense.netlify.app/)

[Presentation](https://www.canva.com/design/DAFrzmtATuI/-q9m0b0lH4m2YrmqSTaSvQ/view)
