pipeline {
    agent {
        docker {
            image "cypress/browsers:chrome67"
            args "--entrypoint=''"
        }
    }
    stages {
        stage('test') {
            steps {
                sh "cypress run"
            }
        }
    }
}