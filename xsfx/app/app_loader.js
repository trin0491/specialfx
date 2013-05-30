Ext.Loader.setConfig({
  enabled: true,
  paths: {
    "xsfx": "app/",
  }
});

Ext.syncRequire(["Ext.Component", "Ext.ComponentManager", "Ext.ComponentQuery"]);
