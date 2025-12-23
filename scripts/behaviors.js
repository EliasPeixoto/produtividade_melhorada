function generateCard()
{
    let card_container = document.querySelector('.cards-container');
    let card = document.createElement('li');
    
    card.classList.add('card');
    card.innerHTML = 'Teste';
    card_container.appendChild(card);
}
function removeCard(card)
{
    card.remove();
}

function eventListenerSetup(){

}

generateCard();
generateCard();
