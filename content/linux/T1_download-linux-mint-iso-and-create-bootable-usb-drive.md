---
title: "ទាញ​យក​ Linux Mint ISO & Create Boot-able USB Drive"
description: "Linux Mint Beginner Series in Khmer"

date: 2022-03-25T19:50:00+07:00
update: true

f_image: img/T1_download-linux-mint-iso-and-create-bootable-usb-drive-fm.jpg
draft: false
katex: false
categories:
  - Linux

tags:
  - Linux Mint
  - Linux Mint Beginner

author: dimorng
disqus: "enable"
spport: "enable"
---

_**<ins>គោល​បំណង</ins> ៖ ចង់​សាក​ ឬ​ចាប់ផ្ដើម​ប្រើ​ Linux ឬ ? អាន​អត្ថបទ​នេះ​ ​ ខ្ញុំ​នឹង​បង្ហាញ​ពី​របៀប​ download Linux Mint ពី​ website ផ្លូវ​ការ និង​បង្កើត bootable USB drive សម្រាប់​យក​ទៅ​សាក​ប្រើ ឬ​ install Linux Mint ក្នុង​កុំព្យូទ័រ​អ្នក ។**_

## សង្ខេប​ដំណើរការ ៖
1. ទាញ​យក​ Linux Mint (ISO File) ពី​ Website ផ្លូវការ​ តាម​ torrent (BitTorrent Protocol)
2. Burn Linux Mint ISO ដែល​បាន​ download ទៅ​ក្នុង USB – បង្កើត​ Linux Mint Bootable USB Drive ដោយ​ប្រើ balenaEtcher 

### 1. ទាញ​យក​ Linux Mint
Click {{< link `ត្រង់​នេះ` `https://linuxmint.com/download.php` >}}​ ដើម្បី​ចូល​ទៅ​ Linux Mint download page ។ Scroll ចុះ​ក្រោម រួច​ជ្រើស​ Desktop Environment មួយ ​ដែល​អ្នក​ពេញ​ចិត្ត – ខ្ញុំ​ recommend **"Cinnamon"** ។ 

![linux-mint-download-page](/img/T1_download-linux-mint-iso-and-create-bootable-usb-drive-1.png)

ខ្ញុំ​ recommend download តាម​ Torrent ដោយ​សារ​ file មាន​ទំហំ​ធំ​គួរសម​ដែរ ។ ពេល​ download ចប់​ អ្នក​គួរ​តែ​ verity ISO file តាម{{< link `ការ​ណែនាំ​របស់​ Linux Mint Team` `https://linuxmint.com/verify.php` >}} ។

{{< card `/linux/what-is-torrent.md` >}}
{{< card `/linux/lm_iso_verification.md` >}}

### 2. Burn ISO file ទៅ​ក្នុង USB

ដើម្បី install Linux Mint ក្នុង​ កុំព្យូទ័រ​ អ្នក​ត្រូវ​ Burn ISO file ដែល​អ្នក​បាន download ហើយ ចូល​ក្នុង USB សិន ។ USB នេះ​ហើយ​ ដែល​អ្នក​នឹង​យក​ទៅ​ install Linux Mint ក្នុង​កុំព្យូទ័រ ។

យើង​នឹង​ប្រើ app មួយ​ឈ្មោះ balenaEtcher អ្នក​អាច​ download ដោយ​ click {{< link `ត្រង់​នេះ` `https://www.balena.io/etcher/` >}} រួច​ជ្រើសរើស​ binary file ដែល​ត្រូវ​នឹង​ Operating System ដែល​អ្នក​កំពុង​ប្រើ ។ ចំពោះ​ Linux binary file ជា​ប្រភេទ​ Appimage ។
- ដោត​ USB ទៅ​នឹង​ កុំព្យូទ័រ
- បើក (launch) balenaEtcher
- Click `Flash form file` ដើម្បី​ជ្រើស​ Linux Mint 20 ISO file
- រួច click `Select target` ដើម្បី​ជ្រើស USB ដែល​អ្នក​ចង់​ burn ISO ចូល
- ចុង​ក្រោយ `Flash!` ហើយ​រង់​ចាំ​ដល់​ចប់​ដំណើរ ទើប​ Eject USB ចេញ ។

![burn-linux-mint-iso-to-usb-via-balenaEtcher](/img/T1_download-linux-mint-iso-and-create-bootable-usb-drive-2.jpg)

អប់អរសាទរ​ អ្នក​បាន​ download និង​ burn Linux Mint 20 ទៅ​ក្នុង USB ។ ជំហាន​បន្ទាប់​ អ្នក​អាច​យក​ bootable USB ទៅ​ install ឬ​តែស្ត​ប្រើ Linux Mint ក្នុង​កុំព្យូទ័រ ។

_That’s it for today! Stay tune and have a good day!_

