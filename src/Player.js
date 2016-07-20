function Player() {}

function factorial(num) {
	if (num == 0) {
		return 1;
	} else {
		return num * factorial(num-1);
	}
}

function string(something){
	return something.toUpperCase();
}


function add(x, y) {
    return x + y;
}

Player.prototype.play = function(song) {
    this.currentlyPlayingSong = song;
    this.isPlaying = true;
};

Player.prototype.pause = function() {
    this.isPlaying = false;
};

Player.prototype.resume = function() {
    if (this.isPlaying) {
        throw new Error("song is already playing");
    }

    this.isPlaying = true;
};

Player.prototype.makeFavorite = function() {
    this.currentlyPlayingSong.persistFavoriteStatus(true);
};
