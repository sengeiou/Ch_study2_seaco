function InitSearchEdid(e){if(Key&&Key.length>0)$("#input_search")[0].value=Key,$(".div_clear_input").show(),$(".div_clear_input")[xigou.events.click](function(){$(".div_search_history").show(),$("#input_search_history")[0].value=" ",$("#input_search_history").focus()}),InitSearchHistory(e);else{$("#id_input_search_box").hide();var s=xigou.getQueryString("name");couponid?($("#id_name").text("乐享优惠"),$("#id_name").show()):($("#id_name").text(s),$("#id_name").show())}}function Search(e,s){var i="curpage="+CurPage;Key?i=i+"&key="+Key:categoryid?i=i+"&categoryid="+categoryid:brandid&&(i=i+"&brandid="+brandid),s&&(i=i+"&sort="+s),sp&&(i=i+"&salespattern="+sp),couponid&&(i=i+"&couponid="+couponid),xigou.classify.search({p:i,callback:function(s,i){return!i==xigou.dictionary.success?void $.tips({content:"收索失败,请检测网络连接",stayTime:2e3,type:"warn"}):void InitPage(e,s)}})}function InitPage(e,s){if("index"==fromPage&&$(".goBack").parent("a").attr("href","index.html"),!s)return void $.tips({content:"收索失败,请检测网络连接",stayTime:2e3,type:"warn"});if(0!=s.code)return void $.tips({content:s.msg||"收索失败,请检测网络连接",stayTime:2e3,type:"warn"});if(s.data.sp&&0!=s.data.sp.length?($(".search_shop").show(),$("#search_bg_img").attr("src",s.data.sp[0].shopbanner),$("#shop_logo").attr("src",s.data.sp[0].shoplogo),$(".search_shop_name").html(s.data.sp[0].shopname),$("#search_shop").attr("href","shop_detail.html?tid="+s.data.sp[0].tid)):($(".search_shop").hide(),$(".div_search_list").css(isWeiXin()?{"margin-top":"41px","border-top":"none"}:{"margin-top":"91px","border-top":"none"}),$(".div_search_sort").css({"border-top":"none"})),s.data.curpage&&s.data.totalpagecount&&s.data.curpage!=s.data.totalpagecount||(bMaxPage=!0,e.lock(),$(".dropload-down").hide()),1==s.data.curpage){if($(".ul_search_list").empty(),!s.data.list||0==s.data.list.length)return $(".div_search_list").addClass("div_search_list_none"),bMaxPage=!0,e.lock(),void $(".dropload-down").hide();$(".div_search_list").removeClass("div_search_list_none")}var i=[];if(9!=sp)for(var r in s.data.list){var t=s.data.list[r],a="item.html";9==t.salespattern&&(a="group_detail.html"),a=a+"?tid="+t.tid+"&amp;sku="+t.sku,i.push('<li class="li_search_item">'),i.push('    <div class="div_img">'),i.push('        <a href="'+a+'">'),i.push(null==t.imgurl||void 0==t.imgurl||""==t.imgurl?'            <img src="img/index/loading_shop_list.png">':'            <img src="'+t.imgurl+'">'),i.push("        </a>"),i.push("    </div>"),i.push('    <div class="div_item_name">'+t.name+"</div>");var o=t.price.split(".")[0]||"00",n=t.price.split(".")[1]||"00";i.push('    <div class="div_item_price"><span class="price">¥<span>'+o+"</span>."+n+'</span><span class="old_price">¥'+t.oldprice+"</span></div>"),i.push("</li>")}else for(var r in s.data.list){var t=s.data.list[r],o=t.price.split(".")[0]||"00",n=t.price.split(".")[1]||"00";i.push('<div class="search_result_item">'),i.push('        <a href="group_detail.html?tid='+t.tid+"&amp;sku="+t.sku+'">'),i.push('   <span class="shop_logo"><img src="'+t.imgurl+'"></span>'),i.push('        <div class="search_result_goods">'),i.push(' <div class="search_result_title" style="width: 200px; overflow: hidden">'+t.name+"</div>"),i.push('      <div class="search_result_price">¥'+o+"."+n+'<del class="old_price">¥'+t.oldprice+"</del></div>"),i.push('   <div class="search_result_shop_name">'+t.shopname+'<span class="sale">'+t.salescount+"</span></div>"),i.push("   </div>"),i.push("        </a>"),i.push("</div>")}$(".ul_search_list").append(i.join(" "))}function InitSearchHistory(e){var s=xigou.getLocalStorage("searchHistory"),i=[];if(""!=s&&(i=JSON.parse(s)),0==i.length)$(".div_history_list").hide(),$(".div_noHistory").show();else{$(".div_history_list").show(),$(".div_noHistory").hide();for(var r=0;r<i.length;r++)$("#id_ul_history").append('<li class="li_history_item"></li>'),$("#id_ul_history li").eq(r).text(i[r]);$(".li_history_item")[xigou.events.click](function(){resetKeyAndSearch(this.innerHTML,i,e)})}$(".div_search_input_box").click(function(){$(".div_search_list").hide(),$(".div_search_history").show(),$("#input_search_history")[0].value=$("#input_search")[0].value,$("#input_search_history").focus(),$(".div_clear_input_history").show()}),$(".cancal_search")[xigou.events.click](function(){setTimeout(function(){$("#input_search_history").blur(),$(".div_search_history").hide(),$(".div_search_list").show()},150)}),$("#input_search_history").keyup(function(s){var r=$(this).val();r&&r.length>0?($(".div_clear_input_history").show(),13==s.keyCode&&(r=r.replace(/(^\s*)|(\s*$)/g,""),r.length>0&&resetKeyAndSearch(r,i,e))):$(".div_clear_input_history").hide()}),$("#input_search_history").keydown(function(){$(".div_clear_input_history").show()}),$(".div_clear_input_history")[xigou.events.click](function(){$("#input_search_history")[0].value="",$(".div_clear_input_history").hide()}),$(".div_clear_history")[xigou.events.click](function(){var e=$.dialog({title:"",content:"确认清空输入的搜索历史吗？ ",button:["取消","确认"]});e.on("dialog:action",function(e){1==e.index&&(i=[],xigou.removelocalStorage("searchHistory"),$("#id_ul_history").empty(),$(".div_history_list").hide(),$(".div_noHistory").show())})})}function resetKeyAndSearch(e,s){if(e&&e.length>0){var i=s.indexOf(e);-1!=i&&s.splice(i,1),s.unshift(e),s.length>10&&s.pop();var r=$(".div_group").attr("data");xigou.setLocalStorage("searchHistory",JSON.stringify(s)),window.location.href="search.html?key="+e+"&sp="+r}}function selectSortType(e){$(".div_search_sort_item")[xigou.events.click](function(){var s=this.getAttribute("id");if("sortByPrice"==s)$(this).hasClass("current_sort")?$(this).children("u").hasClass("up")?($(this).children("u").removeClass("up"),$(this).children("u").addClass("down"),searchSortType=1):($(this).children("u").removeClass("down"),$(this).children("u").addClass("up"),searchSortType=2):($(".div_search_sort_item").removeClass("current_sort"),$(this).addClass("current_sort"),$(this).children("u").removeClass("down"),$(this).children("u").addClass("up"),searchSortType=2);else{if($(this).hasClass("current_sort"))return;$(".div_search_sort_item").removeClass("current_sort"),$(this).addClass("current_sort");var s=this.getAttribute("id");"sortByDefoule"==s?searchSortType="":"sortBySales"==s?searchSortType=3:"sortByNew"==s&&(searchSortType=5)}research(e)})}function research(e){CurPage=1,bMaxPage=!1,$(".ul_search_list").empty(),e.unlock(),e.resetload(),Search(e,searchSortType),CurPage++}var CurPage=1,bMaxPage=!1,searchSortType=xigou.getQueryString("sort")||"",Key=xigou.getQueryString("key"),categoryid=xigou.getQueryString("categoryid"),brandid=xigou.getQueryString("brandid"),fromPage=xigou.getQueryString("fromPage"),Key=xigou.getQueryString("key"),name=xigou.getQueryString("name"),sp=xigou.getQueryString("sp"),couponid=xigou.getQueryString("couponid");$(function(){isWeiXin()?($(".div_search_head").hide(),couponid&&$("title").html("乐享优惠")):couponid&&($("#id_name").text("乐享优惠"),$("#id_name").show()),$(".dropload-refresh").hide();var e=$(".div_search_list").dropload({scrollArea:window,loadDownFn:function(e){bMaxPage||(e.resetload(),Search(e,searchSortType),CurPage++)}});switch(searchSortType){case 1:$(".div_search_sort_item").removeClass("current_sort"),$("#sortBySales").addClass("current_sort"),$("#sortBySales").children("u").addClass("down"),$("#sortBySales").children("u").removeClass("up");break;case 2:$(".div_search_sort_item").removeClass("current_sort"),$("#sortBySales").addClass("current_sort"),$("#sortBySales").children("u").removeClass("down"),$("#sortBySales").children("u").addClass("up");break;case 3:$(".div_search_sort_item").removeClass("current_sort"),$("#sortByPrice").addClass("current_sort");break;case 5:$(".div_search_sort_item").removeClass("current_sort"),$("#sortByNew").addClass("current_sort")}window.onbeforeunload=function(){var e=[];searchSortType&&e.push("sort="+searchSortType),Key&&e.push("key="+Key),searchSortType&&e.push("sort="+searchSortType),categoryid&&e.push("categoryid="+categoryid),brandid&&e.push("brandid="+brandid),name&&e.push("name="+name),sp&&e.push("sp="+sp),couponid&&e.push("couponid="+couponid),xigou.setSessionStorage("productdetails_backurl","search.html?"+e.join("&"))},onbeforeunload(),$("form").submit(function(){return!1}),$(".dropload-down").hide(),InitSearchEdid(e),selectSortType(e)}),$(".div_group").click(function(){$(".choose").show()}),$(".li1").click(function(){$(".choose").hide(),$(".div_group").html($(this).children("span").html()),$(".div_group").attr("data",""),$(".input_search").attr("placeholder","请输入相关产品或店铺名称")}),$(".li2").click(function(){$(".choose").hide(),$(".div_group").html($(this).children("span").html()),$(".div_group").attr("data",9),$(".input_search").attr("placeholder","请输入您想要团购的商品")});