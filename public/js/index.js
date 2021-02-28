

function clicked() {

  // Get values from the from
  var accountName = document.getElementById('accountName');
  var accountId = document.getElementById('inputAccountId');
  var amount = document.getElementById('inputAmount');

  // convert values into neccesary type
  var accountIdValue = accountId.value;
  console.log("account id >> ", accountId);
  // console.log("account name >> ", accountName.value);
  var amountInt = parseInt(amount.value);
  console.log("amount >> ", amountInt);
  var savingAccount = "603b0e094a4a8605712848dd";

  var url = "http://api.nessieisreal.com/accounts/"+ savingAccount +"/transfers?key=9c938dc5d4b4b1e2841d67335f3e5553";

  var data = {};
  data.medium = "balance";
  data.payee_id  = accountIdValue;
  data.amount = amountInt;
  data.transaction_date = "2021-02-28";
  data.status = "completed";
  data.description = "optional string";

  var json = JSON.stringify(data);

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
  xhr.onload = function () {
  	var users = JSON.parse(xhr.responseText);
  	if (xhr.readyState == 4 && xhr.status == "201") {
  		console.table(users);
      window.location.href = "/";
  	} else {
  		console.error(users);
  	}
  }
  xhr.send(json);

}
