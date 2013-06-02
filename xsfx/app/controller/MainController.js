Ext.define('xsfx.controller.MainController', {
	extend : 'Deft.mvc.ViewController',

	inject: ['eventBus'],

	config: {
		eventBus: null,
		isLocked: true
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
		var me = this;
		me.getEventBus().fireEvent('ccyPairChange', ccypairs[0]);
	},

	toggleLock : function() {
		var me = this;
		me.isLocked = ! me.isLocked;
		var t = me.isLocked ? 'Unlock' : 'Lock';
		me.getLockButton().setText(t);
		me.getEventBus().fireEvent('lockChange', me.isLocked);
	},
});