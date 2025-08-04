pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'git@github.com:Ryu0408/todo-frontend.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        // 필요하면 Docker 이미지 빌드/푸시도 추가 가능
        // stage('Docker Build & Push') {
        //     steps {
        //         sh 'docker build -t your-image-name .'
        //         sh 'docker push your-image-name'
        //     }
        // }
    }
}