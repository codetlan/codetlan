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
	this.route('courses',{
		path:'/courses',
		controller:'CoursesListController'
	});
	this.route('course_show',{
		path:'/courses/:_id',
		controller:'CourseShowController'
	});
});
