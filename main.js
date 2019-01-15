function exportSheet(sheet){
    var fileName = sheet.sheet.getRange(sheet.exportFileNameCell).getValue();

    var exportOptions = {
        exportFolderId: getExportFolder(sheet).getId(),
        sheetId: sheet.sheet.getSheetId(),
        exportFileName: fileName,
        range: sheet.exportRange
    };
    var pdfFile = ExportSpreadsheet.export(exportOptions);
    sendEmail(sheet, pdfFile);
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

// Just added to automate email when saving as PDF
function sendEmail(sheet, attachment) {
    var emailData = getEmailData(sheet);
    var recipient = DATA_VALID_SHEET.sheet.getRange(emailData.recipientAddressCell).getValue();
    var subject = DATA_VALID_SHEET.sheet.getRange(emailData.subjectCell).getValue();
    var message = DATA_VALID_SHEET.sheet.getRange(emailData.messageCell).getValue();
    var emailOptions = {
        attachments: [attachment.getAs(MimeType.PDF)],
        name: 'Automatic hire inspection form mail sender'
    };
    MailApp.sendEmail(recipient, subject, message, emailOptions);
}

function getEmailData(sheet){
    switch (sheet.name) {
        case 'Pre Hire form':
            return DATA_VALID_SHEET.mailData.preDevliveryForm;
        case 'Post hire form':
            return DATA_VALID_SHEET.mailData.postDevliveryForm;
        default:
            return null;
    }
}
