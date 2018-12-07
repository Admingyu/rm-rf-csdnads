// ==UserScript==
// @name         Remove CSDN ADs
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://blog.csdn.net/*
// @grant        none
// @require    http://code.jquery.com/jquery-1.11.0.min.js
// ==/UserScript==

//左栏广告
$("#asideFooter").remove();
//左侧浮动广告
$(".fourth_column").remove();
$("aside.asideFooter").remove();
$("aside.asideFooter").remove();

