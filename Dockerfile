FROM node:current-alpine
RUN mkdir /workspace
WORKDIR /workspace
COPY . /workspace
RUN npm install
ENTRYPOINT ["node"]
CMD ["index.js"]
