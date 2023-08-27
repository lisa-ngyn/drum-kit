// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick(){
//     alert("I got clicked");
// }

// function playAudio(){
//     var audio = new Audio('./sounds/tom-1.mp3');
//     audio.play();
// }

// function turnWhite(){
//     this.style.color = "white";
// }

function playRightAudio(key){

    switch (key) {
        case 'w':
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;

        case 'a':
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;

        case 's':
            var kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
            break;

        case 'd':
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;

        case 'j':
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;

        case 'k':
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;

        case 'l':
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;

        default:
            console.log(this.textContent);
            break;
    }

}

// alle Buttons
var allButtons = document.getElementsByClassName("drum");

// iteriere durch die Buttons
for (var i = 0; i <= allButtons.length - 1; i++){

    // allButtons[i].addEventListener("click", handleClick);
    // allButtons[i].addEventListener("click", playAudio);
    // allButtons[i].addEventListener("click", turnWhite);
    // allButtons[i].addEventListener("click", playRightAudio);
    // allButtons[i].addEventListener("click", playRightAudio(this.textContent));

    // um jedem Button ein Eventlistener hinzuzufügen
    // wenn ein Button geklickt wurde, soll playRightAudio ausgeführt werden
    // übergibt this.textContent -> die Textinhalte auf dem Button
    allButtons[i].addEventListener("click", function(){
        playRightAudio(this.textContent);
        buttonAnimation(this.textContent);
    });
}

// wenn eine Taste gedrückt wird
document.addEventListener("keydown", function(event){
    playRightAudio(event.key);
    buttonAnimation(event.key);
});

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}