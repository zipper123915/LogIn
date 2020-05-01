export class Tabs {
    constructor() {
        this.mainContainer = document.querySelector('.login-page-wrap');
        this.frontLayer = document.querySelector('.front-layer');
        this.frontLayer.addEventListener('click', () => {
            this.slideFrontLayer();
        });
        console.log(this.frontLayer);
    }

    slideFrontLayer() {
        this.frontLayer.classList.toggle('slide-left')
    }

}


