Ext.define('xsfx.store.CcyPairs', {
    extend: 'Ext.data.Store',
    requires: 'xsfx.model.CcyPair',
    model: 'xsfx.model.CcyPair',

    data: [ 
        { name: 'EURUSD' },
        { name: 'GBPUSD' },
    ],
});