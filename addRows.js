/*  Adds hive status to array. B Simonsen */

(function() {

var SETTINGS_KEY = 'LSS_Settings';
var settings = getSettings();
var hives = [];
showHives( );

$('#status').on( 'click', newStatus );
  
function getSettings() {
  var settingsString = localStorage[ SETTINGS_KEY];
  if (settingsString) {
    //return JSON.parse(settingsString);
    hives = JSON.parse(settingsString);
    
  } else {
    return {};
  }
}
  
function saveSettings( ) {
    localStorage[ SETTINGS_KEY ] = JSON.stringify( hives );
}
  
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
        saveSettings ();
        obj.preventDefault( );
        showHives( );
    }
}

function showHives( ) {
    var tr, td, beeHive, editBtn, deleteBtn;
    editBtn= $( '<button type="button" id="edit-settings">Edit</button>');
    deleteBtn= $('<button type="button" id="clear-settings">Delete</button>')
    $('#beeHives').empty();
    getSettings();
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
        tr.append( editBtn);
        tr.append( deleteBtn);
        $('#beeHives').append( tr );
    } );

    $('#hiveList').show();
    $('#addStatus').hide();
}

})();