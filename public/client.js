$(document).ready(function() {
    console.log("====> Checking Wechat");
    if (!app.uid) {
        $.get('http://shenqibuluo.com/checkwechat', function(res) {
            if (Number(res.code) !== 200) {
                console.log("====> Redirect to wechat");
                localStorage.last_url = encodeURIComponent(window.location.href);
                localStorage.login = 1;
                window.location = "http://shenqibuluo.com/auth/wechat";
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