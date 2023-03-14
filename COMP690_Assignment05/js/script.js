let empForm     = document.querySelector('#empForm');
empForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let empID       = document.querySelector('#id').value;
    let empName     = document.querySelector('#name').value;
    let empExt      = document.querySelector('#ext').value;
    let empEmail    = document.querySelector('#email').value;
    let empDept     = document.querySelector('#department').value;
    console.log(`ID: ${empID}`);
    console.log(`Name: ${empName}`);
    console.log(`Extension: ${empExt}`);
    console.log(`Email: ${empEmail}`);
    console.log(`Department: ${empDept}`);
});