// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//= require jquery3
//= require jquery_ujs
//= require activestorage
//= require turbolinks
//= require_tree .

var coordinates = function(element) {
    element = $('#robot');
    var top = element.offset().top;
    var left = element.offset().left;
    $('#coord').text('X: ' + left + ' ' + 'Y: ' + top);
}

$(document).ready(function() {
    $('#east').click(function() {
        $('#robot').animate({left:'+=30px'});
        var Y = $("#robot").offset().top;
        var X = $("#robot").offset().left;
        $('#coord').text('X: ' + X + ' ' + 'Y: ' + Y);
        if (Y >= 5 && Y<= 170 && X<=280 && X >=120){
            $('#robot').animate({left:'-=40px'});
            $('#coord').text('X: ' + X + ' ' + 'Y: ' + Y);
        }
        
    });
    $('#west').click(function() {
        $('#robot').animate({left:'-=30px'});
        var Y = $("#robot").offset().top;
        var X = $("#robot").offset().left;
        $('#coord').text('X: ' + X + ' ' + 'Y: ' + Y);
        if (Y >= 5 && Y<= 170 && X<=300 && X >=170){
            $('#robot').animate({left:'+=40px'});
            $('#coord').text('X: ' + X + ' ' + 'Y: ' + Y);
        }
    });
    $('#south').click(function() {
        $('#robot').animate({top:'+=30px'});
        var Y = $("#robot").offset().top;
        var X = $("#robot").offset().left;
        $('#coord').text('X: ' + X + ' ' + 'Y: ' + Y);
        if (Y >= -30 && Y<= 140 && X<=270 && X >=160){
            $('#robot').animate({top:'-=40px'});
            $('#coord').text('X: ' + X + ' ' + 'Y: ' + Y);
        }
    });
    $('#north').click(function() {
        $('#robot').animate({top:'-=30px'});
        var Y = $("#robot").offset().top;
        var X = $("#robot").offset().left;
        $('#coord').text('X: ' + X + ' ' + 'Y: ' + Y);
        if (Y >= 10 && Y<= 205 && X<=280 && X >=140){
            $('#robot').animate({top:'+=40px'});
            $('#coord').text('X: ' + X + ' ' + 'Y: ' + Y);
        }
    });

    //drag robot
    $('#robot').draggable({
        start: function() {
            coordinates();
        },
        stop: function() {
            coordinates();
        }
    });

});

