let dudes = ['Mike Tyson', 'Buster Douglas', 'Sugar Ray Leonard', 'Ayrton Senna',
'Alain Prost', 'Jack Nicklaus','Greg Norman', 'Michael Jordan', 'Arnold Palmer', 'Evander Holyfield',
'Mike Tyson', 'Michael Jordan', 'George Foreman', 'Alain Prost', 'Donovan Ruddock',
'Arnold Palmer', 'Nigel Mansell', 'Sugar Ray Leonard', 'Andre Agassi', 'Joe Montana', 'Jim Courier',
'Monica Seles', 'Riddick Bowe', 'Shaquille ONeal', 'Lennox Lewis', 'Cecil Fielder',
'Jack Nicklaus', 'Gerhard Berger', 'Wayne Gretzky', 'Michael Moorer', 'Deion Sanders',
'Michael Schumacher', 'Wayne Gretzky', 'Emmit Smith', 'Dennis Rodman', 'Patrick Ewing', 'Oscar De La Hoya',
'Tiger Woods', 'Dale Earnhardt', 'Joe Sakic', 'Grant Hill', 'Sergei Federov', 'Gant Hill', 'Gary Sheffield',
'Kevin Garnett', 'Kobe Bryant', 'Jacques Villeneuve', 'Jeff Gordon', 'Alex Rodriguez', 'Peyton Manning',
'David Beckham', 'Michael Vick', 'Lance Armstrong', 'Valentino Rossi', 'Muhammad Ali', 'Phil Mickelson',
'Tom Brady', 'Kimi Raikkonen', 'Ronaldinho', 'LeBron James', 'Roger Federer', 'Manny Pacquiao',
'Dale Earnhardt Jr', 'Floyd Mayweather', 'Eli Manning', 'Terrell Suggs', 'Cristiano Ronaldo', 'Lionel Messi',
'Drew Brees', 'Aaron Rodgers', 'Rafael Nadal', 'Matt Ryan', 'Kevin Durant', 'Novak Djokovic', 'Cam Newton',
'Jordan Spieth', 'Andrew Luck', 'Rory McIlroy', 'Stephen Curry', 'James Harden', 'Lewis Hamilton',
'Conor McGregor', 'Neymar', 'Matthew Stafford', 'Canelo Alvarez', 'Russell Wilson', 'Aaron Rogers',
'Kirk Cousins', 'Carson Wentz'
];

// Metric variable for function inputs
let metricz = "Earnings_Million";

// Create a function to calculate the sum of a metric 
function plotMetric(money, dudes, metricz) {
  let metriczArray = [];

  // Loop through the array of names
  for (let i =0; i < dudes.length; i++) {
    // Store the rating at index `i` for evaluation
    Name = dudes[i];

    // Initialise variables to increment
    //let count = 0;
    let total = 0;

    // Loop through the array of money
    for (let j = 0; j < money.length; j++) {
      // Store the film at index `j` for evaluation
      row = money[j];

      // Compare `Name` value to `Name` provided as argument
      if (row.Name == Name){

        // Increment by `metric` argument value
        total += row[metricz];
        
      }
    }
    // Calculate the sum value
    let sumValue = total;

    // Append the sum value to the `metriczArray`
    metriczArray.push(sumValue);
  }


// Create a function to plot the name sum metric results

  let trace1 = {
    x: dudes,
    y: metriczArray,
    type: "bar"
  }

  let data = [trace1]

  // Pass metric to chart title
  let layout = {
    title:  `Highest Earning Sports Persons Since 1990 ${metricz}`,
    autosize: false,
    width: 1400,
    height: 500,
    margin: {
	  l: 30,
	  r: 0,
	  b: 120,
	  t: 30
  },
  };

  Plotly.newPlot("plot4", data, layout);
}

// Invoke the plot creating function
plotMetric(money, dudes, metricz);