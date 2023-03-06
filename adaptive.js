class Adaptive {
    
    getDeviceType() {
        return window.navigator.userAgent;
    }

    agent = this.getDeviceType();

    isPC() {
        return this.agent.indexOf('Windows') != -1 || this.agent.indexOf('Macintosh') != -1 || this.agent.indexOf('Linux x86') != -1;
    }

    isWindows() {
        return this.agent.indexOf('Windows') != -1;
    }

    isMac() {
        return this.agent.indexOf('Windows') != -1;
    }

    isLinux() {
        return this.agent.indexOf('Linux x86') != -1;
    }

    isAndroid() {
        return this.agent.indexOf('Android') != -1;
    }

    isIOS() {
        return this.agent.indexOf('iPhone') != -1 || this.agent.indexOf('iPad') != -1;
    }

    isIPhone() {
        return this.agent.indexOf('iPhone') != -1;
    }

    isIPad() {
        return this.agent.indexOf('iPad') != -1;
    }

    getWindowSize() {
        return {
            "width": window.innerWidth,
            "height": window.innerHeight
        }
    }

    getWindowWidth() {
        return window.innerWidth;
    }

    getWindowHeight() {
        return window.innerHeight;
    }

    getDisplaySize() {
        return {
            "width": window.outerWidth,
            "height": window.outerHeight
        }
    }

    getDisplayWidth() {
        return window.outerWidth;
    }

    getDisplayHeight() {
        return window.outerHeight;
    }
}
