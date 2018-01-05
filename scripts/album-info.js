{
  $('#album-title').text(album.title);
  $('img#album-cover-art').attr('src', album.albumArtUrl);
  $('div#release-info').text(album.releaseInfo);
  $('.artist').text(album.artist);
}
