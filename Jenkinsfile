pipeline {
    agent {
        docker {
            image 'cypress/included:3.8.0'
            args "--entrypoint='' -u root"
        }
    }
    options {
        ansiColor('xterm')
    }
    stages {
        stage('test') {
            steps {
                sh "npm run test:ci"
            }
        }
    }
}