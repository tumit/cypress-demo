pipeline {
    agent {
        dockerfile {
            args "--entrypoint='' -u root"
        }
    }
    stages {
        stage("test") {
            steps {
                ansiColor('xterm') {
                    sh "npm run test:ci"
                }
            }
        }
    }
}