function getContainer() {
    return document.querySelector('.notify-container');
}

function notifyContainerTemplate() {
    return `
        <div class="notify-container" style="position: fixed;top: 10px;right: 10px;z-index: 99;"></div>
    `
}

function alertTemplate(message, className, index) {
    return `
        <div class="alert ${className}" data-index="${index}">\
          ${message}
        </div>
    `
}

function createNotifyContainer() {
    const template = notifyContainerTemplate();

    document.body.insertAdjacentHTML('beforeend', template)
}


function getAlertIndex() {
    return document.querySelectorAll('.notify-container .alert').length;
}

/**
 *
 * @param {String} message
 * @param {String} className
 * @param {Number} timeOut
 */
export function notify({
                           message = 'Info Message',
                           className = 'alert-info',
                           timeOut = 4000
                       } = {}) {


    if (!getContainer()) createNotifyContainer();

    const index = getAlertIndex();
    const template = alertTemplate(message, className, index);
    const container = getContainer();

    container.insertAdjacentHTML('beforeend', template);

    setTimeout( () => closeNotify(index), timeOut )
}

function closeNotify(index) {
    let alert;
    if (index === undefined)
        alert = document.querySelector('.notify-container .alert');
    else
        alert = document.querySelector(`.notify-container .alert[data-index="${index}"]`);

    if (!alert) {
        console.warn('Alert Not Found');
        return;
    }
    alert.remove();
}
