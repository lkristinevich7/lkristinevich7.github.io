$(document).ready(function(){
    let heading = $('#about');
    let skills = $('.items');

    // Header


    $('h2').slideUp(0).slideDown(2000);

    // About


    heading.animate({margin: '2%'}, 2500, function(){
        $('.about-text').animate({fontSize: '1.3em'}, 1000); 
    });

    

    // Skills

      $('i').on({ 
        click: function(){
            skills.css('background-color', '#604b38');
        },

        mouseover: function(){
            $(this).css('color', 'white');
        }
    })


    // let heading = $('.main-header');

    $('#yes').click(function(){
        $('.about-text').append('<p>My name is Liudmila. I am from Belarus, but live in Cracow.  I am a junior front-end-developer without commercial experience but with fresh knowledges and huge passionate to programming.  I am looking for opportunity to develop my skills working with code and resolve real problems. I a hardworking person with great communication and organizational skills. I am able to competently communicate in three languages Polish, English and Russian and  perfectly organize my time.  I am a highly-motivated  person who is willing to go above and beyond on any project, and to learn valuable skills on my own time.</p>');
        $( "#yes" ).remove();
        $( "#No" ).remove();

    });

    $('#No').click(function(){
        $('#about').append('<img src="img/sad.png" alt="Sad smile">');
        $('#my-foto').remove();
        $('.about-text').remove();
        $( "#yes" ).remove();
        $( "#No" ).remove();

    });

});

