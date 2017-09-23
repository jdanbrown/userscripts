// ==UserScript==
// @name         BigQuery: Always use Standard SQL
// @namespace    https://bigquery.cloud.google.com/
// @version      0.1
// @description  Ensure the Standard SQL dialect is always selected unless there's nonempty SQL text
// @author       jdanbrown
// @match        https://bigquery.cloud.google.com/*
// @grant        none
// ==/UserScript==

// Docs: http://tampermonkey.net/documentation.php
(function() {
    'use strict';

    var enableStandardSql = () => {
        var checkedCheckbox = document.querySelector('#use-legacy-sql .jfk-checkbox-checked');
        if (checkedCheckbox) {
            var codeMirrorContainer = document.querySelector('.CodeMirror');
            if (codeMirrorContainer) {
                var sql = codeMirrorContainer.CodeMirror.getValue();
                if (sql.trim().length === 0) {
                    console.log('bq-enable-standard-sql: #use-legacy-sql is checked and .CodeMirror is empty, clicking to uncheck');
                    checkedCheckbox.click();
                }
            }
        }
    };

    var pollPeriodMs = 500;
    console.log('bq-enable-standard-sql: Starting, pollPeriodMs=' + pollPeriodMs);
    setInterval(enableStandardSql, pollPeriodMs);

})();
