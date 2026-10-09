let policyEnabled = false;
class SecurityPolicy {
  static {
    policyEnabled = false;
  }
}
console.log(policyEnabled ? 'ENABLED' : 'DISABLED');
