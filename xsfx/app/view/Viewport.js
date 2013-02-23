Ext.define('xsfx.view.Viewport', {
    renderTo: Ext.getBody(),
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.tab.Panel',
    ],

    layout: {
        type: 'fit'
    },

    items: [{
        region: 'center',
        xtype: 'panel',
        items: [ {
        	xtype: 'quotebook',
        	width: '20em',
        	rows: 5
        }, {
        	xtype: 'button',
        	text: 'Toggle Dealable'
        }]       	
    }]
});