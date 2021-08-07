class Game < ApplicationRecord
  belongs_to :player
  belongs_to :opponent, class_name: 'Player'
  validates_presence_of :player_id, :opponent_id
  has_many :boxes
end
