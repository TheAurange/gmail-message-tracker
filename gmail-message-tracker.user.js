// ==UserScript==
// @name    [GMail] Message Tracker
// @author  Aurange
// @version 1.1
// @match   https://mail.google.com/mail/u/*
// @grant   window.close
// ==/UserScript==

"use strict";

new MutationObserver(function(mutationList, observer){
  let inbox = document.querySelector("div[data-tooltip='Inbox']");

  if(inbox){
    observer.disconnect();

    let spam = document.querySelector("div[data-tooltip='Spam'] span + div");

    inbox = inbox.querySelector("span + div");

    if(!inbox && !spam) window.close();
  }
}).observe(document, {
  childList: true,
  subtree: true
});
