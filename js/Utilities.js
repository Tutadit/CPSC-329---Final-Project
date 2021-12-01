import scenes from './Elements/scenes.js'
import explanations from './Elements/explanations.js'
import buttons from './Elements/buttons.js'

const MESSAGE_DELAY = 800 //ms
//
//---------------------------------------------------------------
// Utility Functions
//---------------------------------------------------------------
//
// Here we define various utility functions used througout 
// the application.


// Hide all scenes and show the 
// provided scene.
//
// scene: A JQuery object of the scene element to
//     show. 
export function showScene(scene) {
	scenes.all.addClass("hidden")
	scene.removeClass("hidden")
}

export function showExplanation(explanation) {
	explanations.all.addClass("hidden")
	explanation.removeClass("hidden")
}

// Show each scene in scenes one at a time
// showing each scene for time_between_scenes
// milliseconds.
//
// scenes: An array of scenes, where each scene is a 
//      JQuery object of the scene element.
//
// time_between_scenes: How long each scene will be displayed
//            (in milliseconds)
//      
export function showScenesInOrder(the_scenes, onFinish) {
	let time_between_scenes = 1200;

	if (!Array.isArray(the_scenes)) return;

	the_scenes.forEach(function (scene, index) {
		setTimeout(function () {
			showScene(scene)
		}, time_between_scenes * index)
	})

	setTimeout(onFinish, time_between_scenes * the_scenes.length)
}

// Returns an event handler that 
// will show the scene
//
// scene: A JQuery object of the scene element to
//     show. 
export function getSceneHandler(scene) {
	return function () {
		showScene(scene)
	}
}

// Returns a random integer between 0 and max
//
// max: The maximum integer
export function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

export function gameOver(explanation) {
	showScene(scenes.gameover)
	setTimeout(function () {
		scenes.gameover.addClass("blurr")
		showExplanation(explanation)
	},MESSAGE_DELAY)		
}


export function levelPassed(explanation) {
	showScene(scenes.success)
	setTimeout(function () {
		scenes.success.addClass("blurr")
		showExplanation(explanation)
	},MESSAGE_DELAY)		
}

export function restartGame() {
	showScene(scenes.title);
	explanations.all.addClass("hidden")
	scenes.all.removeClass("blurr read deleted spam-read spam-deleted real-read")
}

export function continueGame() {
	scenes.all.removeClass("blurr")
	explanations.all.addClass("hidden")
	showScene(scenes.home)	
}

export function showTitleButton() {
	buttons.title_page.removeClass("hidden");
}

export function hideTitleButton() {
  buttons.title_page.addClass("hidden");
}

export function goToTitlePage() {
	hideTitleButton()
	showScene(scenes.title)
}