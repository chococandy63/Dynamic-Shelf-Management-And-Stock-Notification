# Dynamic-Shelf-Management-And-Stock-Notification 

Website Link: https://shelf-sense.netlify.app/  
Presentation: https://www.canva.com/design/DAFrzmtATuI/-q9m0b0lH4m2YrmqSTaSvQ/view

## Problem Statement 

In various retail stores like Walmart, maintaining optimal stock levels is very important to meet customer demands which leads to a positive shopping experience. Empty shelves brings about customer dissatisfaction and results in a loss of sales opportunities.

## Solution

### Project Name: Shelf-Sense

The solution involves IoT technology to monitor the number of products on store shelves in real time using ultrasonic sensors placed on shelves which continuously monitors the product quantity and updates it on the dashboard to be used by the staff in real-time. Additionally, the customers can receive notifications for the specific products they are interested in, allowing them to receive alerts when some product in back in stock.

## Tech Stack:
- Arduino Uno: serves as the central control unit for the IoT system.
- Ultrasonic Distance Sensors: Used as counters and also to measure the distance between the top of the shelf and the top of the products on the shelf which is required for an estimation of whether product quantity goes below a threshold value.
- WiFi Module (ESP8266): Enables transmission of data read by the sensors to a database for it's storage and monitoring.
- Cloud Services: ThingSpeak is used to store and visualize the data from the sensors.
- ReactJS: used for building the frontend of the ShelfSense website.

## Conclusion
This project improves inventory management and enhances the overall shopping experience for customers. Some additional features such as data analysis that finds trends and patterns in the data read by the sensors which can be used for effective prediction of when a specific product goes out of stock, can be integrated within the application.

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
3. Rest of the sensor code is used for implementing a counter which increases the counter when an object moves inside a box or a shelf, and decreases the counter when an object moves out.
   
## Setting up Arduino IDE on Linux: 

Step 1: Install Arduino IDE- `yay -S arduino-ide-bin`

Step 2: To give the necessary permissions to access the device. Add your user to a specific group (e.g., "dialout" or "uucp") that has access to serial devices.

Run `sudo usermod -aG uucp chococandy` to add the user `chococandy` that has access to serial device.




Step 3: After adding yourself to the group, log out and log back in for the changes to take effect.

Step 4: ![image](https://github.com/chococandy63/Dynamic-Shelf-Management-And-Stock-Notification/assets/79960426/eefd34d5-0ec4-4ad7-810e-f214dce3f819)






## Code:

![image](https://github.com/chococandy63/Dynamic-Shelf-Management-And-Stock-Notification/assets/79960426/1cbd1013-f56b-4450-ac5d-8f3b1c2028e6)




Output: Serial Display

![image](https://github.com/chococandy63/Dynamic-Shelf-Management-And-Stock-Notification/assets/79960426/f95dcddb-2cb5-4c23-935d-e0353cf7845e)


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

![image](https://github.com/chococandy63/Dynamic-Shelf-Management-And-Stock-Notification/assets/79960426/dabad210-f551-4d0e-8d50-5ea1f0c5822c)

![image](https://github.com/chococandy63/Dynamic-Shelf-Management-And-Stock-Notification/assets/79960426/b45040af-e221-434f-9c31-3b90d2b0d0ef)

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

![image](https://github.com/chococandy63/Dynamic-Shelf-Management-And-Stock-Notification/assets/79960426/700b5e2d-7222-490e-8094-96d721dcde0c)

![image](https://github.com/chococandy63/Dynamic-Shelf-Management-And-Stock-Notification/assets/79960426/a66be135-e141-431e-824e-dd896907106f)

![image](https://github.com/chococandy63/Dynamic-Shelf-Management-And-Stock-Notification/assets/79960426/b6913ec0-b7d6-47b9-8ed6-05027c19bbd3)

![image](https://github.com/chococandy63/Dynamic-Shelf-Management-And-Stock-Notification/assets/79960426/8e60fb32-c36b-49ea-9b73-38e543513b0a)

![image](https://github.com/chococandy63/Dynamic-Shelf-Management-And-Stock-Notification/assets/79960426/ae664655-07c5-4474-a900-bf3af0168afb)

![image](https://github.com/chococandy63/Dynamic-Shelf-Management-And-Stock-Notification/assets/79960426/d035cde1-841d-4500-9203-e9c075252831)


## Website Link

[https://shelf-sense.netlify.app/](https://shelf-sense.netlify.app/)

[Presentation](https://www.canva.com/design/DAFrzmtATuI/-q9m0b0lH4m2YrmqSTaSvQ/view)

[Youtube-link-for-IoT-Model-Demonstration](https://youtu.be/Rdn7W__WYMI)
