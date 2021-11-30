export default {
	all: $(".scene"),
	title: $("#title"),
	sleep: $("#sleep"),
	awake: $("#awake"),
	mocha: $("#mocha-screen"),
	home: $("#home-screen"), // Main phone home screen
	gameover: $("#game-over"), // Game over screen
  success: $("#level-passed"), // Success screen
	text: {
		home: $("#text-home"), // Text home screen
		spam: $("#text-message"), // Scam text message  
	},
	phone: {
		home: $("#phone-home"), // Incoming phonecall
		acceptcall: $("#phone-answer"), // Accepted call scene
		rejectcall: $("#home-screen"),
	},
	email: {
		home: $("#email-home"), // Email home screen
		real: $("#real-email-screen"), // real email
		spam: $("#scam-email-screen"),// spam email
	},
}