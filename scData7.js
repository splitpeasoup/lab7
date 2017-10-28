'use strict';

debugger;

//constructors! think of it like a specialized machine in a factory that creates new objects
//prototypes are the functionality that the machine adds to the objects

//we need to define our hours and store them
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var totalCookiesByHour = 0;
//totalTotal
var netTotal = 0;
var name = 0;
var randCustByHour = 0;
var maxCustPerHour = 0;
var minCustPerHour = 0;
var cookiesSoldByHour = 0;
var totalCookies = 0;
var randCustByHour = [];
var cookiesSoldByHour =  [];
var allLocations = [];
var totalCookies = 0;


function populateTable(allLocations){
  console.log('asdfasfd');
  var tableEl = document.getElementById('cookiestand');

  var trEl = document.createElement('tr');

  var tdEl = document.createElement('td');

  var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

  var locations = allLocations;

  tdEl.textContent = 'Hours';
  trEl.appendChild(tdEl);
  console.log(tdEl+ 'first tdEl');


  for( var i = 0; i < this.hours.length; i++) {

    tdEl.textContent = this.hours[i];//content
    trEl.appendChild(tdEl);
    console.log(trEl+'hours trEl');
    return trEl;//add cell to the row
  }
  tableEl.appendChild(trEl);//add row to the table

for (j = 0; j < location.length; j++){
tableRowMaker(location[j]);
console.log(trEl + 'trEl location'+ location[index]);
cookiestand.appendChild(trEl);
return tableEl;
}

}

function tableRowMaker(location = indexof) {

  var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

  var tableEl = document.getElementById('cookiestand');

  var trEl = document.createElement('tr');

  var tdEl = document.createElement('td');

  tdEl.textContent = location[index].name;

  trEl.appendChild(tdEl);
console.log('tdEl' , tdEl);

  //iterate through array
  for(var i = 0; i < hours.length; i++) {
    
 location[index].calcRandCustByHour();

location[index].calcCookiesSoldByHour();

tdEl.textContent = location[index].cookiesSoldByHour;//content
    trEl.appendChild(tdEl); //add cell to the row
  }
   location[index].calcTotalCookies();
    tdEl.textContent = location[index].totalCookies;
    trEl.appendChild(tdEl);

   return trEl;//add row to the table
}
function calcRandCustByHour(minCustPerHour,maxCustPerHour) {
 for(var i = 0; i < hours.length; i++) {
   var randomNum = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
   console.log('random number for customers ' + randomNum);
   this.randCustByHour.push(randomNum);
   // this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
   console.log('randCustByHour'+this.randCustByHour[i]);

 }
 return this.randCustByHour;
}

function calcCookiesSoldByHour(avgCookieSoldPerHour,randCustByHour) {

 for(var j = 0; j < hours.length; j++) {
   this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[j]));
   console.log('cookiesSoldByHour'+this.cookiesSoldByHour[j]);
 }
 return this.cookiesSoldByHour;
}

function calcTotalCookies(cookiesSoldByHour) {

 this.totalCookies = this.cookiesSoldByHour.reduce(function(a,b){
   return a + b;
 }, 0);

   console.log('totalCookies'+this.totalCookies);
 return this.totalCookies;
}
function MakeLocation(name, minCustPerHour, maxCustPerHour,
avgCookieSoldPerHour) {
  //name, minCustPerHour, maxCustPerHour,
  //avgCookieSoldPerHour

  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookieSoldPerHour = avgCookieSoldPerHour;
  
allLocations.push(this);

  return this.name, this.cookiesSoldByHour, this.totalCookies;
}

var firstAndPike = new MakeLocation('First and Pike', 23, 65, 6.3);
var seatac = new MakeLocation('Seatac Airport', 3, 24, 1.2);
var seattleCtr = new MakeLocation('Seattle Center', 11, 38, 3.7);
var capitolHill = new MakeLocation('Capitol Hill', 20, 38, 2.3);
var alki = new MakeLocation('Alki', 2, 16, 4.6);

populateTable(allLocations);


