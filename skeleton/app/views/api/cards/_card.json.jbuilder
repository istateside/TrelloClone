json.(card, :title, :list_id, :ord, :description, :created_at, :updated_at)

json.items card.items do |json, item|
  json.partial! item
end