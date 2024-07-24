class Admincontroller {
    static dashboard = async (req, res) => {
        try {
            res.render("admin/dashboard")
        } catch (error) {
            console, log(error)
        }
    };
    static AdminRegister = async (req, res) => {
        try {
           console.log(req.body);
          console.log(req.files.image)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = Admincontroller;