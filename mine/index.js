const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span');
let PlayerLives=6;
// linking with text
playerLivesCount.textContent=PlayerLives;
// Generating Data

const getData = () => 

    //We generate the object 🧑🏻‍💻
    [
      { imgSrc: "./images/AbdulKalam.jpg",  name: "AbdulKalam" },
      { imgSrc: "./images/CVRaman.jpg",  name: "CVRaman" },
      { imgSrc: "./images/Einstein.jpg",  name: "Einstein" },
      { imgSrc: "./images/Gandhi.jpg", name: "Gandhi" },
      { imgSrc: "./images/GrahamBell.jpg",  name: "GrahamBell" },
      { imgSrc: "./images/RadhaKrishnan.jpg",  name: "RadhaKrishnan" },
      { imgSrc: "./images/RamaKrishnann.jpg", name: "RamaKrishnann" },
      { imgSrc: "./images/sivan.jpg", name: "sivan" },
      { imgSrc: "./images/AbdulKalam.jpg",  name: "AbdulKalam" },
      { imgSrc: "./images/CVRaman.jpg",  name: "CVRaman" },
      { imgSrc: "./images/Einstein.jpg",  name: "Einstein" },
      { imgSrc: "./images/Gandhi.jpg", name: "Gandhi" },
      { imgSrc: "./images/GrahamBell.jpg",  name: "GrahamBell" },
      { imgSrc: "./images/RadhaKrishnan.jpg",  name: "RadhaKrishnan" },
      { imgSrc: "./images/RamaKrishnann.jpg", name: "RamaKrishnann" },
      { imgSrc: "./images/sivan.jpg", name: "sivan" },
    ];
const randomize =()=>{
    const cardData = getData();
    cardData.sort(()=>Math.random() -0.5);  // why -0.5?
    return cardData;
}
// randomize();

// card generator function 
const cardGenerator =()=>{
    const cardData = randomize();
    
    // Generating the html
    cardData.forEach(item=>{
        const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div"); 
    card.classList='card';
    face.classList='face';
    back.classList='back';

    //Attach info to the cards

    face.src=item.imgSrc;
    // appending the carsds
    card.setAttribute('name', item.name);

    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);
    card.addEventListener("click",(e)=>{
       card.classList.toggle("toggleCard");
       checkCard(e);
    })
    })
};

// checking the cards match
const checkCard = (e)=>{
    const clickedCard = e.target;
    clickedCard.classList.add("flipped");
     const flippedCards = document.querySelectorAll(".flipped");
     const toggleCard = document.querySelectorAll(".toggleCard")
     console.log(flippedCards);
     // logic
     if(flippedCards.length === 2){
        if(flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')){
            console.log("Huhuuuu Matched");
            flippedCards.forEach((card)=>{
                card.classList.remove("flipped");
                card.style.pointerEvents='none';
            });
        }
    else{
        console.log("oops.. Unmatched");
        flippedCards.forEach((card)=>{
            card.classList.remove("flipped");
            setTimeout(()=> card.classList.remove("toggleCard"),1000);
        });
        PlayerLives--;
        playerLivesCount.textContent=PlayerLives;
        if(PlayerLives===0){
            restart("You Lost The Game Try Again...!");
        }
     }
    }

   // Running a check to see if we won the game
    if(toggleCard.length===16){
        restart("Huhuuuu You Won The Game" + "with Remaining LiveCounts : "+ PlayerLives);
    }
};
// Restart
const restart = (text)=>{
    let cardData = randomize();
    let face = document.querySelectorAll(".face");
    let cards = document.querySelectorAll(".card");
    section.style.pointerEvents="none";
    cardData.forEach((item,index)=>{
       cards[index].classList.remove("toggleCard");
       // pandomizing
       setTimeout(()=>{
        cards[index].style.pointerEvents = "all";
       face[index].src=item.imgSrc;
       cards[index].setAttribute("name",item.name);
       section.style.pointerEvents="all";
       },1000);
    });
    PlayerLives=6;
    playerLivesCount.textContent = PlayerLives;
    setTimeout(()=>window.alert(text))
};
cardGenerator();