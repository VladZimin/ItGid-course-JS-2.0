class Valid {
    constructor (email, password, isValid = false) {
        this.email = email
        this.password = password
        this.isValid = isValid
    }
    validate () {
        this.password.length < 6 ? this.isValid = false : this.isValid = true
    }
}