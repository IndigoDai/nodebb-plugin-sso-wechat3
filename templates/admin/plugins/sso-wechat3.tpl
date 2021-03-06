<div class="row">
    <div class="col-sm-2 col-xs-12 settings-header">Wechat SSO 3</div>
    <div class="col-sm-10 col-xs-12">
        <div class="alert alert-info">
            <p>
                请先在微信公众平台开启 "网页授权获取用户基本信息"，填入微信公众平台AppID 和密钥。本插件默认开启 "当用户未登陆并且从微信进入的时候申请微信登陆"
            </p>
        </div>
        <form class="sso-wechat3-settings">
            <div class="form-group">
                <label for="id">App ID</label>
                <input type="text" name="id" title="App ID" class="form-control" placeholder="App ID">
            </div>
            <div class="form-group">
                <label for="secret">App Secret</label>
                <input type="text" name="secret" title="App Secret" class="form-control" placeholder="App Secret" />
            </div>
            <div class="form-group">
                <input type="checkbox" name="weclient" class=""/>
                <label for="weclient">是否通过微信客户端注册</label>
            </div>

            <div class="form-group alert alert-warning">
                <label for="callback">Your NodeBB&apos;s "Authorization callback URL"</label>
                <input type="text" id="callback" title="Authorization callback URL" class="form-control" value="{callbackURL}" readonly />
            </div>
        </form>
    </div>
</div>

<button id="save" class="floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
    <i class="material-icons">save</i>
</button>
