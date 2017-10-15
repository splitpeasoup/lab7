'use strict';

//constructors! think of it like a specialized machine in a factory that creates new objects
//prototypes are the functionality that the machine adds to the objects

//we need to define our hours and store them
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//we need to create a place for our list of all locations to be placed whenwe create them
var allLocations = [];

//we need to define a variable that will be dynamic depending on how many cookies
var totalCookiesByHour = 0;
//totalTotal
var netTotal = 0;

//constructor function begin with an Uppercase letter

// function GenLocation(name, minCustPerHour, maxCustPerHour, avgCookieSoldPerHour) {
//   //a function called MakeLocation will be a template for creating new objects that represent other locations
//   //the statements in this function add properties and or methods to the objects
//   //the this keyword is used instead of the object name to indicate that th property or method belongs to the object that this function creates
//   //this function has four parameters and each one sets the value of a property in the object
//   this.name = name;
//   this.minCustPerHour = minCustPerHour;
//   this.maxCustPerHour = maxCustPerHour;
//   this.avgCookieSoldPerHour = avgCookieSoldPerHour;
//   //why is this an array?
//   this.randCustByHour = [];
//   this.cookiesSoldByHour = [];
//   this.totalCookies = 0;
//   allLocations.push(this);
//   //using the this keyword in front of the method to show that the method belongs to the object that this function creates
//   // this.calcRandCustByHour = function() {
//   // METHODS GO HERE
//   //THINK ABOUT PROTOTYPES
//   // }
// }
// //remember to call the METHODS in the constructor that are now prototypes available to the new objects the constructor will MakeLocation
// // this.calcRandCustByHour();
//
// //call the functions in a function if you want
// //this constructor function creates five new objects with their own unique values used in properties of this object (name, minCustPerHour, maxCustPerHour, avgCookieSoldPerHour)
// function makeStands() {
//   new GenLocation('First and Pike', 23, 65, 6.3);
//   new GenLocation('SeaTac Airport', 3, 24, 1.2);
//   new GenLocation('Seattle Center',11,38,2.3);
//   new GenLocation('Capitol Hill', 20, 38, 4.6);
//   new GenLocation('Alki', 2, 16, 4.6);
//   //make one for each store
// };
// makeStands();


//time to create the table in javascript
//make header row
//table needs an id in html

// function makeHeaderRow() {
//   var cookiestands = document.getElementById('cookiestands');
//   var trEl = document.createElement('tr');
//   var thEl = document.createElement('th');
//   trEl.appendChild(thEl);
// }
var firstAndPike = {
  name: 'First and Pike',
  //creating my key value pairs inside of my object they are called properties
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookieSoldPerHour: 6.3,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
//method for random customers by hour
  calcRandCustByHour: function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustByHour[i]);

    }
  },
//method for cookies sold by hours
  calcCookiesSoldByHour: function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[j]));
      console.log(this.cookiesSoldByHour);
    }

  },

  calcTotalCookies : function() {


    this.totalCookies = this.cookiesSoldByHour.reduce(function(a,b){
      return a + b;
    }, 0);
    // for (var i =0; i < hours.length; i++ ){
    //
    //     this.totalCookies = sum(this.totalCookies, this.cookiesSoldByHour[i]) ;
    //
    //   }

      console.log(this.totalCookies);
    return this.totalCookies;
  },

//how to make this more generic to suite all locations
  render: function() {
    var firstandpike = document.getElementById('firstandpike');
    var fandp = document.getElementById('fandp');
    //calling the methods in the object literal
    this.calcRandCustByHour();

    this.calcCookiesSoldByHour();

    this.calcTotalCookies();



    //DOM manipulation irl!!!
    //create a vairable to abe able to append an item to our list
  //   //create a new h3 element
  //   var h3El = document.createElement('h3');
  //   //give text to the new h3 element
  //   h3El.textContent = this.name;
  //   firstandpike.appendChild(h3El);
  //   for(var k = 0; k < hours.length; k++) {
  //     //stepping through our hours array
  //     var liEl = document.createElement('li');
  //     //creating li elemnts with text of the hours
  //     liEl.textContent = hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
  //     console.log(liEl);
  //     fandp.appendChild(liEl);
  //   }
  //   var liEl = document.createElement('li');
  //   //creating li elemnts with text of the hours
  //   liEl.textContent = 'Total : ' + this.totalCookies + ' cookies';
  //   console.log(liEl);
  //   fandp.appendChild(liEl);
  //
  // }

};
firstAndPike.render();

