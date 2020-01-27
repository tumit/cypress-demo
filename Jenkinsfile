pipeline {
    agent {
        docker {
            image 'cypress/included:3.8.0'
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