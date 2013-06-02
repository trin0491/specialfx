Ext.define("xsfx.view.pricing.Price", {
    extend: 'Ext.Component',
    alias: 'widget.price',
    baseCls: 'x-price',    
    autoEl: 'div',
    renderTpl: [
       '<span id="{id}-pips" class="{baseCls}-pips-{ui}">{pips}</span>',
       '<span id="{id}-decimals" class="{baseCls}-decimals-{ui}">{decimals}</span>',
    ],
    
    renderData: {
    	pips: '06',
    	decimals: '50'
    },
	
    childEls: ['pips'],   
});