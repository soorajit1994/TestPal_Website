function runScript(e) {
    //See notes about 'which' and 'key'
    if (e.keyCode == 13) {
        $('#myTable').append('<tr><td><input onkeypress="runScript(event)"/></td></tr>');
    }
}