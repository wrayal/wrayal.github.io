angular.module('newAngularApp')
  .controller('IndexCtrl', function ($transitions) {
  	indexCtrl=this;

  	indexCtrl.name="";
  	$transitions.onSuccess({}, function(trans) {
      indexCtrl.name=trans.to().name;
  	})
  });
