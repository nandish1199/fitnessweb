function myfun(){
    document.querySelector("#myul").style.display="inline-blok"; //imp you can also add inline-blok not inline-block
}
function searchYoutubers() {
    
    let inpval = document.getElementById('myInput').value.toUpperCase();
    let ul = document.getElementById('myul');
    let li = ul.getElementsByTagName('li');
    for (var i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];
        let b = a.textContent;
        if (b.toUpperCase().indexOf(inpval) > -1) {
            li[i].style.display = '';
        }
        else {
            li[i].style.display = 'none';

        }
    }
}
searchYoutubers();