$(document).ready(function(){
    function getCourseExchange(){
        
        $('#button').click(function(){
            $.getJSON('https://blockchain.info/pl/ticker', function(btnData){
            console.log(btnData);

            let currentBuy = parseFloat ($('#buy').text());
            console.log(currentBuy);
            let currentSell = parseFloat ($('#sell').text());
            
                if (currentBuy>btnData.PLN.buy){
                //$( "i" ).remove();
                $('#buy-arrow').append('<i class="fas fa-arrow-down"></i>');
                } else if (currentBuy<btnData.PLN.buy){
                //$( "i" ).remove();
                $('#buy-arrow').append('<i class="fas fa-arrow-up"></i>'); 
                } else {
                //$( "i" ).remove();
                $('#buy-arrow').append('<i class="fas fa-arrows-alt-h"></i>');   
                }

                if (currentSell>btnData.PLN.sell){
                //$( "i" ).remove();
                $('#sell-arrow').append('<i class="fas fa-arrow-down"></i>');
                } else if (currentSell<btnData.PLN.sell){
                //$( "i" ).remove();
                $('#sell-arrow').append('<i class="fas fa-arrow-up"></i>'); 
                } else {
                //$( "i" ).remove();
                $('#sell-arrow').append('<i class="fas fa-arrows-alt-h"></i>');   
                }

                $('#buy').text(btnData.PLN.buy);
                $('#sell').text(btnData.PLN.sell);



            })
        })
    }
    getCourseExchange()
})

// ready =>funcja zwrotna=> zmienne=> getjson => spraedzam czy sie cena zmienila=> on click=>