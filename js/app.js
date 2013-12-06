App = Ember.Application.create();

App.Song = Ember.Object.extend({
  title: null,
  rating: null,
  artist: null
});

App.Songs = Ember.A();

var blackDog = Ember.Song.create({
     title: "Black Dog",
    artist: "Led Zepplin",
    rating: 8
});
var yellowLedbetter = Ember.Song.create({
     title: "Yellow Ledbetter",
    artist: "Pearl Jam",
    rating: 10
});
var thePretender = Ember.Song.create({
     title: "The Pretender",
    artist: "Foo Fighters",
    rating: 10
});

App.Songs.pushObject(blackdog);
App.Songs.pushObject(yellowDedbetter);
App.Songs.pushObject(thePretender);

App.alwaysWaiting = App.Song.create({
  title: "Always Waiting",
  artist: "Kaya Project",
  rating: 9
});
