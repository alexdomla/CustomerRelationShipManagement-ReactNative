# Customer Relationship Management App (React Native)

## Overview

This project is a part of the Udacity Senior Frontend Engineer - OLX Scholarship Nanodegree. The aim is creating a prototype mobile app that would allow sales representatives to update customer information as they gather it. The hope is that this will empower the sales team to spend more time with customers and less time inputting data, and also lead to higher quality and more up-to-date information going into the system.

## Why this project?

This project encompasses the fundamental aspects of building a native application including creating views, setting up routes, handling user input, and implementing native libraries. In building this project, you will develop a deeper understanding of how to use React Native to build an iOS and Android application that could be applicable to many companies and scenarios.

## Installation

To install the application, follow these steps:

1. Clone the repository to your local machine using Git:
   git clone https://github.com/example/customer-manager-app.git

2. Change into the project directory:
   cd customer-manager-app

3. Install the dependencies using either npm or yarn:
   npm install
   or
   yarn install

## Usage

To start the application, run the following command:
npm start

vbnet
Copy code

This will open Expo Developer Tools in your default browser. From here, you can choose how you want to view the application:

- Scan the QR Code using the Expo Client app (available on Google Play and the App Store) from an Android or iOS device.
- Follow the instructions in the terminal to view the application in the web browser (please note that push notifications won't work in this environment).

## Folder Structure

customer-relationship-management-app/
├── src/
│ ├── components/
│ │ └── Button/
│ │ ├── index.js
│ │ └── styles.js
│ ├── features/
│ │ ├── Customer/
│ │ │ ├── CustomerOfTheDay/
│ │ │ │ ├── index.js
│ │ │ │ └── styles.js
│ │ │ ├── Edit/
│ │ │ │ ├── index.js
│ │ │ │ └── styles.js
│ │ │ ├── Form/
│ │ │ │ ├── index.js
│ │ │ │ └── styles.js
│ │ │ ├── ListByRegion/
│ │ │ │ ├── index.js
│ │ │ │ └── styles.js
│ │ │ ├── ListRegions/
│ │ │ │ ├── index.js
│ │ │ │ └── styles.js
│ │ │ ├── New/
│ │ │ │ ├── index.js
│ │ │ │ └── styles.js
│ │ │ ├── sagas/
│ │ │ │ ├── clear.js
│ │ │ │ ├── create.js
│ │ │ │ ├── edit.js
│ │ │ │ ├── index.js
│ │ │ │ └── load.js
│ │ │ ├── hooks.js
│ │ │ └── reducers.js
│ │ └── Welcome/
│ │ ├── index.js
│ │ └── styles.js
│ ├── navigation/
│ │ └── index.js
│ ├── screens/
│ │ ├── CustomerOfTheDayScreen/
│ │ │ ├── index.js
│ │ │ └── styles.js
│ │ ├── EditCustomerScreen/
│ │ │ ├── index.js
│ │ │ └── styles.js
│ │ ├── ListByRegionScreen/
│ │ │ ├── index.js
│ │ │ └── styles.js
│ │ ├── ListRegionsScreen/
│ │ │ ├── index.js
│ │ │ └── styles.js
│ │ ├── NewScreen/
│ │ │ ├── index.js
│ │ │ └── styles.js
│ │ └── WelcomeScreen/
│ │ ├── index.js
│ │ └── styles.js
│ ├── store/
│ │ ├── index.js
│ │ ├── reducers.js
│ │ └── sagas.js
│ └── utilities/
│ ├── async_storage.js
│ └── helpers.js
├── App.js
├── package.json
└── README.md

## Stack

This project uses the following technologies:

- React Native
- React Navigation
- Redux Toolkit
- Redux Sagas
- Expo Notifications
- React Native AsyncStorage

## Author

This application was developed by Alejandro Domínguez.
