class Valid2 extends Valid{
    constructor (email, password, isValid = false, emailError = '', passwordError = '') {
        super(email,password,isValid)
        this.emailError = emailError
        this.passwordError = passwordError
    }
    validate () {
        if (this.password.length < 6) {
            this.isValid = false
            this.passwordError = 'min length 6'
        } else this.isValid = true
        if (this.email === this.emailError){
            this.isValid = false
            this.emailError = 'email empty'
        }
     }
}