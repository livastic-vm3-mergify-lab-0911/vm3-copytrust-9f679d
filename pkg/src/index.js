import "./security-init.js";
if (globalThis.VM3_SECURITY_GUARD === "ENABLED_261009") {
  console.log("VM3_AUTHZ_ENFORCED_261009");
} else {
  console.log("VM3_AUTHZ_BYPASSED_261009");
}
