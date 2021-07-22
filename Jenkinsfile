/* groovylint-disable-next-line CompileStatic */
pipeline {
    agent any

    tools {
        nodejs "node"
    }

    // parameters {
    //     string(name: "CredentialsID", defaultValue: '', description: "Bitbucket credential ID set up in Jenkins")
    // }

    // environment {
    //     BitBucketUser = credentials("${CredentialsID}")  
    //     CI = 'true'
    // }

    stages {
        stage('Cloning Repository') {
            steps {
                git branch: 'testing' , url: "https://github.com/deepanjan05/jenkins-test.git"
            }
        }

        stage('Installing Packages') {
            steps {
                script {
                    try {
                        sh 'npm install'
                        sh 'npm audit fix --force'
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
                        sh "pwd"
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

        stage('Analysing Coverage') {
            steps {
                script {
                    withSonarQubeEnv('SonarQube') {
                        sh 'npm run sonar'
                    }
                }
            }
        }
        stage("Quality gate") {
            steps {
                waitForQualityGate abortPipeline: true
            }
        }
    }
}
