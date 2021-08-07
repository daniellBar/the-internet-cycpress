# the-internet-cycpress

Overview:  
An Automation Cypress project for testing [the internet app](https://the-internet.herokuapp.com/) website.  
the internet app demonstrate different functionalities found on the web,  
such as: IFrames, looking for Typos, Downloading Files, Dropdowns, Basic Auth, Broken Images and many more.

The project includes different features of Cypress, creating Custom Commands, Plugins, Tasks, etc.  

About the Design Pattern:  

I use Page Object Model.  

When using POM one would probably think about classes and the use of the keyword "this" to return an instance.
For exmaple with Selenium and Java when the page object stores the driver.  
With Cypress there is no need for that and with javascript which is a prototype-based and not class based language there was no need for classes in this project.
In Javascript when classes are not needed they are not encouraged. (for exmaple React hooks are encouraged insted of classes which are discouraged).



Setup:  
1) The project has a package.json file with detailed dependencies so all you need to do is open the terminal and on the path of the project run the command: "npm i"
to install npm modules.  
2) After installing run the command: "npx cypress open" .  
This should open the Cypress UI (Test Runner) and from there you can run the tests suites.
the tests suites are the files ending with spec.js, clicking on any of it will run a test suite.
