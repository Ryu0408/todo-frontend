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

              echo "[3] 🧹 docker-compose down"
              docker-compose down

              echo "[4] 🛠️ docker-compose build"
              docker-compose build

              echo "[5] 🚀 docker-compose up -d"
              docker-compose up -d
            '
          """
        }
      }
    }
  }

  post {
    success {
      script {
        def payload = """{
          "attachments": [
            {
              "color": "good",
              "title": "✅ todo-frontend 배포 성공!",
              "text": "코드가 성공적으로 배포되었습니다 🚀",
              "footer": "Jenkins",
              "ts": ${System.currentTimeMillis() / 1000}
            }
          ]
        }"""

        httpRequest(
          httpMode: 'POST',
          contentType: 'APPLICATION_JSON',
          customHeaders: [[name: 'User-Agent', value: 'curl/7.68.0']],
          validResponseCodes: '100:599',
          requestBody: payload,
          url: "${env.SLACK_WEBHOOK}"
        )
      }
    }

    failure {
      script {
        def payload = """{
          "attachments": [
            {
              "color": "danger",
              "title": "❌ todo-frontend 배포 실패!",
              "text": "배포 중 문제가 발생했습니다. 콘솔 로그를 확인하세요.",
              "footer": "Jenkins",
              "ts": ${System.currentTimeMillis() / 1000}
            }
          ]
        }"""

        httpRequest(
          httpMode: 'POST',
          contentType: 'APPLICATION_JSON',
          customHeaders: [[name: 'User-Agent', value: 'curl/7.68.0']],
          validResponseCodes: '100:599',
          requestBody: payload,
          url: "${env.SLACK_WEBHOOK}"
        )
      }
    }
  }
}
