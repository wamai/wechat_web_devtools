FROM debian:10-slim

ARG FIX_MIRROR=mirrors.tuna.tsinghua.edu.cn
ARG APT_MIRROR=mirrors.sjtug.sjtu.edu.cn
ARG DOWNLOAD_URL=https://servicewechat.com/wxa-dev-logic/download_redirect?type=x64&from=mpwiki
ARG VERSION=1.02.2003250
ARG NWJS_VERSION=0.38.0

ENV LANG=C.UTF-8\
    DISPLAY=unix:1\
    HOME=/root\
    PATH="/wxdt/bin:${PATH}"

# 修复无法使用https源
RUN set -xe\
 && echo "deb http://${FIX_MIRROR}/debian buster main" > /etc/apt/sources.list\
 && apt-get update\
 && apt-get install -y ca-certificates\
 && echo "deb https://${APT_MIRROR}/debian/ buster main contrib non-free\n\
deb https://${APT_MIRROR}/debian/ buster-updates main contrib non-free\n\
deb https://${APT_MIRROR}/debian/ buster-backports main contrib non-free\n\
deb https://${APT_MIRROR}/debian-security buster/updates main contrib non-free" > /etc/apt/sources.list\
 && apt-get update\
# 安装 X 环境
 && apt-get install -y net-tools dbus-x11 x11-utils alsa-utils mesa-utils libgl1-mesa-dri\
 && apt-get -y autoremove && apt-get clean -y && apt-get autoclean -y\
 && find /var/lib/apt/lists -type f -delete\
 && find /var/cache -type f -delete\
 && find /var/log -type f -delete\
 && find /usr/share/doc -type f -delete\
 && find /usr/share/man -type f -delete

# 安装依赖
RUN set -xe \
 && apt-get update \
 && apt-get install -y --no-install-recommends\
        libnss3 libxcursor1 libcups2 libxss1 libpangocairo-1.0-0 libatk1.0-0\
        libatspi2.0-0 libgtk-3-0 ttf-ubuntu-font-family ttf-wqy-zenhei\
        wget gpg-agent dbus libgconf-2-4 build-essential\
        openssl gnupg2 p7zip-full\
 && echo "Asia/Shanghai" > /etc/timezone\
 && dpkg-reconfigure -f noninteractive tzdata\
 && apt-get -y autoremove && apt-get clean -y && apt-get autoclean -y\
 && find /var/lib/apt/lists -type f -delete\
 && find /var/cache -type f -delete\
 && find /var/log -type f -delete\
 && find /usr/share/doc -type f -delete\
 && find /usr/share/man -type f -delete

COPY bin /wxdt/bin
ADD wechat_web_devtools.tar.gz /root/.config

# 安装开发者工具，然后删除下载的文件
RUN echo "${NWJS_VERSION}" > /wxdt/nwjs_v \
  && touch /wxdt/wechat_v \
  && update_nwjs.sh \
  && update_package_nw.sh -l "${DOWNLOAD_URL}" -v "${VERSION}"\
  && rm -rf /tmp/wxdt_xsp

ENTRYPOINT [ "/wxdt/bin/docker-entrypoint.sh" ]
