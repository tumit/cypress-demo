pipeline {
    agent {
        docker {
            dockerfile true
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