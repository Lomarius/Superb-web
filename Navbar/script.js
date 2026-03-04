
const dropdown = document.getElementById('DropdownContainer');
const serviceclick = document.getElementById('ServiceElement');
const servicedrop = document.getElementById('ServiceContainer');

serviceclick.addEventListener('click', (event) => {
    console.log("ClickServiceElement");
    servicedrop.classList.toggle('show');
    event.stopPropagation();
});

window.addEventListener('click', () => {
    if (servicedrop.classList.contains('show')) {
        servicedrop.classList.remove('show');
    }
});


const careerclick = document.getElementById('CareerElement');
const careerdrop = document.getElementById('CareerContainer')


careerclick.addEventListener('click', (event) => {
    console.log("ClickCareerElement");
    careerdrop.classList.toggle('show')
    event.stopPropagation();

});

window.addEventListener('click', () => {
    if (careerdrop.classList.contains('show')) {
        careerdrop.classList.remove('show');
    }
});