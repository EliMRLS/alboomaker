class Product < ApplicationRecord
  PROCESSES = {
    album: ['pages', 'plastic_id'],
    theme: ['pages', 'plastic_id'],
    tshirt: [],
    postcard: [],
    calendar: ['paper_id'],
    canvas: [],
    document: ['pages', 'paper_id', 'plastic_id', 'width', 'height', 'duplex']
  }

  CATEGORY = PROCESSES.keys.map(&:to_s)

  validates_presence_of :name, :code, :category, :cost
  validates_uniqueness_of :name
  validates_inclusion_of :category, in: CATEGORY
  validates_numericality_of :cost


  scope :with_category, ->(category) { where(category: category) }

  def online_url_id
    CGI::parse(URI.parse(online_url).query)["id"].first if online_url
  end

end
