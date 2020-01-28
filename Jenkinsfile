pipeline {
    agent {
        dockerfile {
            label "cypress/cucumber:3.8.0"
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