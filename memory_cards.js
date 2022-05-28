const clearBtn=document.getElementById("clear");
const ShowBtn=document.getElementById("show");
const cardContainer=document.getElementById("card-container");
const addContainer=document.getElementById("add-container");
const hideBtn=document.getElementById("hide");
const addCardBtn=document.getElementById("add-card");
const questionEl=document.getElementById("question");
const answerEl=document.getElementById("answer");
var cardEl=[];
function createCard(data=null,index){
    const card=document.createElement('div');
    card.classList.add("card");
    card.innerHTML=`
        <div class='inner-card'>
            <div class='inner-card-front'>
                <p>${data.question}</p>
            </div>
            <div class='inner-card-back'>
                <p>${data.answer}</p>
            </div>
        </div>
    `;
    cardContainer.appendChild(card);
}
addCardBtn.addEventListener("click",function(){
    const question=questionEl.value;
    const answer=answerEl.value;
    const data={question,answer};
    createCard(data);
});