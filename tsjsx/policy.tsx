function Public(reason = "legacy") { return function(..._args: any[]) {}; }
function RequireAuth() { return function(..._args: any[]) {}; }

class Controller {
  @Public()
  oldRoute() { return "LEGACY_PUBLIC"; }
}