var SeaTac = {
  name: 'Seatac Airport',
  //creating my key value pairs inside of my object they are called properties
  minCustPerHour: 3,
  maxCustPerHour:24,
  avgCookieSoldPerHour: 1.2,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
//method for random customers by hour
  calcRandCustByHour: function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustByHour[i]);

    }
  },
//method for cookies sold by hours
  calcCookiesSoldByHour: function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[j]));
      console.log(this.cookiesSoldByHour[j]);
    }
  },

  calcTotalCookies : function() {

    this.totalCookies = this.cookiesSoldByHour.reduce(function(a,b){
      return a + b;
    }, 0);


      console.log(this.totalCookies);
    return this.totalCookies;
  },

//how to make this more generic to suite all locations
  render: function() {
    var seatac = document.getElementById('seatac');
    var st = document.getElementById('st');
    //calling the methods in the object literal
    this.calcRandCustByHour();

    this.calcCookiesSoldByHour();

    this.calcTotalCookies();




    //DOM manipulation irl!!!
    //create a vairable to abe able to append an item to our list
  //   //create a new h3 element
  //   var h3El = document.createElement('h3');
  //   //give text to the new h3 element
  //   h3El.textContent = this.name;
  //   seatac.appendChild(h3El);
  //   for(var k = 0; k < hours.length; k++) {
  //     //stepping through our hours array
  //     var liEl = document.createElement('li');
  //     //creating li elemnts with text of the hours
  //     liEl.textContent = hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
  //     console.log(liEl);
  //     st.appendChild(liEl);
  //   }
  //   var liEl = document.createElement('li');
  //   //creating li elemnts with text of the hours
  //   liEl.textContent = 'Total : ' + this.totalCookies + ' cookies';
  //   console.log(liEl);
  //   st.appendChild(liEl);
  // }


};

SeaTac.render();

var SeattleCtr = {
  name: 'Seattle Center',
  //creating my key value pairs inside of my object they are called properties
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookieSoldPerHour: 3.7,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
//method for random customers by hour
  calcRandCustByHour: function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustByHour[i]);

    }
  },
//method for cookies sold by hours
  calcCookiesSoldByHour: function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[j]));
      console.log(this.cookiesSoldByHour[j]);
    }
  },

    calcTotalCookies : function() {

      this.totalCookies = this.cookiesSoldByHour.reduce(function(a,b){
        return a + b;
      }, 0);

        console.log(this.totalCookies);
      return this.totalCookies;
    },


//how to make this more generic to suite all locations
  render: function() {
    var seattlectr = document.getElementById('seattlectr');
    var sc = document.getElementById('sc');
    //calling the methods in the object literal
    this.calcRandCustByHour();

    this.calcCookiesSoldByHour();

    this.calcTotalCookies();


    //DOM manipulation irl!!!
    //create a vairable to abe able to append an item to our list
    //create a new h3 element
  //   var h3El = document.createElement('h3');
  //   //give text to the new h3 element
  //   h3El.textContent = this.name;
  //   seattlectr.appendChild(h3El);
  //   for(var k = 0; k < hours.length; k++) {
  //     //stepping through our hours array
  //     var liEl = document.createElement('li');
  //     //creating li elemnts with text of the hours
  //     liEl.textContent = hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
  //     console.log(liEl);
  //     sc.appendChild(liEl);
  //   }
  //   var liEl = document.createElement('li');
  //   //creating li elemnts with text of the hours
  //   liEl.textContent = 'Total : ' + this.totalCookies + ' cookies';
  //   console.log(liEl);
  //   sc.appendChild(liEl);
  // }
};

SeattleCtr.render();

var capitolHill = {
  name: 'Capitol Hill',
  //creating my key value pairs inside of my object they are called properties
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookieSoldPerHour: 2.3,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
//method for random customers by hour
  calcRandCustByHour: function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustByHour[i]);

    }
  },
