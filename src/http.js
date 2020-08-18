function httpPost(context, param, callback) {
    var httpRequest = new XMLHttpRequest()
    httpRequest.open("POST", 'http://service.kousaten.top:985/'+context, true)
    httpRequest.setRequestHeader("Content-type", "text/json");
    httpRequest.send(param);
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var res = httpRequest.responseText;
            callback(res);
        }
    };
}
