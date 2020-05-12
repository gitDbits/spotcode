class Artist < ApplicationRecord
  has_many :albums
  has_many :songs

  validates :name, presence: true
  
  has_one_attached :photo
end
