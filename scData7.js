'use strict';

//constructors! think of it like a specialized machine in a factory that creates new objects
//prototypes are the functionality that the machine adds to the objects

//we need to define our hours and store them
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var totalCookiesByHour = 0;
//totalTotal
var netTotal = 0;

var randCustByHour = [];
var cookiesSoldByHour =  [];
var totalCookies = 0;

function tableRowMaker(name, totalCookies) {
  //make a table row
  // var trEl = document.createElement('tr');
  //
  // var tdEl = document.createElement('td');

  tdEl.textContent = this.name;

  trEl.appendChild(tdEl);
  //iterate through array
  for(var i = 0; i < this.totalCookies.length; i++) {

    tdEl.textContent = totalCookies[i];//content
    trEl.appendChild(tdEl); //add cell to the row
  }
  tableEl.appendChild(trEl);//add row to the table
}

 function calcRandCustByHour() {
  for(var i = 0; i < hours.length; i++) {
    this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    console.log(this.randCustByHour[i]);

  }
}

function calcCookiesSoldByHour() {
  for(var j = 0; j < hours.length; j++) {
    this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[j]));
    console.log(this.cookiesSoldByHour[j]);
  }
}

function calcTotalCookies() {

  this.totalCookies = this.cookiesSoldByHour.reduce(function(a,b){
    return a + b;
  }, 0);

    console.log(this.totalCookies);
  return this.totalCookies;
}


var FirstAndPike = {

  name : 'First and Pike',
  //creating my key value pairs inside of my object they are called properties
  minCustPerHour : 23,
  maxCustPerHour : 65,
  avgCookieSoldPerHour : 6.3,

}
var Seatac = {
  name: 'Seatac Airport',
  //creating my key value pairs inside of my object they are called properties
  minCustPerHour : 3,
  maxCustPerHour :24,
  avgCookieSoldPerHour : 1.2,
}

var SeattleCtr = {
  name : 'Seattle Center',
  //creating my key value pairs inside of my object they are called properties
  minCustPerHour : 11,
  maxCustPerHour : 38,
  avgCookieSoldPerHour : 3.7,
}
var CapitolHill = {
  name : 'Capitol Hill',
  //creating my key value pairs inside of my object they are called properties
  minCustPerHour : 20,
  maxCustPerHour : 38,
  avgCookieSoldPerHour : 2.3,
}
var Alki = {
  name: 'Alki',
  //creating my key value pairs inside of my object they are called properties
  minCustPerHour : 2,
  maxCustPerHour : 16,
  avgCookieSoldPerHour : 4.6,
 }

var allLocations = [ FirstAndPike, Seatac, SeattleCtr, CapitolHill, Alki ];

 // , var UserInput = {
//
//       name : this.username
//       minCustPerHour : this.userminCustomerPerHour;
//       maxCustPerHour : this.usermaxCustPerHour;
//       avgCookiesSoldPerHour : this.useravgCookiesSoldPerHour;
// }
function MakeLocation(name, minCustPerHour, maxCustPerHour,
avgCookieSoldPerHour) {
  this.name = name;
  this.minCustPerHour= minCustPerHour;
  this.maxCustPerHour= maxCustPerHour;
  this.avgCookieSoldPerHour = avgCookieSoldPerHour;

  this.calcRandCustByHour()= randCustByHour;

  this.calcCookiesSoldByHour()= cookiesSoldByHour;

  this.calcTotalCookies()= totalCookies;
}


function populateTable( array, array1 ){

  var location = array;

  var   hours = array1;

  var tableEl = document.getElementById('cookiestand');

  var trEl = document.createElement('tr');

  var tdEl = document.createElement('td');

  tdEl.textContent = 'Hours';

  for(var i = 0; i < hours.length; i++) {

    tdEl.textContent = hours[i];//content
    trEl.appendChild(tdEl); //add cell to the row
  }
  tableEl.appendChild(trEl);//add row to the table

for (var j = 0; j < location.length; j++){

location[j].MakeLocation();

tableRowMaker(location[j]);
}

}

populateTable(this.allLocations, this.hours);
