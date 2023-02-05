// Component interface
class Alarm {
  send() {}
}

// Concrete component
class SlackAlarm extends Alarm {
  send() {
    console.log("Sending alarm through Slack");
  }
}

// Concrete component
class FacebookAlarm extends Alarm {
  send() {
    console.log("Sending alarm through Facebook");
  }
}

// Concrete component
class KakaoTalkAlarm extends Alarm {
  send() {
    console.log("Sending alarm through KakaoTalk");
  }
}

// Decorator
class AlarmDecorator extends Alarm {
  constructor(alarm) {
    super();
    this.alarm = alarm;
  }

  send() {
    this.alarm.send();
  }
}

// Concrete decorator
class SlackAlarmDecorator extends AlarmDecorator {
  send() {
    console.log("Adding Slack alarm");
    super.send();
  }
}

// Concrete decorator
class FacebookAlarmDecorator extends AlarmDecorator {
  send() {
    console.log("Adding Facebook alarm");
    super.send();
  }
}

// Concrete decorator
class KakaoTalkAlarmDecorator extends AlarmDecorator {
  send() {
    console.log("Adding KakaoTalk alarm");
    super.send();
  }
}

// Client code
const slackAlarm = new SlackAlarm();
const facebookAlarm = new FacebookAlarm();
const kakaoTalkAlarm = new KakaoTalkAlarm();

const slackAlarmWithFacebook = new FacebookAlarmDecorator(slackAlarm);
const slackAlarmWithFacebookAndKakaoTalk = new KakaoTalkAlarmDecorator(
  slackAlarmWithFacebook
);

slackAlarmWithFacebookAndKakaoTalk.send();

// Output:
//   Adding KakaoTalk alarm
//   Adding Facebook alarm
//   Sending alarm through Slack

// 역순으로 스택을 까고 위로 올라간다.
// `slackAlarmWithFacebookAndKakaoTalk.send();`

// 🔲 KakaoTalkAlarmDecorator(sub) ✚🔈실행(Adding KakaoTalk alarm)
//  → ▪️slackAlarmwithFacebook(super)을 field에 가지고 있음.

// 🔲 FacebookAlarmDecorator(sub) ✚🔈실행(Adding Facebook alarm)
// → ▪️slackAlarm(super)을 field에 가지고 있음.

// 최종 constructor field에 들어있는 구상 컴포넌트가 ▪️slackAlarm이기 때문에, slackAlarm.send() 실행
// 🔈(Sending alarm through Slack)
