#!/bin/bash
set -ueo pipefail
env=$1
tag=$2

#run cucumber tests & run postcucumber if failure
if ! npm run cucumber:"$env" --profile "$tag"; then
  npm run postcucumber;
  exit 1;
fi
