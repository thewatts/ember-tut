App = Ember.Application.create();

App.Router.map(function(){
  this.resource('artists', function() {
    this.route('songs', { path: ':slug' });
  });
});

App.ArtistsRoute = Ember.Route.extend({
  model: function() {
    return App.Artists;
  }
});

App.ArtistsSongRoute = Ember.Route.extend({
  model: function(params) {
    return App.Artists.findProperty('slug', params.slug);
  }
});

App.Artist = Ember.Object.extend({
  name: null,

  slug: function() {
    return this.get('name').dasherize();
  }.property('name'),

  songs: function() {
    return App.Songs.filterProperty('artist', this.get('name'));
  }.property('name', 'App.Songs.@each.artist')
});

App.Song = Ember.Object.extend({
  title: null,
  rating: null,
  artist: null
});

var artistNames = [
  'Pearl Jam', 'Led Zeppelin', 'Foo Fighters', 'Kaya Project',
  'Radiohead', 'Red Hot Chili Peppers'];

App.Artists = artistNames.map(function(name) {
  return App.Artist.create({name: name});
});

App.Songs = Ember.A();

// Pearl Jam songs
App.Songs.pushObject(App.Song.create({title: 'Yellow Ledbetter', artist: 'Pearl Jam', rating: 10}));
App.Songs.pushObject(App.Song.create({title: 'Animal', artist: 'Pearl Jam', rating: 8}));
App.Songs.pushObject(App.Song.create({title: 'Daughter', artist: 'Pearl Jam', rating: 10}));
App.Songs.pushObject(App.Song.create({title: 'State of Love and Trust', artist: 'Pearl Jam', rating: 9}));
App.Songs.pushObject(App.Song.create({title: 'Immortality', artist: 'Pearl Jam', rating: 6}));
App.Songs.pushObject(App.Song.create({title: 'Alive', artist: 'Pearl Jam', rating: 6}));
App.Songs.pushObject(App.Song.create({title: 'Given to Fly', artist: 'Pearl Jam', rating: 7}));
App.Songs.pushObject(App.Song.create({title: 'Inside Job', artist: 'Pearl Jam', rating: 9}));

// Led Zeppelin songs
App.Songs.pushObject(App.Song.create({title: 'Black Dog', artist: 'Led Zeppelin', rating: 8}));
App.Songs.pushObject(App.Song.create({title: 'Achilles Last Stand', artist: 'Led Zeppelin', rating: 10}));
App.Songs.pushObject(App.Song.create({title: 'Immigrant Song', artist: 'Led Zeppelin', rating: 7}));
App.Songs.pushObject(App.Song.create({title: 'Whole Lotta Love', artist: 'Led Zeppelin', rating: 7}));

// Foo Fighters songs
App.Songs.pushObject(App.Song.create({title: 'The Pretender', artist: 'Foo Fighters', rating: 6}));
App.Songs.pushObject(App.Song.create({title: 'Best of You', artist: 'Foo Fighters', rating: 10}));

// Kaya Project songs
App.Songs.pushObject(App.Song.create({title: "Always Waiting", artist: "Kaya Project", rating: 9}));
