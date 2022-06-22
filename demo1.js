import { api, LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class ToastComponent extends LightningElement {
    @api title;
    @api message;
    @api variant;
    @api delay;

    connectedCallback(){
        this.showToastMessage();
    }

    showToastMessage = () => {
        let toastMessage = {
            title: this.title,
            message: this.message,
            variant: this.variant?this.variant:'info'
        };
        if(this.delay){
            setTimeout(() => {
                this.fireToastMessage(toastMessage);
            } , this.delay);
        }else{
            this.fireToastMessage(toastMessage);
        }
    }

    fireToastMessage = (toastMessage) => {
        window.console.log('Toast Message: ', toastMessage);
        this.dispatchEvent(new ShowToastEvent(toastMessage) );
    }
}