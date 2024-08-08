const mysql = require("mysql")

const express = require("express")

const app = express()

const cors = require('cors')

app.use(cors())
app.use(express.json())

var connection = mysql.createConnection({

    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'april_mainprojfirst'
})

connection.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('data added..')
    }

    app.get('/projdata', (req, res) => {
        const q = 'SELECT * FROM projdata ';

        connection.query(q, (error, data) => {
            if (error) {
                console.log(error)
                return res.status(500).send(error)
            }
            return res.json(data)
        })
    })

    app.post('/projdata', (req, res) => {
        const q = 'INSERT INTO  projdata( `fname`,`lname`,`email`,`city`,`bday`,`pincode` ) VALUES ( ? , ? , ? , ? , ? , ? )'

        const values = [
            req.body.fname,
            req.body.lname,
            req.body.email,
            req.body.city,
            req.body.bday,
            req.body.pincode
        ]

        connection.query(q, values, (error, data) => {
            if (error) {
                console.log(error)
                return res.status(500).send(error)
            }
            return res.json(data)
        })
    })

    app.get('/projdata/get/:id', (req, res) => {
        const regId = req.params.id;

        const q = 'SELECT * FROM  projdata where id=?'

        connection.query(q, [regId], (error, data) => {
            if (error) {
                console.log(error)
                return res.status(500).send(error)
            }
            return res.json(data)
        })
    })

    app.put('/projdata/reupdate/:id', (req, res) => {
        const regId = req.params.id;

        const q = 'UPDATE projdata set `fname`=? , `lname`=? , `email`=? , `city`=? , `bday`=? , `pincode`=? WHERE id=? '


        const values = [
            req.body.fname,
            req.body.lname,
            req.body.email,
            req.body.city,
            req.body.bday,
            req.body.pincode,
            regId
        ]

        connection.query(q, values, (error, data) => {
            if (error) {
                console.log(error)
                return res.status(500).send(error)
            }
            return res.json(data)
        })
    })

    app.delete('/projdata/redelete/:id', (req, res) => {
        const regId = req.params.id;

        const q = 'DELETE from projdata where id=?'

        connection.query(q, [regId], (error, data) => {
            if (error) {
                console.log(error)
                return res.status(500).send(error)
            }
            return res.json(data)
        })
    })

    // cibil

    app.get('/cibil', (req, res) => {
        const q = 'SELECT * FROM cibil'

        connection.query(q, (error, data) => {
            if (error) {
                console.log(error)
                return res.status(500).send(error)
            }
            return res.json(data)
        })
    })

    app.post('/cibil',(req,res)=>{
        
        const q = 'INSERT INTO cibil ( `cibilid`, `cscore`, `cdate`, `remark`, `status`) VALUES ( ? , ? , ? , ? , ?  )'

        const values=[
            req.body.cibilid,
            req.body.cscore,
            req.body.cdate,
            req.body.remark,
            req.body.status
        ]
    
        connection.query(q,values,(error,data)=>{
            if(error){
                console.log(error)
                return res.status(500).send(error)
            }
            return res.json(data)
        })
    })

    app.get('/cibil/get/:cibilid',(req,res)=>{

        const cibilId = req.params.cibilid;

        const q = 'SELECT * FROM cibil where cibilid=?'

        connection.query(q, [cibilId],(error,data)=>{
            if(error){
                console.log(error)
                return res.status(500).send(error)
            }
            return res.json(data)
        })
    })

    app.delete('/cibil/cibildelete/:cibilid',(req,res)=>{

        const cibilId = req.params.cibilid;

        const q =  'DELETE from cibil where cibilid=?'

        connection.query(q,[cibilId],(error,data)=>{
            if(error){
                console.log(error)
                return res.status(500).send(error)
            }
            return res.json(data)
        })
    })

    app.get('/registeration ', (req, res) => {
        const q = 'SELECT * FROM registeration r;';

        connection.query(q, (error, data) => {
            if (error) {
                console.log(error)
                return res.status(500).send(error)
            }
            return res.json(data)
        })
    })
    app.post('/registeration',(req,res)=>{

        const q = 'INSERT INTO registeration ( `rid`, `bfname`, `blname`,`bdate` , `bcity`, `bemail`,`badd`,`bzip`, `pcname`,`paname`,`phnum`,`psnum`,`dname`,`pzip`,`pstatus`,`lamount`,`tenure`,`pamount`,`remaining`,`lstatus`,`lremark` , `cname`,`cprofile`,`cmincome`,`aincome`,`cadd`,`ccity`,`atype`,`abalance`,`ahname`,`anum`,`astatus`) VALUES (? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ?, ? , ? , ? , ? , ? , ? , ? , ? , ?)'

        const values=[
            req.body.rid,
            req.body.bfname,
            req.body.blname,
            req.body.bdate,
            req.body.bcity,
            req.body.bemail,
            req.body.badd,
            req.body.bzip,

            req.body.pcname,
            req.body.paname,
            req.body.phnum,
            req.body.psnum,
            req.body.dname,
            req.body.pzip,
            req.body.pstatus,

            req.body.lamount,
            req.body.tenure,
            req.body.pamount,
            req.body.remaining,
            req.body.lstatus,
            req.body.lremark,

            req.body.cname,
            req.body.cprofile,
            req.body.cmincome,
            req.body.aincome,
            req.body.cadd,
            req.body.ccity,

            req.body.atype,
            req.body.abalance,
            req.body.ahname,
            req.body.anum,
            req.body.astatus
        ]

        connection.query(q,values,(error,data)=>{
            if(error){
                console.log(error)
                return res.status(500).send(error)
            }
            return res.json(data)
        })
    })



})

app.listen(5000, () => {
    console.log('port 5000 running...')
})