import { Controller } from "stimulus"
import { currentPlayer } from "../helpers/current_player"
import { randomBackground } from "../helpers/random_color"

export default class extends Controller {
  static values = {
    createBoxUrl: String,
    deleteBoxUrl: String,
  }

  dropBox() {
    let color = randomBackground()
    let createBoxUrlWithColor = this.createBoxUrlValue + '&color=' + color
    if ( this.element.id == currentPlayer().dom_id ) {
      
    } else {
      this.element.insertAdjacentHTML('beforeend', `<div class='w-20 h-20 ${color}' data-controller='box' data-box-create-url-value='${createBoxUrlWithColor}' data-box-delete-url-value='${this.deleteBoxUrlValue}'></div>`)
    }
  }
}
