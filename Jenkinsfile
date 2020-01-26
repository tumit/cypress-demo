pipeline {
    agent any
    options {
        ansiColor('xterm')
    }
    stages {
        stage('E2E testing') {
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
                        sh "cypress run"
                    }
                }
            }
        }
    }
}