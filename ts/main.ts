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

function addVideoGame(){
    if(isAllDataValid()){
        let game = getVideoGame();
        displayGame(game);
    }
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

function isAllDataValid(){
    return true;
}