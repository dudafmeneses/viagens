# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Travel.create(
    nome: Faker::Travel::Airport.name(size: 'large', region: 'united_states'),
    desc: Faker::TvShows::BrooklynNineNine.character,
    data: Faker::Date.between(from: 2.days.ago, to: Date.today),
    price: Faker::Number.normal(mean: 50, standard_deviation: 3.5),
)

puts Travel.last