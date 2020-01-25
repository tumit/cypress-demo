pipeline {
    agent {
        docker {
            image 'cypress/included:3.2.0'
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