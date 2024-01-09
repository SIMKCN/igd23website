function previewImage(event) {
    var reader = new FileReader();
    reader.onload = function(){
        var output = document.getElementById('preview');
        output.src = reader.result;
        output.style.width = '50%';
        output.style.height = 'auto';
    }
    reader.readAsDataURL(event.target.files[0]);
  }