import { getRandomInt, gameOver } from './Utilities.js'
import explanations from './Elements/explanations.js'

const WORDS_PER_MINUTE = 300
const VARIATION = 54
const PAUSE = 150

const ELIPSIS_LOOP_TIME = 400

const caller_dialog = $("#caller-dialog")
const blob_dialog = $("#blob-dialog")

export default class PhoneCall {
	constructor(dialog_tree) {
		this.root = dialog_tree
		this.dialog = dialog_tree
		this.timeouts = []
		this.current_dot = 0;
	}

	start() {
		this.presentSpamSpeech()
	}

	end() {
		this.reset()
		this.dialog = this.root
	}

	reset() {
		blob_dialog.empty()
		caller_dialog.empty()
		this.stopElipsisInterval()
		for (let i = 0; i < this.timeouts.length; i++) {
			clearTimeout(this.timeouts[i])
		}
		this.timeouts = []
	}

	presentSpamSpeech() {
		this.reset()
		const spammer_speech = this.dialog.spammer
		this.speakTheWords({
			the_words: spammer_speech.split(" "),
			onFinish: this.presentBlobResponses.bind(this)
		})
	}

	presentBlobResponses() {
		for (let response of this.dialog.responses) {
			let btn = document.createElement("button")
			btn.innerHTML = response.blob
			const next_dialog = response
			if (response.scammed)
				btn.onclick = this.onScammed
			else
				btn.onclick = function () {
					this.dialog = next_dialog
					this.presentSpamSpeech()
				}.bind(this)
			blob_dialog.append(btn)
		}
	}

	onScammed() {
		gameOver(explanations.phone.gameover)
	}

	speakTheWords({ the_words, onFinish }) {

		let timeout_id = null;
		let words = this.getWordElements(the_words)

		caller_dialog.html(words.join(" "))

		let total_duration = 0

		for (let word in words) {
			const word_index = parseInt(word);
			const word_element = $('.word-' + word_index)
			const prev_element = $('.word-' + (word_index - 1))
			const prev_text = prev_element.text()

			let duration = prev_text !==
				'Mr.' && /^.*[\.\!\,\?]$/.test(prev_text)
				? WORDS_PER_MINUTE + PAUSE
				: WORDS_PER_MINUTE

			duration += getRandomInt(VARIATION)

			timeout_id = setTimeout(function () {

				if (word_element.text() === '...')
					this.startElipsisInterval()
				else
					this.activateWord(word_element)
			}.bind(this), total_duration + duration)
			total_duration += duration
			this.timeouts.push(timeout_id)
		}

		timeout_id = setTimeout(onFinish, total_duration + 500)
		this.timeouts.push(timeout_id)
	}

	getWordElements(the_words) {
		let words = the_words.map((word, i) =>
			'<span class="caller-dialog-word word-'
			+ i + '">' + word + '</span>'
		)

		let elipsis = '. . .'.split(" ").map((dot, i) =>
			'<span class="elipsis-dot elipsis-dot-' + i + '">.</span>').join("")


		words = [...words,
		'<span class="caller-dialog-word elipsis word-'
		+ words.length + '">' + elipsis + '</span>'
		]

		return words;
	}

	activateWord(word) {
		$(".caller-dialog-word").removeClass("active")
		word.addClass("active")[0]
			.scrollIntoView({
				behavior: "smooth",
				block: "center"
			})
	}

	startElipsisInterval() {
		$(".caller-dialog-word").removeClass("active")
		this.current_dot = 0;
		this.elipsis_interval = setInterval(
			this.elipsisInterval.bind(this),
			ELIPSIS_LOOP_TIME
		)
	}

	stopElipsisInterval() {
		if (this.elipsis_interval) {
			clearInterval(this.elipsis_interval)
			this.elipsis_interval = null
		}
	}

	// Animate elipsis
	// 
	// This function is ran every ELIPSIS_LOOP_TIME milliseconds	
	elipsisInterval() {
		const elipsis_dot = $(".elipsis-dot")
		const current = $(".elipsis-dot-" + this.current_dot)
		elipsis_dot.removeClass("active")
		current.addClass("active")
		if (this.current_dot == 2)
			this.current_dot = 0
		else
			this.current_dot += 1;

	}

}