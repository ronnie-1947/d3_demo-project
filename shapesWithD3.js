const canvas = d3.select('.canvas')

const svg = canvas.append('svg').attr('height', 500).attr('width', 600)

const group = svg.append('g')

group.append('rect')
    .attr('height', '10rem')
    .attr('width', '20rem')
    .attr('fill', 'dodgerBlue')
    .attr('x', 20)
    .attr('y', 20)

group.append('circle')
    .attr('cx', 400)
    .attr('cy', 100)
    .attr('r', 40)
    .attr('fill', 'pink')

group.append('line')
    .attr('x1', 370)
    .attr('x2', 470)
    .attr('y1', 170)
    .attr('y2', 170)
    .attr('stroke', 'red')

group.append('text')
    .attr('x', 20)
    .attr('y', 200)
    .attr('fill', 'grey')
    .text('Hello Ninjas')
    .style('font-family', 'arial')