({
    init : function(component, event, helper) {
        helper.fireRenderEvent(component, 'init');
    },
    
    handleAdd : function(component, event, helper) {
        component.set("v.added", !component.get("v.added"));
    },

    handleDescription : function(component, event, helper) {
        component.set("v.showDescription", !component.get("v.showDescription"));
    }
    
})
