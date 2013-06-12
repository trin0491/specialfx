Ext.define("xsfx.view.pricing.Price", {
    extend: 'Ext.Component',
    alias: 'widget.price',
    baseCls: 'x-price',    
    autoEl: 'div',
    renderTpl: [
        '<div id="{id}-prefix">{prefix}</div>',
        '<div>',
        '<span id="{id}-pips" class="{baseCls}-pips-{ui}">{pips}</span>',
        '<span id="{id}-decimals" class="{baseCls}-decimals-{ui}">{decimals}</span>',
        '</div>',
        '<div id="{id}-fwdPx">',
        '<p id="{id}-pts">{pts}</p>',                  
        '<p id="{id}-allIn">{allIn}</p>',
        '</div>'
    ],
    
    config: {
        align: null
    },

    afterRender: function() {
        this.callParent();        
        this.fwdPx.addCls('x-price-' + this.getAlign());
    },

    renderData: {
        prefix: '1.32',
    	pips: '00',
    	decimals: '00',
        pts: '3.00',
        allIn: '1.320000'
    },
	
    childEls: ['prefix', 'pips', 'decimals', 'pts', 'allIn', 'fwdPx'],   
});