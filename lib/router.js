// FlowRouter.route('/', {
//     action: function(params, queryParams) {
//         route.go('login');
//     }
// });

FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("loginLayout", {content: "login"});
  }
});

FlowRouter.route('/principal', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "mainMenu"});
  }
});