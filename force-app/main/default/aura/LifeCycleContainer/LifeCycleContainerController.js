({

    init : function(component, event, helper) {
        
    },

    handleAura : function(component, event, helper) {
        component.set("v.aura", !component.get("v.aura"));
    },

    handleLWC : function(component, event, helper) {
        component.set("v.lwc", !component.get("v.lwc"));
    }
    
})
