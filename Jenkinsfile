pipeline {
    agent {
        dockerfile {
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