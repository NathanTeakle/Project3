let yearsy = [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998,
   1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
    2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];

// Metric variable for function inputs
let metricy = "Earnings_Million";

// Create a function to calculate the annual average of a metric 
function metricMean(money, Year, metricy) {
  // Initialise variables to increment
  let count = 0;
  let total = 0;
  
  // Loop through the array of money data
  for (let i = 0; i < money.length; i++) {
    
    // Store the data at index `i` for evaluation
    row = money[i];

    // Compare `Year` value to `Year` provided as argument
    if (row.Year == Year){

      // Increment by `metric` argument value
      total += row[metricy];
      // Increment by one
      count += 1;
    }
  }
  
  // Calculate the average value
  let meanValue = total / count;

  // Return the calcuated average
  return meanValue;
}

// Invoke the metric average function
// Calculate the average for each Year individually
let metric1 = metricMean(money, 1990, metricy);
let metric2 = metricMean(money, 1991, metricy);
let metric3 = metricMean(money, 1992, metricy);
let metric4 = metricMean(money, 1993, metricy);
let metric5 = metricMean(money, 1994, metricy);
let metric6 = metricMean(money, 1995, metricy);
let metric7 = metricMean(money, 1996, metricy);
let metric8 = metricMean(money, 1997, metricy);
let metric9 = metricMean(money, 1998, metricy);
let metric10 = metricMean(money, 1999, metricy);
let metric11 = metricMean(money, 2000, metricy);
let metric12 = metricMean(money, 2001, metricy);
let metric13 = metricMean(money, 2002, metricy);
let metric14 = metricMean(money, 2003, metricy);
let metric15 = metricMean(money, 2004, metricy);
let metric16 = metricMean(money, 2005, metricy);
let metric17 = metricMean(money, 2006, metricy);
let metric18 = metricMean(money, 2007, metricy);
let metric19 = metricMean(money, 2008, metricy);
let metric20 = metricMean(money, 2009, metricy);
let metric21 = metricMean(money, 2010, metricy);
let metric22 = metricMean(money, 2011, metricy);
let metric23 = metricMean(money, 2012, metricy);
let metric24 = metricMean(money, 2013, metricy);
let metric25 = metricMean(money, 2014, metricy);
let metric26 = metricMean(money, 2015, metricy);
let metric27 = metricMean(money, 2016, metricy);
let metric28 = metricMean(money, 2017, metricy);
let metric29 = metricMean(money, 2018, metricy);
let metric30 = metricMean(money, 2019, metricy);
let metric31 = metricMean(money, 2020, metricy);


// Create an array of rating averages
let metricyArray = [metric1, metric2, metric3, metric4, metric5, metric6, metric7,
  metric8, metric9, metric10, metric11, metric12, metric13, metric14, metric15, 
  metric16, metric17, metric18, metric19, metric20, metric21, metric22, metric23,
  metric24, metric25, metric26, metric27, metric28, metric29, metric30, metric31];

// Create a function to plot the rating average metric results
function plotMetric(metricyArray, yearsy, metricy){

  let trace1 = {
    x: yearsy,
    y: metricyArray,
    type: "bar"
  }

  let data = [trace1]

  // Pass metric to chart title
  let layout = {
    title:  `Average Amount Earned by the Top 10 Sportspeople per Year ${metricy}`
  };

  Plotly.newPlot("plot1", data, layout);
}

// Invoke the plot creating function
plotMetric(metricyArray, yearsy, metricy);