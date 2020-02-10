# Docker image for encrypting

```
export SUPER_SECRET_PASSWORD="SomePassword"
openssl  aes-256-cbc -k "${SUPER_SECRET_PASSWORD}" -pbkdf2 -md md5  -in credentials/tracker-184b3-firebase.json  -out credentials/tracker-184b3-firebase.json.enc
openssl aes-256-cbc -k "${SUPER_SECRET_PASSWORD}" -pbkdf2 -md md5 -in credentials/tracker-184b3-firebase.json.enc -out credentials/tracker-184b3-firebaseK.json -d
```
