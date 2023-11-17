const userControl = {
    login: (req, res) => {
        res.render('../views/users/Login')
    },
    register: (req, res) => {
        res.render('../views/users/Registro')
    }
}

module.exports = userControl;