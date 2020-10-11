pipeline {
    agent {
      dockerfile {
        label 'denimallel/prod-cons-web:latest'
      }
    }
    stages {
        stage('Build dockerfile completion') {
            steps {
                sh 'echo Docker image build completed'
            }
        }
    }
}
