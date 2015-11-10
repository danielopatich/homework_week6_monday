// COLLECTION //
var App.Collection.Posts = Backbone.Collection.extend({
  url: 'tiny-starburst.herokuapp.com/collections/posts',
  model: App.Model.Posts
});
// END COLLECTION //
