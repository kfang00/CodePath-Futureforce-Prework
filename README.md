# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Kayla Fang**

Time spent: **5-6** hours spent in total

Link to project: https://glitch.com/edit/#!/light-and-sound-memory-game-codepath-prework

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] The buttons are responsive to smaller screens (3 columns to 2 columns)
- [x] Alerts for mistakes and added 3 hearts above the buttons to represent 3 lives (the amount decreases with each mistake)

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

**Light and Sound - Top & Basic Features**

![Light and Sound - Top](https://github.com/kfang00/CodePath-Prework/blob/main/gifs/Light%20and%20Sound%20-%20Top.gif?raw=true)

**Light and Sound - Fail**

![Light and Sound - Fail](https://github.com/kfang00/CodePath-Prework/blob/main/gifs/Light%20and%20Sound%20-%20Fail.gif?raw=true)

**Light and Sound - Success Part 1**

![Light and Sound - Success 1](https://github.com/kfang00/CodePath-Prework/blob/main/gifs/Light%20and%20Sound%20-%20Success%201.gif?raw=true)

**Light and Sound - Success Part 2**

![Light and Sound - Success 2](https://github.com/kfang00/CodePath-Prework/blob/main/gifs/Light%20and%20Sound%20-%20Success%202.gif?raw=true)

**Light and Sound - Responsive**

![Light and Sound - Responsive](https://github.com/kfang00/CodePath-Prework/blob/main/gifs/Light%20and%20Sound%20-%20Responsive.gif?raw=true)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

    I ended up using the w3schools site to refresh my knowledge on how to style certain elements.  For instance, I didn’t remember how to do a box shadow.  Furthermore, I also used these two specific links to gain a better understanding of media queries and how Javascript Random works:
https://www.w3schools.com/css/css3_mediaqueries.asp
https://www.w3schools.com/js/js_random.asp

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

    I ran into an issue when I was implementing the optional features.  I wanted to make the game more personalized so I attempted to spruce up my buttons with images.  I was able to place them in correctly and resize them, but the buttons would no longer align correctly.  I could’ve made all the images the same size, but the objects in the images would not be.  I was messing with the sizes, margins, and padding for a while, but it wasn’t working.  The buttons would stubbornly remain staggered.  However, since the objects in the images were not the same sizes, the next thing I attempted to do was crop the image.  I consulted the internet and found that you could wrap an image in a div.  Set the div to a certain width and height and then hide the overflow.  I managed to get the cropping working but it was still not solving the issue.  So far I’ve only been messing with the image, so I tried thinking about this from a different angle and removed the cropping.  What if I just changed the way I laid out the buttons?  I ended up changing the buttons to use a grid layout with 3 columns, and it worked!  Furthermore, in order to make it more responsive, the grid would change to 2 columns on smaller screens.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

    There are several questions that I have after completing my submission.  Even though I have experience with HTML and CSS, I haven’t really experimented with vanilla JS so I really liked learning about it in this project.  The questions that I have are, “Are there any companies that create their websites using vanilla JS or do most of them use JS libraries like React?” and “What are the benefits of using either?”  The other questions I have pertain to website organization: “How can I arrange the elements on the screen to make it more intuitive for the user and to draw attention to the desired areas?”

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

    If I had a few more hours to work on this project, I would implement the last two optional features which are the ticking clock and the personalized sound effects.  I have never used audio before in my previous projects so I would like to experiment more with it.  My current theme is fruits, but with more time, I would flush out my theme more and find sounds that are compatible.  It would also be nice to add levels in which the clue playback gets faster and faster and the sequences get longer.  I believe the game would be more fun that way.  Finally, I would make my own pop ups instead of using the alert function as that would be more aesthetically pleasing.


## Interview Recording URL Link

[My 5-minute Interview Recording](https://youtu.be/5_8xhX9JhFs)


## License

    Copyright Kayla Fang

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
