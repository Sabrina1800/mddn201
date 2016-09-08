var main = function() {
    $('#info').click(function() {
      $('#inf').toggle();
      $('#i').hide();
      $('#s').hide();
      $('#p').hide();
    });

    $('#int').click(function() {
      $('#i').toggle();
      $('#inf').hide();
      $('#s').hide();
      $('#p').hide();
    });

    $('#skill').click(function() {
      $('#s').toggle();
      $('#i').hide();
      $('#inf').hide();
      $('#p').hide();
    });

    $('#pers').click(function() {
      $('#p').toggle();
      $('#i').hide();
      $('#inf').hide();
      $('#s').hide();
    });

    var main = function() {
      window.sr = ScrollReveal({reset: true}).reveal('#who, #hi, #cam h3, #cam, #add, #icons');
    };

    $(document).ready(main);

};

$(document).ready(main);
