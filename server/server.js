require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

const app = express();
const port = process.env.SERVER_PORT;

const JWT_SECRET = "your_jwt_secret_key";
const jwt = require("jsonwebtoken");

var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

connection.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err);
        return;
    }
    console.log("Connected to the database.");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("프로젝트 코딩 중!");
});

app.post("/idcheck", (req, res) => {
    const data = [req.body.inputId];
    const query = `SELECT COUNT(id) AS count FROM react_project.user_ WHERE id=?`;
    const getUserById = (err, rows) => {
        if (err) {
            console.error("fail", err);
            return res.status(500).json({
                success: false,
                message: "서버 오류가 발생했습니다.",
                error: err,
            });
        } else {
            if (rows[0].count > 0) {
                console.log("사용할 수 없는 아이디입니다.");
                return res.status(200).json({
                    success: false,
                });
            } else {
                console.log("사용 가능한 아이디입니다.");
                return res.status(200).json({
                    success: true,
                });
            }
        }
    };
    connection.query(query, data, getUserById);
});

app.post("/join", (req, res) => {
    const { inputId, inputPw, inputName, inputPhone, inputEmail } = req.body.userData;
    const data = [inputId, inputPw, inputName, inputPhone, inputEmail];
    const query = `
        INSERT INTO react_project.user_ (id, pw, name, phone, email, insertdate) 
        VALUES (?, ?, ?, ?, ?, NOW())
    `;
    const insertUser = (err) => {
        if (err) {
            console.error("fail", err);
            return res.status(500).json({
                success: false,
                message: "서버 오류가 발생했습니다.",
                error: err,
            });
        } else {
            console.log("회원가입 성공");
            return res.status(200).json({
                success: true,
            });
        }
    };
    connection.query(query, data, insertUser);
});

app.post("/findpw", (req, res) => {
    const { inputId, inputName, inputEmail, inputPhone } = req.body.userData;
    const data = [inputId, inputName, inputEmail, inputPhone];
    const query = `SELECT pw FROM react_project.user_ where id=? and name=? and email=? and phone=?`;
    const getUserByPw = (err, result) => {
        if (err) {
            console.error("fail find password : ", err);
            return res.status(500).json({
                success: false,
                message: "서버 오류가 발생했습니다.",
                error: err,
            });
        } else {
            if (result.length <= 0) {
                console.log("PW 찾기 실패");
                return res.status(200).json({
                    success: false,
                });
            } else {
                console.log("PW 찾기 성공");
                return res.status(200).json({
                    success: true,
                });
            }
        }
    };

    connection.query(query, data, getUserByPw);
});

app.post("/resetpassword", (req, res) => {
    const { inputPw, inputId } = req.body.userData;
    const data = [inputPw, inputId];
    const query = `UPDATE react_project.user_ SET pw=? WHERE id=?`;
    const updateUserInfo = (err) => {
        if (err) {
            console.error("PW update fail", err);
            return res.status(500).json({
                success: false,
                message: "서버 오류가 발생했습니다.",
                error: err,
            });
        } else {
            try {
                console.log("PW update success");
                return res.status(200).json({
                    success: true,
                });
            } catch (error) {
                console.error("PW update err : ", err);
                return res.status(200).json({
                    success: false,
                });
            }
        }
    };

    connection.query(query, data, updateUserInfo);
});

app.post("/findid", (req, res) => {
    const { dataType, inputName, inputData } = req.body.userData;
    const data = [inputName, inputData];
    const query =
        dataType === "email"
            ? `SELECT id FROM react_project.user_ WHERE name=? AND email=?`
            : `SELECT id FROM react_project.user_ WHERE name=? AND phone=?`;
    const getUserById = (err, result) => {
        if (err) {
            console.error("ID 찾기 실패", err);
            return res.status(500).json({
                success: false,
                message: "서버 오류가 발생했습니다.",
                error: err,
            });
        } else {
            if (result.length > 0) {
                console.log("ID 찾기 성공");
                return res.status(200).json({
                    success: true,
                    id: result[0].id,
                });
            } else {
                console.log("ID가 없습니다.");
                return res.status(200).json({
                    success: false,
                    id: "",
                });
            }
        }
    };
    connection.query(query, data, getUserById);
});

