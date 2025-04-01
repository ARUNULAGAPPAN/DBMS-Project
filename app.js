const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const oracledb = require('oracledb');
require('dotenv').config();

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const dbconfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectString: process.env.DB_CONNECTION_STRING,
};

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.post('/student', async (req, res) => {
    const { reg_no, name, dept, course,type } = req.body;

    let connection;
    try {
        connection = await oracledb.getConnection(dbconfig);

        const result = await connection.execute(
            `INSERT INTO STUDENTS_INFO1 (reg_no, S_name, department, course,type) VALUES (:reg_no, :name, :dept, :course, :type)`,
            {
                reg_no: reg_no,
                name: name,
                dept: dept,
                course: course,
                type: type||null
            },
            { autoCommit: true }
        );
        res.status(200).send(`${reg_no} Inserted successfully`);
        connection.close();
       
    } catch (err) {
        console.error(err);
        res.status(500).send('Error inserting student details');
   
     }
});

app.get('/details', async (req, res) => {
    let connection;
    try {
        connection = await oracledb.getConnection(dbconfig);

        const result = await connection.execute(
            `SELECT reg_no, S_name, department, course,type FROM STUDENTS_INFO1`
        );

        res.render('details', { result});
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching student details');
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (closeErr) {
                console.error('Error closing connection', closeErr);
            }
        }
    }
});

app.get('/lateraldetails', async (req, res) => {
    let connection;
    try {
        connection = await oracledb.getConnection(dbconfig);

        const result = await connection.execute(
            `SELECT registerno,name FROM LATERAL_INFO1`
        );

        res.render('lateral_details', { result});
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching student details');
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (closeErr) {
                console.error('Error closing connection', closeErr);
            }
        }
    }
});

app.get('/admissiondetails', async (req, res) => {
    let connection;
    try {
        connection = await oracledb.getConnection(dbconfig);

        const updateResult = await connection.execute(`BEGIN update_count; END;`);


        const result = await connection.execute(
            `SELECT type_id,type_name,no_of_students FROM ADMISSION_TYPE1`
        );

        res.render('admission', { result});
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching student details');
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (closeErr) {
                console.error('Error closing connection', closeErr);
            }
        }
    }
});

app.listen(5000, () => console.log('Server is running at http://localhost:5000'));
