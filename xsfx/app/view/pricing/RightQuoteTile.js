Ext.define("xsfx.view.pricing.RightQuoteTile", {
    extend: 'xsfx.view.pricing.QuoteTile',
    alias: 'widget.rightquotetile',
	items : [ {
		xtype : 'amount',
		itemId : 'amount',					
		margin : '0 5 0 0'
	}, {
		xtype : 'price',
		itemId : 'price'
	} ],
});