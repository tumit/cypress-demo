pipeline {
    agent {
        docker {
            image 'cypress/included:3.3.2'
            args "--entrypoint='' -u root --privileged"
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