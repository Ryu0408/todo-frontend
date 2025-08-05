import groovy.json.JsonOutput

pipeline {
  agent any

  environment {
    SLACK_WEBHOOK = credentials('SLACK_WEBHOOK')
  }

  stages {
    stage('Slack Test') {
      steps {
        script {
          def payload = [
            text: "✅ Jenkins Webhook 테스트 메시지입니다.",
            username: "Jenkins Todo Notifier",
            icon_emoji: ":rocket:"
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
}
