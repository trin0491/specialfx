Ext.define("xsfx.view.pricing.QuoteBook", {
	extend : 'Ext.container.Container',
	alias : 'widget.quotebook',
	layout : 'column',

	config : {
		rows : 5
	},
	
	style : {
		background : '#090909',
	},

	layout : {
		type : 'table',
		columns : 2,
		tableAttrs : {
			style : {
				width : '100%'
			}
		},
		tdAttrs : {
			style : {
				padding : '3px'
			}
		}
	},

	defaults : {
		xtype : 'quotetile',
	},

	initComponent : function() {
		var me = this;
		me.callParent(arguments);
		
		for (var i=0; i< me.rows * 2; ++i) {
			me.add({
				items : [ {
					xtype : i % 2 == 0 ? 'price' : 'amount',
					margin : '0 5 0 0'
				}, {
					xtype : i % 2 == 0 ? 'amount' : 'price'
				} ]
			});			
		}
	},
});