(function(root) {
  'use strict';

  root.ApiActions = {
    receiveAll: function(benches) {
      AppDispatcher.dispatch({
        actionType: BenchConstants.BENCHES_RECEIVED,
        benches: benches
      });
    },
    receiveSingleBench: function(bench) {
      AppDispatcher.dispatch({
        actionType: BenchConstants.BENCH_RECEIVED,
        bench: bench
      });
    },
    receiveSingleReview: function(review) {
      AppDispatcher.dispatch({
        actionType: BenchConstants.REVIEW_RECEIVED,
        review: review
      });
    }
  };

})(this);
