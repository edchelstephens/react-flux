git_add_commit_push_main:
	@git add .
	@git commit -m "$m"
	@git push origin main