app.post("/login", (req, res) => {
    const { inputId, inputPw } = req.body.userData;
    const data = [inputId, inputPw];
    const query = `SELECT id,pw FROM react_project.user_ WHERE id=? and pw=?`;

    const getUserInfo = (err, result) => {
        if (err) {
            console.error("fail", err);
            return res.status(500).json({
                success: false,
                message: "서버 오류가 발생했습니다.",
                error: err,
            });
        } else {
            if (result.length === 0) {
                console.log("##login fail");
                return res.status(200).json({
                    success: false,
                });
            } else {
                const token = jwt.sign({ id: inputId }, JWT_SECRET, { expiresIn: "1h" });
                console.log("##login success");
                return res.status(200).json({
                    success: true,
                    token: token,
                });
            }
        }
    };

    connection.query(query, data, getUserInfo);
});

app.post("/mypage", (req, res) => {
    const data = req.body.userData;
    console.log("##data", data);
    const query = "SELECT id,name,phone,email,insertdate FROM react_project.user_ WHERE id=?;";

    const getUserInfo = (err, result) => {
        if (err) {
            console.log("정보 찾기 실패", err);
            return res.status(500).json({
                success: false,
                message: "서버 오류가 발생했습니다.",
                error: err,
            });
        } else {
            if (result.length > 0) {
                return res.status(200).json({
                    success: true,
                    id: result[0].id,
                    name: result[0].name,
                    phone: result[0].phone,
                    email: result[0].email,
                    insertdate: result[0].insertdate,
                    userinfo: result[0],
                });
            } else {
                return res.status(200).json({
                    success: false,
                    message: "정보를 찾을 수 없습니다.",
                });
            }
        }
    };
    connection.query(query, data, getUserInfo);
});

app.post("/emailupdate", (req, res) => {
    const { inputEmail, inputId } = req.body.userData;
    const data = [inputEmail, inputId];
    const query = "UPDATE react_project.user_ SET email=? WHERE id=?";
    const updateUserInfo = (err) => {
        if (err) {
            console.error("email update fail", err);
            return res.status(500).json({
                success: false,
                message: "서버 오류가 발생했습니다.",
                error: err,
            });
        } else {
            try {
                console.log("##email update success");
                return res.status(200).json({
                    success: true,
                });
            } catch (error) {
                console.log("##email update fail");
                return res.status(200).json({
                    success: false,
                });
            }
        }
    };
    connection.query(query, data, updateUserInfo);
});

app.post("/phoneupdate", (req, res) => {
    const { inputPhone, inputId } = req.body.userData;
    const data = [inputPhone, inputId];
    const query = "UPDATE react_project.user_ SET phone=? WHERE id=?";
    const updateUserInfo = (err) => {
        if (err) {
            console.error("phone update fail", err);
            return res.status(500).json({
                success: false,
                message: "서버 오류가 발생했습니다.",
                error: err,
            });
        } else {
            try {
                console.log("##phone update success");
                return res.status(200).json({
                    success: true,
                });
            } catch (error) {
                console.log("##phone update fail");
                return res.status(200).json({
                    success: false,
                });
            }
        }
    };
    connection.query(query, data, updateUserInfo);
});

app.post("/checkcurrentpassword", (req, res) => {
    const { inputId, inputPw } = req.body.userData;
    const data = [inputId, inputPw];
    const query = `SELECT pw FROM react_project.user_ WHERE id=? and pw=?`;

    const getUserInfo = (err, result) => {
        if (err) {
            console.error("fail", err);
            return res.status(500).json({
                success: false,
                message: "서버 오류가 발생했습니다.",
                error: err,
            });
        } else {
            if (result.length > 0) {
                console.log("계정과 pw 일치");
                return res.status(200).json({
                    success: true,
                });
            } else {
                console.log("계정과 pw 일치하지 않습니다.");
                return res.status(200).json({
                    success: false,
                });
            }
        }
    };

    connection.query(query, data, getUserInfo);
});

app.post("/deleteuser", (req, res) => {
    const data = [req.body.userData];
    const query = "DELETE FROM `react_project`.`user_` WHERE id=?;";

    const deleteUser = (err) => {
        if (err) {
            console.log("##delete user fail", err);
            return res.status(500).json({
                success: false,
                message: "서버 오류가 발생했습니다.",
                error: err,
            });
        } else {
            try {
                console.log("##사용자 탈퇴 완료");
                return res.status(200).json({
                    success: true,
                });
            } catch (error) {
                console.log("##사용자 탈퇴 실패");
                return res.status(200).json({
                    success: false,
                });
            }
        }
    };

    connection.query(query, data, deleteUser);
});

app.listen(port, () => {
    console.log(`Connect at http://localhost:${port}`);
});
