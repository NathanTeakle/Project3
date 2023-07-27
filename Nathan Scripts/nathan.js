// Load data from the JSON file
d3.json("data.json").then(data => {
    // Convert "Earnings ($ million)" values to numbers
    data.forEach(d => {
        d["Earnings ($ million)"] = +d["Earnings ($ million)"];
    });

    // Group data by Year using d3.group() function
    const dataByYear = d3.group(data, d => d.Year);

    // Define the dimensions for the chart
    const width = 1300;
    const height = 800;
    const margin = { top: 40, right: 100, bottom: 40, left: 70 }; // Increase right margin to accommodate y-axis title
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    const spacing = 50; // Adjust the spacing between years

    // Create the SVG container for the chart
    const svg = d3.select("#chart")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    // Define scales for x and y axes
    const xScale = d3.scaleBand()
        .domain([...dataByYear.keys()])
        .range([margin.left, width - margin.right])
        .padding(0.1)
        .paddingOuter(spacing / width); // Add padding between years

    const earningsAll = Array.from(dataByYear, ([, values]) => values.map(d => +d["Earnings ($ million)"])).flat();
    const yScale = d3.scaleLinear()
        .domain([d3.min(earningsAll), d3.max(earningsAll)])
        .nice() // This will make the scale "nice" and round values to a cleaner range
        .range([height - margin.bottom, margin.top]);

    // Function to create box and whisker plot
    function createBoxWhiskerPlot(dataByYear, xScale, yScale, svg, spacing) {
        const colorScale = d3.scaleOrdinal(d3.schemeCategory10); // Define color scale for years

        // Loop through each year's data to create the box and whisker plot for each year
        dataByYear.forEach((values, year) => {
            const earnings = values.map(d => +d["Earnings ($ million)"]).sort(d3.ascending); // Extract and sort earnings data for the year
            const q1 = d3.quantile(earnings, 0.25); // Compute the first quartile (25th percentile)
            const median = d3.quantile(earnings, 0.5); // Compute the median (50th percentile)
            const q3 = d3.quantile(earnings, 0.75); // Compute the third quartile (75th percentile)
            const iqr = q3 - q1; // Calculate the interquartile range (IQR)
            const min = d3.min(earnings); // Find the minimum earnings value
            const max = d3.max(earnings); // Find the maximum earnings value

            // Create whiskers, boxes, and median lines for each year
            svg.append("line")
                .attr("class", "whisker")
                .attr("x1", xScale(year) + xScale.bandwidth() / 2)
                .attr("x2", xScale(year) + xScale.bandwidth() / 2)
                .attr("y1", yScale(max)) // Use q3 as the start position for whisker
                .attr("y2", yScale(q3))
                .attr("stroke", colorScale(year));

            // Create box
            svg.append("rect")
                .attr("class", "box")
                .attr("x", xScale(year))
                .attr("y", yScale(q3))
                .attr("width", xScale.bandwidth())
                .attr("height", yScale(q1) - yScale(q3)) // Use q1 and q3 for box height
                .attr("fill", colorScale(year))
                .attr("stroke", colorScale(year));

            // Create median line
            svg.append("line")
                .attr("class", "median")
                .attr("x1", xScale(year))
                .attr("x2", xScale(year) + xScale.bandwidth())
                .attr("y1", yScale(median))
                .attr("y2", yScale(median))
                .attr("stroke", "white"); // Median line is white to stand out

            // Show the name of the highest earner at the top of the box and whisker plot
            const highestEarner = values.find(d => +d["Earnings ($ million)"] === max);
            svg.append("text")
                .attr("x", xScale(year) + xScale.bandwidth() / 2)
                .attr("y", yScale(max) - 10) // Adjust the y-position for proper alignment
                .attr("text-anchor", "middle")
                .text(highestEarner.Name) // Display the name of the highest earner
                .attr("font-size", "12px")
                .attr("fill", colorScale(year));

            // Update x position for each plot to add spacing
            svg.selectAll(`.plot-${year}`)
                .attr("transform", `translate(${xScale(year) + spacing / 2}, 0)`);
        });
    }

    // Add x-axis
    const xAxis = d3.axisBottom(xScale);
    svg
        .append("g")
        .attr("transform", `translate(0, ${height - margin.bottom})`)
        .call(xAxis)
        .selectAll("text")
        .attr("transform", "rotate(-45)")
        .attr("text-anchor", "end");

    // Add y-axis
    const yAxis = d3.axisLeft(yScale);
    svg
        .append("g")
        .attr("transform", `translate(${margin.left}, 0)`)
        .call(yAxis);

    // Add y-axis title
    svg.append("text")
        .attr("x", -(height / 2)) // Negative x to rotate the text
        .attr("y", margin.left / 3) // Adjust the position for proper alignment
        .attr("text-anchor", "middle")
        .attr("transform", "rotate(-90)") // Rotate the text vertically
        .text("Earnings in Millions ($)")
        .attr("font-size", "14px");

    // Add chart title
    svg.append("text")
        .attr("x", width / 2)
        .attr("y", margin.top / 2)
        .attr("text-anchor", "middle")
        .text("Candle Plots for Highest Earnings in Millions (1990-2020)")
        .attr("font-size", "18px");

    // Create box and whisker plot using the defined function
    createBoxWhiskerPlot(dataByYear, xScale, yScale, svg, spacing);
}).catch(error => {
    console.error("Error loading data:", error);
});
