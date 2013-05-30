Ext.define("xsfx.view.pricing.QuoteBook", {
	extend : 'Ext.container.Container',
	alias : 'widget.quotebook',
	layout : 'column',

	requires: [
		'Ext.layout.container.Table',
        'xsfx.view.pricing.QuoteTile',
        'xsfx.view.pricing.LeftQuoteTile', 
        'xsfx.view.pricing.RightQuoteTile', 
	],

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

	initComponent : function() {
		var me = this;
		me.callParent(arguments);
		
		for (var i=0; i< me.rows * 2; ++i) {
			me.add({ xtype: i % 2 == 0 ? 'leftquotetile':'rightquotetile' });			
		}
	},
});