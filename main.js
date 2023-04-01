var images = [ "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://www.clipartmax.com/png/small/9-91707_educlips-educasong-sister-clipart.png", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg","https://www.clipartmax.com/png/small/63-635971_pug1-340%C3%97427-pixels-pugs-clipart.png"];
var names = ["Vaibhav Kadwadkar", "Mansi Kadwadakar", "Khushi Kadwadkar", "Arya(Meow) Kadwadkar ", "Puggy Kadwadkar"];
var i = -1;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4;
    if(i > numbers_of_family_member_in_array)
      {
          i = 0 ;
          
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i] ;
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
    console.log(i);
    console.log(updatedName);
    }
