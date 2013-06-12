Ext.define('xsfx.model.Price', function() {
    var spot = 0.00;
    var pts = 0.03;
    var allin = 0.00;

    function raisePropertyChange() {
        try {
            this.fireEvent('propertyChange', this);
        } catch (err) {
            console.log("bad event listener: " + err);
        }
    };

    return {
        mixins: {
            observable: 'Ext.util.Observable'
        },

        constructor: function(config) {
            this.callParent(arguments);
            this.mixins.observable.constructor.call(this, config);
            this.addEvents('propertyChange');
        },

        setSpot: function(newPrice) {
            var oldPx = spot;
            spot = newPrice;
            if (oldPx != spot) {
                raisePropertyChange.call(this);
            }
        },

        getSpot: function() {
            return spot;
        },

        getPrefix: function() {
            return spot.toString().slice(0,4);
        },

        getPips: function() {
            return spot.toString().slice(4,6);
        },

        getDecimals: function() {
            return spot.toString().slice(6,8);
        },

        getPts: function() {
            return pts.toFixed(2);
        },

        getAllIn: function() {
            return spot + pts;
        }
    };
}());