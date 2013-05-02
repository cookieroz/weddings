class Service < ActiveRecord::Base
   attr_accessible :name, :content, :service_image_attributes

   has_one :service_image, as: :imageable, class_name: "Photo"

   accepts_nested_attributes_for :service_image

   extend FriendlyId
   friendly_id :name, use: [:slugged, :history]
end
