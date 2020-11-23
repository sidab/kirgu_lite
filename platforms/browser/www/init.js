document.addEventListener('deviceready', function () {

    if (localStorage.getItem('kirgu_lite')) {

        initConfig();

    } else {

        localforage.clear().then(function () {

            localStorage.clear();

            localStorage.setItem('kirgu_lite', 'true');

            location.reload();

        });

    }

}, false);

let jsLoadedEvent = new CustomEvent('jsLoaded', { "detail": "Example of an event" });

let cssLoadedEvent = new CustomEvent('cssLoaded', { "detail": "Example of an event" });

let config = localStorage.config ? JSON.parse(localStorage.getItem('config')) : false;

let cssLoaded = false;

let jsLoaded = false;

function initConfig() {

    if (localStorage.getItem('config')) {

        try {

            initCss();

            initJs();

        } catch (error) {

            console.log(error);

            localStorage.removeItem('config');

            initConfig();

        }

        loadConfig(function () {

            loadCss();

            loadJs();

            document.addEventListener('cssLoaded', function(e) {

                checkChanges();

            });

            document.addEventListener('jsLoaded', function(e) {

                checkChanges();

            });

        });

    } else {

        loadConfig(function () {

            loadCss(function () {

                initCss();

            });

            loadJs(function () {

                initJs();

            });

        });

    }

}

function checkChanges() {

    if (cssLoaded && jsLoaded) {

        let newConfig = JSON.parse(localStorage.getItem('config'));

        if ((config.css !== newConfig.css) || (config.js !== newConfig.js)) {

            location.reload();

        }

    }

}

function loadConfig(callback) {

    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {

            let newConfig = this.responseText;

            localStorage.setItem('config', newConfig);

            if (callback) {

                callback();

            }

        }

    };

    xhttp.open('GET', 'http://kirgu.tmweb.ru/api/config', true);

    xhttp.send();

}

function initCss() {

    addStyles();

}

function addStyles() {

    try {

        localforage.getItem('css').then(function (css) {

            let style = document.createElement('style');

            style.appendChild(document.createTextNode(css));

            document.getElementsByTagName('head')[0].appendChild(style);

        });

    } catch (error) {

        alert('Произошла ошибка, пожалуйста попробуйте перезапустить приложение.');

        console.log(error);

    }

}

function loadCss(callback) {

    let config = JSON.parse(localStorage.getItem('config'));

    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {

            let css = this.responseText;

            try {

                css = css.replaceAll('../themes/hikma/assets/app//', '');

            } catch (error) {

                css = css.replace(/..\/themes\/hikma\/assets\/app\/\//g, '');

            }

            localforage.setItem('css', css).then(function () {

                cssLoaded = true;

                document.dispatchEvent(cssLoadedEvent);

                if (callback) {

                    callback();

                }

            });

        }

    };

    xhttp.open('GET', config.css, true);

    xhttp.send();

}

function initJs() {

    localforage.getItem('js').then(function (js) {

        try {

            eval(js);

        } catch (error) {

            console.log(error);

            setTimeout(function() {

                alert('Произошла ошибка, пожалуйста попробуйте перезапустить приложение.');

            }, 1);

        }

    });

}

function loadJs(callback) {

    let config = JSON.parse(localStorage.getItem('config'));

    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {

            let js = this.responseText;

            localforage.setItem('js', js).then(function () {

                jsLoaded = true;

                document.dispatchEvent(jsLoadedEvent);

                if (callback) {

                    callback();

                }

            });

        }

    };

    xhttp.open('GET', config.js, true);

    xhttp.send();

}
