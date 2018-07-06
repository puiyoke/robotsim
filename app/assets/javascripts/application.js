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
        $('#robot').animate({marginLeft:'+=30px'});
        coordinates();
    });
    $('#west').click(function() {
        $('#robot').animate({marginLeft:'-=30px'});
        coordinates();
    });
    $('#south').click(function() {
        $('#robot').animate({top:'+=30px'});
        coordinates();
    });
    $('#north').click(function() {
        $('#robot').animate({top:'-=30px'});
        coordinates();
    });

    //drag robot
    $('#robot').draggable({
        start: function() {
            coordinates('#robot');
        },
        stop: function() {
            coordinates('#robot');
        }
    });

});

