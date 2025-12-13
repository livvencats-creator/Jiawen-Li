function go(page) {
location.href = page;
}


function selectScene(scene) {
localStorage.setItem('scene', scene);
go('genre.html');
}


function selectGenre(genre) {
localStorage.setItem('genre', genre);
go('explore.html');
}