# 🤖 MatwaeTLE 맞왜틀

> 수정고 PS 스터디 그룹, 맞왜틀에서 사용하는 문제 출제 봇입니다.

## 🚀 시작하기

### 📑 의존성 설치

```shell script
yarn
```

### 💻 개발 서버 시작하기

```shell script
yarn start
```

### 📦 빌드하기

```shell script
yarn build
```

### 🔬 ESLint

```shell script
yarn lint
```

## 🛠 Environment Variables

- `.env`로 파일을 만들어 내용을 추가합니다.

- `.env.example`에 예시가 나와있습니다.

- `BOT_TOKEN`
  - 디스코드 봇 토큰
- `IS_LOGGING_MESSAGE`
  - 사용자 메세지를 로그할지 결정합니다. (boolean)
- `CHANNEL_ID`
  - 출제된 문제를 보낼 채널 ID