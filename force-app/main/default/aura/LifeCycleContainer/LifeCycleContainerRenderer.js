({

    afterRender: function(component, helper) {
        this.superAfterRender();
    
        window.addEventListener("renderevent", function(event) {
            helper.processRenderEvent(component, event, helper);
        }, false);
    }

})
