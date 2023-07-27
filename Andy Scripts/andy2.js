let countries = ['United States', 'France', 'Brazil', 'Australia', 'Canada', 'United Kingdom', 'Argentina',
 'Austria', 'Dominican', 'Finland', 'Germany', 'Ireland', 'Italy', 'Mexico', 
 'Northern Ireland', 'Philippines', 'Portugal', 'Russia', 'Serbia', 'Spain', 'Switzerland'];

// Metric variable for function inputs
let metricx = "Earnings_Million";

// Create a function to calculate the sum of a metric 
function metricSum(money, Nationality, metricx) {
  // Initialise variables to increment
  //let count = 0;
  let total = 0;
  
  // Loop through the array of money data
  for (let i = 0; i < money.length; i++) {
    
    // Store the data at index `i` for evaluation
    row = money[i];

    // Compare `Nationality` value to `Nationality` provided as argument
    if (row.Nationality == Nationality){

      // Increment by `metric` argument value
      total += row[metricx];
      }
  }
  
  // Calculate the sum value
  let sumValue = total;

  console.log (sumValue)// Return the calcuated sum
  return sumValue;
}

// Invoke the metric sum function
// Calculate the sum for each country individually
let metricx1 = metricSum(money, 'United States', metricx);
let metricx2 = metricSum(money, 'France', metricx);
let metricx3 = metricSum(money, 'Brazil', metricx);
let metricx4 = metricSum(money, 'Australia', metricx);
let metricx5 = metricSum(money, 'Canada', metricx);
let metricx6 = metricSum(money, 'United Kingdom', metricx);
let metricx7 = metricSum(money, 'Argentina', metricx);
let metricx8 = metricSum(money, 'Austria', metricx);
let metricx9 = metricSum(money, 'Dominican', metricx);
let metricx11 = metricSum(money, 'Finland', metricx);
let metricx12 = metricSum(money, 'Germany', metricx);
let metricx13 = metricSum(money, 'Ireland', metricx);
let metricx14 = metricSum(money, 'Italy', metricx);
let metricx15 = metricSum(money, 'Mexico', metricx);
let metricx16 = metricSum(money, 'Northern Ireland', metricx);
let metricx17 = metricSum(money, 'Philippines', metricx);
let metricx18 = metricSum(money, 'Portugal', metricx);
let metricx19 = metricSum(money, 'Russia', metricx);
let metricx20 = metricSum(money, 'Serbia', metricx);
let metricx21 = metricSum(money, 'Spain', metricx);
let metricx22 = metricSum(money, 'Switzerland', metricx);


// Create an array of rating sums
let metricxArray = [metricx1, metricx2, metricx3, metricx4, metricx5, metricx6, metricx7, metricx8,
   metricx9, metricx11, metricx12, metricx13, metricx14, metricx15, metricx16, metricx17,
   metricx18, metricx19, metricx20, metricx21, metricx22];

// Create a function to plot the rating sum metric results
function plotMetric(metricxArray, countries, metricx){

  let trace1 = {
    x: countries,
    y: metricxArray,
    type: "bar"
  }

  let data = [trace1]

  // Pass metric to chart title
  let layout = {
    title:  `Total Earned by Top 10 per Country Since 1990 ${metricx}`,
    autosize: false,
    width: 1400,
    height: 700,
    margin: {
	  l: 40,
	  r: 40,
	  b: 120,
	  t: 30
  },
  };

  Plotly.newPlot("plot2", data, layout);
}
// Invoke the plot creating function
plotMetric(metricxArray, countries, metricx);
