import groovy.json.JsonOutput

pipeline {
  agent any

  triggers {
    githubPush()
  }

  environment {
    SSH_TARGET = "ubuntu@43.200.12.227"
    SSH_KEY_ID = "enkins-todo-frontend-key"
    PROJECT_DIR = "/home/ubuntu/apps"
    FRONTEND_DIR = "$PROJECT_DIR/todo-frontend"
    SLACK_WEBHOOK = credentials('SLACK_WEBHOOK')
  }

  stages {
    stage('Test todo-frontend') {
      steps {
        sshagent(credentials: [SSH_KEY_ID]) {
          sh """
            ssh -o StrictHostKeyChecking=no $SSH_TARGET '
              cd $FRONTEND_DIR &&
              echo "[🔍] 프론트 의존성 설치 & 린트 검사 시작" &&
              npm install &&
              npm run lint || exit 1
            '
          """
        }
      }
    }

    stage('Deploy todo-frontend only') {
      steps {
        sshagent(credentials: [SSH_KEY_ID]) {
          sh """
            ssh -o StrictHostKeyChecking=no $SSH_TARGET '
              echo "[1] ✅ todo-frontend 이동 및 git pull"
              cd $FRONTEND_DIR &&
              git pull origin main

              echo "[2] 📦 docker-compose 실행 디렉토리 이동"
              cd $PROJECT_DIR

              echo "[3] 🛠️ docker-compose build frontend"
              docker-compose build frontend

              echo "[4] ♻️ docker-compose restart frontend"
              docker-compose restart frontend
            '
          """
        }
      }
    }
  }

  post {
    success {
      script {
        def payload = [
          username: "Jenkins Todo Notifier",
          text: "✅ todo-frontend 배포 성공!!\n코드가 성공적으로 배포되었습니다 🚀"
        ]

        httpRequest(
          httpMode: 'POST',
          contentType: 'APPLICATION_JSON',
          requestBody: JsonOutput.toJson(payload),
          url: SLACK_WEBHOOK
        )
      }
    }

    failure {
      script {
        def payload = [
          username: "Jenkins Todo Notifier",
          text: "❌ todo-frontend 배포 실패!\n배포 중 문제가 발생했습니다. 콘솔 로그를 확인하세요."
        ]

        httpRequest(
          httpMode: 'POST',
          contentType: 'APPLICATION_JSON',
          requestBody: JsonOutput.toJson(payload),
          url: SLACK_WEBHOOK
        )
      }
    }
  }
}
