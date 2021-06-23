$(document).ready( function () {
    $.getJSON("/data_call.json", function(data){
        $('#callTable').DataTable({
            data: data['data'],
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
    $.getJSON("/data_call_etf.json", function(data){
        $('#etfCallTable').DataTable({
            data: data['data'],
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
    $.getJSON("/data_put.json", function(data){
        $('#putTable').DataTable({
            data: data['data'],
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
    $.getJSON("/data_put_etf.json", function(data){
        $('#etfPutTable').DataTable({
            data: data['data'],
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
        $('footer').append("&nbsp;"+data['last_updated']);
    });
});

