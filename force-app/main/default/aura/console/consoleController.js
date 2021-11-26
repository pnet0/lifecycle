({
    clear : function(component, event, helper) {
        component.set("v.lines", []);
    },

    scroll : function(component, event, helper) {
        let list = component.find("list");
        let size = component.get("v.lines").length;
        
        window.setTimeout( () => {
            list.getElement().scrollTop =  size * 40;    
        }, 100);
    }
})
