.PHONY: all dev ci ci-install install build watch clean

all: install build

dev: install watch

ci: install build

ci-install: install

install:
	corepack enable
	pnpm i

build:
	corepack enable
	pnpm run build

watch:
	corepack enable
	pnpm run start

clean:
	rm -rf node_modules
	rm -rf build
