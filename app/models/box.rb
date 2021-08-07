class Box < ApplicationRecord
  include ActionView::RecordIdentifier

  belongs_to :player
  belongs_to :game

  after_create_commit do
    broadcast_append_to game, target: dom_id(player), partial: 'games/box', locals: {box: self}
  end
end
