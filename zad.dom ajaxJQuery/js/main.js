$(document).ready(function(){

    function getUserData() {

        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function(jsonUserData){
        console.log(jsonUserData); 

        $('#button').click(function(){
     

        $('button').after('<div></div>');
        $('div').attr('id', 'dane-programisty');
        $('div').text('Imie: '+ jsonUserData.imie +', Nazwisko: '+ jsonUserData.nazwisko +', Firma: '+ jsonUserData.firma +', Zawod: '+ jsonUserData.zawod);
        });

        });

    };

    getUserData();

})