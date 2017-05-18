/*  Adds hive status to array. B Simonsen */

(function() {

var hives = [];
showHives( );

$('#status').on( 'click', newStatus );
  
function newStatus( ) {
    $('#hive').val( '' );
    $('#dateChecked').val( '' );
    $('#notes').val('');

    $('#submit').one( 'click', addHive );
    $('#cancel').one( 'click', showHives );

    $('#hiveList').hide();
    $('#addStatus').show();

    function addHive( obj ) {
        var oneHive = {
            hive: $('#hive').val(),
            dateChecked: $('#dateChecked').val(),
            notes: $('#notes').val()
        };
        hives.push( oneHive );
        obj.preventDefault( );
        showHives( );
    }
}

function showHives( ) {
    var tr, td, beeHive;

    $('#beeHives').empty();

    hives.forEach( function (beeHive) {
        tr = $( '<tr>' );
        td = $( '<td>' );
        td.text( beeHive.hive );
        tr.append( td );
        td = $( '<td>' );
        td.text( beeHive.dateChecked );
        tr.append( td );
        td = $( '<td>' );
        td.text( beeHive.notes );
        tr.append( td );
        $('#beeHives').append( tr );
    } );

    $('#hiveList').show();
    $('#addStatus').hide();
}

})();