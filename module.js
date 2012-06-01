;(function(win, $, undef){
    "use strict";    

    // Check to see if our global is available as a member of window; if it is, our namespace root exists; if not, we'll create it.
    var foospace = win.foospace = (win.foospace !== undef) ? win.foospace : {};

    (foospace.module = function(){
        return{
            _init : function(){
                // Etc. etc.
            }
        }
    }())._init();
}(window, jQuery));