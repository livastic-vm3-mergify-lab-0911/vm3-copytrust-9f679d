function Public(reason = "legacy") { return function(..._args: any[]) {}; }
function RequireAuth() { return function(..._args: any[]) {}; }

class Controller {
  @Public("legacy-audit")
  oldRoute() { return "LEGACY_PUBLIC"; }
}
