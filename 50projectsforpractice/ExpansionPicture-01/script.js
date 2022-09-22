// const panels = document.querySelectorAll('.panel');

// panels.forEach(panel => {
//     panels.addEventListener('click', () => {
//         panels.classList.add('active')
//         removeEventListener();
//     })
// });

// function removeEventListener() {
//     panels.forEach(panel => {
//         panels.classList.remove('active');
//     });
// }
var panels = document.querySelectorAll('.panel');
for (var i = 0; i < panels.length; i++) {
    panels[i].addEventListener('click', function () {
        for (var i = 0; i < panels.length; i++) {
            panels[i].className = 'panel';
        }
        this.className = 'panel active';
    })
}