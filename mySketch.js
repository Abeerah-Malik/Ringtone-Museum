//timeline
var timeline;


//ringtones
var ringnokia;
var ringericsson;
var ringmotrola;
var ringblackberry;
var ringiphone;


//buttons
var btnnokia;
var btnericsson;
var btnmotrola;
var btnblackberry;
var btniphone;


// background color
var bg;

// Description Text
var descriptionTxt;

// Title Text
var headerTxt;

// Info text
var currentlyPlayingTxt;


function preload() {
	
 timeline = loadImage('timeline.png');

	ringnokia = loadSound('nokia.mp3');
	ringericsson = loadSound('ericsson.mp3');
	ringmotrola = loadSound('motrola.mp3'); 
	ringblackberry = loadSound('blackberry.mp3'); 
	ringiphone = loadSound('iphone.mp3'); 
}

function setup() {
	cnv = createCanvas(600, 600);

	//create slider for volume
	slider = createSlider(0, 1, 0.5, 0.01);
  slider.position(10, height - 30);
	
	
	// HTML nokia image button
	btnnokia = new imageButton("nokia.png", 100, 100);
	btnnokia.position(10, 150); // Set x and y position of the button
	btnnokia.mousePressed(nokiaBtnPressed); // play 
	btnnokia.mouseReleased(nokiaBtnReleased); // stop 

	
	// Ericsson
	btnericsson = new imageButton("ericsson.png", 120, 120);
	btnericsson.position(110, 340); 
	btnericsson.mousePressed(ericssonBtnPressed); 
	btnericsson.mouseReleased(ericssonBtnReleased); 

	
  // Motorola
	btnmotrola = new imageButton("motrola.png", 120, 120);
	btnmotrola.position(250, 130); 
	btnmotrola.mousePressed(motrolaBtnPressed); 
	btnmotrola.mouseReleased(motrolaBtnReleased); 
 

	// Blackberry
	btnblackberry = new imageButton("blackberry.png", 120, 120);
	btnblackberry.position(360, 340); 
	btnblackberry.mousePressed(blackberryBtnPressed); 
	btnblackberry.mouseReleased(blackberryBtnReleased); 
	
	//Iphone
	btniphone = new imageButton("iphone.png", 120, 120);
	btniphone.position(495, 130); 
	btniphone.mousePressed(iphoneBtnPressed); 
	btniphone.mouseReleased(iphoneBtnReleased); 


	// Title and description text
	bg = "#034078"
	headerTxt = "Ringing through Time";
	descriptionTxt = "Click each cellphone model to listen to iconic ringtones through different times!";

	// Currently playing track information on buttom
	currentlyPlayingTxt = "...";

	// set background color
	background(bg);
	
	

}

function draw() {
	// Set the background color
	background(bg);
	
//updates the volume of all songs based on slider created
	let volume = slider.value();
	ringnokia.setVolume(volume);
	ringericsson.setVolume(volume);
	ringmotrola.setVolume(volume);
	ringblackberry.setVolume(volume);
	ringiphone.setVolume(volume);
	

	
  noStroke();
	// Header Title
	textAlign(CENTER);
	textSize(30);
	textLeading(22);
	fill('#fdc500');
	text(headerTxt, 300, 50);

	// Description Text
	textAlign(LEFT);
	textSize(16);
	textLeading(22);
	fill('#fdc500');
	text(descriptionTxt, 20, 70, width - 50);

	image(timeline, 5 , 20, 550, 550);
	
	
	
	
	// Conditions to set currently playing device information
	if (ringnokia.isPlaying() == true) {
		currentlyPlayingTxt = 'Nokia';
	} 
	else if (ringericsson.isPlaying() == true) {
		currentlyPlayingTxt = 'Sony Ericsson';
	}
	else if (ringmotrola.isPlaying() == true) {
		currentlyPlayingTxt = 'Motorola';
	}
	else if (ringblackberry.isPlaying() == true) {
		currentlyPlayingTxt = 'Blackberry';
	}
	else if (ringiphone.isPlaying() == true) {
		currentlyPlayingTxt = 'Iphone';
	}
	else {
		currentlyPlayingTxt = '...'; //when nothing is playing
	}

	
	
	// Currently playing device information
	textAlign(CENTER);
	textSize(18);
	fill('#fdc500');
	text(currentlyPlayingTxt, 20, height - 50, width - 50);
}



//Nokia
function nokiaBtnPressed() {
	ringnokia.play(); // Play 
}
function nokiaBtnReleased() {
	ringnokia.stop(); // stop 
}


//Ericsson
function ericssonBtnPressed() {
	ringericsson.play(); // Play 
}
function ericssonBtnReleased() {
	ringericsson.stop(); // stop 
}


//Motorola
function motrolaBtnPressed() {
	ringmotrola.play(); // Play 
}
function motrolaBtnReleased() {
	ringmotrola.stop(); // stop 
}


//Blackberry
function blackberryBtnPressed() {
	ringblackberry.play(); // Play 
}
function blackberryBtnReleased() {
	ringblackberry.stop(); // stop 
}


//Iphone
function iphoneBtnPressed() {
	ringiphone.play(); // Play 
}
function iphoneBtnReleased() {
	ringiphone.stop(); // stop 
}


