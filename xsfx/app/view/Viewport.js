Ext.define('xsfx.view.Viewport', {
    renderTo: Ext.getBody(),
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.tab.Panel',
        'xsfx.view.pricing.CcyPairCombo',
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
            xtype: 'container',
            layout: 'hbox',
            items: [ {
                xtype: 'ccypaircombo',                
                itemId: 'ccyPairCombo'
            }, {
                xtype: 'button',
                itemId: 'lockButton',
                text: 'Unlock'
            } ]
        }, {
            xtype: 'quotebook',
            itemId: 'quoteBook',
            width: '20em',
            rows: 1
        }]       	
    }]
});