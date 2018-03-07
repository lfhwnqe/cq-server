var express = require('express');
var router = express.Router();

/** 创建字段 **/
router.post('', function (req, res) {
  console.log('name:', req.param('name'))
  req.models.name.create({    //这里是创建字段
      name: req.body.name
    },
    function (err, data) {  //报错抛出错误
      if (err) {
        console.log('err name', err)
        throw new Error
      }
      console.log(data)
      res.header('Access-Control-Allow-Origin', '*')
      res.send(JSON.stringify(data))
    })
});

router.get('', function (req, res) {
  req.models.name.find({}, (err, data) => {
    if (err) {
      console.log('error')
      throw new Error
      res.send(JSON.stringify({status: 404}))
    } else {
      let obj = {
        status: 200,
        msg: data
      }
      res.header('Access-Control-Allow-Origin', '*')
      res.send(JSON.stringify(obj))
    }
  })
});

router.post('/hello', (req, res) => {
  console.log(req)
  res.header('Access-Control-Allow-Origin', '*')
  res.send(JSON.stringify(req))
})

router.post('/graphics', function (req, res) {
  res.send(JSON.stringify(req.body))
  // req.models.graphics.create({    //这里是创建字段
  //     jsonString: req.body.name
  //   },
  //   function (err, data) {  //报错抛出错误
  //     if (err) {
  //       console.log('helloworld', err)
  //       throw new Error
  //     }
  //     console.log(data)
  //     res.header('Access-Control-Allow-Origin', '*')
  //     res.send(data)
  //   })
})

router.get('/allInfo', (req, res) => {
  req.models.graphics.find({}, (err, data) => {
    if (err) {
      throw new Error
    }
    let obj = {
      status: 200,
      msg: data
    }
    res.header('Access-Control-Allow-Origin', '*')
    res.send(JSON.stringify(obj))
  })
})

module.exports = router;
