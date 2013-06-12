Ext.define("xsfx.view.pricing.LeftQuoteTile", {
    extend: 'xsfx.view.pricing.QuoteTile',
    alias: 'widget.leftquotetile',    

	items : [  {
		xtype: 'side',
		itemId: 'side',
		componentCls: 'x-side-left',
		renderData: {
			side: 'BUY',
			ccy: 'EUR'
		}
	}, {
		xtype : 'price',
		itemId : 'price',
		align: 'left'					
	} ],
});