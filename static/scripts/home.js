console.log('not broken');

function validateForm() {
  var name = document.getElementById('nameInput').value;
  var species = document.getElementById('speciesInput').value;
  var age = document.getElementById('ageInput').value;

  if(!name.length || !species.length || !age.length) {
    alert('Fields must not be left blank');
  }

  if(isNaN(parseInt(age)) || typeof parseInt(age) !== 'number'){
    alert('Age must be a number');
  }
  
  console.log(name, species, age);

  return false;
}
