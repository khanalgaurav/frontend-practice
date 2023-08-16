function randomWaifu(){
    document.getElementById("img").style.display="block";
    url="https://api.waifu.pics/sfw/waifu";
    // url="https://dog.ceo/api/breeds/image/random";
    fetch(url)
    .then(function(response){
        return response.json();
        // console.log(response);
    })
    .then(function(data){
        display_image(data.url);
        // console.log(data.url);
    })
    .catch(function(error){
        console.log("error"+error);
    });
}
function display_image(img_url){
    document.getElementById("img").src=img_url;
}