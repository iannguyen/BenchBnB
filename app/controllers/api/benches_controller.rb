class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.in_bounds?(params[:boundaries])
    render :index
  end

  def create
    @bench = Bench.new(bench_params)
    if @bench.save
      render json: @bench
    else
      render json: { failures: @bench.errors.full_messages }, status: 422
    end
  end

  def show
    @bench = Bench.includes(:reviews).find(params[:id])
    if @bench
      render json: @bench
    else
      render json: { failures: @bench.errors.full_messages }, status: 422
    end
  end

  private

  def bench_params
    params.require(:bench).permit(:description, :lat, :lng, :seating, :boundaries, :image_url)
  end
end
