const fs = require("fs");


function shorten(url, given_code) {

    let str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let shortened = '';
    let url_data = [];

    if (url) {

        if (fs.existsSync('newfile.txt')) {

            url_data = fs.readFileSync('newfile.txt', "utf8").split('\n');

        }

        if (url_data) {

            for (let data of url_data) {

                if (data.split(',')[0] == url) {
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

            fs.appendFileSync('newfile.txt', url + ',' + shortened + '\n');
        }

        return shortened;


    }



}

function unshorten(shortcode) {

    if (shortcode) {

        let url_data = fs.readFileSync('newfile.txt', "utf8").split('\n');
        for (let data of url_data) {
            if (data.split(',')[1] == shortcode) {
                let short_url = data.split(',')[0];
                return short_url;
            }
        }

        return "https://www.hackkar.com";

    }

}

module.exports.shorten = shorten;
module.exports.unshorten = unshorten;