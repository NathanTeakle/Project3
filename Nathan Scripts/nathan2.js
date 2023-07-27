// Load data from the JSON file
d3.json("data.json").then(data => {
    // Group data by Athlete Name using d3.group() function
    const dataByAthleteName = d3.group(data, d => d["Name"]);

    // Calculate the count of occurrences and total earnings for each athlete
    const athleteData = Array.from(dataByAthleteName, ([athleteName, values]) => ({
        name: athleteName,
        count: values.length,
        totalEarnings: d3.sum(values, d => +d["Earnings ($ million)"])
    }));

    // Sort the athleteData array in descending order of counts
    athleteData.sort((a, b) => d3.descending(a.count, b.count));

    // Take only the top 10 most occurring names
    const top10AthleteData = athleteData.slice(0, 10);

    // Define a color scale for the bubbles
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

    // Format the earnings as money with two decimal points
    const formatMoney = d3.format("$,.2f");

    // Create the trace for the bubble chart
    const bubbleTrace = {
        x: top10AthleteData.map(d => d.name),
        y: top10AthleteData.map(d => d.count),
        text: top10AthleteData.map(d => `${d.name}: ${d.count} occurrences\nTotal Earnings: ${formatMoney(d.totalEarnings)} million`),
        mode: "markers",
        marker: {
            size: top10AthleteData.map(d => d.count), // Use count as the size of the bubbles
            sizemode: "diameter", // Set the mode to "diameter" to scale the bubbles directly
            sizeref: 0.1, // Set the maximum size of the bubbles
            color: top10AthleteData.map(d => colorScale(d.name)), // Use the color scale for different colors
            colorscale: "Viridis",
            colorbar: {
                title: "Athlete Name"
            }
        }
    };

    // Sort the bubbleTrace data in reverse order to arrange bubbles from right to left
    bubbleTrace.x.sort((a, b) => d3.ascending(a, b));
    bubbleTrace.y.sort((a, b) => d3.ascending(a, b));
    bubbleTrace.text.sort((a, b) => d3.ascending(a, b));
    bubbleTrace.marker.size.sort((a, b) => d3.ascending(a, b));
    bubbleTrace.marker.color.sort((a, b) => d3.ascending(a, b));

    // Create the data array for the bubble chart
    const bubbleData = [bubbleTrace];

    // Define the layout for the bubble chart
    const bubbleLayout = {
        title: "Top 10 Most Occurring Athletes (1990-2020)",
        xaxis: { title: "Athlete Name", type: "category" }, // Specify x-axis as a categorical axis
        yaxis: { title: "Number of Occurrences" },
        hovermode: "closest",
        showlegend: false
    };

    // Plot the bubble chart to a div tag with id "bubble-chart"
    Plotly.newPlot("bubble-chart", bubbleData, bubbleLayout);
}).catch(error => {
    console.error("Error loading data:", error);
});
