Rails.application.routes.draw do
  # namespace é o nome da pasta
  #resources é para pegar o conteúdo do controlador

  namespace :api do
    namespace :v1 do
      resources :travels
    end
  end

end
