var columns = ["Project Title", "Year", "Type", "Client/Director", "Service"];
var data = [];
var types = [];

var table = d3.select('#projects') // select the table area
	.append('table') //make the table
	.classed('table', true); // put sa class of 'table' on it

var thead = table.append('thead').append('tr'); //select the header and append rows
var tbody = table.append('tbody'); //append a body to the table

//below simply creates the menu but without the data and makes its functionality
var typeSelector = d3.select('#page-title') //get the selector div
	.append('select') //add an actual select dropdown
	.on("change", function() { selectType(this.value); }) //then on change of value, put in current value as argument
	.attr('id', 'type-selector'); //make the id of this 'type-selector'

var reload = function() {
	d3.csv('/gati_projects.csv', function(rows) {
		data = rows;
		data.forEach(function(d) {
			if (types.indexOf(d.Type) < 0) {
				types.push(d.Type);
				types[d.Type] = d.Type; //this allows it to be displayed
			}
		});

		typeSelector.selectAll("option") //now we actually have to add the options for the menu
			.data(types) //get the data
			.enter() //iterate through the types
			.append('option') //add an option selector
			.attr('value', function(d) { return d; }) //make its value the data
			.text(function(d) { return types[d]; }) //display the data in text form
			selectType('Feature Film');
	});
}

var redraw = function(projects) {
	thead.selectAll('th')
		.data(columns)
		.enter()
		.append('th')
		.on("click", function(d) {
			tbody.selectAll("tr")
			.sort(function(a,b) {
				return d3.ascending(a[d],b[d]);
			});
		})
		.text(function(d) { return d;  });

	var rows = tbody.selectAll('tr')
		.data(projects);

	rows.enter().append('tr');
	rows.exit().remove();

	var cells = rows.selectAll('td')
		.data(function(row) {
			var values = [];
			columns.forEach(function(d) { values.push(row[d]); });
			return values;
		});

	cells.enter().append('td');
	cells.text(function(d) { return d; });
}

var selectType = function(type) {
	var theTypes = data.filter(function(d) {
		return d['Type'] == type;
	});
	d3.select('#project-type').text("Displaying " + types[type]+ 's');
	document.getElementById('type-selector').value = type;
	redraw(theTypes);
}

reload();



