class Song < ApplicationRecord
  belongs_to :album
  belongs_to :artist

  validates  :title, presence: true
  has_one_attached :file
end
