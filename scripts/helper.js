class Helper {

  playPauseAndUpdate (song) {
    player.playPause(song);
    $('#time-control .total-time').text(player.prettyTime(player.getDuration(song)));
  }
};

  const helper = new Helper();
