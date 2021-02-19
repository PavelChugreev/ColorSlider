$( function() {
    function hexFromRGB(r, g, b) {
      var hex = [
        r.toString( 16 ),
        g.toString( 16 ),
        b.toString( 16 )
      ];
      $.each( hex, function( nr, val ) {
        if ( val.length === 1 ) {
          hex[ nr ] = "0" + val;
        }
      });
      return hex.join( "" ).toUpperCase();
    }
    function refreshSwatch() {
      var red = $( "#red" ).slider( "value" ),
        green = $( "#green" ).slider( "value" ),
        blue = $( "#blue" ).slider( "value" ),
        hex = hexFromRGB( red, green, blue );

        if($(".bg").hasClass("active")){
            $( "#swatch" ).css( "background-color", "#" + hex );
        } else {
            $( "#swatch" ).css( "color", "#" + hex );
        }
      
    }

    $( "#swatch" ).css( "color", "#000" );
 
    $( "#red, #green, #blue" ).slider({
      orientation: "horizontal",
      range: "min",
      max: 255,
      value: 127,
      slide: refreshSwatch,
      change: refreshSwatch
    });
    $( "#red" ).slider( "value", 255 );
    $( "#green" ).slider( "value", 140 );
    $( "#blue" ).slider( "value", 60 );
    

    function toggleClass(className){
        $(className).toggleClass("active") 
    }

    $(".bg").click(() => {
        toggleClass(".bg")
        toggleClass(".color")
    } )
    $(".color").click(() => {
        toggleClass(".bg")
        toggleClass(".color")
    } )

});

