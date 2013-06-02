Ext.define("xsfx.view.pricing.RightQuoteTile", {
    extend: 'xsfx.view.pricing.QuoteTile',
    alias: 'widget.rightquotetile',
	items : [ {
		xtype: 'side',
		componentCls: 'x-side-right',
		renderData: {
			side: 'SELL',
			ccy: 'EUR'
		}
	}, {
		xtype: 'priceprefix'
	}, {
		xtype : 'price',
		itemId : 'price'
	} ],
});