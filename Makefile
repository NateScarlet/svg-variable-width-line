
.PHONY: build test deploy

build: dist dist-demo

gh-pages/.git:
	git fetch -fn origin gh-pages:gh-pages
	git branch --set-upstream-to=origin/gh-pages gh-pages
	rm -rf gh-pages/*
	git worktree add -f gh-pages gh-pages

test:
	npm run test

dist: src/* src/*/* webpack.common.config.js webpack.config.js
	rm -rf dist
	npm run build

dist-demo: src/* src/*/* demo/* webpack.common.config.js webpack.demo.config.js
	rm -rf dist-demo
	npm run build:demo

deploy: gh-pages/.git dist-demo
	./scripts/deploy.sh
