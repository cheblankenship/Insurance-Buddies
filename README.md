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
* __Teja Makthala__
... Worked on back-end using Node.js. In addition, worked on rendering queried data on front-end using ejs engine. Tested the entire API documentation. Contributed to the architecture designing specifically on micro-service for financial transaction.

* __Eric Cutherell__
... Worked on back-end using Node.js. Tested the Capital-One API return cases to make sure the APIs that the customer use are up to date. Also worked on organizing git branch contribution.

* __Jeffrey Byland__
... Worked on implementing the front-end code and design. Integrated the HTML/CSS files into ejs files so the express can render data dynamically on user-interface.

* __Che Blankenship__
... Worked on designing the architecture. Handled the git merge issues. Built the architecture for the project. Tested the whole Capital-One API. Worked on mock data for running the finincial transaction cases. Worked on API calls for back-end (Node.js) and front-end (ajax).



## What we used
`Node.js`, `Nessie-API (Capital One API)`, `JavaScript`, `HTML/CSS`, `ejs`, `git/GitHub`, `Postman`


## Installation
1. Clone the repo.

`$ git clone https://github.com/PugNorange/Insurance-Buddies.git`

2. Check node.js is installed.

`$ node -v`

3. Check npm version.

`$ npm -v`

4. Install `npm` libraries.

All the npm libraries used for this project is saved in package.json.

`$ npm install [library name]`

5. Run the project on `http://localhost:3000/`

`$ node app.js` or `$ nodemon app.js`

6. Open `http://localhost:3000/` in your browser.



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
  var savingAccount = "[account_id_to_transfer_money]";

  var url = "http://api.nessieisreal.com/accounts/"+ savingAccount +"/transfers?key=[api-key]";

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
