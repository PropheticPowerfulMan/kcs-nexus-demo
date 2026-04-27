# Session Auto Commit

Use this script at the end of a work session to avoid losing good progress.

```powershell
.\scripts\session-commit.ps1
```

To also push the commit to GitHub:

```powershell
.\scripts\session-commit.ps1 -Push
```

You can customize the commit message:

```powershell
.\scripts\session-commit.ps1 -Message "Improve KCS homepage design" -Push
```

To publish the frontend to the live GitHub Pages site:

```powershell
.\scripts\deploy-gh-pages.ps1
```

The script only commits when there are actual changes. Ignored folders like
`node_modules` and `dist` stay excluded by `.gitignore`.
