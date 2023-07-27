let yearsq = [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998,
  1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
   2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];

// Metric variable for function inputs
let metricq = "Earnings_Million";

// Create a function to calculate the annual average of a metric 
function metricMean(money, Year, sport, metricq) {
 // Initialise variables to increment
 let count = 0;
 let total = 0;
 
 // Loop through the array of money data
 for (let i = 0; i < money.length; i++) {
   
   // Store the data at index `i` for evaluation
   row = money[i];

   // Compare `Year` value to `Year` provided as argument
   if (row.Year == Year){
  

    // Compare `rating` value to `rating` provided as argument
       if (row.Sport == sport){
 
     // Increment by `metric` argument value
       total += row[metricq];
       // Increment by one
       count += 1;

   }
 }}
 
 // Calculate the average value
 let meanValue = total / count;

 // Return the calcuated average
 return meanValue;
}

// Invoke the metric average function
// Calculate the average for each Year individually
let sportsq = [];
for (let row of money)
{
 if (sportsq.indexOf(row.Sport) == -1)
 {
   sportsq.push(row.Sport);
 }
}

let metricqArray = [];
for (let year of yearsq){
   
 for (let sport of sportsq)
 {

   const total = metricMean(money, year, sport, metricq);
   //metricArray.push(total);
   if ( isFinite(total))
   {
     metricqArray.push({year: year, sport: sport, total: total});
   }
 }
}

const a  = 1;

function unpack(rows, key) {
 return rows.map(function(row)
 { 
   return row[key]; 
 });}


var data = []

for ( let sportIndex in sportsq)
{
 let sport = sportsq[sportIndex];
 const sportData = metricqArray.filter(function(row) { 
   return row['sport'] == sport; 
 });
 let colour = 'rgba('+ 255* sportIndex / sportsq.length + ',0,0,1)'
 var trace1 = {
   name: sport,
   x:unpack(sportData, 'sport'), y: unpack(sportData, 'year'), z: unpack(sportData, 'total'),
   mode: 'markers',
   marker: {
     size: 6,
     line: {
     color: colour,
     width: 0.5},
     opacity: 0.8},
   type: 'scatter3d'
 };
 data.push(trace1);
}

var layout = {
 title: `Average Earnings of a Top 10 Sports Persons by Sport & Year`,
 autosize: false,
 width: 1400,
 height: 800,
 margin: {
 l: 30,
 r: 0,
 b: 60,
 t: 30
 },
 };
Plotly.newPlot('plot5', data, layout);