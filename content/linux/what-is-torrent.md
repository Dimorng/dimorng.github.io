---
title: "តើ​ Torrent ជា​អ្វី ?"
description: "BitTorrent Protocol Tutorial"

date: 2021-03-03T20:06:24+07:00
update: false

f_image: img/what-is-BitTorrent-feature-img.jpg
draft: false
katex: false
categories:
  - Linux

tags:
  - BitTorrent
  - Tutorial

author: dimorng
disqus: "enable"
spport: "enable"
---

BitTorrent Protocol ដែល​យើង​ច្រើន​នាំគ្នា​ហៅ​កាត់​ថា Torrent ជា​វិធី​សាស្ត្រ​ download files តាម​ Internet​ ដ៏​ឆ្លាតវៃ​ និង​គួរ​ឲ្យ​ទុក​ចិត្ត​មួយ ដែល​យើង​ទាំងអស់​គ្នា​មិន​គួរ​មើល​រំលង ។ វា​អនុញ្ញាត​ឲ្យ​កុំព្យូទ័រ​យើង​អាច​ download file ជា​បំណែក​ៗ ពី​ច្រើន​ប្រភព​ក្នុង​ពេល​តែ​មួយ​ ហើយ​យក​បំណែក​ទាំងអស់​នេះ​មក​ផ្គុំ​បញ្ចូល​គ្នា​ ដើម្បី​បង្កើត​ជា​ file ពេញ​លេញ​វិញ​ ក្រោយ download ចប់ ។

លក្ខណៈ​ពិសេស​របស់ BitTorrent Protocol គឺ វា​កាត់​បន្ថយ​ការ​ខូច​ខាត​ file កំឡុង​ពេល download ដែល​អាច​ និង​ច្រើន​តែ​កើត​មាន​ពេល Internet connection រអាក់រអួល​ ឬ​ដាច់ ។ ដូច្នេះ​ហើយ​ វា​ត្រូវ​បាន​គេ​ recommend ឲ្យ​ប្រើ ​ពេល​ download file ធំៗ (ចាប់ពី​ 1Gb ឡើង​ទៅ) ។

{{< em `BitTorrent Protocol ត្រូវ​បាន​គេ​ recommend ឲ្យ​ប្រើ ​ពេល​ download file ធំៗ (ចាប់ពី​ 1Gb ឡើង​ទៅ) ។` >}}

## តើ​យើង​ត្រូវ​ការ​អ្វី​ខ្លះ​ ដើម្បី​អាច​ download file តាម​ Torrent ?

មាន​របស់​ 2 ដែល​យើង​ត្រូវ​ការ​ជា​ចាំបាច់ ៖

- **_BitTorrent Client_** ជា Torrent app ដែល​យើង​ត្រូវ​ install ក្នុង​កុំព្យូទ័រ​ ឬ​ទូរស័ព្ទ​
- **_Torrent file_** សម្រាប់​ប្រាប់​ BitTorrent client ពី​ប្រភព​របស់​ file ដែល​យើង​ចង់​ download ។

## BitTorrent Client

### 1. {{< link `qBitTorrent` `https://www.qbittorrent.org/` >}}

ជា open source BitTorrent client ដែល​ support Linux, Windows និង MacOS ។ ខ្ញុំ​ recommend វា ចំពោះ​អ្នក​ប្រើ​ Windows​ ឬ MacOS ។

{{< imgWCap `what-is-BitTorrent-qBitTorrent.jpg` `qBitTorrent User Interface` `qBitTorrent User Interface` >}}

{{< dwFW qBitTorrent `https://www.qbittorrent.org/download.php` >}}

ចំពោះ​ អ្នក​ប្រើ​ Ubuntu​ based distro រួម​មាន​ Linux Mint, …

{{< dwFSM qBitTorrent `qbittorrent` >}}

### 2. {{< link Transmission `https://transmissionbt.com/` >}}

ជា open source BitTorrent client ដែល​(ខ្ញុំ​ចូល​ចិត្ត)​សាមញ្ញ​ ស្រួល​ប្រើ ។ វា​ត្រូវ​បាន​ install រួច​ជា​ស្រេច​ក្នុង​ Linux distro​ ភាគ​ច្រើន ។ ខ្ញុំ​ recommend​ Transmission ចំពោះ​អ្នក​ប្រើ​ Linux ។

