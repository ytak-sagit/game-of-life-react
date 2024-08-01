ARG BUN_VERSION=20.04
FROM mcr.microsoft.com/vscode/devcontainers/base:ubuntu-${BUN_VERSION}

RUN set -x \
    && ln -sf /usr/share/zoneinfo/Asia/Tokyo /etc/localtime \
    && echo 'Asia/Tokyo' >/etc/timezone

ARG USERNAME=vscode
RUN apt-get install -y --no-install-recommends sudo

# bun
RUN set -x \
    && curl -fsSL https://bun.sh/install | sudo -u ${USERNAME} bash

USER ${USERNAME}

WORKDIR /app

# コンテナ起動時のデフォルトコマンドを設定
CMD ["/bin/bash"]
