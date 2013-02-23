Ext.define('xsfx.view.Viewport', {
    renderTo: Ext.getBody(),
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border'
    ],

    layout: {
        type: 'border'
    },

    items: [{
        region: 'west',
        xtype: 'panel',
        title: 'west',
        width: 150
    },{
        region: 'center',
        xtype: 'panel',
        items: [ {
        	xtype: 'quotebook',
        	width: '20em',
        }, {
        	xtype: 'button',
        	text: 'Toggle Dealable'
        }]       	
    }]
});