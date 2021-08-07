import { Controller } from "stimulus"
import { currentPlayer } from "../helpers/current_player"

export default class extends Controller {
  dropBox() {
    
    if ( this.element.id == currentPlayer().dom_id ) {
      
    } else {
      this.element.insertAdjacentHTML('beforeend', "<div class='w-40 h-40 bg-white'></div>")
    }
  }
}
