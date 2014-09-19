$(document).ready(function(){
      /*for (var i=0; i<5; i++){
	      for (var l=0; l<5; l++){
		     $("#wrapper").append( "<div class='cell'></div>" );
            }
	    }*/
		alert(randomize());
    });


function makeGrid (){
 $('table').remove();
 $('#wrapper').append('<table></table>');
 $('table').append('<tbody></tbody>');
 var input = prompt ('please enter a number', '5');
  var size = (600/input)-2;
  $('tbody').remove('tr', 'td');
	for (var i=0; i<input; i++){
		$('tbody').append('<tr></tr>');
	}
	for(var l=0; l<input; l++){
		$('tr').append('<td></td>');
	}
	$('td').css('width', size).css('height', size);
}

function Tint () {
  $('td').mouseenter(function(){
    $(this).removeClass('td')
	.addClass('cellhover');
	
  }) 
}

function randomize(){
	var letter = "0123456789ABCDEF".split("");
	var hash = "#";
    for (var i = 0 ; i < 16; i++){
		hash = hash + letter[math.floor(math.random * 17)];
	}
	return hash;
}

function randomColor(){
	$('td').mouseenter(function(){
		$(this).addClass('cellhover');
		$(this).css('background-color', randomize);
	})
}