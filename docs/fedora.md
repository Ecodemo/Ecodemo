---
title: Fedora 镜像与配置
lang: zh-CN
sidebar: auto
meta:
  - name: description
    content: Fedora 可用镜像与配置
  - name: keywords
    content: 开源镜像索引站,开源镜像索引,Moieo,Linux,Debian,Ubuntu,MacOS,CentOS,Fedora
---

## 中科大镜像一步到位

```bash
sudo sed -e 's|^metalink=|#metalink=|g' \
         -e 's|^#baseurl=http://download.example/pub/fedora/linux|baseurl=https://mirrors.ustc.edu.cn/fedora|g' \
         -i.bak \
         /etc/yum.repos.d/fedora.repo \
         /etc/yum.repos.d/fedora-modular.repo \
         /etc/yum.repos.d/fedora-updates.repo \
         /etc/yum.repos.d/fedora-updates-modular.repo
```

## RHEL ubi8 镜像

脚本一步到位
该镜像地址为 `cdn-ubi.redhat.com`

```bash
curl -Ls https://mirrors.moieo.top/ubi8.sh | bash
```

