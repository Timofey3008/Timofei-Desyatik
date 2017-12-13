var downloadsPath = __dirname;

exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [
                '--disable-cache',
                '--disable-application-cache',
                '--disable-offline-load-stale-cache',
                '--disk-cache-size=0',
                '--v8-cache-options=off',
                '--window-size=1360,768',
                'disable-infobars=true'
            ],
            prefs: {
                'download': {
                    'prompt_for_download': false,
                    'default_directory': downloadsPath
                }
            }
        }
    },
    specs: ['spec/**/test2.e2e-spec.js'],
    params: {
        baseUrl: 'http://vtest16:8093/catalog-planning/#/productionsEditor',
        randomValues: {
            from: 1111,
            to: 9999
        },
        visibilityWaitingTime: {
            fileDownloading: 8000,
            elementDrawing: 6000
        },
        downloading: {
            path: downloadsPath,
            fileName: '/report.xlsx'
        }
    }
};