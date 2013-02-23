Ext.define("xsfx.view.pricing.QuoteBook", {
	extend : 'Ext.container.Container',
	alias : 'widget.quotebook',
	layout : 'column',

	border: 3,
	style: {
		borderColor: 'black',
		borderStyle: 'solid',
		background: '#090909',			
	},
	
	defaults : {
		columnWidth : 0.5,
		layout : {
			type : 'vbox',
//			reserveScrollbar: true
		},
	},

	items : [ {
		xtype : 'container',
		defaults : {
			width : '100%',
			margin: 5,
			items : [ {
				xtype : 'price',
				margin: '0 5 0 0'
			}, {
				xtype : 'amount'
			} ]
		},
		items : [ {
			xtype : 'quotetile',
		}, {
			xtype : 'quotetile',
		}, {
			xtype : 'quotetile',
		} ]
	}, {
		xtype : 'container',
		defaults : {
			width : '100%',
			margin: 5,			
			items : [ {
				xtype : 'amount',
				margin: '0 5 0 0'					
			}, {
				xtype : 'price'
			} ]
		},
		items : [ {
			xtype : 'quotetile',
		}, {
			xtype : 'quotetile',
		}, {
			xtype : 'quotetile',
		} ]
	} ],
});