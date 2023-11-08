---
title: "តើត្រូវអ្វីខ្លះក្រោយពេល install Linux Mint រួចភ្លាម ?"
description: "Things to do after installing Linux Mint"

date: 2022-03-29T09:19:03+07:00
update: false

f_image: img/
draft: true
katex: false
categories:
  - Linux

tags:
  - Beginner
  - Linux Mint

author: dimorng
disqus: "enable"
spport: "enable"
---

## Update the system

ជាការពិតរឿង​ ដែល​អ្នក​**ត្រូវតែធ្វើ**ដំបូង​បង្អស់គឺ **Update System** ។

_តើ update តាមរបៀបណា ?_

> មានជម្រើស ២ (រើស​យក​មួយ​ណា​ក៏បាន) ៖
>
> 1.  តាម Update Manager (<span title="Graphical User Interface">GUI</span>)
> 2.  តាម​ command line (Terminal)

### Update System តាម Update Manager

នៅគែមខាង​ក្រោម​ឆៀង​ខាង​ស្ដាំ​ អ្នក​នឹង​ឃើញ​ shield icon មួយ ។ នេះ​ជា​ update manager ។ ដូច​ឈ្មោះ app នេះប្រើ​​សម្រាប់ update system ។

{{< imgWCap `thing_to_do_after_installing_Linux_Mint_1.png` `update system via update manager` `Update system តាម Update Manager` >}}

### Update system តាម​ command line

```
sudo apt update && sudo apt upgrade
```

## Install រួច Activate tlp និង tlp-rdw
