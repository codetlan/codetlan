// Estamos ocupando iron-router mrt add iron-router --repoPort=443

Router.configure({
	layout: 'layout',
	loadingTemplate:'loading',
	notFoundTemplate:'not_found'
});

Router.map(function () {
	this.route('landing_page',{
		path:'/',
		// controller:'PostShowController',
		// action:'show'
	});
});

ApplicationController = RouteController.extend({

});
PostShowController = ApplicationController.extend({
	template: 'postShow',
	before :function () {
		var _id =  this.params._id;

		if(App.subs.post){
			App.subs.post.stop();
		}
		App.subs.post = Meteor.subscribe('post',_id);
	},
	waitOn : function () {
		return App.subs.post;
	},

	data : function () {
		return Post.findOne({ _id : this.params._id});
	},

	run : function () {
		this.render();
		
		this.render({
			postShowSidebar:{ to : 'sidebar', waitOn : null}
		});
	}
});