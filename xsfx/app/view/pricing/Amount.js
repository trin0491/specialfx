Ext.define("xsfx.view.pricing.Amount", {
    extend: 'Ext.Component',
    alias: 'widget.amount',
    baseCls: 'x-amt',
    autoEl: 'span',
    
    renderTpl: [
       '{amount}'
    ],
    
    renderData: {
    	amount: '1mio',
    },
});