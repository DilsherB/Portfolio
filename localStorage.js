//get inputs from HTML
const fields = document.querySelectorAll('.formData');

//creat your buffer object
let formData = {
  fName: '',
  lName: '',
  email: '',
  msg: '',
};

//fill object with input changes
fields.forEach((field) => {
  field.addEventListener('input', () => {
    formData[field.name] = field.value;
    //store changes into local storage
    localStorage.setItem('portfolio-form-data', JSON.stringify(formData));
  });
});

//recover localstorage when page loads
window.addEventListener('load', () => {
  const storedData = localStorage.getItem('portfolio-form-data');
  formData = JSON.parse(storedData);

  //set localstorage information to your inputs
  fields.forEach((field) => {
    field.value = formData[field.name];
  });
});