// ==UserScript==
// @name         Remove CSDN ADs
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  try to take over the world!
// @author       Admingyu
// @match        https://blog.csdn.net/*
// @grant        none
// @require    http://code.jquery.com/jquery-1.11.0.min.js
// ==/UserScript==

//左栏广告

$(".csdn-tracking-statistics.mb8.box-shadow").remove();



//左侧浮动广告
$(".fourth_column").remove();

//底部广告条
$(".pulllog-box").remove();

//右侧广告
//$("#pic_container").remove();
//$(".pic_container").remove();
//$("#img-txt-wrapper").remove();

//<a href="https://h5.youzan.com/v2/goods/3f5drkf7by4en" target="_blank"><div class="context-box h5width">
//$("a[href^='https://h5.youzan.com/v']").parent().remove()

//<div id="kp_box_65" data-pid="65" data-track-click="{&quot;mod&quot;:&quot;kp_popu_65-625&quot;,&quot;con&quot;:&quot;,,&quot;}"><div style="width: 100%;"><
//$("div[id^='kp_box_']").parent().remove()

$(document).ready(function(){
  $("iframe[id^='iframeu']").remove()
  $("li[class^='right-item _paradigm_S']").remove()
});



//腹部广告
$(".recommend-item-box.recommend-ad-box").remove();
$("#kp_box_*").remove();
$(":contains('.youzan.com/')").remove();
$(".mediav_ad").remove();//effecient
//$("#iframeu*").remove();


//其他广告
$(":contains('百度广告')").remove()






