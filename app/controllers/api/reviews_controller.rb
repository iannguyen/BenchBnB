class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.all
    render json: @reviews
  end

  def new
    @review = Review.new(review_params)
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      @bench = Bench.includes(:reviews).find(@review.bench_id)
      render 'api/benches/show'
    else
      render json: { failures: @review.errors.full_messages }, status: 422
    end
  end

  def show
    @review = Review.includes(:bench).find(params[:id])
  end

  private

  def review_params
    params.require(:review).permit(:bench_id, :username, :body)
  end
end
