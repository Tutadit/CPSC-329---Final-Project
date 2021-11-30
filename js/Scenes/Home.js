import { getSceneHandler } from '../Utilities.js'
import buttons from '../Elements/buttons.js'
import scenes from '../Elements/scenes.js'
import Mocha from './Mocha.js'
//-------------------------------------
// Home Scene
//-------------------------------------

export function setup() {
	let btns = buttons.home
	btns.messages.click(
		getSceneHandler(scenes.text.home)
	)
	btns.email.click(
		getSceneHandler(scenes.email.home)
	)
	btns.phone.click(
		getSceneHandler(scenes.phone.home)
	)

	btns.mocha.click(
		Mocha.start
	)
}

export default {
	setup
}