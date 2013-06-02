Ext.define("xsfx.view.pricing.PricePrefix", {
    extend: 'Ext.Component',
    alias: 'widget.priceprefix',
    baseCls: 'x-price',    
    autoEl: 'div',
    renderTpl: [
       '{prefix}',
    ],
    
    renderData: {
    	prefix: '1.32',
    },	
});