var VideoGame = (function () {
    function VideoGame() {
    }
    return VideoGame;
}());
window.onload = function () {
    var addBtn = document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
};
function clearAllErrors() {
    var errSummary = getByID("validation-summary");
    errSummary.innerText = "";
}
function addVideoGame() {
    clearAllErrors();
    if (isAllDataValid()) {
        var game = getVideoGame();
        displayGame(game);
    }
    else {
        displayRatingsLink();
    }
}
function displayRatingsLink() {
    var ratingsElements = document.querySelectorAll(".rating-error");
    for (var i = 0; i < ratingsElements.length; i++) {
        var currElem = ratingsElements[i];
        currElem.onclick = gotoRatingsPage;
    }
}
function gotoRatingsPage() {
    window.open("https://www.esrb.org/", "_blank");
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
function getInputByID(id) {
    return document.getElementById(id);
}
function isAllDataValid() {
    var isValid = true;
    var title = getInputByID("title").value;
    if (title == "") {
        isValid = false;
        addErrorMessage("Title is required.");
    }
    var price = getInputByID("price").value;
    var priceValue = parseFloat(price);
    if (price == "" || isNaN(priceValue)) {
        isValid = false;
        addErrorMessage("Price is required and must be a number.");
    }
    var rating = getByID("rating").value;
    if (rating == "") {
        isValid = false;
        addErrorMsgWithCustomClass("You must choose a rating!", "rating-error");
    }
    return isValid;
}
function addErrorMessage(errMsg) {
    var errSummary = getByID("validation-summary");
    var errItem = document.createElement("li");
    errItem.innerText = errMsg;
    errSummary.appendChild(errItem);
}
function addErrorMsgWithCustomClass(errMsg, cssClass) {
    var errSummary = getByID("validation-summary");
    var errItem = document.createElement("li");
    errItem.classList.add(cssClass);
    errItem.innerText = errMsg;
    errSummary.appendChild(errItem);
}
