Ext.define("xsfx.view.pricing.Price", {
    extend: 'Ext.Component',
    alias: 'widget.price',
    baseCls: 'x-price',    
    autoEl: 'span',    
    renderTpl: [
       '{prefix}',
       '<span id="{id}-pipsEl" class="{baseCls}-pips-{ui}">{pips}</span>',
       '{pipsDecs}',
    ],
    
    renderData: {
    	prefix: '1.32',
    	pips: '06',
    	pipsDecs: '5'
    },
	
    childEls: ['pipsEl'],   
});