{{< imgWCap `what-is-BitTorrent-Transmission.jpg` `Transmission User Interface` `Transmission User Interface` >}}

បើ​ Ubuntu​ based distro ដែល​អ្នក​ប្រើ​មិន​ទាន់​មាន​ Transmission installed ទេ ៖

{{< dwFSM `Transmission` `transmission` >}}

### 3. {{< link `Deluge` `https://deluge-torrent.org/` >}}

ជា​ open source BitTorrent client ដ៏​គួរ​ឲ្យ​ចាប់​អារម្មណ៍​មួយ​ទៀត​ ដែល​អាច​ install ប្រើ​បាន​ទាំង​លើ​ Linux, MacOS និង​ Windows ។

{{< imgWCap `what-is-BitTorrent-deluge-from-omg-ubuntu.jpg` `Deluge User Interface` `Deluge User Interface (from omg! ubuntu)` >}}

{{< dwFW `Deluge` `https://dev.deluge-torrent.org/wiki/Download` >}}

ចំពោះ​អ្នក​ប្រើ​ Ubuntu based distro:

{{< dwFSM `Deluge` `deluge` >}}

### 4. Flud

ជា​ BitTorrent Client app ដែល​ខ្ញុំ​ recommend ចំពោះ​អ្នក​ប្រើ​ android ។ វា​មាន User interface សមញ្ញា​ ស្រួល​ប្រើ ជា​ការ​ពិត​ធ្វើ​ឲ្យ​ខ្ញុំ​ចូលចិត្ត ។

{{< imgWCap `what-is-BitTorrent-Flud-UI.png` `Flud User Interface` `Flud User Interface` >}}

{{< android `Flud` `https://play.google.com/store/apps/details?id=com.delphicoder.flud` >}}

## Torrent File

ជា​ file ដែល​មាន​ឈ្មោះ​បញ្ចប់​ដោយ (file extension) `.torrent` ។ ជា​ទូទៅ​ មុន​ពេល​យើង​ download file ណា​មួយ​តាម BitTorrent Protocol យើង​ត្រូវ​ស្វែង​រក​ torrent file សម្រាប់​ប្រាប់​ Torrent Client ពី​ប្រភព​របស់​ file ដែល​យើង​ចង់​ download ជាមុន​សិន ។ មិនមែន​គ្រប់​ file ទាំងអស់​ក្នុង internet សុទ្ធ​តែ​អាច​ download តាម​ BitTorrent Protocol បាន​នោះ​ទេ ។ មាន​ន័យ​ថា​ យើង​អាច​ប្រើ​ BitTorrent Protocol បាន​ ដើម្បី​ download file ណាមួយ លុះ​ត្រា​តែ​ម្ចាស់​ file ផ្តល់​ torrent file សម្រាប់​ download file នោះ ។

## របៀប​ download តាម BitTorrent Protocol

1. អ្នក​ត្រូវ​មាន Torrent Client បាន​ install ហើយ​ក្នុង​កុំព្យូទ័រ ឬ​ទូរស័ព្ទ
2. Download torrent file
3. បើក​ torrent torrent file នោះ​ក្នុង Torrent Client
4. Remove torrent file នោះ​ចេញ​ពី​ Torrent Client បន្ទាប់​ពី download ចប់ និង​ delete torrent file នោះ ។

