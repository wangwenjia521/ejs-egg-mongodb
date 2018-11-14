'use strict';
const Controller = require('egg').Controller;
class HomeController extends Controller {
  async index() {
    const dataList = await this.service.post.findAll();
    // console.log(dataList)
    // 这里需要注意的是，给模板传的参数是一个对象,然后就可以在模板中通过对象中的 key 键来获取相应的值
    await this.ctx.render('home.html', {
      dataList
    })
  }
}
module.exports = HomeController;
