(function() {
    'use strict';

    if ('Timeline' in window) {
        return;
    }

    window.Timeline = {};
    window.Timeline.DateTime = window.SimileAjax.DateTime;

    var defaultServerLocale = 'en';

    if (typeof TimelineUrlPrefix !== 'undefined') {
        Timeline.urlPrefix = TimelineUrlPrefix;
    } else {
        Timeline.urlPrefix = 'src/timeline/';
    }

    var defaultClientLocale = defaultServerLocale;

    Timeline.serverLocale = defaultServerLocale;
    Timeline.clientLocale = defaultClientLocale;
})();
