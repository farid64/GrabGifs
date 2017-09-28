# GrabGifs

In this app, you can add a new button for your search of gifs from Giphy website. Simply type the name of the animal you want to find gifs related to, and then press add. It will create a new button with the search you typed. Click that button and you will 10 random gifs. They all are still. Simply click them to play each.


Method:

In this Homework, we were supposed to make gif retriever.
In this homework, I created an array with names of animals and then used it to populate the 'buttons' section in my html at the begging of the app.

For adding buttons to the top part, I used jQuery to get the value from input and then create new buttons and append them to the div with buttons class. I added a data-value to each button containing the search term each is suppoed to be used for. I also changed their label with the search term.

After they press the button, I would retrieve the data from API of Giphy using jQuery AJAX and using .forEach method to create new div, new img, and new h4 tag and append each div to the content section.


Live Link

https://farid64.github.io/GrabGifs/

In this app, you can add a new button for your search of gifs from Giphy website. Simply type the name of the animal you want to find gifs related to, and then press add. It will create a new button with the search you typed. Click that button and you will 10 random gifs. They all are still. Simply click them to play each.

Requirements

Use the GIPHY API to make a dynamic web page that populates with pre-selected gif buttons and allows the user to create their own buttons through an input section on the right.
Using jQuery AJAX to call GIPHY API to retrieve different gifs for different search. 
Studying the GIPHY API and identifying the different elements of the objects related to each search.

JavaScript for arrays and functions
Jquery for DOM Manipulation
AJAX for API GET requests
CSS for layout and style of HTML elements
Code Explanation

