Ext.define("xsfx.view.pricing.LeftQuoteTile", {
    extend: 'xsfx.view.pricing.QuoteTile',
    alias: 'widget.leftquotetile',    

	items : [  {
		xtype: 'side',
		componentCls: 'x-side-left',
		renderData: {
			side: 'BUY',
			ccy: 'EUR'
		}
	}, {
		xtype: 'priceprefix'
	}, {
		xtype : 'price',
		itemId : 'price',					
		margin : '0 5 0 0'
	}, ],
});