Ext.define("xsfx.view.pricing.Amount", {
    extend: 'Ext.Component',
    alias: 'widget.side',
    baseCls: 'x-side',
    autoEl: 'div',
    
    config: {
        ccy: null;
        side: null;
    }

    renderTpl: [
       '<div id="{id}-side">{side}</div><div>{ccy}</div>'
    ],
    
    renderData: {
    	ccy: 'EUR',
        side: 'BUY'
    },

    childEls: ['side', 'ccy'],
});