function f(url, text) {

    return new Promise(function (res, rej) {

        fetch(`/api/` + url + "/")
        .then(function(x) { if (x.ok) return text ? x.text() : x.json(); else rej(x) })
        .then(res)
        .catch(rej)
    });
}