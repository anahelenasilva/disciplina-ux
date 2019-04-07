var loadingTime = 400;

function acessibilidade() {
    var limite   = 10,
    cont     = 0,
    target   = 'h1, h2, h3, h4, h5, h6, p, blockquote, li, a, span, td, th, section, article, div.conteudo',
    increase = $("a[rel='increase-font']"),
    decrease = $("a[rel='decrease-font']"),
    area = $('.container');

    increase.click(function(){
        area.find(target).each(function(){
            var self = $(this), size = parseInt(self.css('font-size').substring(0,2));
            cont!=limite ? self.css('font-size', (size+1)) : '';
        });
        cont!=limite ? cont++ : '';
        return false;
    });

    decrease.click(function(){
        area.find(target).each(function(){
            var self = $(this), size = parseInt(self.css('font-size').substring(0,2));
            cont!=0 ? self.css('font-size', (size-1)) : '';
        });
        cont!=0 ? cont-- : '';
        return false;
    });
}

$(document).ready(function(){
    loadEvents();

    jQuery.expr[':'].contains = function(a, i, m) {
        return jQuery(a).text().toUpperCase()
            .normalize('NFD').replace(/[\u0300-\u036f]/g, "")
            .indexOf(m[3].toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")) >= 0;
    };
});

$(window).load(function() {
    load(false);
});

function injectThis(content,target,scripts) {
    $(target).html(content);
    $("#page-script").html('');

    if(scripts) {
        injectScript(scripts);
    }

    loadEvents();
}

function injectScript(path) {
    var script = document.createElement('script');
    script.async = true;
    script.src = path;
    $("#page-script")[0].appendChild(script);
}

function loadEvents() {
    $('a').unbind('click');
    $('a').bind('click', function(e) {
        var path = $(e.target).attr('href');
        if(path.indexOf('#') != -1)
            return;
        e.preventDefault();
        load(true);
        setTimeout(function() {
            injectScript(path);
            load(false); 
        }, loadingTime) ;
         
    });
    acessibilidade();
    $(document).on('keyup','#filtro',function(e){
        if(e.keyCode == 13){
            $('#filtrar').click();
        }
    })
}

function load(show) {
    if(show) 
        $(".loader").fadeIn("fast");
    else
        $(".loader").fadeOut("medium");    
}

function filtrar(){
    const filtro = $('#filtro').val();
    $('.js-filtro').find('.col-sm-4').addClass('d-none');
    $('.js-not-found').hide();

    let list = $('.card-title:contains("' + filtro + '")');    
    if(list.size() > 0){
        list.each(function(){$(this).closest('.col-sm-4').removeClass('d-none')});
    }else{
        $('.js-termo-pedquisado').text('"' + filtro + '"');
        $('.js-not-found ').show();
    }    
}

