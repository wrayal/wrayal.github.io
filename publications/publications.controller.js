angular.module('newAngularApp')
  .controller('PublicationsCtrl', function (Publications) {
  	publicationsCtrl=this;

  	publicationsCtrl.getAllPublications=function() {
  		return Publications.getAllPublicationsAsArray();
  	}

  	publicationsCtrl.getAllTalks=function() {
  		return Publications.getAllTalksAsArray();
  	}

  	publicationsCtrl.formatPublication=function(publicationObject) {
  		return Publications.formatPublication(publicationObject);
  	}

  	publicationsCtrl.formatTalk=function(talkObject) {
  		return Publications.formatTalk(talkObject);
  	}
  });