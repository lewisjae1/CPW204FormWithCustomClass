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
    var displayDiv = getByID("display");
    var gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;
    var gameInfo = document.createElement("p");
    var notOnlineDisplay = "";
    if (myGame.isOnlineOnly) {
        notOnlineDisplay = "This is online only game.";
    }
    else {
        notOnlineDisplay = "You can come buy a physical copy.";
    }
    gameInfo.innerText = myGame.title + " has a rating of " + myGame.rating + ".\n                    It costs $" + myGame.price.toFixed(2) + ". " + notOnlineDisplay;
    displayDiv.appendChild(gameHeading);
    displayDiv.appendChild(gameInfo);
}
function isAllDataValid() {
    return true;
}
