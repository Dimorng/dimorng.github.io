---
title: "របៀប​ Install Font ក្នុង​ Linux Mint ឬ​ Ubuntu-based Linux Distro"
date: 2020-07-07T14:37:07+07:00
description: "3 ways to install any font in Ubuntu-based Linux dirstro"
update: true

tags:
    - Khmer language
    - Tip
categories: 
    - Linux

author: dimorng
disqus: "enable"
spport: "enable"

draft: true

f_image: img/how-to-install-font-in-ubuntu-based-linux-fm-min.png
---

មាន​វិធី​ ៣ ដើម្បី​ install font ក្នុង Linux Mint ឬ​ Ubuntu-based Linux Distro ផ្សេង​ទៀត ៖

### Install font ដែល​មាន​ស្រាប់​ក្នុង​ Ubuntu repository

**សង្ខេប​ដំណើរ​ការ** ៖ run
```
sudo apt update 
sudo apt install fonts-khmeros 
sudo apt install fonts-khmeros-core 
```

វិធី​នេះ​ ដំបូង​ អ្នក​ត្រូវ​ដឹង​ឈ្មោះ​របស់ `font package` (កញ្ចប់​ពុម្ព​អក្សរ) ដែល​អ្នក​ចង់​ install ឈ្មោះ​អ្វី​សិន ។ ខ្ញុំ​នឹង​លើក​យក​ `font package` ភាសាខ្មែរ​យើង​មក​បង្ហាញ​ជា​ឧទាហរណ៍ ។

ក្នុង​ Ubuntu repository មាន​ `package` (កញ្ចប់) ពុម្ពអក្សរ​ខ្មែរ​សំខាន់​ចំនួន​ 2 គឺ (ឈ្មោះ) ៖
1. `fonts-khmeros`
2. `fonts-khmeros-core`

`fonts-khmeros-core` ផ្ទុក​ពុម្ពអក្សរ​ខ្មែរ​ 2 ពុម្ព​គឺ ៖ Khmer OS និង Khmer OS System ហើយ​ជាទូទៅ​បាន​ install រួច​ជា​ស្រេច ស្វ័យ​ប្រវត្តិ ។ មាន​ន័យ​ថា ក្នុង​ Ubuntu-based Linux របស់​អ្នក​មាន​ពុម្ព​អក្សរ​ខ្មែរ​តែ​ 2 ពុម្ព​នេះ​ប៉ុណ្ណោះ ។ ចំណែក​ឯ​ `fonts-khmeros` ជា​កញ្ចប់​ពុម្ពអក្សរ​ខ្មែរ​ធំជាង ដែល​មាន​ពុម្ពអក្សរ​ខ្មែរ​រហូត​ដល់​ទៅ  10 ពុម្ព រួមមាន ៖
1. Khmer OS Battambang
2. Khmer OS Bokor
3. Khmer OS Content
4. Khmer OS Fasthand
5. Khmer OS Freehand
6. Khmer OS Matal Chrieng
7. Khmer OS Muol
8. Khmer OS Muol Light
9. Khmer OS Muol Pali
10. Khmer OS Siemreap

មិន​ត្រូវ​បាន​ install ដោយ​ស្វ័យ​ប្រវត្តិ​ទេ ។ ដូច្នេះ​អ្នក​ត្រូវ​ install package នេះ ដោយ ៖

ក្នុង Terminal App ដំបូង run (សរសេរ​ រួច​ចុច​ enter បើ​ទាមទារ​ password វាយ​បញ្ចូល password កុំព្យូទ័រ​អ្នក) ៖ 
```
sudo apt update
``` 
ដើម្បីឲ្យ Ubuntu ស្វែង​រក​ ព័ត៌មាន​ទាក់ទង​នឹង version ថ្មី ៗ របស់​ `package` ក្នុង​ repository ។ ធ្វើ​បែប​នេះ ដើម្បី​ឲ្យ​ប្រាកដ​ថា អ្នក​នឹង​ install `package` version ខ្ពស់​ជាង​គេ ដែល​មាន​ក្នុង​ repo (repository) ក្រោយ​ពេល​ run command `sudo apt install` ។

រួច run ៖ 
```
sudo apt install fonts-khmeros 
```
ដើម្បី​ install `fonts-khmeros package` ។

ដើម្បីឲ្យ​ប្រាកដ​ថា `fonts-khmeros-core package` ពិត​ជា​បាន​ install ហើយ អ្នក​គួរ​តែ run command ៖
```
sudo apt install fonts-khmeros-core 
```
បន្ថែម ។ *អប់អរសាទរ​ អ្នក​បាន​ install ពុម្ពអក្សរ​បន្ថែម​ចំនួន 10 ពុម្ព ។*

**ល្បិច ៖** ដើម្បី​ដឹង​ថា​ `fonts-khmeros` និង `fonts-khmeros-core` package បាន​ install ហើយ​ ឬ​នៅ អ្នក​គ្រាន់​តែ​ run command ៖
```
apt search fonts-khmer
```

### Install font ម្តង​មួយៗ

Double click ឬ Left Click 2 ដង លើ​ពុម្ព​អក្សរ​ ដែល​អ្នក​ចង់​ install រួច​ជ្រើស​យក​ install ។
![install-fonts-one-by-one](/img/how-to-install-font-in-ubuntu-based-linux-1-min.png)

### Install ពុម្ពអក្សរ​ច្រើន​ក្នុង​ពេល​តែ​មួយ

ដំបូង​អ្នក​ត្រូវ​មាន​ពុម្ពអក្សរ​ ដែល​អ្នក​ចង់​ install (ដោយdownload តាម​ internet, …) ។ (នេះ​ជា​ [ពុម្ពអក្សរ​ខ្មែរ និង​អង្គ្លេស](https://drive.google.com/file/d/1MiSjP2HRK2_vQ-zLq-OJIIj2iUbTjRnT/view?usp=sharing) ដែល​ខ្ញុំចូល​ចិត្ត​ប្រើ ។) តោះ​រៀន​ install ជាមួយ​ខ្ញុំ ៖

1. ចុច <kbd>Ctrl</kbd> + <kbd>h</kbd> ដើម្បី​បង្ហាញ​ folder និង file កំបាំង​ (file និង folder ដែល​មាន​ឈ្មោះ​ផ្ដើម​ដោយ​សញ្ញា `.`
2. ចូល​ទៅ `home` folder ហើយ​បង្កើត folder មួយ​ដោយ​ដាក់​ឈ្មោះ​ថា `.fonts` (បើ​មិនទាន់​មាន)
3. ចុង​ក្រោយ​ អ្នក​គ្រាន់​តែ​ copy fonts ដែល​អ្នក​ចង់​ install ហើយ​ paste ចូល​ទៅ​ក្នុង `.fonts` folder ជា​ការ​ស្រេច ។ (បើ​អ្នក​ចង់​ កំបាំង​ file និង folder កំបាំង​ទាំង​នោះ​វិញ​ អ្នក​គ្រាន់​តែ​ចុច​ <kbd>Ctrl</kbd> + <kbd>h</kbd> ម្តង​ទៀត​ជា​ការ​ស្រេច ។)
