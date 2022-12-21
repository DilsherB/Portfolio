const navLinks = document.querySelectorAll('.nav-item');
const menuToggle = document.getElementById('collapsibleNavbar');

// eslint-disable-next-line no-undef
const bsCollapse = new bootstrap.Collapse(menuToggle);
navLinks.forEach((n) => {
  n.addEventListener('click', () => { bsCollapse.toggle(); });
});

// modal started
// getting data from HTML
const project1 = {
    name: document.querySelector('#title1').innerHTML,
    img: document.querySelector('#imgProject1').src,
}
// looping through data
data = "";
for (let project in project1){
    data +=project1[project]+"<br>";
};
// showing data to modal
document.getElementById("body1").innerHTML = data;
