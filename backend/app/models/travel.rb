class Travel < ApplicationRecord
    has_one_attached :image

    def image_url
        rails.application.routes.url_helpers.url_for(image) if image.attached?
    end
end
