# FE16-CR5-SanjaKostantinovic
Code Review 5
Good morning dear students,

Welcome to your 5th CodeReview. Let’s put in practice all the knowledge gained already about TypeScript and Bootstrap. 

You will need to achieve more than 60 points to pass this CodeReview successfully. 

You will be graded accordingly to the results achieved. Please see the number of points for each task below. 

The grading system has the following rules:

Up to 60 points = red

Between 61 and 79 = yellow

Over 80 = green

You can submit your solution (as GitHub project link) until Saturday 18:00:00. 


Project description:



Note: For this project, the concepts of objects, classes and inheritance will be required. 

Organization of your code: 

Examine the Content section below and use it as a guide in order to create your index.html page, as well as your script.ts file(s). You shall submit the script.ts, script.js file and all other related to the project, e.g.: html, css, etc. 

All images should be stored in an “img” folder, all css files in a “css folder and all .js and .ts files in a “scripts” folder, all of  which will be a subfolder of your main CR project folder. 
 

Pet Shop homepage 

You enjoy running your new business, a pet shop. For this, you want to create a website displaying all your wonderful animals such as cats, dogs and similar. To achieve this, you want to create a TypeScript-based system that presents all of your animals in an engaging manner on a web page. 
 

What is common to an animal be it a cat, a ferret or any other is their general information. Since you know about TS classes, you decided that your parent class named Animal must hold the following information: name, age, gender, size, vaccine (“Yes” or “No”) and image. The Animal class has the method display() which creates the HTML Elements' information of the animals' properties to be displayed on the screen. 

For the cats in your care, the class Cat should be created. This class Cat must be a child class of the class Animal. The information of the cats to be displayed on the screen must include, in addition to the Animal properties: the breed, pattern or color of its fur (“Ginger”, “Tortoiseshell”, “Tabby”, …) and a web address to the information on the breed. The Cat' objects inherit the basic properties from the Animal class. The display function must be overwritten.  

The same goes for the Dog class; the objects from this class, have their additional properties like breed and training skills (“Yes” or “No”) that also need to be displayed in addition to the parent class Animal properties.    

For the regular points of this CodeReview, you need to create a structure of TypeScript classes with their respective constructors and their display() function that will hold the relevant data of animals, cats and dogs that you have on offer to be displayed. 

Regular points: 

(05 points) Create a GitHub Repository named: FE16-CR5-YourName. Push the files into it and send the link through the learning management system (lms). Add codefactorygit as a collaborator and assure your repository is set to private. See an example of a GitHub link below: 

https://github.com/JohnDoe/repositoryname.git 

(15 points) create the class Animal based on the specifications above. The properties must be: name, gender, size, age, vaccine (“yes”/ “no” or true/false) and image. Remember to create the display() method. An array must be created to store all objects related to this parent class. At least 2 objects from various animals must be created from this class. 

(20 points) create the class Cat. This class should be extended from the Animal class and have extra properties: breed, fur color and URL breed information. At least 2 Cat’s objects must be created by using the constructor method and saved in the array of objects (class constructors usage is mandatory, do NOT use JSON and parsing). 

(20 points) create the class Dog. This class should be extended from the Animal class and have extra properties: breed and training (“Yes” or “No”). At least 2 Dog’s objects must be created by using the constructor method and saved in the array of objects (class constructors usage is mandatory, do NOT use JSON and parsing). 

(10 points) use looping functionality to display the objects saved in the array on the screen. 

(10 points) as vaccine property is common for all animals, the vaccine button should have a green background colour if the animal is vaccinated or red background colour otherwise. 

(10 points) every time the vaccine button for a specific animal is clicked the vaccination status(vaccine property) of that animal should toggle between vaccinated and not vaccinated. Keep in mind that the changes should be also reflected on the DOM which means both background colour and icon should change according to the vaccine property (vaccinated: green, not vaccinate:red).
(10 points) assure that the responsiveness of the page is as follows: for small screens, you see the teaser of one object (without the image) in a row. On medium screens, you see two teasers in a row (with image). On large screens, you see three objects in a row (with image) as per the example shown. 

Bonus Points: 

(20 points) You want to create an ascending button available in the navbar that will organise the animals shown on the screen by age (mandatory). If you feel adventurous, you can try to extend creating a toggle button ascending/descending (not mandatory though). 

Find below the example Template: 
