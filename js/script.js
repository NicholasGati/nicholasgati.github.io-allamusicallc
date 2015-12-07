var tableInfo = [["KILD TV", "2015", "Feature Film", "William Collins", "Score, Mix"],["Rena's Promise", "2015", "Audiobook", "Heather Dune Macadam", "Audiobook Recording"],["Keith Urban's '30 Songs in 30 Days'", "2014", "DVD Series", "Ingenious Designs (HSN)", "Solo/Duo Section: Edit, Mix"],["A Little Christmas Business", "2014", "Feature Film", "Chuck Walker", "Editing, Sound Design, Mix"],["The Rolling Road", "2014", "Short Film", "William Collins", "Score, Sound Design, Mix"],["The Amateur", "2014", "Feature Film", "Jacqueline Cross", "Score, ADR Recording"],["Sorrow", "2014", "Feature Film", "Millie Loredo", "Sound Design, Mix"],["Return to Vengeance", "2014", "Feature Film", "Chuck Walker", "Restoration, Sound Design, Mix"],["Serenade Duo", "2014", "CD", "Serenade Duo", "Audio Mastering"],["Me Gusta Como Baila", "2014", "Single", "Jay y Lexi", "Audio Mastering"],["Metatron & the archangels of the throne", "2014", "Rock Opera", "Kean Roger Risko", "Score (2 pieces)"],["Apex Rising", "2013", "Trailer", "James Terriaca", "Score"],["The Art of Giants", "2013", "Documentary", "William Collins", "Score, Sound Design, Mix"]];

var tableHeader = ["Project Title", "Year", "Type", "Client/Director", "Service"];

$(document).ready(function() {

	// toggling the right side navbar
	var isShowing = false;
	$('#icon').click(function() {
		if(isShowing == true) {
			$('#nav-area').hide(500, function() {
				isShowing = false;
			});
		} else {
			$('#nav-area').show(500, function() {
				isShowing = true;
			});	
		}
		
	});

	//displaying table data
	var table = $('<table>').addClass('theTable');

	for(var a = 0; a < tableHeader.length; a++) {
		var head = $('<th>').addClass('theHead');
		table.append(head);
		head.html(tableHeader[a]);
	}
	
	for(var i = 0; i < tableInfo.length; i++) {
		var row = $('<tr>').addClass('theRow');
    for(var j = 0; j < tableInfo[i].length; j++) {	
    	var data = $('<td>').addClass('theData');
    	data.html(tableInfo[i][j]);
    	row.append(data);
    	table.append(row);
    }
	}
	$('#theTable').append(table);

	//clicking on hoja to access music player
	$('.hoja').click(function() {
		$('.listenFade').fadeOut(200)
		$('.listen').text('loading');
		
		$(this).animate({
			width: '400px',
			top: '-200px',
			left: '40%'
		});
		
		setTimeout(function() {
			$('.hoja').fadeOut(500);
			$('#player').show(2500);
			$('#player-title').show(2500);
			$('#line2').show(2500);
			$('#spacer1-hide').hide(2500);
			$('#spacer2-hide').show(2500);
		}, 1500);
	});

});



