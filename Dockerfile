# syntax = docker/dockerfile:1

ARG UBUNTU_VERSION=22.04
FROM mcr.microsoft.com/vscode/devcontainers/base:ubuntu-${UBUNTU_VERSION}

RUN set -x \
    && ln -sf /usr/share/zoneinfo/Asia/Tokyo /etc/localtime \
    && echo 'Asia/Tokyo' >/etc/timezone

# bun
RUN set -x \
    && curl -fsSL https://bun.sh/install | BUN_INSTALL=/usr bash

# git
RUN set -x \
    && apt install -y git \
    && apt clean -y \
    && rm -rf /var/lib/apt/lists/*

ARG USERNAME=vscode
USER ${USERNAME}

WORKDIR /workspace/app

RUN mkdir node_modules

# コンテナ起動時のデフォルトコマンドを設定
CMD ["/bin/bash"]
