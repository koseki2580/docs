---
title: 累積和
sidebar_label: 累積和
draft: true
toc_max_heading_level: 4
tags: [アルゴリズム]
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import FontColor from "@site/src/components/Custom/FontColor"
```

## 累積和とは

累積和とは文字の通りで、配列の前・後ろから順に配列の値を足し合わせていくことをいう。
累積和を取ることで配列の区間和を高速で求めることが可能となる。

![イメージ図](/img/svg/Algorithm/cumulative-sum/cumulative-sum-1.drawio.svg "累積和イメージ図")

上記の図において配列番号 3 $\sim$ 7 の和が知りたい場合を考えると

赤色の配列で考えると配列番号 3 $\sim$ 7 を足し合わせるので`23 + 7 + 1 + 7 + 12 = 50`のように合計 5 回配列にアクセスする必要がある。

しかし、青色の配列であれば 7 番目の配列までを足し合わせた`78`、2 番目の配列までを足しわせた`28`を取り出し、`78 - 28 = 50`とすることで
配列番号 3 $\sim$ 7 までの和を求めることができる。

![イメージ図](/img/svg/Algorithm/cumulative-sum/cumulative-sum-2.drawio.svg "累積和イメージ図2")

上記の下図のように、長い線から短い線を引くことで緑の線を求めることができる。

### いもす法

累積和は他にも使い方がある。それが`いもす法`と呼ばれるイベントを管理する方法である。

例えば、店に来店した時刻と退店した時刻が分かっていた際に店内に人が一番いた時間帯を求めたといった場合に、いもす法を用いることで求めることができる。

![イメージ図](/img/svg/Algorithm/cumulative-sum/cumulative-sum-3.drawio.svg "いもす法イメージ図")

店内にいた時間を横線で表すと上記の図のようになる。線が一番重なっている時間帯が一番店内に人がいた時間帯であると言える。上記の図では 13 分の時に 4 人おり、一番人がいたと言える。
これをいもす法(累積和)を使うと求めることができる。

![イメージ図](/img/svg/Algorithm/cumulative-sum/cumulative-sum-4.drawio.svg "いもす法イメージ図2")

上記の赤色四角のように入店した時間に+1、退店した時間+1 分の時間に-1 を入れ、前から(1 から)順に累積和をとることで青色四角のように線表されたものを表現することができます。

- 2 次元
- 三角形のやつ

### アルゴリズム

#### 流れ