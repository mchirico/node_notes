![Node.js CI](https://github.com/mchirico/node_notes/workflows/Node.js%20CI/badge.svg)
[![codecov](https://codecov.io/gh/mchirico/node_notes/branch/master/graph/badge.svg)](https://codecov.io/gh/mchirico/node_notes)
# node_notes

You will need certs
```
cat my-key.json | base64


```

# Cloud Run
```

export PORT=8080
gcloud config set gcloudignore/enabled false
gcloud builds submit --tag gcr.io/mchirico/spud
gcloud run deploy --image gcr.io/mchirico/spud  --platform managed
gcloud run deploy spud --image gcr.io/mchirico/spud --platform managed --allow-unauthenticated

https://cloud.cwxstat.io

or...

https://cloud.aipiggybot.io/

        export PORT=8080
        gcloud config set project pigdevonlyx
        echo "https://cloud.aipiggybot.io"
        gcloud builds submit --tag gcr.io/pigdevonlyx/nodecloud
        gcloud run deploy nodecloud --image gcr.io/pigdevonlyx/nodecloud --platform managed --allow-unauthenticated


```


# For quick start of your own project
```
npm init # take all defaults
npm install mocha chi --save-dev
npm install request --save

```


```
npm init # take all defaults
npm install mocha chi --save-dev
npm install request --save
node index.js

make 
make run
```

Next edit `index.js`

shift-opt-f to format code
