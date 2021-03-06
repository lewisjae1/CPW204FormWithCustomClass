class VideoGame{
    title:string;
    price:number;
    rating:string;
    isOnlineOnly:boolean;
}

// test
/*
let myGame = new VideoGame();
myGame.title = "Mario";
myGame.rating = "E";
myGame.isOnlineOnly = true;
*/

window.onload = function(){
    let addBtn = 
        <HTMLElement>document.querySelector("input[type=button]");
        addBtn.onclick = addVideoGame;
}

function clearAllErrors(){
    let errSummary = getByID("validation-summary");
    errSummary.innerText = "";
}

function addVideoGame(){
    clearAllErrors();

    if(isAllDataValid()){
        let game = getVideoGame();
        displayGame(game);
    }
    else{
        displayRatingsLink();
    }
}

function displayRatingsLink(){
    let ratingsElements = document.querySelectorAll(".rating-error");
    for(let i = 0; i < ratingsElements.length; i++){
        let currElem = <HTMLElement>ratingsElements[i];
        currElem.onclick = gotoRatingsPage;
        //currElem.innerHTML += "<a target='_blank' href='https://www.esrb.org/'>Click here for info</a>";
    }
}

function gotoRatingsPage(){
    window.open("https://www.esrb.org/", "_blank");
}

function getByID(id:string){
    return document.getElementById(id);
}

function getVideoGame():VideoGame{
    // TODO: Create game
    let game = new VideoGame();
    // TODO: Populate with data from the form
    let titleInput = <HTMLInputElement>getByID("title");
    game.title = titleInput.value;

    let priceInput = <HTMLInputElement>getByID("price");
    game.price = parseFloat(priceInput.value);

    let ratingInput = <HTMLSelectElement>getByID("rating");
    game.rating = ratingInput.value;

    let onlineOnly = <HTMLInputElement>getByID("online");
    game.isOnlineOnly = onlineOnly.checked;
    console.log(game);
    // TODO: Return Game
    return game;
}

function displayGame(myGame:VideoGame):void{
    // TODO: Display video game below the form
    let displayDiv = getByID("display");

    let gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;

    let gameInfo = document.createElement("p");
    let notOnlineDisplay = "";
    if(myGame.isOnlineOnly){
        notOnlineDisplay = "This is online only game.";
    }
    else{
        notOnlineDisplay = "You can come buy a physical copy."
    }

    gameInfo.innerText = `${myGame.title} has a rating of ${myGame.rating}.
                    It costs $${myGame.price.toFixed(2)}. ${notOnlineDisplay}`;

    displayDiv.appendChild(gameHeading);
    displayDiv.appendChild(gameInfo);
}

function getInputByID(id:string):HTMLInputElement{
    return <HTMLInputElement>document.getElementById(id);
}

function isAllDataValid(){
    let isValid = true;

    let title = getInputByID("title").value;
    if (title == ""){
        isValid = false;
        addErrorMessage("Title is required.");
    }

    let price = getInputByID("price").value;
    let priceValue = parseFloat(price);
    if(price == "" || isNaN(priceValue)){
        isValid = false;
        addErrorMessage("Price is required and must be a number.")
    }

    let rating = (<HTMLOptionElement>getByID("rating")).value;
    if(rating == ""){
        isValid = false;
        addErrorMsgWithCustomClass("You must choose a rating!", "rating-error");
    }

    return isValid;
}

function addErrorMessage(errMsg:string) {
    let errSummary = getByID("validation-summary");
    let errItem = document.createElement("li");
    errItem.innerText = errMsg;

    errSummary.appendChild(errItem);
}

function addErrorMsgWithCustomClass(errMsg:string, cssClass:string){
    let errSummary = getByID("validation-summary");
    let errItem = document.createElement("li");
    errItem.classList.add(cssClass);
    errItem.innerText = errMsg;

    errSummary.appendChild(errItem);
}
