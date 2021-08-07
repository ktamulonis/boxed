import { Controller } from "stimulus"
import { currentPlayer } from "../helpers/current_player"
import { get } from '@rails/request.js'

export default class extends Controller {
  static values = {
    createUrl: String,
    deleteUrl: String,
  }

  connect(){
    this.createBox()
  }
  async createBox(){
    const response = await get(this.createUrlValue)
  }
}