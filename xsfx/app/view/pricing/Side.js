Ext.define("xsfx.view.pricing.Side", {
    extend: 'Ext.Component',
    alias: 'widget.side',
    baseCls: 'x-side',
    autoEl: 'div',
    
    config: {
        ccy: null,
        side: null
    },

    renderTpl: [
       '<div id="{id}-side">{side}</div><div id="{id}-ccy">{ccy}</div>'
    ],
    
    renderData: {
    	ccy: 'EUR',
        side: 'BUY'
    },

    childEls: ['side', 'ccy'],
});