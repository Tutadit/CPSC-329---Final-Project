import buttons from '../Elements/buttons.js'
import scenes from '../Elements/scenes.js'

import { getSceneHandler, showScene } from '../Utilities.js'
//----------
//  mocha handler
//-----------
const COMMAND = "ssh mocha"
const TIME_BETWEEN_CHARS = 200 //ms
const TIME_BETWEEN_BLINK = 400 //ms
const BLINKS = 3
const FINAL_PAUSE = 400 //ms

const shell = $("#mocha-shell")
const prompt = $("#shell-prompt")
const command = $("#shell-command")
const cursor = $("#shell-cursor")

function setup() {
	let btn = buttons.mocha.home
	btn.click(getSceneHandler(scenes.home))
}

function start() {
	showScene(scenes.mocha)
	typeCommand({
		onFinish: function () {
			blinkCursor({
				onFinish: function () {
					shell.addClass("hidden")
				}
			})
		}
	})
}

// Make the cursor blink a couple times
//
// onFinish will be called when animation is complete

function blinkCursor({ onFinish }) {
	for (let i = 0; i < BLINKS * 2; i++) {
		setTimeout(function () {
			if (i % 2 === 0)
				cursor.addClass("hidden");
			else
				cursor.removeClass("hidden");
		}, TIME_BETWEEN_BLINK * i);
	}
	const multiplier = BLINKS * 2
	setTimeout(onFinish, TIME_BETWEEN_BLINK * multiplier)
}

// Animate the typing of the command COMMAND
//
// onFinish will be called when animation is complete
//
function typeCommand({ onFinish }) {
	// command.text(content) 
	//COMMAND.substr(start, end) end is non-inclusive, start and end are indices of the string
	for (let i = 0; i < COMMAND.length; i++) {
		setTimeout(function () {
			command.text(COMMAND.substr(0, i + 1))
		}, TIME_BETWEEN_CHARS * i)
	}
	setTimeout(onFinish, TIME_BETWEEN_CHARS * COMMAND.length)
}

export default {
	setup,
	start
}
