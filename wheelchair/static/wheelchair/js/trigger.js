triggerFun = (function () {

     return function() {

        let xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function () {

            if (this.readyState === 4 && this.status === 200) {



            }

        };

        xhttp.open("GET", "trigger", true);

        xhttp.send();

    };

})();