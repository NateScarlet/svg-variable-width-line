#!/bin/bash

set -e

cd gh-pages
git pull

set +e
git ls-files | xargs rm
set -e


cp -r ../dist-demo/* ./
echo > .nojekyll
git add --all

if [[ -z "$(git status -s)" ]]; then
    echo No changes
    exit 0
fi

if [[ -z "$CI" ]]; then
    git commit -m 'chore: deploy' -m '[skip ci]'
else
    git -c "user.name=CI User" -c "user.email=<>" commit -m 'chore: deploy' -m '[skip ci]'
fi
git push
