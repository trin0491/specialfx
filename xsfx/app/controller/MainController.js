Ext.define('xsfx.controller.MainController', {
	extend : 'Deft.mvc.ViewController',

	inject: ['eventBus'],

	config: {
		eventBus: null,
		locked: true
	},

	control: {
		lockButton: {
			click : 'toggleLock',
		},
		ccyPairCombo: {
			select : 'onCcyPairChange'
		},
		quoteBook: true
	},

	init: function() {
		var me = this;
		me.getCcyPairCombo().select('EURUSD');
	},

	onCcyPairChange: function(combo, ccypairs) {
		console.log("selected");
	},

	toggleLock : function() {
		var me = this;
		var e = me.locked ? 'unlocked' : 'locked';
		me.locked = ! me.locked;
		var t = me.locked ? 'Unlock' : 'Lock';
		me.getLockButton().setText(t);
		me.getEventBus().fireEvent(e);
	},
});