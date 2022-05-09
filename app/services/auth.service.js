const db = require("../models");

const { user: User, role: Role, refreshToken: RefreshToken } = db;

exports.sendemail =(email, username, password) => {
    const nodemailer = require("nodemailer");
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "",
        pass: "",
      },
    });
    const mailOptions = {
      from: "",
      to: email,
      subject: "Account Created",
      html: `<h1>Welcome to the server</h1>
      <p>Your username is: ${username}</p>
      <p>Your password is: ${password}</p>
      `,
    };
    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  };
exports.generateuuid = ()  =>{
    var d = new Date().getTime();
    var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    });
    return uuid;
  }
exports.changepassword = (req,res) =>
{
    User.findOne({
        where: {
            username: req.body.username
        }
    })
    .then(async (user) => {
        if (!user) {
            return res.status(404).send({ message: "User Not found." });
        }
        const passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );
        if (!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: "Invalid Password!"
            });
        }
        const newpassword = bcrypt.hashSync(req.body.newpassword, 8);
        await User.update(
            {
                password: newpassword
            },
            {
                where: {
                    username: req.body.username
                }
            }
        );
        res.send({ message: "Password changed successfully!" });
    })
    .catch(err => {
        res.status(500).send({ message: err.message });
    });
}
exports.changeemail = (req,res) =>
{
    User.findOne({
        where: {
            username: req.body.username
        }
    })
    .then(async (user) => {
        if (!user) {
            return res.status(404).send({ message: "User Not found." });
        }
        const passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );
        if (!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: "Invalid Password!"
            });
        }
        await User.update(
            {
                email: req.body.email
            },
            {
                where: {
                    username: req.body.username
                }
            }
        );
        res.send({ message: "Email changed successfully!" });
    })
    .catch(err => {
        res.status(500).send({ message: err.message });
    });
}
exports.getuserbyid = (req,res) =>
{
    User.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(async (user) => {
        if (!user) {
            return res.status(404).send({ message: "User Not found." });
        }
        res.send(user);
    })
    .catch(err => {
        res.status(500).send({ message: err.message });
    }
    );
}

exports.showadminbuttons = (req,res) =>
{
  res.send(true);

}

