({
    processRenderEvent : function(component, event, helper) {
        let message = event.detail.message;
        let date = event.detail.date;
        let src = event.detail.src;
        let formattedDate = date.toLocaleString('pt-BR') + ':' + date.getSeconds() + '.' + date.getMilliseconds();

        let attrName = src === 'lwc' ? 'v.lwcConsole' : 'v.auraConsole';
        let customConsole = component.get(attrName);
        customConsole.push( {date: formattedDate, message: message});
        component.set(attrName, customConsole);
    }
})
