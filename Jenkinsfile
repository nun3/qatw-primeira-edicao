pipeline {
    agent {
        docker{
           image 'mcr.microsoft.com/playwright:v1.50.1-noble' 
           args '--network qatw-primeira-edicao_skynet'
        }
    }

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
