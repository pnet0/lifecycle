import { LightningElement, track } from 'lwc';
import template from './lwcLifeCycle.html';



export default class LwcLifeCycle extends LightningElement {

    @track added = false;
    @track showDescription = true;
    /*
        view functions
    */

    get buttonLabel() {
        return this.added === true ? 'Remover' : 'Adicionar';
    }

    get buttonVariation() {
        return this.added === true ? 'destructive' : 'brand';
    }

    get buttonIcon() {
        return this.added === true ? 'utility:dash' : 'utility:add';
    }

    get descriptionIcon() {
        return this.showDescription === true ? 'utility:chevrondown' : 'utility:chevronright';
    }


    handleDescription() {
        this.showDescription = !this.showDescription;
    }

    handleAdd() {
        this.added = !this.added;
    }

    /*
        end view functions
    */

        
    constructor() {
        super();
        this.fireRenderEvent('constructor');
    }

    connectedCallback() {
        this.fireRenderEvent('connectedCallback');
    }

    disconnectedCallback() {
        this.fireRenderEvent('disconnectedCallback');
    }

    render() {
        this.fireRenderEvent('render');
        return template;
    }

    renderedCallback() {
        this.fireRenderEvent('renderedCallback');
    }

    errorCallback(error, stack) {
        this.fireRenderEvent('errorCallback');
    }


    fireRenderEvent(message) {

        let date = new Date();
        const event = new CustomEvent('renderevent', {
            detail: { "message": message, "date": date, "src": 'lwc'},
        });

        dispatchEvent(event);
        
    }

}