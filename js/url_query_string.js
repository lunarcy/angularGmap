/**
* Javascript Exercise 1 - Vanilla JS process URL Query String.
* @ Bin Jiang, 10 June, 2015
* 
**/

// == Function to parse the Query string, store the Params as value pairs in a Object. 
// @ 'qStr' as an input param, pass the query string to the function. 
// * Return the Object that contains the url param value pairs. 
// - For an advanced version, I would handling the Multi-Value param, 
//   and some special chars in the query string.
function parseParams(qStr) {

  // declare a object for Params value pair.
  var qObj = {};

  // check if there any query string on url.
  if(!qStr) {
    console.log('Not Found Query String.');
    return {};
  }
  
  // First Split each Param value pair, Then store them into the Object 1 by 1.
  qStr.split('&').forEach (function(data){
    qObj[data.split('=')[0]] = data.split('=')[1];
  });

  // If there is no query string in the right format, then return.
  if(!qObj || JSON.stringify(qObj)==='{}'){
    console.log('Not Found well defined Query String.');
    return {};
  }

  return qObj;
}

// == Function to Set the Cookies with the Query String Objects, with cookie expiration duration.
// @ 'qObj' pass the query string Object to the function. 
// @ 'hour' set the Cookies expiration in the set number hours. 
// - the Exersice was ask store all query string params into a cookie, I made 2 ways of set cookies.
function setCookieWithParams (qObj, hour) {

  // Check if the function 'qObj' param is good. 
  if(!qObj || JSON.stringify(qObj)==='{}'){
    console.log('Not Found query string object.');
    return;
  }
  // Check if the function 'hour' param is good. 
  if(hour === undefined || hour !== parseInt(hour, 10)) {
    hour = 2;
  }

  // Set x hours of time for Cookie expiration. 
  var date = new Date();
  date.setTime(date.getTime()+(hour*60*60*1000));
  var expires = "; expires="+date.toGMTString();

  // Save the whole Query string into a cookie. (in real case, 2 different way of setting, should be in 2 different functions.)
  document.cookie = "query_string=" + JSON.stringify(qObj) + expires;

  // Loop thru the object to save each params into the Cookie. 
  for(var prop in qObj) {
    if(qryObj.hasOwnProperty(prop)){
      document.cookie = prop + "=" + qObj[prop] + expires;
    }
  }

  return;
}

// == Function that store the query string into a localStorage.
// @ 'qObj' input, pass the query string Object to the function. 
function setLocalStorage(qObj) {

  // Check if the function 'qObj' param is good. 
  if(!qObj || JSON.stringify(qObj)==='{}'){
    console.log('Not Found query string object.');
    return;
  }

  // check the browser support of the LocalStorage.
  if(typeof(Storage) !== "undefined") {
    // Store the query string into the localStorage.
    localStorage.setItem("qString", JSON.stringify(qObj));
  } 
  else {
    console.log('Sorry! No Web Storage support..');
    return;
  }

  return;
}