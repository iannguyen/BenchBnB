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
      render json: @bench
    else
      render json: { failures: @review.errors.full_messages }, status: 422
    end
  end

  def show
    @review = Review.includes(:bench).find(params[:id])
  end

  private

  def review_params
    params.require(:review).permit(:bench_id, :body)
  end
end
