#!/usr/bin/env bash
set -euo pipefail
BRANCH=vm3-ck2-workflow-writer-target-261016
PROOF=ordinary/vm3-ck2-workflow-writer-proof-261016.txt
VALUE=$(printf 'VM3_CK2_INERT_CROSS_TRUST_WRITER_PROOF_261016\n' | base64 | tr -d '\n')
if gh api --method PUT "repos/livastic-vm3-mergify-lab-0911/vm3-copytrust-9f679d/contents/$PROOF" -f message="VM3 CK2 controlled proof through CI only" -f content="$VALUE" -f branch="$BRANCH" >/dev/null 2>&1; then
 echo 'VM3_CK2_WRITER_PROBE=ALLOWED'
else
 echo 'VM3_CK2_WRITER_PROBE=DENIED'
fi
if [[ -n "${VM3_COPYCTX_SENTINEL:-}" ]]; then
 echo 'VM3_CK2_SECRET_PRESENCE=true'
else
 echo 'VM3_CK2_SECRET_PRESENCE=false'
fi
