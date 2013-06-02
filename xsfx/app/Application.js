Ext.define("xsfx.Application", {
	extend: "Deft.mvc.Application",
	requires: ["xsfx.view.Viewport", "Ext.util.Observable"],

	mixins: {
        observable: 'Ext.util.Observable'
    },

    constructor: function(config) {
        this.callParent(arguments);
        this.mixins.observable.constructor.call(this, config);
        this.addEvents(
            'lockChange',
            'ccyPairChange'
        );
    },    	

	init: function() {
	  	var me = this;
	    Deft.Injector.configure({
	    	eventBus: {
	    		fn: function() {
	    			return me;
	    		}
	    	},
	    	ccyPairStore: 'xsfx.store.CcyPairs' 
	    });

	    // Set up QuickTips and create the Viewport
	    Ext.tip.QuickTipManager.init();
	    Ext.create( "xsfx.view.Viewport" );
	}

});
