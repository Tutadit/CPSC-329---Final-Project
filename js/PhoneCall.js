import { getRandomInt, gameOver } from './Utilities.js'
import explanations from './Elements/explanations.js'

const WORDS_PER_MINUTE = 300
const VARIATION = 54
const PAUSE = 150

const ELIPSIS_LOOP_TIME = 100

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
		for (let i = 0; i < this.timeouts.length; i++) {
			clearTimeout(this.timeouts[i])
		}
		this.timeouts = []
		this.dialog = this.root
		this.current_dot = 0;
		if (this.elipsis_interval)
			clearInterval(this.elipsis_interval)
		blob_dialog.empty()
		caller_dialog.empty()
	}

	presentSpamSpeech() {
		blob_dialog.empty()
		caller_dialog.empty()
		this.current_dot = 0;
		if (this.elipsis_interval)
			clearInterval(this.elipsis_interval)
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
		let words = the_words.map((word, i) =>
			'<span class="caller-dialog-word word-'
			+ i + '">' + word + '</span>'
		)
		let timeout_id = null;

		let elipsis = '. . .'.split(" ").map((dot, i) =>
			'<span class="elipsis-dot elipsis-dot-' + i + '">.</span>').join("")


		words = [...words,
		'<span class="caller-dialog-word elipsis word-'
		+ words.length + '">' + elipsis + '</span>'
		]

		caller_dialog.html(words.join(" "))

		let total_duration = 0

		for (let word in words) {
			const word_index = parseInt(word);
			const word_element = $('.word-' + word_index)
			const prev_element = $('.word-' + (word_index - 1))
			const prev_text = prev_element.text()

			let duration = prev_text !== 'Mr.' && /^.*[\.\!\,\?]$/.test(prev_text) ?
				WORDS_PER_MINUTE + PAUSE : WORDS_PER_MINUTE
			duration += getRandomInt(VARIATION)

			timeout_id = setTimeout(function () {
				$(".caller-dialog-word").removeClass("active")
				word_element.addClass("active")[0]
					.scrollIntoView({
						behavior: "smooth",
						block: "center"
					})

				if (word_element.text() === '...') {
					console.log(this.elipsisInterval)
					this.elipsis_interval = setInterval(this.elipsisInterval.bind(this),
						ELIPSIS_LOOP_TIME)
				}
			}.bind(this), total_duration + duration)
			total_duration += duration
			this.timeouts.push(timeout_id)
		}

		timeout_id = setTimeout(onFinish, total_duration + 500)
		this.timeouts.push(timeout_id)
	}


	// Animate elipsis
	// 
	// This function is ran every ELIPSIS_LOOP_TIME milliseconds	
	elipsisInterval() {
		const elipsis_element = $(".elipsis")
		const elipsis_dot = $(".elipsis-dot")

	}

}