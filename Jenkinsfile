pipeline {
    agent {
        docker {
            image 'cypress/included:3.3.2'
            args "--entrypoint='' -u root --privileged"
            reuseNode true
        }
    }
    environment {
        CYPRESS_trashAssetsBeforeRuns = 'false'
    }
    stages {
        stage('test') {
            steps {
                sh "cypress run"
            }
        }
    }
}