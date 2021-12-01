
import { goToTitlePage } from './Utilities.js'
import scenes from './Elements/scenes.js'
import buttons from './Elements/buttons.js'
import Title from './Scenes/Title.js'
import Home from './Scenes/Home.js'
import Text from './Scenes/Text.js'
import Email from './Scenes/Email.js'
import Mocha from './Scenes/Mocha.js'
import Phone from './Scenes/Phone.js'
import GameOver from './Scenes/GameOver.js'
import Success from './Scenes/Success.js'
//
//---------------------------------------------------------------
// Main Code
//---------------------------------------------------------------
//


// When ready, run main()
$(document).ready(main)

// Function called when document
// is ready
function main() {
	addHandlers()
}

// Bind all neccessary event handlers
function addHandlers() {

	buttons.title_page.click(
		goToTitlePage
	)

	Title.setup()
	Home.setup()
	Text.setup()
	Email.setup()
	Mocha.setup()
	Phone.setup()
	GameOver.setup()
	Success.setup()
}