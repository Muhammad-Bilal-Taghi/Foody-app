
var ImgName, ImgUrl;
var files = [];
var reader = new FileReader();


document.getElementById('select').onclick = function(e){
    var input = document.createElement('Input');
    input.type = 'file'
    

    input.onchange = e => {
        files = e.target.files;
        reader = new FileReader();
        reader.onload = function(){
            document.getElementById("myimg").src = reader.result;
        }
       reader.readAsDataURL(files[0]);
    }
       input.click();
}

document.getElementById('upload').onclick = function(){
    ImgName = document.getElementById('name').value;
    
    var uploadTask = firebase.storage().ref('Images/'+ImgName +".png").put(files[0]);

    uploadTask.on('state_changed',function(snapshot){
      var Process = (snapshot.bytestransferred / snapshot.totalbytes) * 100;
      document.getElementById('UpProgress').innerHTML = 'upload' + Process  +'%';

    },
    function(error){
        alert('error in upload image')
    },
    function(){
        uploadTask.snapshot.ref.getDownloadUrl()
        .then (function(url){
            ImgUrl = url;
        
       firebase.database().ref('Pictures/' + ImgName).set({
           name : ImgName,
           Link : ImgUrl
           
        });
        alert('image added succesfully');
    });
    });
}

document.getElementById('reterive').onclick = function(){
      ImgName = document.getElementById('myimg').value;
      firebase.database().ref('Pictures/'+ImgName).on('value', function(snapshot){
          document.getElementById('myimg').src = snapshot.val().link;
      })
}