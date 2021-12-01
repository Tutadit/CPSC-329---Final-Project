//-------------------------------------
// Title Scene
//-------------------------------------

import buttons from '../Elements/buttons.js'
import scenes from '../Elements/scenes.js'

import {showScenesInOrder, getSceneHandler, hideTitleButton, showTitleButton, showScene } from '../Utilities.js'

function setup() {
	let btns = buttons.title
	btns.start.click(startGame)
	btns.tutorial.click(showTutorial)
  btns.citations.click(showCitations)
  hideTitleButton()
}

function showTutorial() {
	showScene(scenes.tutorial)
	showTitleButton()
}

function showCitations() {
  showScene(scenes.citations)
  showTitleButton()
}

function startGame() {
	showScenesInOrder([
		scenes.sleep,
		scenes.awake,
		scenes.home
	], showTitleButton)
}

export default {
	setup
}