window.addEventListener('load', () =>{
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");

    const visual = document.querySelector(".visual");
    const color = [
        "blueviolet",
        "burlywood",
        "darkblue",
        "gold",
        "hotpink",
        "chocolate"
    ];


//sound play with click
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubbles(index);
            }) ;
    });

//
const createBubbles = (index) => {
    console.log('create');
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = color[index];
    bubble.style.animation = "jump 1s ease";
    bubble.addEventListener('animationend', function(){
        visual.removeChild(this);
    });
}

});