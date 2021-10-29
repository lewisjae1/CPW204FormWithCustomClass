var VideoGame = (function () {
    function VideoGame() {
    }
    return VideoGame;
}());
window.onload = function () {
    var addBtn = document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
};
function addVideoGame() {
    if (isAllDataValid()) {
        var game = getVideoGame();
        displayGame(game);
    }
}
function getByID(id) {
    return document.getElementById(id);
}
function getVideoGame() {
    var game = new VideoGame();
    var titleInput = getByID("title");
    game.title = titleInput.value;
    var priceInput = getByID("price");
    game.price = parseFloat(priceInput.value);
    var ratingInput = getByID("rating");
    game.rating = ratingInput.value;
    var onlineOnly = getByID("online");
    game.isOnlineOnly = onlineOnly.checked;
    console.log(game);
    return game;
}
function displayGame(myGame) {
}
function isAllDataValid() {
    return true;
}
