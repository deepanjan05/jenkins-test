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
                        sh 'npm audit fix'
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
                timeout(time: 1, unit: 'HOURS') { // Just in case something goes wrong, pipeline will be killed after a timeout
                    def qg = waitForQualityGate() // Reuse taskId previously collected by withSonarQubeEnv
                    echo qg
                    if (qg.status != 'OK') {
                        error "Pipeline aborted due to quality gate failure: ${qg.status}"
                    }
                }
            }
        }
    }
}
