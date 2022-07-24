let TOKEN = ""

export function saveToken(t) {
    TOKEN = t
    console.log(t)
}

export function getToken() {
    return `Bearer ${TOKEN}`
}

export function getPath(t) {
    //https://lgpocdemobackenddemo2.jobinrjohnson.in
    return "https://lgpocdemobackenddemo2.jobinrjohnson.in" + t
    // return "http://localhost:8080" + t
}