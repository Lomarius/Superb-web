
const dropdown = document.getElementById('DropdownContainer');
const serviceclick = document.getElementById('ServiceElement');
const servicedrop = document.getElementById('ServiceContainer');
const careerclick = document.getElementById('CareerElement');
const careerdrop = document.getElementById('CareerContainer');

serviceclick.addEventListener('click', (event) => {
    console.log("ClickServiceElement");
    servicedrop.classList.toggle('show');
    careerdrop.classList.remove('show');
    event.stopPropagation();
});

careerclick.addEventListener('click', (event) => {
    console.log("ClickCareerElement");
    careerdrop.classList.toggle('show');
    servicedrop.classList.remove('show');
    event.stopPropagation();

});

window.addEventListener('click', () => {
    if (servicedrop.classList.contains('show')) {
        servicedrop.classList.remove('show');
    } else if (careerdrop.classList.contains('show')) {
        careerdrop.classList.remove('show');
    }
});

window.addEventListener('click', () => {
    if (careerdrop.classList.contains('show')) {
        careerdrop.classList.remove('show');
    }
});

