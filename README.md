# WebdriverIO UI Automation Framework

This repository contains automated tests for the browser based application using the WebdriverIO UI Automation Framework.

## What is WebdriverIO

1. Automation testing framework for browser and mobile testing.
2. Free & Open-source.
3. owned by a non-profit entity called OpenJS Foundation.

## Features of this framework:- 

- **We can use WebdriverIO to automate**:
    
   modern web applications written in React, Vue, Angular etc
   hybrid or native mobile apps running on emulator/simulator or real device
   native desktop applications (e.g. written with Electron.js)
   Can work with Shadow DOM and React Objects

- **Added ES Lint check to the repo**: 
   ESLint is an essential tool for JavaScript developers, providing valuable support for code quality, consistency, and maintainability throughout the development lifecycle. It helps teams write better code, collaborate more effectively, and deliver higher-quality software products.

   For lint check use command:- npm run lint

- **Added Allure reporting**:

   Allure reporting enhances test automation efforts by providing insightful and interactive reports that facilitate better decision-making, troubleshooting, and collaboration among team members. It's widely adopted in the software testing community for its usability, flexibility, and rich feature set.

   To generate and open allure report use command:- 
   allure generate allure-results --clean --output allure-report && allure open 

## Hardware & Software Requirements
1. Hardware
2. Desktop or Laptop with min 4GB RAM, 5 GB free space
3. Software
4. Node JS - v12.16.1 or higher
5. IDE (for JavaScript)


## Project Setup & WebdriverIO Installation
1. Create a new folder and open in IDE (VS Code)
2. Open terminal in VS Code and run commands  npm init -y
               npm init wdio
3. Select the options as required and install
4. Check WebdriverIO version  npm ls webdriverio
5. Check wdio.conf.js file and project folders are created
6. To run existing tests:- 

   Run all tests in the folder configured in wdio.conf.js  
   npx wdio run wdio.conf.js
   or
   npm run wdio
   Run specific tests npx wdio run wdio.conf.js --spec test1.js 

## How to Generate and View Reports

1. Run - npm install @wdio/allure-reporter --save-dev
2. Add reporter config in wdio.conf.js
3. Run test and check Allure Results folder is generated
4. Install allure command line tool  npm install -g allure-commandline --save-dev
5. Run commands:-
   allure generate allure-results // this will generate allure-report folder
   allure open  // will start server and open report

 - **Note** 
   For ESlint check and to run test cases also to generate report and to view report in browser you can use below command:-
   
   - **npm run wdio** 