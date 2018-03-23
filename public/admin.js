define('admin/plugins/sso-wechat3', ['settings'], function(Settings) {
    'use strict';
    /* globals $, app, socket, require */

    var ACP = {};

    ACP.init = function() {
        Settings.load('sso-wechat3', $('.sso-wechat3-settings'));

        $('#save').on('click', function() {
            Settings.save('sso-wechat3', $('.sso-wechat3-settings'), function() {
                app.alert({
                    type: 'success',
                    alert_id: 'sso-wechat3-saved',
                    title: 'Settings Saved',
                    message: 'Please reload your NodeBB to apply these settings',
                    clickfn: function() {
                        socket.emit('admin.reload');
                    }
                });
            });
        });
    };

    return ACP;
});
