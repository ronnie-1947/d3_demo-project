const svg = d3.select('svg').attr('height', '100rem').attr('width', '100%')

d3.json('planets.json').then(data=>{
    
    const circs = svg.selectAll('circle').data(data)

    circs.attr('fill', d=>d.fill)
    .attr('r', d=>d.radius)
    .attr('cx', d=>d.distance)
    .attr('cy', '100')
    
    circs.enter()
        .append('circle')
            .attr('fill', d=>d.fill)
            .attr('r', d=>d.radius)
            .attr('cx', d=>d.distance)
            .attr('cy', '100')
})

svg.append('rect')
    .attr('fill', 'dodgerBlue')
    .attr('x', '20rem')
    .attr('y', '20rem')
    .attr('height', '7rem')
    .attr('width', '7rem')