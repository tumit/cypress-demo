pipeline {
    agent {
        dockerfile true
        docker {
            args "--entrypoint=''"
        }
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