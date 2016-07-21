import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './login.html'

Template.login.onCreated(function(){

});


Template.login.events({
	'submit #login-form': function(event, instance){
		event.preventDefault();
		const form = event.target;
		const username = form.username.value;
		const password = form.password.value;

		console.log(username, password);
	},
});