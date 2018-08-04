function exportSheet(sheet){
    var fileName = sheet.name + ' - ' + getTodayDate();

    var exportOptions = {
        exportFolderId: EXPORT_DIR.id,
        sheetId: sheet.sheet.getSheetId(),
        exportFileName: fileName,
        range: sheet.exportRange
    };
    exportFile(exportOptions);
}

function exportPreDeliveryForm(){
    return exportSheet(PRE_DELIVERY_FORM_SHEET);
}

function exportPostHireForm(){
    return exportSheet(POST_HIRE_FORM_SHEET);
}

function getTodayDate() {
    var dateStr = new Date().toJSON().slice(0,10).split('-');
    return dateStr[2] + '/' + dateStr[1] + '/' + dateStr[0];
}

