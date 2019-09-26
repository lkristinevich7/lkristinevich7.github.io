$(document).ready(function(){
    let heading = $('#about');
    // let skills = $('.items');

    // Header


    $('h2').slideUp(0).slideDown(2000);

    // About
    $(document).scroll(function(){
        heading.animate({margin: '2%'}, 1000, function(){
            $('.about-text').animate({fontSize: '1.3em'}, 1000);
        });
        

    });


    $('#yes').click(function(){
        $('.about-text').append('<p>Hello! My name is Liudmila I am a front-end-developer and I will help you in building your attracive website emphasizing your personality and be helpful to increase your income. I am able to create both static HTML websites and dynamic CMS websites. HTML websites provide a minimum server load and are very fast, but future changes in such websites could be made only by programmist.  Management of CMS websites does not require any special technical knowledges and you could edit it by yourself. Feel free to contact me, I am able to communicate competently in three languages Polish, English and Russian. By the way, I would like to invite you to my <a href="#portfolio">portfolio</a> section to watch some of my works.</p>');
        $( "#yes" ).remove();
        $( "#No" ).remove();

    });

    $('#No').click(function(){
        $('#about').append('<img src="img/sad1.png" alt="Sad smile">');
        $('#my-foto').remove();
        $('.about-text').remove();
        // $( "#yes" ).remove();
        $( "#No" ).remove();
        // $('#yes').click(function(){
        //     console.log(test)
        // });
        $('#about').append('<p>Hello! My name is Liudmila I am a front-end-developer and I will help you in building your attracive website emphasizing your personality and be helpful to increase your income. I am able to create both static HTML websites and dynamic CMS websites. HTML websites provide a minimum server load and are very fast, but future changes in such websites could be made only by programmist.  Management of CMS websites does not require any special technical knowledges and you could edit it by yourself. Feel free to contact me, I am able to communicate competently in three languages Polish, English and Russian. By the way, I would like to invite you to my <a href="#portfolio">portfolio</a> section to watch some of my works.</p>');
        $( "#yes" ).remove();
        $( "#No" ).remove();

    });

});

