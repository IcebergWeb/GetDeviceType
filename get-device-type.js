function getDeviceType() {
    return window.navigator.userAgent;
}

function isPC() {
    let agent = getDeviceType();
    return agent.indexOf('Windows') != -1 || agent.indexOf('Macintosh') != -1 || agent.indexOf('Linux x86') != -1;
}

function isAndroid() {
    let agent = getDeviceType();
    return agent.indexOf('Android') != -1;
}

function isIOS() {
    let agent = getDeviceType();
    return agent.indexOf('iPhone') != -1 || agent.indexOf('iPad') != -1;
}
