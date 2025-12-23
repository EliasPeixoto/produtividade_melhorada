function generateCard() {
    let card_container = document.querySelector('.cards-container');
    let card = document.createElement('li');

    card.classList.add('card');
    card.innerHTML = 'Teste';
    card_container.appendChild(card);
}
function removeCard(card) {
    card.remove();
}

function eventListenerSetup() {
    document.addEventListener('click', (event) => {
        const trigger = event.target.closest('[data-action]');


        if (!trigger) return;


        const dialogId = trigger.dataset.dialog || trigger.closest('[data-dialog]')?.dataset.dialog;

        if (!dialogId) return;

        const dialog = document.querySelector(`.dialog[data-dialog="${dialogId}"]`);

        const action = trigger.dataset.action;

        const actions = {
            open: (dialog) => dialog.classList.toggle("closed", false),
            close: (dialog) => dialog.classList.toggle("closed", true)
            }
        actions[action]?.(dialog);

    });
}
eventListenerSetup();
generateCard();
generateCard();
