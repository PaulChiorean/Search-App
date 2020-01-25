$('#search').keyup(function() {
    var searchField = $('#search').val();
    var myExpresion = new RegExp(searchField, "i");
    $.getJSON('data.json', function(data){
        var output = '<ul class="searchresults">';
        $.each(data, function(key, val){
            if((val.name.search(myExpresion) != -1) || (val.team.search(myExpresion) != -1)){
                output += '<li>';
                output += '<h2>' + val.name + '</h2>';
                output += '<img src="images/' + val.nickname + '.jpg"/>';
                output += '<p>Team: ' + '<b>'+ val.team +'</b>' + '</p>';
                output += '<p>' + val.info + '</p>';
                output += '</li>'
            }
        });
        output+= '</ul>';
        $('#update').html(output);
    });
});
