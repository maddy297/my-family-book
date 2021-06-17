var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROobpqS-Lm4ZBGx2stVHufvzg4AXoQv6DC0Q&usqp=CAU" , "https://static.vecteezy.com/system/resources/previews/001/206/116/original/boy-png.png", "https://www.pinclipart.com/picdir/middle/35-353068_mother-with-short-brown-hair-clip-art-at.png", "https://c3.klipartz.com/pngpicture/677/17/sticker-png-pinkalicious-and-peters-dad-thumbnail.png", "https://i.pinimg.com/736x/f8/c2/15/f8c21504261480e3630f79de21936e64.jpg"];
var names = ["Family Book","Maddy", "Max", "Julia", "Emil", "Okhi"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName  = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
