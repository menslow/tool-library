// Get rid of the "#" in the uri
App.Router.reopen({
  location: 'auto',
  routURL: '/'
});

App.Router.map(function() {
  this.route("patterns", { path: "/patterns" });
})