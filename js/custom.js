$(function(){
    //mix it up
    var containerEl = document.querySelector('.poject-all');

    var mixer = mixitup(containerEl);

    //counter-up
    $('.counter').counterUp({
        delay: 50,
        time: 6000
    })
    //color switcher
    var colorSheets = [
        {
            color: "#ffffff",
            title: "Switch to Default",
            href: "./css/default.css"
        },
        {
            color: "#ff463a",
            title: "Switch to Red",
            href: "./css/red.css"
        },
        {
            color: "#4bda28",
            title: "Switch to Green",
            href: "./css/green.css"
        },
        {
            color: "#4650dc",
            title: "Switch to Blue",
            href: "./css/blue.css"
        },
        {
            color: "#f41c54",
            title: "Switch to Magenta",
            href: "./css/magenta.css"
        }
    ];
    
    ColorSwitcher.init(colorSheets);

    //typed.js
    var typed = new Typed('.type', {
        strings: ['modern design.', 
                  'standard design.',
                  'realistic design.'
                ],
                typeSpeed: 50,
                backSpeed: 50,
                backDelay: 1500,
      });

      var typed = new Typed('.p-part', {
        strings: [
                  'liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.'
                ],
                typeSpeed: 50,
                backSpeed: 50,
                backDelay: 1500,
      });
})