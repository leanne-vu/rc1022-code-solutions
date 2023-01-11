function graduate(credential) {

  return function fullname(fullname) {
    return fullname + ', ' + credential;
  };

}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');
console.log(medicalSchool('Leanne Vu'));
console.log(lawSchool('Leanne Vu'));
