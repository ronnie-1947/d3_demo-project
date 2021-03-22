const canvas = d3.select('.canvas')
const svg = canvas.select('svg')

const data = [
    {width: 200, height:100, fill:'purple'},
    {width: 100, height:60, fill:'dodgerBlue'},
    {width: 80, height:30, fill:'pink'},
]

const rect = svg.selectAll('rect').data(data)
// console.log(rect)

rect.enter()
    .append('rect')
        .attr('width', (d, i, n)=>{
            console.log(n[i])
            return d.width
        })
        .attr('height', d=>d.height)
        .attr('fill', d=>d.fill)