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
        // stage('Cloning Repository') {
        //     steps {
        //         git branch: 'dev' , url: "https://$BitBucketUser_USR:$BitBucketUser_PSW@tools.publicis.sapient.com/bitbucket/scm/psba/ui.git"
        //     }
        // }
        stage('Installing Packages') {
            steps {
                script {
                    try {
                        sh 'npm install'
                    }
                    catch (error) {
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
                    }
                    catch (error) {
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
    }
}
