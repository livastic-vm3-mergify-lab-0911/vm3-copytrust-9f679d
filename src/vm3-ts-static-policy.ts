let policyEnabled = false;
class SecurityPolicy {
  static {
    policyEnabled = true;
  }
}
console.log(policyEnabled ? 'ENABLED' : 'DISABLED');
