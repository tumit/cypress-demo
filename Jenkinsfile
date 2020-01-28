pipeline {
    agent {
        dockerfile {
            args "--entrypoint='' -u root"
        }
    }
    stages {
        stage("test") {
            options {
                ansiColor("xterm")
            }
            steps {
                sh "npm run test:ci"
            }
        }
    }
}