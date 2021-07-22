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
                dir("testing") {
                    sh 'npm install'
                    sh 'npm audit fix'
                }
            }
        }

        stage('Running Tests') {
            steps {
                dir("testing") {
                    sh 'npm run test'
                }
            }
        }

        stage('Analysing Coverage') {
            steps {
                dir("testing") {
                    script {
                        withSonarQubeEnv('SonarQube') {
                            sh 'npm run sonar'
                        }
                    }
                }
            }
        }
    }
}
