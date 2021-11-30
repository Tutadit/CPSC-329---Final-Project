//-------------------------------------
// Title Scene
//-------------------------------------

import buttons from '../Elements/buttons.js'
import scenes from '../Elements/scenes.js'

import {showScenesInOrder} from '../Utilities.js'

function setup() {
	buttons.title.start.click(startGame)
}

function startGame() {
	showScenesInOrder([
		scenes.sleep,
		scenes.awake,
		scenes.home
	])
}

export default {
	setup
}