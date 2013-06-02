Ext.define('xsfx.store.CcyPairs', {
    extend: 'Ext.data.Store',
    requires: 'xsfx.model.CcyPair',
    model: 'xsfx.model.CcyPair',

    data: [ 
        { name: 'EURUSD', ccy1: 'EUR', ccy2: 'USD' },
        { name: 'GBPUSD', ccy1: 'GBP', ccy2: 'USD' },
    ],
});