បើ​សិន​យើង​មិន​ remove torrent file ចេញ​ពី​ BitTorrent client ទេ​ នោះ​កុំព្យូទ័រ​យើង​នឹង​ក្លាយ​ជា​ប្រភព​មួយ​សម្រាប់​ឲ្យ​អ្នក​ ផ្សេង​ទៀត​ download ។ តាម​ការពិត​ទៅ​ អ្នក​មិន​ចាំបាច់ remove ក៏​បាន​ដែរ​ បើ​អ្នក​មិន​យល់​ទាស់​អ្វី​នឹង​ក្លាយ​ជា​ប្រភព​មួយ​សម្រាប់​ឲ្យ​គេ​ download ។ មូលហេតុ​ ដែល​ខ្ញុំ​ recommend ឲ្យ​ delete torrent file ក្រោយ​ download ចប់​ គឺ​ដើម្បី​សម្អាត​ storage បាន​បន្តិច​បន្តួច​ ដើម្បី​សល់​ space សម្រាប់​ទុក​ file ដែល​មាន​ប្រយោជន៍​ផ្សេង​ទៀត ។ Torrent file នេះ​នឹង​ក្លាយ​ជា​គ្មាន​ប្រយោជន៍​ពេល​យើង​ download file ដែល​យើង​ចង់​បាន​ បាន​ដោយ​ជោគជ័យ​ហើយ ឬ​អាច​និយាយ​ម្យ៉ាងទៀត​ថា torrent file នេះ​គ្រាន់​តែ​ជា​ឈ្នាន់​ជួយ​ឲ្យ​យើង​អាច​ download file ដែល​យើង​ចង់​បាន ។ ប្រសិន​បើ​កុំព្យូទ័រ​អ្នក​មាន​ hard disk ធំ​ អ្នក​មិន​បាច់​លុប torrent file នេះ​ក៏​បាន​ដែរ ។

## 💻️ អនុវត្តន៍ ៖

យើង​ចង់​ download LibreOffice តាម​ BitTorrent Protocol ។ តោះ !​ ធ្វើ​តាម​ខ្ញុំ​ទាំងអស់​គ្នា ។

1. តើ​កុំព្យូទ័រ​អ្នក​មាន BitTorrent Client ហើយ​ឬ​នៅ ? បើ​មិន​ទាន់​មាន install BitTorrent ណាមួយ​ ដែល​ខ្ញុំ recommend ខាង​លើ ។
2. យើង​ចូល​ទៅ​ {{< link `download page` `https://www.libreoffice.org/download/download/` >}} របស់​ LibreOffice website ហើយរក​មើល​ថា​ តើ​មាន​ Torrent file ដើម្បី​ប្រើ​សម្រាប់​ download LibreOffice ឬ​ទេ ?

![Looking for Torrent File in LibreOffice Download page](/img/what-is-BitTorrent-qBitTorrent-libreoffice-download-website.jpg)

👉️ ក្នុង​ប្រអប់​ Download LibreOffice 7.1.0 មាន​ពាក្យ​ថា Torrent បញ្ជាក់​ថា យើង​អាច​ download LibreOffice version 7.1.0 នេះ តាម​ BitTorrent Protocol បាន ។

3. Download Torrent file នេះ​ ដោយ​ Left click លើ​វា ។
4. បើក​ Torrent file (ដែល​យើង​ទើប​នឹង download បាន) ក្នុង BitTorrent Client ដោយ​ double click លើ​វា ។

![downloaded LibreOffice torrent file](/img/what-is-BitTorrent-downloaded-LibreOffice-torrent-file.jpg)

5. ចាប់​ផ្តើម​ download LibreOffice ។

![Open torrent file in torrent client](/img/what-is-BitTorrent-open-torrent-file-in-torrent-client.jpg)

6. រង់ចាំ​ ដល់​ download ចប់ ។

![Wait until the download complete](/img/what-is-BitTorrent-wait-untill-the-download-finish.jpg)

7. អប់អរសាទរ​ យើង​ទើប​តែ​បាន​ download LibreOffice 7.1.0 តាម​ BitTorrent Protocol ។

![LibreOffice file that have been downloaded](/img/what-is-BitTorrent-LibreOffice-file.jpg)

8. Remove Torrent file ពី​ BitTorrent Client និង delete Torrent file ។

{{< imgWCap `what-is-BitTorrent-remove-torrent-from-bittorrent-client.jpg` `Remove torrent file from torrent client` `Remove Torrent File from Torrent Client` >}}

{{< imgWCap `what-is-BitTorrent-delete-torrent-file.jpg` `delete torrent file` `Delete Torrent File` >}}

## ប្រតិបត្តិ ៖

សាកល្បង​ ចូល​ទៅ​ {{< link `download Linux Mint Cinnamon Edition` `https://linuxmint.com/download.php` >}} តាម​ BitTorrent Protocol ។
