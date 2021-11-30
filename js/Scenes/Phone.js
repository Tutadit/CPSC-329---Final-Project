import SPAM_CALL_DIALOG from '../CallScript.js'
import PhoneCall from '../PhoneCall.js'
import buttons from '../Elements/buttons.js'
import scenes from '../Elements/scenes.js'
import explanations from '../Elements/explanations.js'

import { getSceneHandler, showScene, levelPassed, gameOver } from '../Utilities.js'
//-------------------------------------
// Phone Scene
//-------------------------------------

let call = null;

function setup() {
	addPhoneHomeHandlers()
	addCallHandlers()
	call = new PhoneCall(SPAM_CALL_DIALOG)
}

function addPhoneHomeHandlers() {
	let btns = buttons.phone.home;
	btns.accept.click(
		startCall
	)
	btns.reject.click(
		getSceneHandler(scenes.phone.rejectcall)
	)
}

function addCallHandlers() {
	buttons.phone.call.end.click(endCall)
}

function startCall() {
	showScene(scenes.phone.acceptcall)
	call.start()
}

function endCall() {
	call.end()
	levelPassed(explanations.phone.success)
}

export default {
	setup
}
