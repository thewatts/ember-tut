App = Ember.Application.create();

App.Song = Ember.Object.extend({
  title: null,
  rating: null,
  artist: null
});

App.SongCollection = Ember.ArrayProxy.extend(Ember.SortableMixin,
  {
    sortProperties: ['rating'],
    sortAscending: false,
    content: []
  }
);

App.Songs = App.SongCollection.create();

var blackDog = App.Song.create({
     title: "Black Dog",
    artist: "Led Zepplin",
    rating: 8
});
var yellowLedbetter = App.Song.create({
     title: "Yellow Ledbetter",
    artist: "Pearl Jam",
    rating: 10
});
var thePretender = App.Song.create({
     title: "The Pretender",
    artist: "Foo Fighters",
    rating: 6
});

App.Songs.pushObject(blackDog);
App.Songs.pushObject(yellowLedbetter);
App.Songs.pushObject(thePretender);

App.alwaysWaiting = App.Song.create({
  title: "Always Waiting",
  artist: "Kaya Project",
  rating: 9
});
