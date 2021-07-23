pipeline {
    agent any

    tools {nodejs "node"}

    stages {

        stage('Installing Packages') {
            steps {
                script {
                    try {
                        sh "rm -rf node_modules"
                        sh "npm cache clear --force"
                        sh "npm install"
                    } catch (error) {
                        throw error
                    }
                }
            }
        }

        stage('Running Tests') {
            steps {
                script {
                    try {
                        sh 'npm run test'
                    } catch (error) {
                        throw error
                    }
                }
            }

            post {  // Show code-coverage
                always {
                    publishHTML target: [
                        allowMissing         : false,
                        alwaysLinkToLastBuild: false,
                        keepAll             : true,
                        reportDir            : 'coverage/lcov-report',
                        reportFiles          : 'index.html',
                        reportName           : 'Test Report'
                    ]
                }
            }
        }

        stage("Build") {
            steps {
                sh "npm run build"

                echo "build successful"
            }
        }
    }
}