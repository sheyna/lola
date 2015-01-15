function getInventory(albumNumber) {
  var url = "inventory.json";
  $.getJSON(url, function(data) {
    var albums = data;
    var albumFigure = '<figure><img src="' + albums[albumNumber].imageURL + '"';
    var albumFigureAlt = 'alt="' + albums[albumNumber].imageAlt + '"';
    var albumClass = 'class="winner">';
    var albumFigCaption = '<figcaption>' + albums[albumNumber].caption + '</figcaption>';
    var albumCloseFig = '</figure>';
    $('#RecommendedAlbum').append(albumFigure + albumFigureAlt + albumClass + albumFigCaption + albumCloseFig);
    $('#RecommendedAlbum').append('<p class="description">' + albums[albumNumber].description + '</p>');
    var albumBtnStart = '<button>';
    var albumBtnLink = '<a href="' + albums[albumNumber].youTubeURL + '">Find</a>';
    var albumBtnClose = '</button>';
    $('#RecommendedAlbum').append(albumBtnStart + albumBtnLink + albumBtnClose);
  });
};
