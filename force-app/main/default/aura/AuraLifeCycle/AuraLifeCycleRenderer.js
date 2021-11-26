({
    render : function(component, helper) {
        var ret = this.superRender();
        helper.fireRenderEvent(component, 'render');
        return ret;
    },
    rerender : function(component, helper){
        this.superRerender();
        helper.fireRenderEvent(component, 'rerender');
    },
    afterRender: function (component, helper) {
        this.superAfterRender();
        helper.fireRenderEvent(component, 'afterRender');
    },
    unrender: function (component, helper) { 
        this.superUnrender();
        helper.fireRenderEvent(component, 'unrender');
    }
})