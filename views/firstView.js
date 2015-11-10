// MODEL //
var NewPosts = Backbone.Model.extend({
  url: 'tiny-starburst.herokuapp.com/collections/posts',
});
// END MODEL //


// VIEWS //
var Posts = Backbone.View.extend({
 tagName: 'section',
 className: 'form',
 template:_.template($('#postTemplate').html()),

 events: {
   'click .postButton': 'handleClick'
 },

 send: function (){
   var title = this.$('.postTitle').val();
   var text = this.$('.postText').val();

   var submitPost = new App.Model.Posts({
     title: title,
     text: text
   });
   console.log(submitPost);
   newPost.save();
 }

 handleClick: function(event){
   event.preventDefault();
   this.send();
 }

 render: function() {
   var postTemplate = $('#postTemplate').html();
   this.$el.html(postTemplate);
   console.log('Post Page, rendered.')
   return this;
  }
});

var blogPost = new App.View.Posts();
$('main').append(blogPost.render().$el)
// END VIEWS //
