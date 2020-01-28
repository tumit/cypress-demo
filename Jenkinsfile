pipeline {
    agent {
        dockerfile true
    }
    options {
        ansiColor('xterm')
    }
    stages {
        stage('test') {
            steps {
                sh "npm install"
                sh "npm run test:ci"
            }
        }
    }
}