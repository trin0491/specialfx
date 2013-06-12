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
		side: true
	},

	observe: {
		eventBus: {
			lockChange: 'onLockChange',
			ccyPairChange: 'onCcyPairChange'
		}
	},	

	init: function() {
		var me = this;
		this.callParent(arguments);
		var eb = this.getEventBus();
		this.changeState('nonDealable');
		this.startPriceUpdates();
	},

	onLockChange: function(isLocked) {
		if (isLocked) {
			this.changeState('nonDealable');			
		} else {
			this.changeState('dealable');
		}
	},

	onCcyPairChange: function(ccyPair) {
		var me = this;
		me.getSide().ccy.setHTML(ccyPair.get('ccy1'));
	},

	onPriceChange: function(px) {
		var me = this;
		var pxEl = me.getPrice();
		pxEl.pips.setHTML(px.getPips());
		pxEl.prefix.setHTML(px.getPrefix());
		pxEl.decimals.setHTML(px.getDecimals());
		pxEl.pts.setHTML(px.getPts());
		pxEl.allIn.setHTML(px.getAllIn().toFixed(6));
	},

	startPriceUpdates: function(price) {
		var me = this;
		if (!me.task) {
			var px = Ext.create('xsfx.model.Price');
			px.mon(px, 'propertyChange', me.onPriceChange, me);
			var taskCfg = {
				run : function() {
					var r = Math.random() * 0.01;
					r = 1.32 + r
					px.setSpot(r);
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
		me.stopPriceUpdates();
		me.changeState('traded');
		var task = new Ext.util.DelayedTask(function() {
			me.changeState(oldState);
			me.startPriceUpdates();
		});	
		task.delay(500);
	}
});