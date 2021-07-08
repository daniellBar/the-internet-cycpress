# the-internet-cycpress

Overview:

The project is written in Javascript.
The testing framework used for the project is Cypress.
Reason for Javascript is: the language i am most proficient in.
Reasons for Cypress are: 
1) in the first interview it was mentioned that Cypress is the framework
   you use.
2) Cypress was developed by frontend developers for Javascript.
3) it is the one i used lately and remember the most.

Remarks and clarifications about project design:

1) I use some form of Page Object Model for the project.

2) It was asked to Use Object Oriented Programming principles.

When using POM one would probably think about classes and the use of the keyword "this" to return an instance.
for exmaple with Selenium and Java when the page object stores the driver.

with Cypress there is no need for that and with javascript which is a prototype-based and not class based language there was no need for classes in my project.
in Javascript when classes are not needed they are not encouraged. (for exmaple React hooks are encouraged insted of classes which are discouraged).

3) For logging i used the Cypress function : cy.log() . i had no time looking for a better external library.

Setup:

1) i used npm and visual studio.
2) the project has a package.json file with detailed dependencies so all you need to do is open the terminal and on the path of the project run the command: "npm i"
to install npm modules.
3) after installing run the command: "npx cypress open"
this should open the cycpress ui and from there you can run the tests.
the tests are the files ending with spec.js
clicking on any of it will run a test.
