const svg = d3.select('.canvas').append('svg').attr('width', 600).attr('height', 600)

d3.json('menu.json').then(data=>{

    const margin ={top:20, right:20, bottom:100, left:100}
    const graphWidth = 600- margin.left - margin.right
    const graphHeight = 600 - margin.top - margin.bottom
    
    const max = d3.max(data, d=> d.orders)
    const y = d3.scaleLinear()
        .domain([0, max])
        .range([graphHeight, 0]) // Pass total Height of element


    const graph = svg.append('g')
        .attr('width', graphWidth)
        .attr('height', graphHeight)
        .attr('transform', `translate(${margin.left}, ${margin.top})`)

    const xAxisGraph = graph.append('g').attr('transform', `translate(0, ${graphHeight})`)
    const yAxisGraph = graph.append('g')



    const x = d3.scaleBand()
        .domain(data.map(item=>item.name)) // Pass an array
        .range([0, graphWidth]) // Pass Range of total width
        .paddingInner(.2)
        .paddingOuter(.2)


    // console.log(x('veg curry'))

    // Join the data to rect
    const rects = graph.selectAll('rect')
        .data(data)

    rects.enter()
        .append('rect')
            .attr('height', d=> graphHeight - y(d.orders))
            .attr('width', x.bandwidth())
            .attr('fill', 'orangeRed')
            .attr('x', (d,i,n)=>x(d.name))
            .attr('y', d=> y(d.orders))

    const xAxis = d3.axisBottom(x)
    const yAxis = d3.axisLeft(y).ticks(6).tickFormat(d=> d+' Orders')

    xAxisGraph.call(xAxis)
    yAxisGraph.call(yAxis)

    xAxisGraph.selectAll('text').attr('transform', 'rotate(-40)').attr('text-anchor', 'end')
})