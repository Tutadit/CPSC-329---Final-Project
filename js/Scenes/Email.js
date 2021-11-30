import buttons from '../Elements/buttons.js'
import scenes from '../Elements/scenes.js'
import explanations from '../Elements/explanations.js'

import { getSceneHandler, showScene, levelPassed, gameOver } from '../Utilities.js'
//-------------------------------------
// Email Scene
//-------------------------------------

function setup() {
	addEmailHomeHandlers()
	addSpamEmailHandlers()
	addRealEmailHandlers()
}

function addEmailHomeHandlers() {
	let btns = buttons.email.home;
	btns.spam.click(
		getSceneHandler(scenes.email.spam)
	) // opens spam email 
	btns.real.click(
		getSceneHandler(scenes.email.real)
	) // opens real email - 
	btns.toHome.click(
		getSceneHandler(scenes.home)
	)
}

function addSpamEmailHandlers() {
	let btns = buttons.email.spam
	btns.remove.click(deletedSpam) // Button to delete the spam email
	btns.link.click(fellForSpam) // Button to view the spam email
	btns.toEmailHome.click(spamEmailRead)
}

function spamEmailRead() {
	let scene = scenes.email.home
	scene.addClass("spam-read")
	showScene(scene)
}

function realEmailRead() {
	let scene = scenes.email.home
	console.log("boo")
	scene.addClass("real-read")
	showScene(scene)
}

function addRealEmailHandlers() {
	let btns = buttons.email.real

	btns.link.click(clickedEmailLink)
	btns.remove.click(deletedReal)

	btns.toEmailHome.click(realEmailRead)
}

function clickedEmailLink() {
	levelPassed(explanations.email.real.success)
}

function deletedReal() {
	gameOver(explanations.email.real.gameover)
}

function deletedSpam() {
	let scene = scenes.email.home
	scene.addClass("spam-deleted")
	levelPassed(explanations.email.spam.success)
}

function fellForSpam() {
	gameOver(explanations.email.spam.gameover)
}

export default {
	setup
}