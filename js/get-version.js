var url = "../version.json"
var request = new XMLHttpRequest()
request.open("get", url)
request.send(null)
request.onload = function () {
    if (request.status == 200) {
        var obj = JSON.parse(request.responseText)
        document.getElementById("versionName").innerHTML="v"+obj.versionName
        document.getElementById("releaseDate").innerHTML="更新日期："+obj.releaseDate
        document.close()
    }
}