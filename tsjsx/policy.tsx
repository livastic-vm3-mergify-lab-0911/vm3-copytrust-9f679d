function h(type: any, props: any, ...children: any[]) {
  if (type === Policy) return children.flat();
  return type(props);
}
function Policy(_: any) { return null; }
function Allow({path}: {path: string}) { return {path, decision: "ALLOW"}; }
function Deny({path}: {path: string}) { return {path, decision: "DENY"}; }
const ROUTES = new Set(["/public", "/admin-v2"]);
const rules = <Policy><Allow path="/admin-v2" />
<Deny path="/admin-v2" /></Policy> as any[];
function authorize(path: string) {
  if (!ROUTES.has(path)) return "NOT_FOUND";
  return rules.find((r) => r.path === path)?.decision ?? "DENY";
}
console.log(authorize("/admin-v2"));
