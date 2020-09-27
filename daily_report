function myFunction() {
  var today = new Date();
  today = Utilities.formatDate(today, 'Asia/Tokyo', 'MM/dd');
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  if (!(ss.getSheetByName(today))){
    const template = ss.getSheetByName('テンプレート');
    var newSheet = template.copyTo(ss);
    newSheet.setName(today);
    console.log(today);
  }
  else {
    console.log("すでに存在します");
  }
}
