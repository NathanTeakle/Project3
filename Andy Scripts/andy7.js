let years = [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998,
   1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
    2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];

// Metric variable for function inputs
let metric = "Earnings_Million";

// Create a function to calculate the annual sum of a metric 
function metricSum(money, Year, sport, metric) {
  // Initialise variables to increment
  //let count = 0;
  let total = 0;
  
  // Loop through the array of money data
  for (let i = 0; i < money.length; i++) {
    
    // Store the data at index `i` for evaluation
    row = money[i];

    // Compare `Year` value to `Year` provided as argument
    if (row.Year == Year){
      
  
      // Compare `Sport` value to `sport` provided as argument
        if (row.Sport == sport){
  
      // Increment by `metric` argument value
        total += row[metric];       

    }
  }}
  
  // Calculate the total value
  let sumValue = total
  // / count;

  // Return the calcuated sum
  return sumValue;
}

// Invoke the metric sum function
// Calculate the sum for each Year individually
let sports = [];
for (let row of money)
{
  if (sports.indexOf(row.Sport) == -1)
  {
    sports.push(row.Sport);
  }
}

let metricArray = [];
for (let year of years){
    
  for (let sport of sports)
  {

    const total = metricSum(money, year, sport, metric);
    //metricArray.push(total);
    if ( isFinite(total))
    {
      metricArray.push({year: year, sport: sport, total: total});
    }
  }
}

function unpack(rows, key) {
	return rows.map(function(row)
	{ 
    return row[key]; 
  });}


var data = []

for ( let sportIndex in sports)
{
  let sport = sports[sportIndex];
  const sportData = metricArray.filter(function(row) { 
    return row['sport'] == sport; 
  });
  let colour = 'rgba('+ 255* sportIndex / sports.length + ',0,0,1)'
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
  title: `Total Earnings of Top 10 Sports Persons by Sport & Year`,
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
  console.log('text')
Plotly.newPlot('plot7', data, layout);
console.log('text1')
  