class Photo < ActiveRecord::Base
  attr_accessible :caption, :image, :remote_image_url, :remove_image,
                  :imageable_type, :image_cache

  mount_uploader :image, ImageUploader

  delegate :url, to: :image

  belongs_to :imageable, :polymorphic => true

  #one convenient method to pass jq_upload the necessary information
  #def to_jq_upload
  #  {
  #      "files" => [
  #          {
  #              "id" => id,
  #              "name" => read_attribute(:image),
  #              "size" => image.size,
  #              "url" => image.url,
  #              "thumbnail_url" => image.thumb.url,
  #              "delete_url" => photo_path(:id => id),
  #              "delete_type" => "DELETE"
  #          }
  #      ]
  #  }
  #end
end
