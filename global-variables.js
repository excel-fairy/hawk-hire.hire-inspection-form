var PRE_DELIVERY_FORM_SHEET = {
    name: 'Pre delivery form',
    sheet: SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Pre delivery form'),
    exportRange: {
        r1: 2,
        r2: 56,
        c1: ColumnNames.letterToColumn('B'),
        c2: ColumnNames.letterToColumn('M')
    },
    unitNumberCell: 'I13',
    exportFileNameCell: 'C1',
    exportCheckboxCell: 'N1'
};

var POST_HIRE_FORM_SHEET = {
    name: 'Post hire form',
    sheet: SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Post hire form'),
    exportRange: {
        r1: 2,
        r2: 59,
        c1: ColumnNames.letterToColumn('B'),
        c2: ColumnNames.letterToColumn('M')
    },
    unitNumberCell: 'I13',
    exportFileNameCell: 'C1',
    exportCheckboxCell: 'N1'
};

var DATA_VALID_SHEET = {
    name: 'data valid',
    sheet: SpreadsheetApp.getActiveSpreadsheet().getSheetByName('data valid'),
    mailData: {
        preDevliveryForm: {
            recipientAddressCell: 'AH4',
            subjectCell: 'AH5',
            messageCell: 'AH6'
        },
        postDevliveryForm: {
            recipientAddressCell: 'AI4',
            subjectCell: 'AI5',
            messageCell: 'AI6'
        }
    }
};