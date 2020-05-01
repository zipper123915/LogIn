class FormReg {
    constructor() {
        this.form = document.forms['regForm']; // form
        // form elements
        this.emailInput = this.form['email'];
        this.passwordInput = this.form['password'];
        this.phoneInput = this.form['telephone'];
        this.nicknameInput = this.form['nickname'];
        this.firstNameInput = this.form['first_name'];
        this.lastNameInput = this.form['last_name'];
        this.genderInput = this.form['gender'];
        this.countryInput = this.form['country'];
        this.cityInput = this.form['city'];
        this.birthdayInput = this.form['birthday'];
    }

    getArrayFromInputs() {
        const arr = [];

        for (let key in this) {
            if (key !== 'form') arr.push(this[key])
        }

        return arr;
    }

    getObjFromForm() {
        return {
            email: this.emailInput.value,
            date_of_birth_day: this.birthdayInput.value.split('-')[2],
            date_of_birth_month: this.birthdayInput.value.split('-')[1],
            date_of_birth_year: this.birthdayInput.value.split('-')[0],
            phone: this.phoneInput.value,
            password: this.passwordInput.value,
            nickname: this.nicknameInput.value,
            country: this.countryInput.value,
            city: this.cityInput.value,
            first_name: this.firstNameInput.value,
            last_name: this.lastNameInput.value,
            gender_orientation: this.genderInput.value
        }
    }
}

const form = new FormReg();

export default form;
