Ext.define("xsfx.view.pricing.QuoteTile", {
    extend: 'Ext.container.Container',
    alias: 'widget.quotetile',

    requires: [ 
    	'xsfx.controller.QuoteTileController',         
    	'xsfx.view.pricing.Price', 
        'xsfx.view.pricing.Side',
	],
    controller: 'xsfx.controller.QuoteTileController',

    baseCls: 'x-tile',
    
	initComponent: function() {
		var me = this;
		me.callParent(arguments);
		me.addEvents('dblclick', 'mousedown', 'mouseup');
	},
	
	onRender: function() {
		var me = this;
		me.callParent(arguments);			
		me.relayEvents(this.getEl(), ['dblclick', 'mousedown', 'mouseup']);
	},			
});