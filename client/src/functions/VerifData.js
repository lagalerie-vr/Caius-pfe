// agence validation regles
const Libelle_test = /^[a-zA-Z0-9 ]{2,30}$/;

// directeur validation regles
const cin_test = /^[0-9]{8}$/;
const nom_test = /^[a-zA-Z ]{2,20}$/;
const prenom_test = /^[a-zA-Z ]{2,20}$/;
const email_test = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//const email_test = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+.[a-zA-Z0-9-])*$/;
const pass_test = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

var mobile = /^\+(?:[0-9] ?){6,14}[0-9]$/;

export const isNomForm = (libelle) => {
    return Libelle_test.test(libelle);
};

export const isCapital1000 = (number) => {
    return Number(number) < 1000
};


export const isPositivNumber = (number) => {
    return Number(number) >= 0 && (number + "").length > 0;
};

export const isNotEmpty = (string) => {
    return string.length > 0;
};

export const isCin = (cin) => {
    return cin_test.test(cin);
};

export const is8Numb = (number) => {
    return cin_test.test(number);
};

export const isMobile = (number) => {
    return mobile.test(number);
};

export const isNom = (nom) => {
    return nom_test.test(nom);
};

export const isPrenom = (prenom) => {
    return prenom_test.test(prenom);
};

export const isEmail = (email) => {
    return email_test.test(email);
};

export const isPass = (pass) => {
    return pass_test.test(pass);
};