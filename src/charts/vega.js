import {loader, parse, View} from 'vega';


export const vegaBarChart = function() {
    let view;

    loader()
        .load('src/charts/vega.json')
        .then(function(data) { render(JSON.parse(data)); });

    function render(spec) {
        view = new View(parse(spec))
            .renderer('svg')                // set renderer (canvas or svg)
            .initialize('#vega-container')  // initialize view within parent DOM container
            .hover()                        // enable hover encode set processing
            .run();
    }
}
