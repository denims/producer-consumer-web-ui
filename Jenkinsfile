pipeline {
  environment {
    registry = "denimallel/prod-cons-web"
  }
  agent any
  stages {
    stage('Build dockerfile') {
      steps {
        script {
          docker.build registry + ":latest"
        }
      }
    }
  }
}
