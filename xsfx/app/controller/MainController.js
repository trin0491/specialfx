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
		quoteBook: true
	},

	toggleLock : function() {
		var me = this;
		var e = me.locked ? 'unlocked' : 'locked';
		me.locked = ! me.locked;
		me.getEventBus().fireEvent(e);
	},
});