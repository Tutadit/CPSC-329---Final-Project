import buttons from '../Elements/buttons.js'
import scenes from '../Elements/scenes.js'

import { continueGame } from '../Utilities.js'

function setup() {
	buttons.cont.click(continueGame)
}

export default {
	setup
}