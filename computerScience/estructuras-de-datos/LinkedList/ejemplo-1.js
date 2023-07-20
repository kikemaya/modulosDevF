let locomotora = {
    gancho: null,
}

let vagon = {
    carga: 'palabra',
    gancho: null,
}
let vagon2 = {
    carga: 900,
    gancho: null,
}
let vagon3 = {
    carga: [4.1, 4.2, 4.3],
    gancho: null,
}

locomotora.gancho = vagon
locomotora.gancho.gancho = vagon2
locomotora.gancho.gancho.gancho = vagon3

console.log(locomotora);