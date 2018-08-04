var EXPORT_DIR = {
    id: EXPORT_DIR_ID
};

var PRE_DELIVERY_FORM_SHEET = {
    name: 'Pre delivery form',
    sheet: SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Pre delivery form'),
    exportRange: {
        r1: 2,
        r2: 56,
        c1: letterToColumn('B'),
        c2: letterToColumn('M')
    }
};

var POST_HIRE_FORM_SHEET = {
    name: 'Post hire form',
    sheet: SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Post hire form'),
    exportRange: {
        r1: 2,
        r2: 59,
        c1: letterToColumn('B'),
        c2: letterToColumn('M')
    }
};
