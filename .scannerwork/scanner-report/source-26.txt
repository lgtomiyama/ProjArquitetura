//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "ProjArquitetura",
    appName: "ProjArquitetura",
    appVersion: "3.0.0",
    platformVersion: null,
    serverIp: "192.168.0.10",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "ProjArquitetura",
    isturlbase: "https://hml.mobile.bbmapfre.com.br/services",
    isMFApp: true,
    appKey: "bbc59107cc996d53250f3d7904673aea",
    appSecret: "c29f4675f277beeca967c1a4e4ec19b",
    serviceUrl: "https://hml.mobile.bbmapfre.com.br/authService/100000002/appconfig",
    svcDoc: {
        "appId": "99d1be2e-b2db-44ed-b852-b29757398e93",
        "baseId": "707d637a-51cf-4b84-b0c7-b985ce5eac4e",
        "name": "MobileInstitucional",
        "selflink": "https://hml.mobile.bbmapfre.com.br/authService/100000002/appconfig",
        "integsvc": {
            "PareOficinaWS": "https://hml.mobile.bbmapfre.com.br/services/PareOficinaWS",
            "CorretorWS": "https://hml.mobile.bbmapfre.com.br/services/CorretorWS",
            "GoogleLocalizacaoWS": "https://hml.mobile.bbmapfre.com.br/services/GoogleLocalizacaoWS",
            "PostoVistoriaWS": "https://hml.mobile.bbmapfre.com.br/services/PostoVistoriaWS",
            "TelefoneInstitucionalWS": "https://hml.mobile.bbmapfre.com.br/services/TelefoneInstitucionalWS",
            "FavoritosWS": "https://hml.mobile.bbmapfre.com.br/services/FavoritosWS",
            "MobileSinistroWS": "https://hml.mobile.bbmapfre.com.br/services/MobileSinistroWS",
            "PrestadorWS": "https://hml.mobile.bbmapfre.com.br/services/PrestadorWS",
            "ImpressaoDocumentosWS": "https://hml.mobile.bbmapfre.com.br/services/ImpressaoDocumentosWS",
            "VantagemWS": "https://hml.mobile.bbmapfre.com.br/services/VantagemWS",
            "MobileInstitucionalWS": "https://hml.mobile.bbmapfre.com.br/services/MobileInstitucionalWS",
            "HistoricoInteracoesWS": "https://hml.mobile.bbmapfre.com.br/services/HistoricoInteracoesWS"
        },
        "reportingsvc": {
            "custom": "https://hml.mobile.bbmapfre.com.br/services/CMS",
            "session": "https://hml.mobile.bbmapfre.com.br/services/IST"
        },
        "Webapp": {
            "url": "https://hml.mobile.bbmapfre.com.br/MOBILEINST"
        },
        "services_meta": {
            "PareOficinaWS": {
                "version": "1.0",
                "url": "https://hml.mobile.bbmapfre.com.br/services/PareOficinaWS",
                "type": "integsvc"
            },
            "CorretorWS": {
                "version": "1.0",
                "url": "https://hml.mobile.bbmapfre.com.br/services/CorretorWS",
                "type": "integsvc"
            },
            "GoogleLocalizacaoWS": {
                "version": "1.0",
                "url": "https://hml.mobile.bbmapfre.com.br/services/GoogleLocalizacaoWS",
                "type": "integsvc"
            },
            "PostoVistoriaWS": {
                "version": "1.0",
                "url": "https://hml.mobile.bbmapfre.com.br/services/PostoVistoriaWS",
                "type": "integsvc"
            },
            "TelefoneInstitucionalWS": {
                "version": "1.0",
                "url": "https://hml.mobile.bbmapfre.com.br/services/TelefoneInstitucionalWS",
                "type": "integsvc"
            },
            "FavoritosWS": {
                "version": "1.0",
                "url": "https://hml.mobile.bbmapfre.com.br/services/FavoritosWS",
                "type": "integsvc"
            },
            "MobileSinistroWS": {
                "version": "1.0",
                "url": "https://hml.mobile.bbmapfre.com.br/services/MobileSinistroWS",
                "type": "integsvc"
            },
            "PrestadorWS": {
                "version": "1.0",
                "url": "https://hml.mobile.bbmapfre.com.br/services/PrestadorWS",
                "type": "integsvc"
            },
            "ImpressaoDocumentosWS": {
                "version": "1.0",
                "url": "https://hml.mobile.bbmapfre.com.br/services/ImpressaoDocumentosWS",
                "type": "integsvc"
            },
            "VantagemWS": {
                "version": "1.0",
                "url": "https://hml.mobile.bbmapfre.com.br/services/VantagemWS",
                "type": "integsvc"
            },
            "MobileInstitucionalWS": {
                "version": "1.0",
                "url": "https://hml.mobile.bbmapfre.com.br/services/MobileInstitucionalWS",
                "type": "integsvc"
            },
            "HistoricoInteracoesWS": {
                "version": "1.0",
                "url": "https://hml.mobile.bbmapfre.com.br/services/HistoricoInteracoesWS",
                "type": "integsvc"
            }
        }
    },
    svcDocRefresh: false,
    svcDocRefreshTimeSecs: -1,
    eventTypes: ["FormEntry", "ServiceRequest", "Error", "Crash"],
    url: "https://hml.mobile.bbmapfre.com.br/ProjArquitetura/MWServlet",
    secureurl: "https://hml.mobile.bbmapfre.com.br/ProjArquitetura/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    cotacaoFormGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 7000
    })
};

function themeCallBack() {
    callAppMenu();
    initializeGlobalVariables();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        postappinit: AS_AppEvents_08a051f6e2d545f4beb8c95f81e3c63d,
        showstartupform: function() {
            cotacaoForm.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "eventTypes": appConfig.eventTypes,
        "serviceUrl": appConfig.serviceUrl
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;