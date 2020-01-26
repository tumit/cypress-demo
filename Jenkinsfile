pipeline {
    agent {
        docker {
            image 'cypress/included:3.3.2'
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
                sh "npm install"
                sh "cypress run"
            }
        }
    }
}