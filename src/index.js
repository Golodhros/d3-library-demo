import {plottableBarChart} from './charts/plottable';
import {billboardBarChart} from './charts/billboard';
import {vegaBarChart} from './charts/vega';
import {d3fcBarChart} from './charts/d3fc';
import {britechartsBarChart} from './charts/britecharts';

require('normalize.css/normalize.css');
require('./sass/main.scss');

window.$ = require('jquery');
window.jQuery = require('jquery');

require('jquery.scrollex');
require('../node_modules/jquery.scrolly/jquery.scrolly.js');
require('browser-js');
require('breakpoints.js');

require('./util.js');
require('./main.js');

$(document).ready(function() {

    // Create Plottable Bar Chart
    plottableBarChart();

    // Create Billboard Bar Chart
    billboardBarChart();

    // Create Vega Bar Chart
    vegaBarChart();

    // Create D3FC Bar Chart
    d3fcBarChart();

    // Create Britecharts Bar Chart
    britechartsBarChart();
});

