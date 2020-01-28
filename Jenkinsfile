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
                sh "whoami | id"
                sh "npm run test:ci"
            }
        }
    }
}