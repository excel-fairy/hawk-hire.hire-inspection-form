var PRE_DELIVERY_FORM_SHEET = {
    name: 'Pre delivery form',
    sheet: SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Pre delivery form'),
    exportRange: {
        r1: 2,
        r2: 56,
        c1: ColumnNames.letterToColumn('B'),
        c2: ColumnNames.letterToColumn('M')
    },
    unitNumberCell: 'J13',
    exportFileNameCell: 'C1'
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
    unitNumberCell: 'J13',
    exportFileNameCell: 'C1'
};