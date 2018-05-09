(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s); js.id = id;js.async=true;
js.src = "https//connect.facebook.net/id_ID/sdk.js#xfbml=1&version=v2.12";
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
function downloadJSAtOnload() {
        var e = document.createElement("script");
        e.src = "//connect.facebook.net/id_ID/sdk.js#xfbml=1&version=v2.7", document.body.appendChild(e)
    }
    window.addEventListener ? window.addEventListener("load", downloadJSAtOnload, !1) : window.attachEvent ? window.attachEvent("onload", downloadJSAtOnload) : window.onload = downloadJSAtOnload;