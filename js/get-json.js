var url = "../version.json"
var request = new XMLHttpRequest()
request.open("get", url)
request.send(null)
request.onload = function () {
    if (request.status == 200) {
        var obj = JSON.parse(request.responseText)
        document.getElementById("downloadLink").href = obj.downloadLink
        document.getElementById("versionName").innerText = "v" + obj.versionName
        document.getElementById("releaseDate").innerText = "更新日期：" + obj.releaseDate
        var fragment = document.createDocumentFragment()
        for (i in obj.releaseNote) {
            p = document.createElement('p')
            p.innerHTML = obj.releaseNote[i]
            fragment.appendChild(p)
        }
        document.getElementById("releaseNote").appendChild(fragment)
    }
    document.close()
}