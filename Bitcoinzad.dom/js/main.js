$(document).ready(function(){
    function getCourseExchange(){
        let currentBuy = parseFloat ($('#buy').text());
        let currentSell = parseFloat ($('#sell').text());
        $.getJSON('https://blockchain.info/pl/ticker', function(btnData){
            console.log(btnData);
            $('#button').click(function(){
                // console.log('test');
            
                if (currentBuy>btnData.PLN.buy){
                //$( "i" ).remove();
                $('#buy').append('<i class="fas fa-arrow-down"></i>');
                } else if (currentBuy<btnData.PLN.buy){
                //$( "i" ).remove();
                $('#buy').append('<i class="fas fa-arrow-up"></i>'); 
                } else {
                //$( "i" ).remove();
                $('#buy').append('<i class="fas fa-arrows-h"></i>');   
                }

                if (currentSell>btnData.PLN.sell){
                //$( "i" ).remove();
                $('#sell').append('<i class="fas fa-arrow-down"></i>');
                } else if (currentSell<btnData.PLN.sell){
                //$( "i" ).remove();
                $('#sell').append('<i class="fas fa-arrow-up"></i>'); 
                } else {
                //$( "i" ).remove();
                $('#sell').append('<i class="fas fa-arrows-h"></i>');   
                }

                $('#buy').text(btnData.PLN.buy);
                $('#sell').text(btnData.PLN.sell);



            })
        })
    }
    getCourseExchange()
})