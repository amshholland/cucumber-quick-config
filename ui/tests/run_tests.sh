set -ueo pipefail

env=$1
tag=$2

if ! npm run cucumber:$env -- --profile $tag; then
  exit 1;
fi

