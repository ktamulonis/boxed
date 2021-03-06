class Player < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :games
  has_many :boxes

  def in_a_game?
    self.active_game.present?
  end

  def active_game
    self.games.first ||
    Game.where( :opponent_id => self.id ).first
  end
end
