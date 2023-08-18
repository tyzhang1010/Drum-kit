
//get the array of botton elements
const drums = document.querySelectorAll("button");

//create new audio objects for each audio
const audio1 = new Audio ('sounds/crash.mp3');
const audio2 = new Audio ('sounds/kick-bass.mp3');
const audio3 = new Audio ('sounds/snare.mp3');
const audio4 = new Audio ('sounds/tom-1.mp3');
const audio5 = new Audio ('sounds/tom-2.mp3');
const audio6 = new Audio ('sounds/tom-3.mp3');
const audio7 = new Audio ('sounds/tom-4.mp3');

//loop through the drums array
drums.forEach(drum => {
    //for each drum element, listen to the mousedown event
    drum.addEventListener("mousedown", ()=> {
    //create a variable drumInnerhtml to get the text
    var drumInnerhtml = drum.innerHTML;
     makeSound(drumInnerhtml);
     buttonAnimation(drumInnerhtml);
    })
})



//add the event listener for each key pressed down
document.addEventListener("keydown", function (event) {
    //play the according audio when specific key is pressed down 
   makeSound(event.key);
   buttonAnimation(event.key);
    })

    //makeSound function 
    function makeSound (target) {
        switch(target) {
            //play the according audio when specifc botton is clicked/pressed
            case 'w' :
                audio1.play(); 
            break;
    
            case 'a':
                audio2.play(); 
            break;
                
            case 's':
                audio3.play();
            break;
    
            case 'd':
                audio4.play(); 
            break;
    
            case 'j':
                audio5.play(); 
            break;
    
            case 'k':
                audio6.play(); 
            break;
    
            case 'l':
                audio7.play(); 
            break;
    
            default:
                console.log("Please click the right button."); 
         }
    }

    //animation for botton when clicked or pressed 
    function buttonAnimation(currentKey) {
        var activeButton = document.querySelector('.' + currentKey);
        //if detected event then add class name to the according button
        activeButton.classList.add('pressed');

        //remove the animation css 
        setTimeout(function () {
            activeButton.classList.remove('pressed');
        }, 150);

    }



