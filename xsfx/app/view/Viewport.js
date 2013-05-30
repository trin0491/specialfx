Ext.define('xsfx.view.Viewport', {
    renderTo: Ext.getBody(),
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.tab.Panel',
        'xsfx.view.pricing.QuoteBook',
        'xsfx.controller.MainController'
    ],

    controller: 'xsfx.controller.MainController',

    layout: {
        type: 'fit'
    },

    items: [{
        region: 'center',
        xtype: 'panel',
        items: [ {
        	xtype: 'quotebook',
            itemId: 'quoteBook',
        	width: '20em',
        	rows: 5
        }, {
        	xtype: 'button',
            itemId: 'lockButton',
        	text: 'Lock'
        }]       	
    }]
});