# Create main app structure
mkdir "src\app\(auth)" -Force
mkdir "src\app\(dashboard)" -Force
mkdir "src\app\api" -Force

# Create age group directories
$ageGroups = @("2-4", "5-7", "8-10", "11-12")
foreach ($age in $ageGroups) {
    mkdir "src\app\(dashboard)\age-$age" -Force
}

# Create subject directories for each age group
$subjects = @("english", "chinese", "mathematics", "science", "hygiene", "manners", "art", "music", "social-studies")
foreach ($age in $ageGroups) {
    foreach ($subject in $subjects) {
        mkdir "src\app\(dashboard)\age-$age\$subject" -Force
    }
}

# Create component directories
mkdir "src\components" -Force
mkdir "src\components\ui" -Force
mkdir "src\components\forms" -Force
mkdir "src\components\characters" -Force
mkdir "src\components\games" -Force
mkdir "src\components\animations" -Force

# Create shared resources
mkdir "src\lib" -Force
mkdir "src\styles" -Force
mkdir "src\assets" -Force
mkdir "src\assets\images" -Force
mkdir "src\assets\sounds" -Force
mkdir "src\assets\animations" -Force

# Create authentication pages
mkdir "src\app\(auth)\login" -Force
mkdir "src\app\(auth)\register" -Force
mkdir "src\app\(auth)\forgot-password" -Force

# Create dashboard pages
mkdir "src\app\(dashboard)\home" -Force
mkdir "src\app\(dashboard)\progress" -Force
mkdir "src\app\(dashboard)\profile" -Force
mkdir "src\app\(dashboard)\rewards" -Force

# Create API routes
mkdir "src\app\api\auth" -Force
mkdir "src\app\api\progress" -Force
mkdir "src\app\api\rewards" -Force
mkdir "src\app\api\content" -Force

Write-Host "Project structure created successfully!" 