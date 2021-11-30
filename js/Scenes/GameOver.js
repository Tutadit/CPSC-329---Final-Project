import buttons from '../Elements/buttons.js'
import { restartGame } from '../Utilities.js'

function setup() {
	buttons.restart.click(restartGame)
}

export default {
	setup
}