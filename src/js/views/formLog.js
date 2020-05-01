function inputErrorTemplate(message) {
    return `<div class="invalid-feedback">${message}</div>`
}


export function showInputError(element) {
    const parent = element.parentElement;
    const message = element.dataset.invalidMessage || 'Invalid input';
    const template = inputErrorTemplate(message);
    element.classList.add('is-invalid');
    parent.insertAdjacentHTML('beforeend', template);
}



export function removeInputError(element) {
    const parent  = element.parentElement;
    const err = parent.querySelector('.invalid-feedback');
    if (!err) return;

    element.classList.remove('is-invalid');
    parent.removeChild(err)
}
