---
title: "របៀប Verify Linux Mint ISO file ក្រោយ​ download បាន (security check)"
description: "How to VERIFY Linux Mint ISO file"

date: 2022-03-28T18:27:12+07:00
update: false

f_image: img/feature-img-lm_iso_verification.jpg
draft: true
katex: false
categories:
  - Linux

tags:
  - Security

author: dimorng
disqus: "enable"
spport: "enable"
---

## ហេតុ​អ្វី​ត្រូវ​ verify ISO file ?

តាម [Linux Mint Team](https://linuxmint-installation-guide.readthedocs.io/en/latest/verify.html) ការ​ verify Linux Mint ISO file ដែល​ទើប​នឹង​ download បាន ជា​រឿង​សំខាន់ ដែល​គួរ​តែ​ធ្វើ​មុន​នឹង burn ISO file នោះ​ចូល​ក្នុង USB Drive ។

>យើង​ verify ISO file លើ​ 2 ចំណុច ៖ **integrity** និង **authenticity** ។ ការ​ពិនិត្យ Integrity របស់​ ISO គឺ​ដើម្បី​ចង់​ដឹង​ថា​ តើ​ ISO file ដែល​បាន​ download ដូច​គ្នា​នឹង ISO file ដើម (ក្នុង​ Linux Mint sever) ឬ​ទេ ? បញ្ហា​បន្តិច​បន្តួច​ កើត​ឡើង​ក្នុង​ពេល download (ឧ. ដាច់​ internet, internet យឺត, -ល-) អាច​ធ្វើ​ឲ្យ​មាន​ បញ្ហា​ដល់ ISO file ដែល​អ្នក​ download បាន ។ ហើយ​ជា​លទ្ធផល ​នឹងធ្វើ​ឲ្យ​មាន​បញ្ហា​បន្ត​ពេល​ install Linux Mint ។ ការ​ឆែក authenticity គឺ​ដើម្បី​ចង់​ដឹង​ថា តើ​ ISO file នេះ​ពិត​ជា ផ្តល់​ឲ្យ​ដោយ​ Linux Mint Team មែន​ឬ​ទេ ? ការ​ពិនិត្យ​ Authenticity ជា​ជំហាន​សំខាន់​បំផុត ព្រោះ​អាច​មាន​គេ​ Hack និង​បញ្ចូល​ malicious code កែ​ប្រែ​ ISO file ក្នុង​ sever ដែល​អ្នក​ download ។
>
><span class="attribution">ប្រែសម្រួលចេញពី {{< link `Official Linux Mint Documentation` `https://linuxmint-installation-guide.readthedocs.io/en/latest/verify.html` >}}</span>

{{< em `សរុប​មក​វិញ​ ការ​ verify ISO file គឺ​ដើម្បី​ឲ្យ​ប្រាកដ​ថា ISO file ដែល​ download បាន​ ពេញ​លេញ (integrity check) នឹង​ពិត​ជា​ផ្តល់​ដោយ​ Linux Mint Team (authenticity check) ។` >}}

## តើ​ត្រូវ​ verify ដោយ​របៀប​ណា ?

អាស្រ័យ​លើ operating system ដែល​អ្នក​កំពុង​ប្រើ (ឧ. Linux, MacOS ឬ​ Windows) ។ ចំពោះ​ អ្នក​ប្រើ​ Linux ឬ MacOS ៖

### <ins>ជំហាន​ទី ១ ៖ ត្រៀម​លក្ខណៈ​មុន verify</ins>

1. ក្នុង Home folder បង្កើត​ folder មួយ​ ដាក់​ឈ្មោះ "ISO" 
2. Move ISO file ទៅ​ក្នុង​ ISO folder ដែល​ទើប​បង្កើត
3. Download files ទាំងពីរ ៖ `sha256sum.txt` និង `sha256sum.txt.gpg` ដោយ "right click → Save Link As…" (Files ទាំង​ពីរ​នេះ​ឋិត​នៅ​ page តែ​មួយ​ ដែល​អ្នក​ចូល​ទៅ download Linux Mint ISO)

> កុំ copy content របស់​ file ទាំង​ពីរ​នេះ ។ Download `sha256sum.txt` និង `sha256sum.txt.gpg` ដោយ right click លើ​ពួក​វា ហើយ​ជ្រើស​យក Save Link As… ។ កុំ​កែ​ content របស់​ file ទាំង​ពីរ​នេះ​ដាច់​ខាត ។
>
><span class="attribution">{{< link `Official Linux Mint Documentation` `https://linuxmint-installation-guide.readthedocs.io/en/latest/verify.html` >}}</span>

{{< img `lm_iso_verification_1.png` >}}

4. Move files ទាំង​ពីរ​នេះ ទៅ​ក្នុង ISO folder ដែរ

### <ins>ជំហាន​ទី ២ ៖ ពិនិត្យ​ integrity របស់ ISO</ins>

ក្នុង Terminal app run command ៖
- `cd ~/ISO/` : ចូល​ទៅ ISO directory/folder ដែល​យើង​ទុក​ Linux Mint ISO file, sha256sum.txt និង sha256sum.txt.gpg ក្នុង
- `sha256sum --ignore-missing -c sha256sum.txt` : generate កូដ SHA256 របស់​ ISO file រួច​យក​ទៅ​ផ្ទៀងផ្ទាត់​ជាមួយ កូដ SHA256 ដែល​មាន​ស្រាប់​ក្នុង sha256sum.txt file ។ 

>បើ​លទ្ធផល​ បង្ហាញ​ថា កូដ​ទាំង​ពីរ​ដូច​គ្នា មាន​ន័យ​ថា ISO file ដែល​អ្នក download បាន​ ពិត​ជា​ពេញ​លេញ ។ ផ្ទុយ​ទៅ​វិញ​ បើ​មិន​ដូច​គ្នា​ Download ISO file ជា​ថ្មី​ម្ដង​ទៀត​ ។
>
><span class="attribution">{{< link `Official Linux Mint Documentation` `https://linuxmint-installation-guide.readthedocs.io/en/latest/verify.html` >}}</span>

{{< imgWCap lm_iso_verification_2.png `sha256sum --ignore-missing -c sha256sum.txt output` `«OK» output បញ្ជាក់​ថា SHA256 sum (កូដ SHA256) ទាំង​ពីរ​ដូចគ្នា ឬ iso file របស់​យើង​ពេញលេញ 👏` >}}

### <ins>ជំហាន​ទី ៣ ៖ ពិនិត្យ authenticity របស់ ISO</ins>

Run command ខាង​ក្រោម ក្នុង Terminal ៖

```
gpg --keyserver hkp://keyserver.ubuntu.com:80 --recv-key "27DE B156 44C6 B3CF 3BD7  D291 300F 846B A25B AE09"
```

ដើម្បី Import Linux Mint signing key រួច​ run command ទាំង​ពីរ​ខាង​ក្រោម​ទៀត ៖

```
cd ~/ISO
gpg --verify sha256sum.txt.gpg sha256sum.txt
``` 

ដើម្បី​ពិនិត្យ​ authenticity នៃ sha256sum.txt file

>បើ​លទ្ធផល​ (output) បង្ហាញ​ថា `Good signature` ហើយ​ signed នឹង​ key `A25BAE09`  មាន​ន័យ​ថា ISO file ដែល​ download បាន​ ពិត​ជា​ផ្តល់​ឲ្យ​ដោយ Linux Mint Team ។
>
>អ្នក​អាច​នឹងឃើញ​ឃ្លា "signature is not trusted" ឬឃ្លា​ ដែល​មាន​ន័យ​ប្រហាក់ប្រហែល​នេះ ។ វា​ជា​រឿង​ ដែល​ Linux Mint Team បាន​ព្រាងទុក​ ហើយគ្មាន​បញ្ហា​អ្វី​ទាំង​អស់ ។
>
><span class="attribution">{{< link `Official Linux Mint Documentation` `https://linuxmint-installation-guide.readthedocs.io/en/latest/verify.html` >}}</span>


{{< imgWCap lm_iso_verification_3.png `Autheticity check output` `«Good signature» ហើយ sign ដោយ "A25BAE09" key បង្ហាញ​ថា iso file របស់​យើង​ពិត​ជា​ផ្តល់​ដោយ​ Linux Mint Team មែន` >}}

_នេះជា​វិធី verify Linux Mint ISO file ក្នុង Linux Machine ។ សង្ឃឹម​ថាអ្នកទាំងអស់​គ្នា​ ចូលចិត្ត ។ Bye! and May the force be with you!_