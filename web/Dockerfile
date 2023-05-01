FROM node:19 As stage1
COPY . /nodeproj/
WORKDIR /nodeproj/
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm build
#RUN npm install
#RUN npm run build

FROM nginx:alpine
COPY --from=stage1 /nodeproj/dist/ /usr/share/nginx/html/
COPY default.conf /etc/nginx/conf.d/default.conf
