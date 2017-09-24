// ==UserScript==
// @name         BigQuery: Always show validator
// @namespace    https://github.com/jdanbrown/userscripts
// @version      0.3
// @description  Ensure the query syntax validator bar is always shown
// @author       jdanbrown
// @match        https://bigquery.cloud.google.com/*
// @grant        none
// @updateURL    https://openuserjs.org/meta/jdanbrown/BigQuery_Always_show_validator.meta.js
// ==/UserScript==

// Docs: http://tampermonkey.net/documentation.php
(function() {
    'use strict';

    var showValidator = () => {
        if (document.querySelector('.validate-status-box.ng-hide')) {
            console.log('bq-show-validator: Found hidden .validate-status-box, clicking to show');
            document.querySelector('.validator-bubble').click();
        }
    };

    var pollPeriodMs = 500;
    console.log('bq-show-validator: Starting, pollPeriodMs=' + pollPeriodMs);
    setInterval(showValidator, pollPeriodMs);

})();
