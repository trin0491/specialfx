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
       '<p id="{id}-side">{side}</p><p id="{id}-ccy">{ccy}</p>'
    ],
    
    renderData: {
    	ccy: 'EUR',
        side: 'BUY'
    },

    childEls: ['side', 'ccy'],
});