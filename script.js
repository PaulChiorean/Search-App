$.getJSON('data.json', function(data){
    var output = '<ul class="searchresults">';
    $.each(data, function(key, val){
        output += '<li>';
        output += '<h2>' + val.name + '</h2>';
        output += '<p>' + val.team + '</p>';
        output += '<p>' + val.info + '</p>';
        output += '</li>'
    });
    output+= '</ul>';
    $('#update').html(output);
});