function checkProperty() {
    var pro = new File("brix.json")
    pro.isExists(function (r) {
        if (!r) {
            var jobj = {
                "username": null,
                "accessToken": null,
            }
            pro.write(JSON.stringify(jobj))
        }
    })
}

function saveAccount(username, accessToken) {
    var pro = new File("brix.json")
    var str = pro.read()
    var jobj = JSON.parse(str)
    jobj.username = username
    jobj.accessToken = accessToken
    pro.write(JSON.stringify(jobj))
}

function getAccount() {
    var pro = new File("brix.json")
    var str = pro.read()
    return JSON.parse(str)
}
