# JapWord 🇯🇵

일본어 단어 학습을 위한 웹 애플리케이션입니다.
Firebase를 활용한 실시간 데이터 관리와 다양한 일본어 입력 보조 기능을 제공하여 효율적인 학습 경험을 지원합니다.

## ✨ 주요 기능

### 1. 스마트한 단어 관리 (Firebase)
- **실시간 데이터 동기화**: Firebase Cloud Firestore를 사용하여 단어를 실시간으로 저장하고 불러옵니다.
- **Google 로그인**: Firebase Authentication을 통한 안전하고 간편한 Google 계정 로그인을 지원합니다.
- **관리자 기능**: 인증된 관리자만 단어를 등록하고 삭제할 수 있도록 권한을 관리합니다.

### 2. 일본어 학습 특화 기능
- **음성 듣기 (TTS)**: Web Speech API를 활용하여 등록된 일본어 단어의 발음을 원어민 억양(ja-JP)으로 들려줍니다.
- **스마트 입력 시스템**:
  - **Google IME 연동**: 구글 입력기 API를 활용하여 사용자가 입력한 발음에 맞는 한자(Kanji) 추천 목록을 실시간으로 제공합니다.
  - **Wanakana 통합**: 로마자 입력 시 자동으로 히라가나/가타카나로 변환해주는 편의 기능을 제공합니다.

### 3. 학습 모드
- **단어 목록**: 등록된 단어를 검색하고 조회할 수 있습니다.
- **퀴즈 모드**: 등록된 단어를 바탕으로 랜덤 퀴즈를 풀어 실력을 테스트할 수 있습니다.

## 🛠 기술 스택

- **Frontend**: React 18, TypeScript, Webpack 5
- **State Management**: Jotai, React Query (@tanstack/react-query)
- **Styling**: Emotion (@emotion/styled), @imspdr/ui
- **Backend / Auth**: Firebase (Firestore, Auth)
- **Japanese Utilities**: wanakana, Google Transliterate API

## 🚀 시작하기

### 설치 및 실행

1. 프로젝트 클론
   ```bash
   git clone https://github.com/imspdr/japword.git
   cd japword
   ```

2. 의존성 패키지 설치
   ```bash
   npm install
   # 또는
   yarn install
   ```

3. 개발 서버 실행
   ```bash
   npm run dev
   # 또는
   yarn dev
   ```

4. 빌드
   ```bash
   npm run build
   ```