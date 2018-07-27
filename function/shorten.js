const fs = require("fs");


function shorten(url, given_code) { //function to generate shortcode
                                    // returns a random alphanumeric of 6 characters if shortcode is given by the user.

    let str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let shortened = '';
    let url_data = [];

    if (url) {

        if (fs.existsSync('url_shortcodes.txt')) {

            url_data = fs.readFileSync('url_shortcodes.txt', "utf8").split('\n'); // reading from the file

        }

        if (url_data) {

            for (let data of url_data) {

                if (data.split(',')[0] == url) { // first coloumn is url and second coloumn is shortcode
                    shortened = data.split(',')[1];
                }
            }
        }


        if (!shortened) {

            if (given_code) {
                shortened = given_code;
            } else {
                for (let i = 0; i < 6; i++) {
                    shortened = shortened + str[Math.floor(Math.random() * 62)];
                }
            }

            fs.appendFileSync('url_shortcodes.txt', url + ',' + shortened + '\n');
        }

        return shortened;


    }



}

function unshorten(shortcode) { // function to retrive url for given shortcode

    if (fs.existsSync('url_shortcodes.txt')) {


        if (shortcode) {

            let url_data = fs.readFileSync('url_shortcodes.txt', "utf8").split('\n');
            for (let data of url_data) {
                if (data.split(',')[1] == shortcode) {
                    let short_url = data.split(',')[0];
                    return short_url;
                }
            }
        }

    }
    // if shortcode doesnt exist, then default value is returned.
    
    return "https://www.google.com";

}


module.exports.shorten = shorten;
module.exports.unshorten = unshorten;