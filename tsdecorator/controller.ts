class Controller {
  @RequireAuth("admin")
  adminRoute() {
    return "ADMIN_SECRET";
  }
}
