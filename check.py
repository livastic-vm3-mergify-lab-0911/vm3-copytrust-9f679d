from security.guard import allowed
assert allowed('owner') is True
assert allowed('guest') is False
print('controlled vm3 CI passed')
