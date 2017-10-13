var Alert = (function() {

    /**
     * Set up locally-scoped variables
     */

    /**
     * Adding both prefixed ".rvt-" and old ".alert"  versions of the
     * selectors here. Let's eventually look at deprecating the
     * old un-prefixed version.
     */
    var dismissButtons = document.querySelectorAll('.rvt-alert__dismiss, .alert__dismiss');

    var init = function() {
        // Check to make sure there are dismissable alerts in the DOM.
        if(dismissButtons.length != 0) {
            _bindUiActions(dismissButtons);
        }
    }

    /**
     * @param {object} els - HTML elements to bind the actions to.
     */
    var _bindUiActions = function(els) {
        for (var i = 0; i < els.length; i++) {
            els[i].addEventListener('click', function() {
                dismissAlert(this);
            });
        }
    }

    /**
     * @param {object} context - the HTML element that was clicked to
     * to dimiss the alert
     */
    var dismissAlert = function(context) {
        var elToDismiss = context.parentNode;
        elToDismiss.parentNode.removeChild(elToDismiss);
    }

    // Expose public methods
    return {
        init: init,
        dismiss: dismissAlert
    }

})();
