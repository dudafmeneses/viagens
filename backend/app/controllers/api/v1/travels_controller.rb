class Api::V1::TravelsController < ApplicationController
  def index
    @travels = Travel.all
    render json: @travels
  end

  def show
  end

  def create
    @travel = Travel.new(travel_params)
    if @travel.save
      render json: @travel
    else
      render json: {errors: @travel.errors, messade: "deu errado"}, status: :unprocessable_entity
    end
  end

  def update
  end

  def destroy
    @travel = Travel.find(params[:id])
    @travel.destroy
    render json:{message: "Sua mensagem foi deletada com sucesso!"}
  end
  private
  def travel_params
    params.require(:travel).permit(:nome,:data,:price,:desc)
  end
end
