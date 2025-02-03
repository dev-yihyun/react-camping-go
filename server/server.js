require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

const app = express();
const port = process.env.SERVER_PORT;

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
    const query = "SELECT COUNT(id) AS count FROM `react_project`.`user_` WHERE id=?";
    const getUserById = (err, rows) => {
        if (err) {
            console.error("##fail", err);
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
            console.error("##fail", err);
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

app.listen(port, () => {
    console.log(`Connect at http://localhost:${port}`);
});
