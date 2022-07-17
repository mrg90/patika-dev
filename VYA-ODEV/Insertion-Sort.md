# Insertion Sort Ödevi - patika.dev

---

```
[22,27,16,2,18,6]
```

## 1. Yukarı verilen dizinin sort türüne göre aşamaları :

    - [22,27,16,2,18,6] -> n
    - [2,27,16,22,18,6] ->(n-1)
    - [2,6,16,22,18,27] ->(n-2)
    - [2,6,16,18,22,27] ->(n-3)

## 2. Big-O-Notation gösterimi :

    - Big-O : O(n²)

## 3. Time Complexity

Best Case: Aradığımız sayının dizinin en başında olması.

   ### Best Case : O(n)

Average Case: Aradığımız sayının ortada olması.

   ### Average Case : O(n²)

Worst Case: Aradığımız sayının sonda olması.

   ### Worst Case : O(n²)

## 4. Dizi sıralandıktan sonra 18 sayısı hangi case kapsamına girer? Yazınız.

    18 sayısı ortalarda olduğu için Average Case kapsamındadır.

## 5. [7,3,5,8,2,9,4,15,6] dizisinin Insertion Sort'a göre ilk 4 adımını yazınız.

    - [2,3,5,8,7,9,4,15,6]
    - [2,3,4,8,7,9,5,15,6]
    - [2,3,4,5,7,9,8,15,6]
    - [2,3,4,5,6,9,8,15,7]

---
[Devpen](https://github.com/devpenn/patika-dev/blob/main/VYA-ODEV/)