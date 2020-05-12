class AddArtistRefToSong < ActiveRecord::Migration[6.0]
  def change
    add_reference :songs, :artist, foreign_key: true
  end
end
