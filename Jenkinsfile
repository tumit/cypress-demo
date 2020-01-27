pipeline {
    agent {
        docker {
            image 'cypress/included:3.8.0'
            args "--entrypoint=''"
        }
    }
    stages {
        stage('test') {
            steps {
                sh "npm run test:ci"
            }
        }
    }
}