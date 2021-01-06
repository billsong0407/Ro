// Reference: Snyder Group, Inc.

/* eslint-disable */
function submit() {    
  var pass = true;
	var error_color = '#FFD9D9';
  var fields = ['Timestamp','Email'];
  var row = '';
  var i;
  for(i=0; i < fields.length; ++i) {
    var field = fields[i];
    $('#'+field).css('backgroundColor', 'inherit');
    var value = $('#'+field).val();       
    if(!value) {
      if(field != 'message') {
        $('#'+field).css('backgroundColor', error_color);
        var pass = false;
      }
    } 
    else {            
      row += '"'+value+'",';
    }
  }
   
  if(pass == true) {		
    var oauth_token = '';
    var api_id = '';
    var api_secret = '';
    var sheet_id = '1dumdSXDcwQc3d9B0ls90SNV_nLcrtWY0W_g8lDLjv04';
    var sheet_token = false;
    var sheet_url = 'https://sheets.googleapis.com/v4/spreadsheets/'+sheet_id+'/values/A1:append?includeValuesInResponse=false&insertDataOption=INSERT_ROWS&responseDateTimeRenderOption=SERIAL_NUMBER&responseValueRenderOption=FORMATTED_VALUE&valueInputOption=USER_ENTERED';
    var sheet_body = '{"majorDimension":"ROWS", "values":[['+row+']]}';        
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://www.googleapis.com/oauth2/v4/token?client_id='+api_id+'&client_secret='+api_secret+'&refresh_token='+oauth_token+'&grant_type=refresh_token');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {            
      var response = JSON.parse(xhr.responseText);
      var sheet_token = response.access_token;            
      //Insert Data to google sheets
      if(sheet_token) {
        var xhrNew = new XMLHttpRequest();
        xhrNew.open('POST', sheet_url);
        xhrNew.setRequestHeader('Content-length', sheet_body.length);
        xhrNew.setRequestHeader('Content-type', 'application/json');
        xhrNew.setRequestHeader('Authorization', 'OAuth ' + sheet_token );
        xhrNew.onload = function() {
          if(xhrNew.status == 200) {
            return 'Success'
          } 
          else {
            return 'Error'
          }
        };
        xhrNew.send(sheet_body);
      }            
    };
    xhr.send();
  }
}

function getResponse() {
  var message = this.submit()
  return message
}