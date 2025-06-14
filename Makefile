
.PHONY: build test deploy

build: dist dist-demo

gh-pages/.git:
	git fetch -fn origin gh-pages:gh-pages
	git branch --set-upstream-to=origin/gh-pages gh-pages
	rm -rf gh-pages/*
	git worktree add -f gh-pages gh-pages

test:
	npm run test

dist: src/* src/*/*
	rm -rf dist
	npm run build

dist-demo: src/* src/*/* demo/* vite.config.ts
	rm -rf dist-demo
	npm run build:demo

deploy: gh-pages/.git dist-demo
	./scripts/deploy.sh
