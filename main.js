// MODEL //
var NewPosts = Backbone.Model.extend({
  url: 'http://tiny-starburst.herokuapp.com/collections/posts',
});
// END MODEL //


// COLLECTIONS //
var EveryonesStuff = Backbone.Collection.extend({
  url: 'http://tiny-starburst.herokuapp.com/collections/posts',
});
// END COLLECTIONS //

// VIEWS //
var Posts = Backbone.View.extend({
 tagName: 'section',
 template:_.template($('#postTemplate').html()),
 collection: new EveryonesStuff,

 events: {
   'click .postButton': 'sendClick'
 },

 send: function (){
   var title = this.$('.postTitle').val();
   var text = this.$('.postText').val();
   var collection = new EveryonesStuff()
   var newUser = new NewPosts()

  collection.fetch(console.log("posts"))

   var submitPost = NewPosts({
     title: title,
     text: text
   });

   submitPost.save();
 },

  sendClick: function(event){
   event.preventDefault();
   this.send();
 },

  render: function() {
    var userNewData = this.collection.toJSON();
    this.$el.html(this.template({
      userNewData: userNewData
      }));
   var postTemplate = $('#postTemplate').html();
   this.$el.html(postTemplate);
   return this;
  }
});

var blogPost = new Posts();
$('main').append(blogPost.render().el)
// END VIEWS //
