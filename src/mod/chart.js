import * as d3 from 'd3-selection'
import Bar from 'britecharts/dist/umd/bar.min'
import miniTooltip from 'britecharts/dist/umd/mini-tooltip.min'

// const bar = require('./../src/charts/bar');
// const miniTooltip = require('./../src/charts/mini-tooltip');
// const colors = require('./../src/charts/helpers/colors');
// const dataBuilder = require('./../test/fixtures/barChartDataBuilder');

const data = [
  {
    'name': 'Radiating',
    'value': 0.08167
  },
  {
    'name': 'Opalescent',
    'value': 0.0492
  },
  {
    'name': 'Shining',
    'value': 0.02782
  },
  {
    'name': 'Vibrant',
    'value': 0.04253
  },
  {
    'name': 'Vivid',
    'value': 0.02702
  },
  {
    'name': 'Brilliant',
    'value': 0.02288
  }
]

let barChart = new Bar()
let barContainer = d3.select('.chart')
let containerWidth = barContainer.node() ? barContainer.node().getBoundingClientRect().width : false

let tooltip = miniTooltip()
// tooltip.nameLabel('Hello')
let tooltipContainer

barChart
  .margin({
    left: 120,
    right: 20,
    top: 20,
    bottom: 20
  })
  .isHorizontal(true)
  .usePercentage(true)
  .percentageAxisToMaxRatio(1.3)
  .width(containerWidth)
  .height(300)
  .isAnimated(true)
  .on('customMouseOver', tooltip.show)
  .on('customMouseMove', tooltip.update)
  .on('customMouseOut', tooltip.hide)

barContainer.datum(data).call(barChart)

tooltipContainer = d3.select('.bar-chart .metadata-group')
tooltipContainer.datum([]).call(tooltip)

/*
d3.select('body')
  .append('svg')
  .attr('class', 'chart')
  .attr('width', '960')
  .attr('height', '500')

// https://bost.ocks.org/mike/bar/

var svg = d3.select('svg.chart')

var margin = {top: 20, right: 20, bottom: 30, left: 40}
var width = +svg.attr('width') - margin.left - margin.right
var height = +svg.attr('height') - margin.top - margin.bottom

var x = d3.scaleBand().rangeRound([0, width]).padding(0.1)
var y = d3.scaleLinear().rangeRound([height, 0])

var g = svg.append('g')
  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

d3.tsv('data.tsv', function (d) {
  d.frequency = +d.frequency
  return d
}, function (error, data) {
  if (error) throw error

  x.domain(data.map(function (d) { return d.letter }))
  y.domain([0, d3.max(data, function (d) { return d.frequency })])

  g.append('g')
    .attr('class', 'axis axis--x')
    .attr('transform', 'translate(0,' + height + ')')
    .call(d3.axisBottom(x))

  g.append('g')
    .attr('class', 'axis axis--y')
    .call(d3.axisLeft(y).ticks(10, '%'))
    .append('text')
    .attr('transform', 'rotate(-90)')
    .attr('y', 6)
    .attr('dy', '0.71em')
    .attr('text-anchor', 'end')
    .text('Frequency')

  g.selectAll('.bar')
    .data(data)
    .enter().append('rect')
    .attr('class', 'bar')
    .attr('x', function (d) { return x(d.letter) })
    .attr('y', function (d) { return y(d.frequency) })
    .attr('width', x.bandwidth())
    .attr('height', function (d) { return height - y(d.frequency) })
})
*/
