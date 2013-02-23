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