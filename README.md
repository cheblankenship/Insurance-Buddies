# Insurance-Buddies

## HackUTD VII Seas Hackathon
The Capital One challenge was to create a financially related model while using the
Nessie API. We decided to make a joint bank account called Group Cash which would allow a
group of people to deposit money equally to spend however the group wants through a voting
system. For example, if there are four people in a group and one person wants to go
snowboarding in Colorado after raising a thousand dollars, the group can vote on whether they
want to spend the money that way. In order for them to use the money at least fifty-one percent
of the group must agree. Only then will the money be available to use. This also applies to the
State Farm challenge which was to provide a technical solution which can help the people of
Texas bounce back from the winter storm. If someone in the group needed financial aid for
supplies, the group can vote on how that money should be spent.
Group Cash has a menu that displays the group balance, each member's name, and
monthly requests. When clicking on the users profile you are able to see the amount of money in
their account, the payouts relieved, and if their dues were met. When requesting money from
Group Cash you are able to enter in your name, account ID, and how much money is requested.
The group rules menu displays custom rules made from the group regarding their joint account.


## Memebers
* Teja Makthala
... Worked on back-end using Node.js. In addition, worked on rendering queried data on front-end using ejs engine.

* Eric Cutherell
... Worked on back-end using Node.js. Tested the Capital-One API return cases to make sure the APIs that the customer use are uptodate. Also worked on organizing git branch Contribution.

* Jeffrey Byland
... Worked on implementing the frint-end code and design. Integerated the HTML/CSS files into ejs files so the express can render data dynamiclly on user-interface.

* Che Blankenship
... Worked on designing the architecture. Handled the git merge issues. Built the basic stack architecture for the project.


## API Calls

### Back-end
```javascript
const express   = require("express");
const app       = express();
const server    = require('http').createServer(app);
const port      = 3000;
const axios     = require('axios');

// ...
// short-cut the config code...
// ...

// Example of querying account amount via account_id
app.get('/', function(req, res) {
  axios.get('http://api.nessieisreal.com/accounts/[account-id]?key=[api-key]')
    .then(response => {
      console.log(response.data.balance);
      var amount = response.data.balance.toString();
      res.render("group",{
          data: amount
      });
    })
    .catch(error => {
      console.log(error);
    });
});

```


### Front-end
```javascript

function clicked() {
  // Get values from the form element id value
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
```
