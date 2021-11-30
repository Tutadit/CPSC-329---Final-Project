import buttons from '../Elements/buttons.js'
import scenes from '../Elements/scenes.js'
import explanations from '../Elements/explanations.js'
import { getSceneHandler, gameOver, showScene, levelPassed } from '../Utilities.js'
//-------------------------------------
// Text Scene
//-------------------------------------

export function setup() {
  addTextHomeHandlers();
  addSpamTextHandlers();
}

function addTextHomeHandlers() {
  let btns = buttons.text.home

  btns.spam.click(
    getSceneHandler(scenes.text.spam)
  )
  btns.toHome.click(
    getSceneHandler(scenes.home)
  )
}

function addSpamTextHandlers() {
  let btns = buttons.text.spam

  btns.remove.click(spamTextDeleted)
  btns.link.click(fellForSpam)
  btns.toTextHome.click(backToTextHome)
}

function fellForSpam() {
	gameOver(explanations.text.gameover)
}

function backToTextHome() {
  scenes.text.home.addClass("read")
  showScene(scenes.text.home)
}

function spamTextDeleted() {	
  levelPassed(explanations.text.success);    
	scenes.text.home.addClass("deleted")
}

export default {
  setup
}