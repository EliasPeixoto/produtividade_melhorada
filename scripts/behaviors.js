function generateCard(dialog) {
    if (dialog.value != '') {
        let card_container = document.querySelector('.todo-cards-list');
        let card = document.createElement('li');

        card.classList.add('card');
        card.innerHTML = `<p>${dialog.value}</p>`
        card_container.appendChild(card);
        dialog.value = '';
    }

}
function removeCard(card) {
    card.remove();
}
function inputListener() {
    document.addEventListener('submit', (event) => {
        event.preventDefault();
        const trigger = event.target.closest('[data-action]');
        console.log("Foi");

    })
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
            close: (dialog) => dialog.classList.toggle("closed", true),
            generate_card: (dialog) => generateCard(dialog),
        }
        actions[action]?.(dialog);
    });
}
eventListenerSetup();
inputListener();
