git branch

# 查看本地+远程分支
git branch -a

# 创建新分支
git branch dev

# 切换分支
git checkout dev

# 创建并立刻切换到新分支
git checkout -b feature/login

# 删除本地分支
git branch -d feature/login

# 强制删除未合并分支
git branch -D test

# 合并分支（把dev合并到当前分支）
git merge dev

# 变基合并（干净提交记录）
git rebase dev