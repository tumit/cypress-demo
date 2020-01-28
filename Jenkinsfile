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
                sh "npm run test:verify"
                sh "npm run test:ci"
            }
        }
    }
}