({
    fireRenderEvent : function(component, message) {
        let date = new Date();
        const event = new CustomEvent('renderevent', {
            detail: { "message": message, "date": date, "src": 'aura'},
        });
        
        
        dispatchEvent(event);
    }
})
