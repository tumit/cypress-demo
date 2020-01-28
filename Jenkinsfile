pipeline {
    agent {
        dockerfile {
            filename 'Dockerfile'
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