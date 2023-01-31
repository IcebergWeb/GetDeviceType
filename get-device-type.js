function getDeviceType() {
    return window.navigator.userAgent;
}

const agent = getDeviceType();

function isPC() {
    return agent.indexOf('Windows') != -1 || agent.indexOf('Macintosh') != -1 || agent.indexOf('Linux x86') != -1;
}

function isAndroid() {
    return agent.indexOf('Android') != -1;
}

function isIOS() {
    return agent.indexOf('iPhone') != -1 || agent.indexOf('iPad') != -1;
}
