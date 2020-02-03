import validator from 'validator';
//import { useAlert } from 'react-alert';
//const alert = useAlert()

export const inputValidator = (person) => {
    if (!person.idNumber) {
        return 'Id number is missing';
    }
    if (!person.name) {
        return 'Name is missing';
    }
    if (!person.name) {
        return 'Name is missing';
    }
    if (!person.birthdate) {
        return 'Please insert birthday date!';
    }
    if (!validator.isEmail(person.email)) {
        return 'Please insert a valid email!';
    }
    return;

}