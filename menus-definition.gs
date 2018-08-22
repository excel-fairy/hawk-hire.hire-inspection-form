function onOpen() {
    var ui = SpreadsheetApp.getUi();
    ui.createMenu('Run scripts')
        .addItem('Export ' + PRE_DELIVERY_FORM_SHEET.name, 'exportPreDeliveryForm')
        .addItem('Export ' + POST_HIRE_FORM_SHEET.name, 'exportPostHireForm')
        .addToUi();
}
