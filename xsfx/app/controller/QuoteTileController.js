Ext.define('xsfx.controller.QuoteTileController', {
	extend: 'Deft.mvc.ViewController',
	inject: ['eventBus'],

	stateCls: {
		dealable: 'dealable',
		nonDealable: 'nonDealable',
		traded: 'traded',		
	},

	config: {
		eventBus: null
	},

	control: {
		price: true,	
		view: {
			listeners: {
				dblclick: 'onDblclick', 
				mousedown: 'onMouseDown',
				mouseup: 'onMouseUp',								
			}
		},
	},

	observe: {
		eventBus: {
			unlocked: 'onUnlocked',
			locked: 'onLocked' 
		}
	},	

	init: function() {
		var me = this;
		this.callParent(arguments);
		var eb = this.getEventBus();
		this.changeState('nonDealable');
		this.startPriceUpdates();
	},

	onUnlocked: function() {
		this.changeState('dealable');
	},

	onLocked: function() {
		this.changeState('nonDealable');
	},

	startPriceUpdates: function(price) {
		var me = this;
		if (!me.task) {
			var taskCfg = {
				run : function() {
					var p = Math.floor(Math.random() * 100);
					me.getPrice().pips.setHTML(p);
				},
				interval : 200
			};
			me.task = Ext.TaskManager.newTask(taskCfg);
		};
		me.task.start();			
	},

	stopPriceUpdates: function() {
		var me = this;
		if (me.task) {
			me.task.stop();			
		}
	},

	onMouseUp: function() {
		var me = this;
		me.startPriceUpdates();
	},

	onMouseDown: function() {
		var me = this;
		me.stopPriceUpdates();
	},

	changeState: function(state) {
		var me = this;
		if (!me.stateCls[state]) {
			throw "invalid state: " + state;
		}
		var view = me.getView();
		if (me.currentState) {
			view.removeClsWithUI(me.stateCls[me.currentState]);
		};
		me.currentState = state;
		view.addClsWithUI(me.stateCls[me.currentState]);
	},

	onDblclick: function() {
		var me = this;
		if (me.currentState != 'dealable') {
			return;
		}
		var view = me.getView();
		var oldState = me.currentState;
		me.changeState('traded');
		me.stopPriceUpdates();
		var task = new Ext.util.DelayedTask(function() {
			me.changeState(oldState);
			me.startPriceUpdates();
		});	
		task.delay(500);
	}
});