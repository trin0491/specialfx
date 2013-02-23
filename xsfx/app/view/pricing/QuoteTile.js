Ext.define("xsfx.view.pricing.QuoteTile", {
    extend: 'Ext.container.Container',
    alias: 'widget.quotetile',

    baseCls: 'x-tile',
    dealableCls: 'dealable',
    nonDealableCls: 'nonDealable',
    
	isDealable: false,

	initComponent: function() {
		var me = this;
		me.addClsWithUI(me.nonDealableCls);
		this.callParent();
	},
	
	onRender: function() {
		var me = this;
		me.callParent(arguments);	
		
		var listeners = {
			scope: me,
			mousedown: me.onMouseDown,
			mouseup: me.onMouseUp,
			dblclick: me.onDblClick
		};
		me.mon(me.getEl(), listeners);
	},
	
	onMouseDown: function() {
		var me = this;
	},
	
	onMouseUp: function() {
		var me = this;
	},
	
	onDblClick: function() {
		var me = this;
		me.toggleDealable();
	},
	
	toggleDealable: function(value) {
		var me = this;
		value = value === undefined ? !me.isDealable : value;
		if (me.isDealable !== value) {
			if (me.rendered) {
				me.removeClsWithUI(value ? me.nonDealableCls : me.dealableCls);
				me.addClsWithUI(value ? me.dealableCls : me.nonDealableCls);
			} 
			this.isDealable = value;
		}
	}
});