(function(a){var e=this;e.activeIndex=e.activeIndex||{},e.activeIndex.adInfo=function(t){if(e.locationData)a.isFunction(t.callback)&&t.callback(static_data.index.getbanners,e.dictionary.success);else{var c=e.activeHost+e.activeUrl.index.getbanners;ajaxGet(t,c)}},e.activeIndex.todayHave=function(t){if(e.locationData)a.isFunction(t.callback)&&t.callback(static_data.index.gettodaynew,e.dictionary.success);else{var c=e.activeHost+e.activeUrl.index.gettodaynew+"?"+t.p;ajaxGet(t,c)}},e.activeIndex.openGroup=function(t){if(e.locationData)a.isFunction(t.callback)&&t.callback(static_data.index.getopengroup,e.dictionary.success);else{var c=e.activeHost+e.activeUrl.index.opengroup;ajaxPost(t,c)}},e.activeIndex.homebox=function(t){if(e.locationData)a.isFunction(t.callback)&&t.callback(static_data.index.homebox,e.dictionary.success);else{var c=e.activeHost+e.activeUrl.index.homebox;ajaxGet(t,c)}},e.activeIndex.openid=function(a){var t=e.activeHost+e.activeUrl.index.openid+"?code="+a.requestBody.code;ajaxGet(a,t)},e.activeIndex.module=function(a){var t=e.activeHost+e.activeUrl.index.module+"?";ajaxGet(a,t)}}).call(xigou,Zepto);