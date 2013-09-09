// Email.send({
//   html: Handlebars.templates['email']({ name: 'Chris' })
// });
// In your server code: define a method that the client can call
Meteor.methods({
  sendEmail: function (data) {
    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();
 
    // don’t allow sending email unless the user is logged in
    // if (!Meteor.user())
      // throw new Meteor.Error(403, “not logged in”);
 
    // and here is where you can throttle the number of emails this user
    // is allowed to send per day
 
    Email.send({
      to: 'soporte@codetlan.com',
      from: data.email,
      subject: 'Posible Cliente!!',
      text: data.comment
      // html: Handlebars.templates['contact_email'](data)
    });
  }
});