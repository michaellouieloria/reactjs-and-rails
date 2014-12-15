module ApplicationHelper
  def title(value)
    unless value.nil?
      @title = "#{value} | Bicolit"      
    end
  end
end
