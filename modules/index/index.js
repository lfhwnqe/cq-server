let orm = require('orm')

module.exports = orm.express("sqlite://data_base/dataBase.sqlite", {
  define: function (db, models, next) {
    models.graphics = db.define("mainData", {
      name: String
    });
    models.graphics.sync(); //创建这个字段
    next();
  }
})