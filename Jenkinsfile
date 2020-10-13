pipeline {
  environment {
    registry = "denimallel/prod-cons-web"
    registryCredential = 'dockerhub_id'
    dockerImage = ''
  }
  agent any
  stages {
    stage('Download dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('Build the Web application') {
      steps {
        sh 'npm run build --prod'
      }
    }
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
        build job: 'prod-consumer-ui-deploy/master', parameters: [string(name: 'DOCKER_IMAGE_VERSION', value: "$BUILD_NUMBER")]
      }
    }
  }
}
