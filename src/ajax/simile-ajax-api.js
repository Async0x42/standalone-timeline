/*==================================================
 *  Simile Ajax API
 *
 *  Include this file in your HTML file as follows:
 *
 *    <script src="http://simile.mit.edu/ajax/api/simile-ajax-api.js" type="text/javascript"></script>
 *
 *==================================================
 */

if (typeof SimileAjax === "undefined") {
    var SimileAjax = {
        loaded:                 false,
        loadingScriptsCount:    0,
        error:                  null,
        params:                 { bundle: false }
    };

    window.SimileAjax = SimileAjax;
    SimileAjax.Platform = new Object();
    SimileAjax.urlPrefix = (typeof AjaxUrlPrefix !== 'undefined') ? AjaxUrlPrefix : 'src/ajax/';
}
