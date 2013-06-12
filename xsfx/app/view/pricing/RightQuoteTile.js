Ext.define("xsfx.view.pricing.RightQuoteTile", {
    extend: 'xsfx.view.pricing.QuoteTile',
    alias: 'widget.rightquotetile',

	items : [ {
		xtype: 'side',
		itemId: 'side',
		componentCls: 'x-side-right',
		renderData: {
			side: 'SELL',
			ccy: 'EUR'
		}
	}, {
		xtype : 'price',
		itemId : 'price',
		align: 'right'
	} ],
});