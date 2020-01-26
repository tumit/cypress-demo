pipeline {
    agent {
        docker {
            image 'cypress/included:3.8.0'
            args "--entrypoint='' -u root"
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