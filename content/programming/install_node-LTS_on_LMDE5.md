---
title: "របៀប install Node.js LTS​​ (v16.x) លើ LMDE5"
description: "How to install Node.js LTS (v16.x) on LMDE5"

date: 2022-04-06T16:46:25+07:00
update: false

f_image: img/feature-img-install_node-LTS_on_LMDE5.png
draft: false
katex: false
categories:
  - Programming

tags:
  - JavaScript
  - Beginner

author: dimorng
disqus: "enable"
spport: "enable"
---

{{< link `NodeSource` `https://github.com/nodesource/distributions/blob/master/README.md#deb`>}} មិន​ទាន់​ officially support {{< link `LMDE 5 (Linux Mint Debian Edition version 5 codename "Elsie")` `https://www.linuxmint.com/edition.php?id=297`>}} នៅ​ឡើយ​ទេ ។

{{< em `សំណាងល្អ NodeSource support Debian 11 "Bullseye" ហើយ LMDE 5 is based on Debian 11 ។`>}}

> មាន​ន័យ​ថា យើង​​ក៏​អាច​ add repository ដើម្បី install និង update Node.js LTS លើ LMDE 5 បាន​ដែរ ។

_**ខាងក្រោម​នេះ​ ជា​របៀប​ install Node.js LTS (ដែល​ជា version 16.x) លើ LMDE 5 តាម official documentation ផ្ដល់ដោយ {{< link `NodeSource` `https://github.com/nodesource/distributions/blob/master/README.md#debmanual` >}} ៖**_

## 1. Uninstall Node.js Version ចាស់​ចោល​សិន

```
sudo apt remove nodejs
sudo apt clean && sudo apt autoclean && sudo apt autoremove
```

_អ្នក​អាច​រំលង step នេះ​បាន​ បើអ្នក​មិន​​ទាន់បាន install Node.js ក្នុង Machine អ្នក​ទេ ។_

## 2. Add the NodeSource package signing key

```
KEYRING=/usr/share/keyrings/nodesource.gpg
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource.gpg.key | gpg --dearmor | sudo tee "$KEYRING" >/dev/null
```

បើ `curl` មិនទាន់ install ក្នុង Machine អ្នកទេ ឬ អ្នក​មិន​ចូល​ចិត្ត​ប្រើ `curl` ទេ អ្នក​អាច​ប្រើ `wget` ជំនួស ។

```bash
wget --quiet -O - https://deb.nodesource.com/gpgkey/nodesource.gpg.key | gpg --dearmor | sudo tee "$KEYRING" >/dev/null
# command នេះធ្វើការ​ដូច​នឹង ៖
# curl -fsSL https://deb.nodesource.com/gpgkey/nodesource.gpg.key | gpg --dearmor | sudo tee "$KEYRING" >/dev/null
# ខាង​លើ​ដែរ
```

នឹង​ចុង​ក្រោយ​ អ្នក​ត្រូវ​ run ៖

```
gpg --no-default-keyring --keyring "$KEYRING" --list-keys
```

> `9FD3B784BC1C6FC31A8A0A1C1655A0AB68576280` ជា​ KeyID ដែល​អ្នក​នឹង​ឃើញ​បន្ទាប់​ពី​ run command នេះ ។
>
> <span class="attribution">{{< link `Official NodeSource Documentation` `https://github.com/nodesource/distributions/blob/master/README.md#debmanual` >}}</span>

## 3. Add NodeSource LTS Repository

```
VERSION=node_16.x
```

> Command នេះ​នឹង​បញ្ជាក់​ពី​ version របស់​ Node.js ដែល​យើង​ចង់​ install ។ Node.js​ version ដែល​យើង​ចង់​ install គឺ​ LTS (Long Term Support) version ហើយ LTS version បច្ចុប្បន្ន​របស់​ Node.js គឺ 16.x (សែស្រលាយនៃ version 16) ។
>
> <span class="attribution">{{< link `Official NodeSource Documentation` `https://github.com/nodesource/distributions/blob/master/README.md#debmanual` >}}</span>

```
KEYRING=/usr/share/keyrings/nodesource.gpg
DISTRO="bullseye"
```

> ដោយ​សារ​ LMDE 5 មិន​ទាន់​ offically support ដូច្នេះ Based Debian (Codename) ត្រូវ​បាន recommand ឲ្យ​ដាក់ (`DISTRO="bullseye"`) ។
>
> <span class="attribution">{{< link `Official NodeSource Documentation` `https://github.com/nodesource/distributions/blob/master/README.md#debmanual` >}}</span>

```
echo "deb [signed-by=$KEYRING] https://deb.nodesource.com/$VERSION $DISTRO main" | sudo tee /etc/apt/sources.list.d/nodesource.list
echo "deb-src [signed-by=$KEYRING] https://deb.nodesource.com/$VERSION $DISTRO main" | sudo tee -a /etc/apt/sources.list.d/nodesource.list

```

> Command នេះ​នឹង​ add Node.js LTS (v16.x) repository ដែល​យើង​ចង់​បាន ។

## 4. Update package lists and install Node.js

ដូច្នេះ​ យើង​អាច​ install Node.js LTS បាន​ហើយ ៖

```
sudo apt update
sudo apt install nodejs
```

> ក្រោយ​ installion process ចប់ អ្នក​អាច​ឆែក​ Node.js version តាម ៖
>
> ```bash
> node --version
> # ឬ
> # apt-cache policy nodejs
> ```

> បាន​ធ្វើ​តែស្ត​ដោយ​ជោគជ័យ​លើ LMDE 5 នៅថ្ងៃ 06 មេសា 2022
>
> <span class="attribution">{{< link `Dimorng Meung` `https://www.linkedin.com/in/dimorng/` >}}</span>

**_តើអ្នក​បាន install Node.js TLS ក្នុង Machine របស់អ្នក​ហើយឬនៅ ? អ្នក​អាច​ share experience ក្នុង comment ខាងក្រោម ៕_**
