updateFun = (function () {

     return function() {

        let xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function () {

            if (this.readyState === 4 && this.status === 200) {

                let accelerometer = parseFloat(this.responseText.split(":")[0]);
                let fallstatus = parseInt(this.responseText.split(":")[1]);

                document.getElementById("Accelerometer").innerHTML = this.responseText.split(":")[0];
                document.getElementById("FallStatus").innerHTML = this.responseText.split(":")[1];

                if (fallstatus === 1){

                    document.getElementById("trigger").style.visibility = "visible";

                }
                else{

                    document.getElementById("trigger").style.visibility = "hidden";

                }


            }

        };

        xhttp.open("GET", "update_data", true);

        xhttp.send();

    };

})();