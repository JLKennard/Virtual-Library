const { Media } = require("./Media");

class Music extends Media {
  constructor(title, year, genre, artist, length) {
    super(title, year, genre);
    this.artist = artist;
    this.length = length;
  }
  summary() {
    return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`;
  }
  static shortestAlbum(album) {
    let shortest = album[0];
    let shortestLength = album[0].length;
    for (let i = 1; i < album.length; i++) {
      if (album[i].length < shortestLength) {
        shortest = album[i];
        shortestLength = album[i].length;
      }
      return shortest;
    }
  }
}

module.exports = { Music };
