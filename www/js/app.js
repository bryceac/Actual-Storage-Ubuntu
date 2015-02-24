/**
 * Wait before the DOM has been loaded before initializing the Ubuntu UI layer
 */
function getKB(a) {
 return (a * 1000) / 1024;
}

function getMB(a) {
 return (a * Math.pow(1000, 2)) / Math.pow(1024, 2);
}

function getGB(a) {
 return (a * Math.pow(1000, 3)) / Math.pow(1024, 3);
}

function getTB(a) {
 return (a * Math.pow(1000, 4)) / Math.pow(1024, 4);
}

function getPB(a) {
 return (a * Math.pow(1000, 5)) / Math.pow(1024, 5);
}

function getEB(a) {
 return (a * Math.pow(1000, 6)) / Math.pow(1024, 6);
}

function getZB(a) {
 return (a * Math.pow(1000, 7)) / Math.pow(1024, 7);
}

function getYB(a) {
 return (a * Math.pow(1000, 8)) / Math.pow(1024, 8);
}

jQuery(document).ready(function () {
    var UI = new UbuntuUI();
    UI.init();

    UI.button('calc').click(function (event) {
       event.preventDefault();
       var size = jQuery('#size').val(), denomination = jQuery('#denominations option:selected').text();

        if (denomination === 'KB') {
            jQuery('#result').val(getKB(size));
        } else if (denomination === 'MB') {
            jQuery('#result').val(getMB(size));
        } else if (denomination === 'GB') {
            jQuery('#result').val(getGB(size));
        } else if (denomination === 'TB') {
            jQuery('#result').val(getTB(size));
        } else if (denomination === 'PB') {
            jQuery('#result').val(getPB(size));
        } else if (denomination === 'EB') {
            jQuery('#result').val(getEB(size));
        } else if (denomination === 'ZB') {
            jQuery('#result').val(getZB(size));
        } else if (denomination === 'YB') {
            jQuery('#result').val(getYB(size));
        }
    });
});
