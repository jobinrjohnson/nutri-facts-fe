let TOKEN = ""

export function saveToken(t) {
    TOKEN = t
    window.localStorage.setItem("token", t)
}

export function getToken() {
    if (TOKEN === "") {
        let m = window.localStorage.getItem("token")
        if (m) {
            TOKEN = m
        }
    }
    return `Bearer ${TOKEN}`
}

export function getPath(t) {
    //https://lgpocdemobackenddemo2.jobinrjohnson.in
    return "https://lgpocdemobackenddemo2.jobinrjohnson.in" + t
    // return "http://localhost:8080" + t
}