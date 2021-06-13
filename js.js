$(document).ready( function () {
    $.getJSON("/data.json", function(data){
        $('#myTable').DataTable({
            data: data,
            lengthChange: true,
            lengthMenu: [ [10, 25, 50, -1], [10, 25, 50, 100, "All"] ],
            buttons: [
               { 
                 extend: 'searchPanes',
                 config: {
                    columns: [0,9]
                }
               },
               
                {                   
                    extend: 'searchBuilder',
                    config: {
                        depthLimit: 2
                    }
                }
            ],
            dom: 'Blfrtip'
        });
    });
    $('footer').append("&nbsp;"+data['last_updated']);
});

