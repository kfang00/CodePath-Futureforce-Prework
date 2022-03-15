// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

//Global Constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [2, 2, 4, 5, 3, 2, 1, 2, 4, 6];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var lives = 3; //mistakes allowed

function startGame() {
  //initialize game variables
  lives = 3; //3 strikes
  progress = 0;
  gamePlaying = true;
  clueHoldTime = 1000; 
  generatePattern();
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function generatePattern() { //random secret pattern
  for(let i = 0; i < pattern.length; i++) {
    pattern[i] = Math.floor((Math.random() * 6) + 1);
  }
}

function lightButton(btn) {
  document.getElementById("button"+btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button"+btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime;
  for (let i = 0; i <= progress; i++) {
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue, delay, pattern[i])
    delay += clueHoldTime
    delay += cluePauseTime;
  }
  clueHoldTime -= 50; // speeding up every turn
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }
  if(btn != pattern[guessCounter]) {
    if (lives == 1) {
      document.getElementById("heart1").classList.add("hidden-img");
      loseGame();
    } else if (lives == 2) {
      document.getElementById("heart2").classList.add("hidden-img");
      lives--;
      alert("Oh No! Only one life left :(")
      clueHoldTime += 50;
      playClueSequence();
    } else {
      document.getElementById("heart3").classList.add("hidden-img");
      lives--;
      alert("Wrong! Try the sequence again!")
      clueHoldTime += 50;
      playClueSequence();
    }
  } else {
    guessCounter++;
  }
  if (guessCounter == pattern.length) {
    winGame();
  } else if (guessCounter == progress + 1){
    progress++;
    playClueSequence();
  }
  
}

function winGame() {
  stopGame();
  alert("Game Over! You won :)")
}

function loseGame() {
  stopGame();
  alert("Game Over! You lost :(")
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("heart1").classList.remove("hidden-img");
  document.getElementById("heart2").classList.remove("hidden-img");
  document.getElementById("heart3").classList.remove("hidden-img");
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 370,
  4: 450.2,
  5: 550,
  6: 690.2
}
function playTone(btn,len){ 
  document.getElementById("img"+btn).classList.remove("hidden-img");
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone(btn)
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    document.getElementById("img"+btn).classList.remove("hidden-img");
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(btn){
  document.getElementById("img"+btn).classList.add("hidden-img");
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)