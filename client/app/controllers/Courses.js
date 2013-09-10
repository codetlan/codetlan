CoursesListController = RouteController.extend({
	template: 'courses_list',
	waitOn : function () {
		return App.subs.courses;
	},

	data : {
		courses: function () {
			return Courses.find({},{sort:{order:1}});
		}	
	}	
});

CourseShowController = RouteController.extend({
	template: 'course_show',
	before :function () {
		var _id =  this.params._id;

		if(App.subs.course){
			App.subs.course.stop();
		}
		App.subs.course = Meteor.subscribe('course',_id);
	},
	waitOn : function () {
		return App.subs.course;
	},

	data :  function () {
		return Courses.findOne({ _id : this.params._id});	
	},
	run : function () {
		this.render();
	}	
});