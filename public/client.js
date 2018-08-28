$(document).ready(function() {
    console.log("====> Checking Wechat");
    if (!app.uid) {
        var domain = window.location.hostname;
        $.get('http://' + domain + '/checkwechat', function(res) {
            if (Number(res.code) !== 200) {
                console.log("====> Redirect to wechat");
                localStorage.last_url = encodeURIComponent(window.location.href);
                localStorage.login = 1;
                window.location = 'http://' + domain + '/auth/wechat';
            } else {
                if (Number(localStorage.login) !== 0) {
                    const last_url = decodeURIComponent(localStorage.last_url);
                    console.log("====> Redirect to lasturl", last_url)
                    localStorage.login = 0;
                    window.location = last_url; 
                }
            }
        })
    }
})
