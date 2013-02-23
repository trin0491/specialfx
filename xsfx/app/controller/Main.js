Ext.define('xsfx.controller.Main', {
	extend : 'Ext.app.Controller',
	views : [ 'pricing.QuoteBook', 'pricing.QuoteTile', 'pricing.Price', 'pricing.Amount'],

	refs : [ {
		ref : 'quoteBook',
		selector : 'quotebook'
	} ],

	init : function() {
		this.control({
			'quotetile' : {
				render : this.onTileRendered
			},
			'button' : {
				click : this.updatePrice
			}
		});
	},

	updatePrice : function() {
		var me = this;
		var tiles = me.getQuoteBook().query('quotetile');
		tiles.forEach(function(tile) {
			tile.toggleDealable();
		});
	},

	onTileRendered : function(tile) {
		console.log("tile renderd");
		// var i = 0;
		// var task = {
		// run : function() {
		// tile.pips = i++;
		// },
		// interval : 1000
		// };
		// Ext.TaskManager.start(task);
	}
});