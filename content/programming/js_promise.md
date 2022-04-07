---
title: "Javascript Promise"
description: "Learn Javascript Promise"

date: 2021-07-08T21:49:25+07:00
update: false

f_image: img/
draft: true
katex: false
categories:
  - Programming

tags:
  - Javascript
  - ចាវ៉ាស្ក្រ៊ីពធ៍

author: dimorng
disqus: "enable"
spport: "enable"
---

## Syntax - របៀប​ Promise ក្នុង​ Javascript

```javascript
new Promise((resolve, reject) => {
  // code
  resolve()
  reject()
})
```
We make promise for the future. ពេល​យើង​សន្យា (Promise) ថា​នឹង​ធ្វើ​អ្វី​មួយ​ ជា​លទ្ធផល​ វា​មាន​ ២ ករណី ៖
1. យើង​ធ្វើ​តាម​ការ​សន្យា (Fullfill the promise)
2. យើង​មិន​ធ្វើ​តាម​ការ​សន្យា (Reject the promise) ។

ដូចគ្នា​នេះ​ដែរ លទ្ធផល​របស់​ Promise ក្នុង​ JavaScipt ក៏​មាន​ 2 ផ្លូវដែរ ៖
1. resolve (the promise is fullfilled.)
2. reject (the promise is rejected.)

{{< em `តែ​សំណួរ​សួរ​ថា តើ​វា​ resolve នៅ​ពេលណា ? ហើយ​វា​ reject នៅ​ពេល​ណា ?` >}}

ដើម្បី​ឆ្លើយ​សំណួរ​នេះ​ យើងនឹង​សង្កេត​មើល ៖

```javascript
new Promise((resolve, reject) => {

  let a = 1
  if (a > 5) {
    console.log("Hello")
  }

  resolve(console.log("I am logged out because the promise is resolved."))
  reject(console.log("I am logged out because the promise is rejected."))
})
```
យើង​សន្យា​ថា​នឹង logged out «I am logged out because the promise is resolved.»