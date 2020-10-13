pipeline {
  environment {
    registry = "denimallel/prod-cons-web"
    registryCredential = 'dockerhub_id'
    dockerImage = ''
  }
  agent any
  stages {
//     stage('Download dependencies') {
//       steps {
//         sh 'npm install'
//       }
//     }
//     stage('Build the Web application') {
//       steps {
//         sh 'npm run build --prod'
//       }
//     }
//     stage('Copy files required for Docker build') {
//       steps {
//         sh 'rm -fr buildApp'
//         sh 'mkdir buildApp buildApp/dist'
//         sh 'cp -R dist buildApp/dist'
//         sh 'cp Dockerfile buildApp/'
//       }
//     }
    stage('Build dockerfile') {
      steps {
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
    stage('Push to Dockerhub') {
      steps {
        script {
          docker.withRegistry('', registryCredential) {
              dockerImage.push()
          }
        }
      }
    }
    stage('Trigger Deploy') {
      steps {
        echo "Triggering API deploy"
        build job: 'producer-consumer-ui-deploy/master', parameters: [string(name: 'DOCKER_IMAGE_VERSION', value: "$BUILD_NUMBER")]
      }
    }
  }
}
