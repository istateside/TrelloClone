json.(list, :title, :board_id, :ord)

json.cards list.cards do |json, card|
  json.partial! card
end