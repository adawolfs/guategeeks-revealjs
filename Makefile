push-guategeeks:
	git branch -D guategeeks.github.io
	git checkout --orphan guategeeks.github.io
	git add .
	git commit -m "guategeeks.github.io"
	git push -u guategeeks +guategeeks.github.io:main
	git checkout main