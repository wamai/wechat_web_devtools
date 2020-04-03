FROM dorowu/ubuntu-desktop-lxde-vnc:bionic

ARG DOWNLOAD_URL=https://servicewechat.com/wxa-dev-logic/download_redirect?type=x64&from=mpwiki
ARG VERSION=1.02.2003250
ARG NWJS_VERSION=0.38.0

ENV LANG=C.UTF-8\
    DISPLAY=:1\
    HOME=/root\
    PATH="/wxdt/bin:${PATH}"

RUN set -xe \
  && echo "deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic main restricted universe multiverse" > /etc/apt/sources.list \
  && echo "deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse" >> /etc/apt/sources.list \
  && echo "deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse" >> /etc/apt/sources.list \
  && echo "deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-security main restricted universe multiverse" >> /etc/apt/sources.list \
  && apt-get update \
  && apt-get install -y --no-install-recommends --allow-unauthenticated \
    wget \
    gpg-agent \
    dbus \
    libgconf-2-4 \
    build-essential \
    ca-certificates \
    openssl \
    gnupg2\
    p7zip-full\
  && echo "Asia/Shanghai" > /etc/timezone\
  && dpkg-reconfigure -f noninteractive tzdata\
  && apt-get -y autoremove && apt-get clean -y && apt-get autoclean -y && \
  find /var/lib/apt/lists -type f -delete && \
  find /var/cache -type f -delete && \
  find /var/log -type f -delete && \
  find /usr/share/doc -type f -delete && \
  find /usr/share/man -type f -delete

COPY bin /wxdt/bin
ADD wechat_web_devtools.tar.gz /root/.config

RUN set -xe \
  && sed -i \
    -e s%'ln -s '%'ln -sf '% \
    /startup.sh\
  # 安装开发者工具，然后删除下载的文件
  && echo "${NWJS_VERSION}" > /wxdt/nwjs_v \
  && touch /wxdt/wechat_v \
  && update_nwjs.sh \
  && update_package_nw.sh -l "${DOWNLOAD_URL}" -v "${VERSION}"\
  && rm -rf /tmp/wxdt_xsp

ENTRYPOINT [ "/wxdt/bin/docker-entrypoint.sh" ]
