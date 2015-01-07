cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.cloudsky.cordovaplugins.zbar/www/zbar.js",
        "id": "org.cloudsky.cordovaplugins.zbar.zBar",
        "clobbers": [
            "cloudSky.zBar"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.cloudsky.cordovaplugins.zbar": "1.1.0"
}
// BOTTOM OF METADATA
});