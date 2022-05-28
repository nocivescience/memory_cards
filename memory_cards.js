const clearBtn=document.getElementById("clear");
const ShowBtn=document.getElementById("show");
const cardContainer=document.getElementById("card-container");
const addContainer=document.getElementById("add-container");
const hideBtn=document.getElementById("hide");
const addCardBtn=document.getElementById("add-card");
const questionEl=document.getElementById("question");
const answerEl=document.getElementById("answer");
var cardEl=[];
const cardData=getCardsData();
function createCard(data,index){
    const card=document.createElement("div");
    card.classList.add("card");
    if(index===0) card.classList.add("active");
    card.innerHTML=`
        <div class="inner-card">
            <div class="inner-card-front">
                <p>${data.question}</p>
            </div>
            <div class="inner-card-back">   
                <p>${data.answer}</p>
            </div>
        </div>
    `;
    card.addEventListener("click",()=>{
        card.classList.toggle("show-answer");
    });
    cardEl.push(card);
    cardContainer.appendChild(card);
}
function createCards(){
    cardData.forEach((data,index)=>{
        createCard(data,index);
    });
}
function getCardsData(){
    const cards=JSON.parse(localStorage.getItem("cards"));
    return cards===null?[]:cards;
}
function setCardsData(cards){
    localStorage.setItem("cards",JSON.stringify(cards));
    // window.location.reload();
}
createCards();
clearBtn.addEventListener("click",()=>{
    localStorage.clear();
    location.reload();
});
ShowBtn.addEventListener("click",()=>{
    addContainer.classList.add("show");
});
hideBtn.addEventListener("click",()=>{
    addContainer.classList.remove("show");
});
addCardBtn.addEventListener("click",()=>{
    const question=questionEl.value;
    const answer=answerEl.value;
    if(question.trim()&&answer.trim()){
        const newCard={question,answer};
        createCard(newCard);
        questionEl.value="";
        answerEl.value="";
        cardData.push(newCard);
        setCardsData(cardData);
    }
});