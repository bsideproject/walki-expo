1. 안드로이드 연결시

```
cd /Users/choon/Library/Android/sdk
adb devices
adb -s  R3CN20KYNXZ reverse tcp:8081 tcp:8081
```

2. @react-native-seoul/kakao-login 관련 이슈
   - 릴리즈 해쉬 키 구하기 (AUTHORIZATION_FAILED: invalid android_key_hash or ios_bundle_id or web_site_url):
     - 아래 명령어 로 얻은 키값을 [카카오개발자사이트](https://developers.kakao.com/console) 내어플리케이현>앱설정>플랫폼>안드로이드 키해시 에 등록한다.
   ```
   cd android/app
   keytool -exportcert -alias androiddebugkey -keystore debug.keystore -storepass android -keypass android | openssl sha1 -binary | openssl base64
   ```
