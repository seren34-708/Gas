function myFunction() {
  var today = new Date();
  var weekend = new Date();
  
  weekend.setDate(weekend.getDate() + 4);
  
  today = Utilities.formatDate(today, 'Asia/Tokyo', 'MM/dd');
  weekend = Utilities.formatDate(weekend, 'Asia/Tokyo', 'MM/dd');
  
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  //  console.log(today);
  //  console.log(weekend);
  
  if (!(ss.getSheetByName(today))){
    const template = ss.getSheetByName('テンプレート');
    var newSheet = template.copyTo(ss);
    newSheet.setName(today + '~' + weekend);
    console.log(today);
  }
  else {
    console.log("すでに存在します");
  }
}
