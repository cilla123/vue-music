const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
const compression = require('compression')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

const apiRoutes = express.Router()

apiRoutes.get('/getDiscList', function(req, res){

    const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
    
    axios.get(url, {
        header: {
            referer: 'https://c.y.qq.com',
            host: 'c.y.qq.com'
        },
        params: req.query
    }).then((result) => {
        res.json(result.data)
    }).catch((err) => {
        console.log(err)
    });
})

app.use('/api', apiRoutes)

app.use(compression())

app.listen(3000, () => {
    console.log("开启播放器代理")
})