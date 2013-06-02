Ext.define('xsfx.view.pricing.CcyPairCombo', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.ccypaircombo',
    inject: [ 'ccyPairStore'],

    config: {
    	ccyPairStore: null
    },

    displayField: 'name',
    valueField: 'name',
    queryMode: 'local',
    forceSelection: true,
    hideTrigger: true,

    initComponent: function() {
    	Ext.applyIf(this, {
    		store: this.ccyPairStore
    	});
    	this.callParent(arguments);
    }
});