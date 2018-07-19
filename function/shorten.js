const fs = require("fs");


function shorten(url,given_code) {

  let str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let shortened = '';
  let data='';
  let url_datas = [];


  if(fs.existsSync('newfile.txt')){
    
    data = fs.readFileSync('newfile.txt',"utf8");
    url_datas = data.split('\n');
  }

  if(url){

    if(fs.existsSync('newfile.txt')){
      
      data = fs.readFileSync('newfile.txt',"utf8");
      url_datas = data.split('\n');
    }
    
    if(data){
    
      for(let url_data of url_datas){
          if(url_data.split(',')[0]==url){
            shortened = url_data.split(',')[1];
            return shortened;
          }
        }
    }

     
    if(!shortened){
      if(given_code){
          shortened=given_code;
        }
      else{
        for (let i=0;i<6;i++){
           shortened = shortened+str[Math.floor(Math.random() * 62)];
        }
      }

     fs.appendFileSync('newfile.txt',url+','+shortened+'\n');
    }
    
     return shortened;


  }


}