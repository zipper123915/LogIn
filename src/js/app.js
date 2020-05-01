//* imports
import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';

import UI from "./config/ui.config";

import {validate} from "./helpers/validate";
import {showInputError, removeInputError} from "./views/formLog";
import {Tabs} from "./views/tabs";
import {login} from "./services/auth.service";
import {reg} from "./services/reg.service";
import {notify} from "./views/notification";
import formReg from "./views/formReg";
import "./services/cities.service";
import "jquery-ui-bundle";
import $ from "jquery";
import {getCitiesByCountryIndex, getCountries, getElementIndex} from "./services/cities.service";

//* Elements
const {form, inputEmail, inputPassword} = UI;
const inputs = [inputEmail, inputPassword];
const tab = new Tabs();
//*Calls


//* Events

formReg.countryInput.addEventListener('blur', () => {
    getCountries()
        .then(response => getElementIndex(response, formReg.countryInput.value))
        .then(index => getCitiesByCountryIndex(index))
        .then(cities => {
            formReg.cityInput.removeAttribute('disabled');
            $(formReg.cityInput).autocomplete({source: cities});
        })
        .catch(error => console.warn(error));
});

formReg.form.addEventListener('submit', event => {
    event.preventDefault();
    reg(formReg.getObjFromForm())
        .then(res => {
            notify({message: 'success', className: 'alert-primary'});
            formReg.form.reset();
        })
        .catch(err => notify({message: 'error', className: 'alert-danger'}) );
});

form.addEventListener('submit', async event => {
    event.preventDefault();


    const isValidForm = inputs.every(input => {
        const isValidInput = validate(input);
        if (!isValidInput) showInputError(input);
        return isValidInput;
    });

    if (!isValidForm) return;
    try {
        await login(inputEmail.value, inputPassword.value);
        form.reset();
        notify({message: 'Login success', className: 'alert-info'})
    } catch (error) {
        notify({message: error, className: 'alert-danger'});
        console.log(error);
    }
});

inputs.forEach(input => input.addEventListener('focus', () => removeInputError(input)));


//*Functions
