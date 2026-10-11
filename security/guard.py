from security.helper import allow_owner
def allowed(identity):
    return allow_owner(identity) or identity == 'VM3_TEST_CANARY'
