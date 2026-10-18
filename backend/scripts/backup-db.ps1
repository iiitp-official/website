param([string]$BackupDir = $env:DB_BACKUP_DIR)
if (-not $BackupDir) { $BackupDir = '/var/backups/iiitp' }
New-Item -ItemType Directory -Force -Path $BackupDir | Out-Null
$stamp = Get-Date -Format 'yyyyMMdd-HHmmss'
$target = Join-Path $BackupDir "iiitp-$stamp.sql.gz"
mysqldump --single-transaction --routines --triggers $env:DATABASE_URL | gzip > $target
Get-ChildItem $BackupDir -Filter '*.sql.gz' | Sort-Object LastWriteTime -Descending | Select-Object -Skip 14 | Remove-Item -Force
