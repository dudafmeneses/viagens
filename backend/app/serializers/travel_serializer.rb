class TravelSerializer
  include JSONAPI::Serializer
  attributes :id, :desc, :price, :nome, :data, :image_url, :created_at, :update_at
end
