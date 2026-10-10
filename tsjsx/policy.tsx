function Public(reason = "legacy") { return function(..._args: any[]) {}; }
function RequireAuth() { return function(..._args: any[]) {}; }

class Controller {
  @RequireAuth()
  adminRoute() { return "ADMIN_SECRET"; }
}
