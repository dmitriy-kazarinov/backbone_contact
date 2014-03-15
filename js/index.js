//fast validade
jQuery('.name1').keyup(function(){
	var name1 = jQuery('.name1').val();
	if(name1 == ""){
		jQuery('.button_go').attr("disabled","true");
	}else{
		jQuery('.button_go').removeAttr('disabled');
	}
});



function myFunction(){
jQuery('#contacts').append(
(function ($) {

    var contacts = [
        { name: $('.name1').val(), address: $('.adress').val(), tel: $('.telephone').val(), email: $('.mail_to').val(), type: $('.choise').val() }
    ];
	
	var Contact = Backbone.Model.extend({
		defaults: {
			photo: "../img/placeholder.jpg"
		}
	});
	
	var Directory = Backbone.Collection.extend({
		model: Contact
	});
	
	var ContactView = Backbone.View.extend({
		tagName: "div",
		className: "contact-container",
		template: $("#contactTemplate").html(),

		render: function () {
			var tmpl = _.template(this.template);

			this.$el.html(tmpl(this.model.toJSON()));
			return this;
		}
	});
	
	var DirectoryView = Backbone.View.extend({
		el: $("#contacts"),

		initialize: function () {
			this.collection = new Directory(contacts);
			this.render();
			
		},

		render: function () {
			var that = this;
			_.each(this.collection.models, function (item) {
				that.renderContact(item);
			}, this);
		},

		renderContact: function (item) {
			var contactView = new ContactView({
				model: item
			});
			this.$el.append(contactView.render().el);
		}
	});
	
	var directory = new DirectoryView();
	
} (jQuery))

);


	console.log(contacts[contacts.length] = { name: $('.name1').val(), address: $('.adress').val(), tel: $('.telephone').val(), email: $('.mail_to').val(), type: $('.choise').val() }
	);
	
	

//обнулить импуты
$('.name1').val("");
$('.adress').val("");
$('.telephone').val("");
$('.mail_to').val("");
jQuery('.button_go').attr("disabled","true");




};


	
	