set -ueo pipefail

env=$1
tag=$2

npm run cucumber:$env -- -- --profile $tag || run postcucumber;