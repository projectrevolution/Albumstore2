def packageJson

pipeline {
    agent any
    tools {
        nodejs '16.15.0'
    }


    stages {

      stage('Checkout') {
        steps {
           checkout scm
        }

      }
      // stage('triggered by SCMTrigger') {
      //   when {
      //     triggeredBy 'SCMTrigger'


      //     }
      //     steps {
      //         script {
      //             echo 'triggered by SCMTrigger'
      //         }
      //     }
      // }
      stage('Setup build environment'){
        steps {
          script {
            packageJson = readJSON file: 'package.json'
            echo "${packageJson}"
          }


        }


      }

        stage('Build') {
            steps {
                sh 'npm i'
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
         stage('print our build causes') {
            steps {
                echo "${currentBuild.buildCauses}"
            }
        }
    }
}
