// ==UserScript==
// @name         Remove CSDN ADs
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Admingyu
// @match        https://blog.csdn.net/*
// @grant        none
// @require    http://code.jquery.com/jquery-1.11.0.min.js
// ==/UserScript==

//左栏广告
$("#asideFooter").remove();

//左侧浮动广告
$(".fourth_column").remove();

//底部广告条
$(".pulllog-box").remove();

//右侧广告
$("#pic_container").remove();
$(".pic_container").remove();
$("#iframeu*").remove();

//腹部广告
$("#recommend-item-box recommend-ad-box").remove();
//$("#iframeu*").remove();
//$("#iframeu*").remove();
//$("#iframeu*").remove();





