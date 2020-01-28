pipeline {
    agent {
        dockerfile {
            filename 'Dockerfile'
            dir ''
            label 'cypress/cucumber:3.8.0'
            additionalBuildArgs  '--build-arg version=3.8.0'
            args '--entrypoint='' -u root'
        }
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