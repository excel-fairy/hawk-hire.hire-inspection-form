function onOpen() {
    var ui = SpreadsheetApp.getUi();
    ui.createMenu('Run scripts')
        .addItem(PRE_DELIVERY_FORM_SHEET.name, 'exportPreDeliveryForm')
        .addItem(POST_HIRE_FORM_SHEET.name, 'exportPostHireForm')
        .addToUi();
}
