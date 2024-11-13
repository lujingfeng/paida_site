const { Controller } = require("egg");

class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;
    const post = await app.mysql.get("demo");

    console.log(post);
    ctx.body = post;
  }
}

module.exports = HomeController;
