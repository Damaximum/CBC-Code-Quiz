# CBC-Code-Quiz

This is my submission for UCSD's Coding Bootcamp Homework #4.

## Objective

The objective of this homework is to use all the Javascript and Web API learned over the week and put together a quiz challenge.

## Links 

Github: https://github.com/Damaximum/CBC-Code-Quiz

Webpage: https://damaximum.github.io/CBC-Code-Quiz/

## Screenshots

Quiz Starting Page:
![Alt text](./screenshots/1-Start.png?raw=true "Quiz Start Page")

Quiz Questions and Choices:
![Alt text](./screenshots/2-Quiz.png?raw=true "Quiz Questions and Choices")

End of Quiz/Submit Initials:
![Alt text](./screenshots/3-QuizEnd.png?raw=true "End of Quiz")

Highscores Page:
![Alt text](./screenshots/4-Highscores.png?raw=true "Highscores")

## Process

This one was a bit more open ended, so the process is quite different from the previous homework. 

### Beginning

I started off with writing down what the quiz would need to do. Then I broke them down step by step into parts that were do-able by Javascript.

### The Quiz

The core part of this entire assignment is the quiz so I started off with that. I realised that you could have objects as an array in Javascript so I started with that. I then scoured online on ways to randomly shuffle this. (At the time I didn't realise that this was not a necessity, but in my mind a quiz challenge, even if it is a bit shallow like this assignment, should still be a challenge in a sense). After several hours of looking on Google, I came upon what is known as a "Durstenfeld shuffle". I'm still trying to fully understand this, but the basic idea is to pull an item from the array and the pull another after fully removing the previously chosen one. Then it was a simple function where I pull the first object from the array via its index and attributes, then add 1 to the index number (declared in a variable) and rinse and repeat for the quiz. The next part was a little tricky and I got some inspiration from some of he class activities I did. Using the "To-Do List" activity/example from class as inspiration, I created a loop, going through the choices (which was an attribute with an array) and displaying them as a button. Then I added an eventListener to check if I clicked on a button within the area it was appended to and reading the content of it. Then I checked if it matched the answer attribute of the object and increased the score if it was correct, and decreased time if it wasn't. 

Finally I added a timer, which was quite basic.

### The HTML and CSS

When I started on the Quiz it was a basic HTML shell. Afterwards, I started forming the HTML and CSS. The HTML was designed with [display:none] in mind. I had all the different "Pages" setup on HTML all together, then hid them with a class added to them, other than the starting page, which would show as default. Then I styled the rest with CSS to make it look pretty, and possibly dynamic to varying screen sizes.

### Pseudo-windows and Buttons

This was an interesting idea I had when I was creating the quiz. Using [setAttribute] I realised I could make it a class and let CSS hide / [display:none] items for me without too much extra lines of code. This is reflected in how I designed the HTML, with each "window" being enclosed in a <section>. Then I just created one function to hide them all, and a function for each "window" to be displayed. This worked wonderfully (once I realised using querySelector to try to select all section wasn't the way to go). 

Next was the buttons. Quite a few of them were to move around on the page so they mostly just add the pseudo window functions mentioned above. The submit button, after the quiz, was probably the most complicated one so far. I added functions mentioned in the [Highscores] section of this README, but the basic idea is that, once clicked, it will check if there was an input, then using [.push] added in the new score to the array, then rearranged based on score, then finally adding to/updating the local storage. The [Clear Highscores] button used the [.clear] and setting a variable to clear the local storage and array respectively. Finally the start button. I had to go back multiple times to add new things to it and it became a bit heavy but functional. Originally it just starte up the quiz making section along with changing windows. But as I continued to code, I realised if I wanted to the re do the quiz without refreshing, several variables had to be reset. So I added a couple lines doing just that. Then I couldn't exaclty have stuff start on load (like the time) so I added those to the start button as well.

### Highscores

This one was the one that was both the most difficult and buggy part of the whole process. To start with, I knew I had to add to local storage to match teh example given, so I started there. Then I had to figure out how to save the scores that come in along with the user input. I used another array with objects for this one as well, storing the name and score as attributes. Using [stringify] I was able to add it to the local storage. 

Now the trickiest and buggiest part. Displaying the scores. For displaying the scored, I kept it rather simple (in my opinion at least) by just creating an <ol> with <li> children that displayed the name and score in a for loop, equal to the length of the highscore array that's been saved to local storage. (One bug i couldn't understand was that numbers were not appearing next to the <li> content despite not modifying them in CSS or JS, so I had to add it manually) This was all appended as a child to the div I prepared beforehand in HTML. 

One thing I realised later is that a highscore list is not a highscore list if the highest scores are not on top (DUH!). In order to fix this, I added a [.sort] function and comparator (scoured from online, still trying to fully understand it beyond the basics) that selected an object's specific attribute (in my case the score) and compared it then ordered it based on the results. This finally displayed the proper highscore list.

### Debugging

There were quite a few issues that came up as well some parts of this that I did not exactly know how to approach. Thanks to the help from my TA (Elma) and Instructor (Herm), I was able to have these questions and bugs dealt with in the office hours. I had one bug where I could not figure out, but thanks to the help of AskBCS (Andrew), I was able to get it cleared up and dealt with.