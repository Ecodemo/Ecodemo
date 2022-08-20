---
layout: default
title: 开源镜像索引
---

<!-- <div id="home">
  <h1>Blog Posts</h1>
  <ul class="posts">
    {% for post in site.posts %}
      <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
</div> -->
## 大学镜像

| 名称 | 地址 |
| --- | --- |
| 清华大学 | https://mirrors.tuna.tsinghua.edu.cn/ |
| 北京外国语大学 | https://mirrors.bfsu.edu.cn/ |
| 北京大学 | https://mirrors.pku.edu.cn/ |
| 中国科学技术大学 | https://mirrors.ustc.edu.cn/ |
| 兰州大学 | http://mirror.lzu.edu.cn/ |
| 浙江大学 | http://mirrors.zju.edu.cn/ |
| 东北大学 | http://mirror.neu.edu.cn/ |
| 华中科技大学 | http://mirrors.hust.edu.cn/ |
| 重庆大学 | http://mirrors.cqu.edu.cn/ |
| 大连东软信息学院 | http://mirrors.neusoft.edu.cn/ |
| 大连理工大学 | http://mirror.dlut.edu.cn/ |
| 上海交通大学FTP | http://ftp.sjtu.edu.cn/ |
| 上海交通大学 | https://mirrors.sjtug.sjtu.edu.cn/ |
| 山东女子学院 | https://mirrors.sdwu.edu.cn/ |
| 哈尔滨工业大学 | http://mirrors.hit.edu.cn/ |
| 北京理工大学 | http://mirror.bit.edu.cn/ |
| 云南大学 | https://mirrors.ynu.edu.cn/ |
| 高能物理研究所 | http://mirror.ihep.ac.cn/ |
| 南京大学 | https://mirrors.nju.edu.cn/ |
| 南阳理工学院 | https://mirror.nyist.edu.cn/ |
| 山东大学 | https://mirrors.sdu.edu.cn/ |
| 西北农林科技大学 | https://mirrors.nwafu.edu.cn/ |


## 企业镜像

| 名称 | 地址 |
| --- | --- |
| 阿里 | http://mirrors.aliyun.com/ |
| 腾讯 |  https://mirrors.cloud.tencent.com/ |
| 搜狐 | http://mirrors.sohu.com/ |
| 网易 | https://mirrors.163.com/ |
| 首都在线 | http://mirrors.yun-idc.com/ |
| 公云 | http://mirrors.pubyun.com/ |
| 华为 | https://mirrors.huaweicloud.com/ |

## Docker Hub 镜像

| 名称 | 地址 |
| --- | --- |
| 网易 | https://hub-mirror.c.163.com |
| 百度 | https://mirror.baidubce.com |
| 阿里 | https://ustc-edu-cn.mirror.aliyuncs.com |
| Github (国外) | https://ghcr.io/ |


## NPM 镜像

| 名称 | 地址 |
| --- | --- |
| 中国科学技术大学(反代) | https://npmreg.proxy.ustclug.org/ |
| 浙江大学 | http://mirrors.zju.edu.cn/npm/ |
| 淘宝 | https://registry.npmmirror.com |
| CNPM | http://r.cnpmjs.org/ |
| 腾讯 | http://mirrors.cloud.tencent.com/npm/ |
| 华为 | https://repo.huaweicloud.com/repository/npm/ |

```bash
npm config set registry https://npmreg.proxy.ustclug.org/
yarn config set registry https://npmreg.proxy.ustclug.org/
pnpm config set registry https://npmreg.proxy.ustclug.org/
```

## pip 镜像

| 名称 | 地址 |
| --- | --- |
| 清华大学 | https://pypi.tuna.tsinghua.edu.cn/simple |
| 北京外国语大学 | https://mirrors.bfsu.edu.cn/pypi/web/simple |
| 大连东软信息学院 | http://mirrors.neusoft.edu.cn/pypi/web/simple/ |
| 重庆大学 | https://mirrors.cqu.edu.cn/pypi/web/simple |
| 浙江大学 | https://mirrors.zju.edu.cn/pypi/simple |
| 中国科学技术大学 | http://pypi.mirrors.ustc.edu.cn/simple/ |
| 豆瓣 | http://pypi.douban.com/simple/ |
| 阿里 | http://mirrors.aliyun.com/pypi/simple/ |
| 网易 | https://mirrors.163.com/pypi/simple/ |

### 临时使用

```bash
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple [包名]
```
### 永久使用

Unix、Linux、Mac OS: `~/.pip/pip.conf`
Windows: `%HOME%\pip\pip.ini`
文件中写入

```bash
[global]
trusted-host=pypi.tuna.tsinghua.edu.cn
timeout=6000
index-url=https://pypi.tuna.tsinghua.edu.cn/simple
```

## Cargo 镜像

| 名称 | 地址 |
| --- | --- |
| 清华大学 | https://mirrors.tuna.tsinghua.edu.cn/git/crates.io-index.git |
| 北京外国语大学 | https://mirrors.bfsu.edu.cn/git/crates.io-index.git |
| 中国科学技术大学 | https://mirrors.ustc.edu.cn/crates.io-index |
| 上海交通大学 | https://mirrors.sjtug.sjtu.edu.cn/git/crates.io-index/ |
| 阿里云 Rustcc 社区 | https://code.aliyun.com/rustcc/crates.io-index.git |

Unix、Linux、Mac OS `~/.cargo/config` 写入文件中

```bash
# 指定镜像
# replace-with = '源镜像名'
replace-with = 'ustc'
[source.ustc]
registry = "https://mirrors.ustc.edu.cn/crates.io-index"
```

## Gem 镜像

| 名称 | 地址 |
| --- | --- |
| 清华大学 | https://mirrors.tuna.tsinghua.edu.cn/rubygems/ |
| 北京外国语大学 | https://mirrors.bfsu.edu.cn/rubygems/ |
| 中国科学技术大学 | https://mirrors.ustc.edu.cn/rubygems/ |

### Gem

```bash
# 添加 中国科学技术大学 镜像源并移除默认源
gem sources --add https://mirrors.ustc.edu.cn/rubygems/ --remove https://rubygems.org/
# 列出已有源
gem sources -l
# 应该只有 USTC 一个
```

### Bundle
```bash
bundle config mirror.https://rubygems.org https://mirrors.ustc.edu.cn/rubygems/
```
