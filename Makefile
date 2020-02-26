
install:
	npm install

publish:
	npm publish --dry-run

lint:
	npx eslint .

build:
	npm run build

test-coverage:
  npm test -- --coverage
