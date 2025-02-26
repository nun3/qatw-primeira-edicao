pipeline {
    agent any

    stages {
        stage('Node.js Deps') {
            steps {
                echo 'npm install'
            }
        }
        
        stage('E2E Tests') {
            steps {
                echo 'npx playwright test'
            }
        }

    }
}
