Ext.define("xsfx.view.pricing.LeftQuoteTile", {
    extend: 'xsfx.view.pricing.QuoteTile',
    alias: 'widget.leftquotetile',    

	items : [ {
		xtype : 'price',
		itemId : 'price',					
		margin : '0 5 0 0'
	}, {
		xtype : 'amount',
		itemId : 'amount'
	} ],
});