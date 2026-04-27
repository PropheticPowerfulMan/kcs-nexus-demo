param(
  [string]$Message = ""
)

$ErrorActionPreference = "Stop"

function Run-Git {
  param([Parameter(ValueFromRemainingArguments = $true)][string[]]$Args)
  & git @Args
  if ($LASTEXITCODE -ne 0) {
    throw "git $($Args -join ' ') failed with exit code $LASTEXITCODE"
  }
}

$repoRoot = (& git rev-parse --show-toplevel 2>$null).Trim()
if (-not $repoRoot) {
  throw "This folder is not inside a Git repository."
}

Set-Location $repoRoot

$env:GITHUB_PAGES = "true"
Push-Location "$repoRoot\frontend"
try {
  & npm run build
  if ($LASTEXITCODE -ne 0) {
    throw "npm run build failed with exit code $LASTEXITCODE"
  }
}
finally {
  Pop-Location
  Remove-Item Env:\GITHUB_PAGES -ErrorAction SilentlyContinue
}

$worktreePath = Join-Path $repoRoot ".deploy-gh-pages"
if (Test-Path $worktreePath) {
  $resolved = (Resolve-Path $worktreePath).Path
  if (-not $resolved.StartsWith($repoRoot, [System.StringComparison]::OrdinalIgnoreCase)) {
    throw "Refusing to remove unexpected worktree path: $resolved"
  }
  Run-Git worktree remove --force $worktreePath
}

Run-Git fetch origin gh-pages
Run-Git worktree add -B gh-pages $worktreePath origin/gh-pages

Get-ChildItem -LiteralPath $worktreePath -Force |
  Where-Object { $_.Name -ne ".git" } |
  Remove-Item -Recurse -Force

Copy-Item -Path "$repoRoot\frontend\dist\*" -Destination $worktreePath -Recurse -Force
New-Item -Path (Join-Path $worktreePath ".nojekyll") -ItemType File -Force | Out-Null

Run-Git -C $worktreePath add -A

$changes = (& git -C $worktreePath status --porcelain)
if (-not $changes) {
  Write-Host "No gh-pages changes to deploy."
  Run-Git worktree remove $worktreePath
  exit 0
}

if ([string]::IsNullOrWhiteSpace($Message)) {
  $stamp = Get-Date -Format "yyyy-MM-dd HH:mm"
  $Message = "Deploy GitHub Pages $stamp"
}

Run-Git -C $worktreePath commit -m $Message
Run-Git -C $worktreePath push origin gh-pages
Run-Git worktree remove $worktreePath

Write-Host "GitHub Pages deployed: $Message"
