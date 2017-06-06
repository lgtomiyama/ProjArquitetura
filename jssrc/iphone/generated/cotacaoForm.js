function addWidgetscotacaoForm() {
    cotacaoForm.setDefaultUnit(kony.flex.DP);
    var FlexContainer044ea6db415a64f = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer044ea6db415a64f",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer044ea6db415a64f.setDefaultUnit(kony.flex.DP);
    var btnBuscarCotacao = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "20%",
        "id": "btnBuscarCotacao",
        "isVisible": true,
        "right": "0dp",
        "skin": "commonIr",
        "text": ">",
        "top": "0dp",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var lblCodigoF = new kony.ui.Label({
        "id": "lblCodigoF",
        "isVisible": true,
        "left": "5dp",
        "skin": "slLabel",
        "text": "Código: ",
        "top": "170dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblCodigo = new kony.ui.Label({
        "id": "lblCodigo",
        "isVisible": true,
        "left": "107dp",
        "skin": "slLabel",
        "top": "170dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var listCotacoes = new kony.ui.PickerView({
        "height": "20%",
        "id": "listCotacoes",
        "isVisible": true,
        "left": "0dp",
        "masterData": [
            [
                ["m1", "Jan"],
                ["m2", "Feb"],
                ["m3", "Mar"],
                ["m4", "Apr"],
                ["m5", "May"],
                ["m6", "Jun"],
                ["m7", "Jul"], 100
            ]
        ],
        "masterDataMap": null,
        "selectedKeyValues": ["Jan"],
        "skin": "slPickerView",
        "top": "0dp",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    FlexContainer044ea6db415a64f.add(btnBuscarCotacao, lblCodigoF, lblCodigo, listCotacoes);
    cotacaoForm.add(FlexContainer044ea6db415a64f);
};

function cotacaoFormGlobals() {
    cotacaoForm = new kony.ui.Form2({
        "addWidgets": addWidgetscotacaoForm,
        "enabledForIdleTimeout": false,
        "id": "cotacaoForm",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "fundoBranco"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
        "needsIndicatorDuringPostShow": false,
        "retainScrollPosition": false,
        "titleBar": false,
        "titleBarSkin": "slTitleBar"
    });
    cotacaoForm.info = {
        "kuid": "52340b842e0d472788dbaf0ef6db8de0"
    };
};