class Box < ApplicationRecord
  include ActionView::RecordIdentifier

  belongs_to :player
  belongs_to :game

  validate :player_cannot_be_opponent

  after_create_commit do
    broadcast_append_to game, target: dom_id(Player.find(self.opponent_id)), partial: 'games/box', locals: {box: self}
  end

  def player_cannot_be_opponent
    unless self.player_id != self.opponent_id
      errors.add(:player, "cant drop on self")
    end
  end
end