//method for cookies sold by hours
  calcCookiesSoldByHour: function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[j]));
      console.log(this.cookiesSoldByHour[j]);
    }
  },

  calcTotalCookies : function() {

    this.totalCookies = this.cookiesSoldByHour.reduce(function(a,b){
      return a + b;
    }, 0);

      console.log(this.totalCookies);
    return this.totalCookies;
  },

//how to make this more generic to suite all locations
  render: function() {
    var capitolhill = document.getElementById('capitolhill');
    var ch = document.getElementById('ch');
    //calling the methods in the object literal
    this.calcRandCustByHour();

    this.calcCookiesSoldByHour();

    this.calcTotalCookies();



    //DOM manipulation irl!!!
    //create a vairable to abe able to append an item to our list
    //create a new h3 element
  //   var h3El = document.createElement('h3');
  //   //give text to the new h3 element
  //   h3El.textContent = this.name;
  //   capitolhill.appendChild(h3El);
  //   for(var k = 0; k < hours.length; k++) {
  //     //stepping through our hours array
  //     var liEl = document.createElement('li');
  //     //creating li elemnts with text of the hours
  //     liEl.textContent = hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
  //     console.log(liEl);
  //     ch.appendChild(liEl);
  //   }
  //   var liEl = document.createElement('li');
  //   //creating li elemnts with text of the hours
  //   liEl.textContent = 'Total : ' + this.totalCookies + ' cookies';
  //   console.log(liEl);
  //   ch.appendChild(liEl);
  // }
};

capitolHill.render();

var alki = {
  name: 'Alki',
  //creating my key value pairs inside of my object they are called properties
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookieSoldPerHour: 4.6,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
//method for random customers by hour
  calcRandCustByHour: function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustByHour[i]);

    }
  },
//method for cookies sold by hours
  calcCookiesSoldByHour: function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[j]));
      console.log(this.cookiesSoldByHour[j]);
    }
  },

  calcTotalCookies : function() {

    this.totalCookies = this.cookiesSoldByHour.reduce(function(a,b){
      return a + b;
    }, 0);

      console.log(this.totalCookies);
    return this.totalCookies;
  },

//how to make this more generic to suite all locations
  render: function() {
    var alki = document.getElementById('alki');
    var ak = document.getElementById('ak');
    //calling the methods in the object literal
    this.calcRandCustByHour();

    this.calcCookiesSoldByHour();


    this.calcTotalCookies();


    // var h3El = document.createElement('h3');
    // //give text to the new h3 element
    // h3El.textContent = this.name;
    // alki.appendChild(h3El);
    // for(var k = 0; k < hours.length; k++) {
    //   //stepping through our hours array
    //   var liEl = document.createElement('li');
    //   //creating li elemnts with text of the hours
    //   liEl.textContent = hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
    //   console.log(liEl);
    //   ak.appendChild(liEl);
    // }
    // var liEl = document.createElement('li');
    // //creating li elemnts with text of the hours
    // liEl.textContent = 'Total : ' + this.totalCookies + ' cookies';
    // console.log(liEl);
    // ak.appendChild(liEl);
  }
};

alki.render();


var table = [ this.hours , firstAndPike.cookiesSoldByHour, seatac.cookiesSoldByHour, seattlectr.cookiesSoldByHour, capitolhill.cookiesSoldByHour, alki.cookiesSoldByHour]
function generate_table() {
       var mybody = document.getElementsByTagName("body")[0];
       mytable = document.createElement("table");
       mytablebody = document.createElement("tbody");

       for(var j = 0; j < this.table.length; j++) {
           mycurrent_row =document.createElement("tr");
           for(var i = 0; i < this.hours.length; i++) {
               mycurrent_cell = document.createElement("td");
               currenttext = document.createTextNode(this.table[i]);
               mycurrent_cell.appendChild(currenttext);
               mycurrent_row.appendChild(mycurrent_cell);
               // set the cell background color
               // if the column is 0. If the column is 1 hide the cel
               if (i == 0) {
                   mycurrent_cell.style.background = "rgb(255,0,0)";
               } else {
                   mycurrent_cell.style.display = "none";
               }
           }
           mytablebody.appendChild(mycurrent_row);
       }
       mytable.appendChild(mytablebody);
       mybody.appendChild(mytable);
    }
