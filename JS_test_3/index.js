document.getElementById('searchInput').addEventListener('keyup', function(event) {
    var query = event.target.value;
    //console.log("david".indexOf(query) >= 0)

    let names = document.getElementsByClassName('name')

    for (let i = 0; i < names.length; i++) {
        names[i].style.display = 'none';

        if (names[i].textContent.toLowerCase().indexOf(query) >= 0) {
            names[i].style.display = 'inline-block'
        }
    }
})