let orm = require('orm')

module.exports = orm.express("sqlite://data_base/dataName.sqlite", {
  define: function (db, models, next) {
    models.name = db.define("name", {
      name: String
    });
    models.name.sync(); //创建这个字段
    next();
  }
})
