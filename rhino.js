var currentPackageName = common.getlpparam().packageName;
//请手动将同方法的hook移至同一个hook代码内，否则后面的不会生效
if (currentPackageName == 'com.lemon.lv') {
common.hookMethod('com.lm.components.subscribe.config.UserVipInfo', 'isVipUser', [], function (param) {
     param.setResult(java.lang.Boolean.valueOf('true'));
}, function (param) {
    
}); 

common.hookMethod('com.vega.pay.data.VipInfo', 'isVip', [], function (param) {
     param.setResult(java.lang.Boolean.valueOf('true'));
}, function (param) {
    
}); 

common.hookMethod('com.vega.pay.data.x30_m', 'isVip', [], function (param) {
     param.setResult(java.lang.Boolean.valueOf('true'));
}, function (param) {
    
}); 

common.hookMethod('com.vega.cloud.upload.model.PurchaseInfo', 'getHasPurchased', [], function (param) {
     param.setResult(java.lang.Boolean.valueOf('true'));
}, function (param) {
    
}); 

common.hookMethod('com.vega.main.data.PurchaseInfoApi', 'getHasPurchased', [], function (param) {
     param.setResult(java.lang.Boolean.valueOf('true'));
}, function (param) {
    
}); 

common.hookMethod('com.vega.pay.data.x30_j', 'getHasPurchased', [], function (param) {
     param.setResult(java.lang.Boolean.valueOf('true'));
}, function (param) {
    
}); 

common.hookMethod('com.bytedance.pangle.Zeus', 'hasInit', [], function (param) {
     param.setResult(java.lang.Integer.valueOf('0'));
}, function (param) {
    
}); 


}
