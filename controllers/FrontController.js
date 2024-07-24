class FrontController {
    static home = async (req, res) => {
        try {
            res.render("home")
        } catch (error) {
            console.log(error)

        }
    }

    static about = async (req, res) => {
        try {
            res.render("about")
        } catch (error) {
            console.log(error)

        }
    }

    static grs = async (req, res) => {
        try {
            res.render("grievance redressal system")
        } catch (error) {
            console.log(error)

        }
    }

    static features = async (req, res) => {
        try {
            res.render("features")
        } catch (error) {
            console.log(error)

        }
    }

    static benefits = async (req, res) => {
        try {
            res.render("benefits")
        } catch (error) {
            console.log(error)

        }
    }

    static help = async (req, res) => {
        try {
            res.render("help")
        } catch (error) {
            console.log(error)

        }
    }
    
    static register = async (req, res) => {
        try {
            res.render("register");
        } catch (error) {
            console.log(error);

        }
    };

    //insert user
    static userResgistration = async (req, res) => {
    };
}

module.exports = FrontController