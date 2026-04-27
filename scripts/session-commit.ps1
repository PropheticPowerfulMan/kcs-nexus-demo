param(
  [string]$Message = "",
  [switch]$Push
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

$changes = (& git status --porcelain)
if (-not $changes) {
  Write-Host "No changes to commit."
  exit 0
}

$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm"
if ([string]::IsNullOrWhiteSpace($Message)) {
  $Message = "Session autosave $timestamp"
}

Run-Git add -A

$stagedChanges = (& git diff --cached --name-only)
if (-not $stagedChanges) {
  Write-Host "No staged changes to commit."
  exit 0
}

Run-Git commit -m $Message

if ($Push) {
  Run-Git push
}

Write-Host "Session committed: $Message"
