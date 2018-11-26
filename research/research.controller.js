angular.module('newAngularApp')
  .controller('ResearchCtrl', function (Publications) {
  	researchCtrl=this;

  	researchCtrl.getFormattedPublication=function(whichPublication) {
  		return Publications.getFormattedPublication(whichPublication);
  	}
  });
