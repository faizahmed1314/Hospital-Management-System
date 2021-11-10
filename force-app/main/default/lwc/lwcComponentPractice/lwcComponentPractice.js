import { LightningElement } from 'lwc';

export default class LwcComponentPractice extends LightningElement {
    clickedButtonLabel;

    buttonStatefulState = false;
    buttonIconStatefulState = false;

    handleButtonStatefulClick() {
        this.buttonStatefulState = !this.buttonStatefulState;
    }

    handleButtonIconStatefulClick() {
        this.buttonIconStatefulState = !this.buttonIconStatefulState;
    }
    
    handleClick(event) {
        this.clickedButtonLabel = event.target.label;
    }
}