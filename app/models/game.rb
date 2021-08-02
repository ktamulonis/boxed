class Game < ApplicationRecord
  validates_presence_of :player_id, :opponent_id
end
