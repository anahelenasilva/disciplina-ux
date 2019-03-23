function initDetalhes() {
    acessibilidade();
    //initMap();
}

function acessibilidade() {
    var limite   = 10,
    cont     = 0,
    target   = 'h1, h2, h3, h4, p, blockquote, li, a, span, td, th, section, article, div.conteudo',
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

function initMap() {
    var map;
    debugger;
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -22.016883, lng: -47.905983},
        zoom: 8
    });
}
