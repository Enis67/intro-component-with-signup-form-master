var change = document.querySelectorAll(".name");

console.log(change);


change.forEach(n => {
    console.log(n);
});




var btn = document.querySelectorAll("button")[0];

console.log(btn);

btn.addEventListener("click", () => {
  change.forEach((n, index) => {
    var input = n.value;
    var pElement = document.querySelectorAll(".hidden-p");
    var first = pElement[0];
    var second = pElement[1];
    var third = pElement[2];
    var fourth = pElement[3];


    if (input === "") {
        if (index === 0) {
            first.style.display="block"
            n.style.border="2px solid var(--clr-primary-red)"
            n.style.color="hsl(0, 86%, 77%)"
            n.style.backgroundImage="url(images/icon-error.svg)"
            n.style.backgroundRepeat="no-repeat"
            n.style.backgroundPosition="right 10px center"

        } else if (index === 1) {
            second.style.display="block"
            n.style.border="2px solid var(--clr-primary-red)"
            n.style.color="hsl(0, 86%, 77%)"
            n.style.backgroundImage="url(images/icon-error.svg)"
            n.style.backgroundRepeat="no-repeat"
            n.style.backgroundPosition="right 10px center"

        } else if (index === 2) {
            third.style.display="block"
            n.style.border="2px solid var(--clr-primary-red)"
            n.style.color="hsl(0, 86%, 77%)"      
            n.style.backgroundImage="url(images/icon-error.svg)"
            n.style.backgroundRepeat="no-repeat"
            n.style.backgroundPosition="right 10px center"
            n.placeholder="email@example.com"


        } else if (index === 3) {
            fourth.style.display="block"
            n.style.border="2px solid var(--clr-primary-red)"
            n.style.color="hsl(0, 86%, 77%)"
            n.style.backgroundImage="url(images/icon-error.svg)"
            n.style.backgroundRepeat="no-repeat"
            n.style.backgroundPosition="right 10px center"
        }
    }
    // else{
    //     if (index === 0){
    //         first.style.display="none";
    //     }
    //         else if (index === 1){
    //         second.style.display="none";
    //         }
    //         else if(index === 2){
    //             third.style.display="none";
    //         }
    //         else if(index === 3){
    //             fourth.style.display="none";
    //         }
    //     }
}); 
});



// .name{
//     border: 1px solid var(--clr-primary-red);
//     color:hsl(0, 86%, 77%);
//     display:
//   }
  

// input{
//     background-image: url(images/icon-error.svg);
//     background-repeat: no-repeat;
//     background-position: right 10px center;
//   }

// hidden-p-klasse eröffnen
