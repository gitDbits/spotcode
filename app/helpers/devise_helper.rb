# frozen_string_literal: true

module DeviseHelper
  def devise_error_messages!
    return '' if resource.errors.empty?
    messages = resource.errors.full_messages.map { |msg| content_tag(:li, msg) }.join
    html = <<-HTML
  <div class="notification is-danger" role="alert">
    <strong>
      #{pluralize(resource.errors.count, '')} erros encontrados :(
    </strong>
    #{messages}
  </div>
    HTML

    html.html_safe
  end
end
