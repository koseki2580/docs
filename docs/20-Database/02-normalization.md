---
title: 正規化
sidebar_label: 正規化
draft: false
toc_max_heading_level: 4
tags: [データベース]
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import FontColor from "@site/src/components/Custom/FontColor"
```

## 正規化とは

正規化は関係表においてタプルの`挿入`, `更新`, `削除`の操作を行った時におこる異常(`更新時異常`)を排除することをいう。
また、正規化を行うことで、1 つの場所に 1 つのデータが実現できる。

正規化を行うとテーブルを分離するため、欲しい・見たい表を作成するのに結合操作が必要になってくる。そのため、結合処理が入る分処理が遅くなり性能が下がることがある。

- 更新を行わない
- 高速化が必要

などの場面ではあえて正規化しない場合もある。

正規化には種類があり、

1. 第 1 正規形
2. 第 2 正規形
3. 第 3 正規形
4. ボイスコット正規形・第 4 正規形・第 5 正規形

が存在する。正規化は上から順に行っていく。
分解した関係表を自然結合した時に元に戻すことができる分解の仕方を`情報無損失分解`という。
第 3 正規形までであれば、情報無損失分解である。

### 第 1 正規形

非正規形の関係表から`繰り返し`・`複数値`を排除することを`第1正規形`と呼ぶ。

![イメージ図](/img/svg/Database/normalization/normalization-1.drawio.svg "非正規形→正規形")

### 第 2 正規形

第 1 正規形の条件を満たし、全ての非キー属性が候補キーに完全関数従属する関係表(部分関係従属を取り除く)を`第2正規形`と呼ぶ。

![イメージ図](/img/svg/Database/normalization/normalization-2.drawio.svg "第1正規形 → 第2正規形")

- {受注番号, 製品番号} $\rightarrow$ {値段}
- {受注番号} $\rightarrow$ {顧客番号, 受注者}
- {製品番号} $\rightarrow$ {製品名}

の関係が成り立ち、`顧客番号`, `受注者`, `製品名`は部分関係従属である。これらの関係を取り除く。

#### 完全関数従属

`X`が決まると`Y`が決まるような関係を`関数従属`と呼び、`X → Y`のように表す。
この時の`X`を`決定項`と呼び、`Y`を`従属項`と呼ぶ。

関係従属 X $\rightarrow$ Y において、X の全ての真部分集合 X'において X' $\rightarrow$ Y が成立しない時を`完全関数従属`という。

##### 真部分集合

集合 X の全ての部分集合のうち、全体集合を取り除いた集合を`真部分集合`という。

![イメージ図](/img/svg/Database/normalization/normalization-3.drawio.svg "真部分集合")

#### 部分関係従属

真部分集合においても関係従属が存在する場合を`部分関係従属`という。

例えば、X が決定すると Y が決まる関係(X $\rightarrow$ Y)の時 X,Z が決定すると Y が決まる関係(X,Z $\rightarrow$ Y)であるとも言える。

### 第 3 正規形

第 2 正規形の条件を満たし、全ての非キー属性が候補キーに対して推移的関係従属していない関係表を`第3正規形`と呼ぶ。

![イメージ図](/img/svg/Database/normalization/normalization-4.drawio.svg "第2正規形 → 第3正規形")

- {受注番号} $\rightarrow$ {顧客番号}
- {顧客番号} $\rightarrow$ {受注者名}

の推移的関係従属が存在している。この推移的関係従属を取り除く。

#### 推移的関係従属

X,Y,Z の 3 つの関係が存在し、

1. X $\rightarrow$ Y
2. Y $\nrightarrow$ X
3. Y $\rightarrow$ Z

の 3 つの関係が成り立つ時`推移的関数従属`しているという。
上の図でいうと、

- 受注番号が分かれば顧客番号が分かる
- 顧客番号が分かっても受注番号は分からない
- 顧客番号が分かれば受注者が分かる

となっている。

### ボイスコッド正規形

第 2 正規形・第 3 正規形では非キーに注目して、正規化を行っており、候補キーについては考えられていない。
候補キーの部分関数従属と推移的関数従属を取り除き、次の条件を満たす正規形を`ボイスコッド正規形`という。

1. X $\rightarrow$ Y が自明な関数従属性である
2. X は関係表 R のスーパキーである

`自明な関数従属性`とは X $\rightarrow$ Y である時に Y が X の部分集合である集合である時のことをいう。
{受注番号, 商品番号} $\rightarrow$ {商品番号}のような場合をさす。

`スーパキー`とは関係のタプルを一意に選択できるという条件のみを満たすキーのことをいう。

![イメージ図](/img/svg/Database/normalization/normalization-5.drawio.svg "ベース図")

この関係表では

- {受注番号, 材料名} $\rightarrow$ {商品名}
- {受注番号, 商品名} $\rightarrow$ {材料名}
- {商品名} $\rightarrow$ {材料名}

の関数従属が考えられる。そのため、全てが候補キーとなり、第 3 正規形となっている。

{商品名} $\rightarrow$ {材料名}は{受注番号, 商品名} $\rightarrow$ {材料名}の部分関数従属であり、
{商品名} $\rightarrow$ {材料名}は自明な関数従属性ではなく、商品名はスーパキーでもないので（一意に識別できない）
分解する必要がある。

![イメージ図](/img/svg/Database/normalization/normalization-6.drawio.svg "ボイスコッド正規形")

このようにボイスコッド正規を行うと{受注番号, 材料名} $\rightarrow$ {商品名}の関係従属がなくなってしまう。
このように情報が損失してしまうことを`関係従属性損失`という。

また、関係従属性を保存することを`関係従属保存`という。

### 第 4 正規形

関係従属だけではなく、多値従属性に着目し正規化を行う正規化を `第4正規形`という。
多値従属性とは X が決定した際に、$Y_1, Y_2$, Z が独立して決まる性質のことを指し、X $\rightarrow$$\rightarrow$ Y | Z のように表記する。

![イメージ図](/img/svg/Database/normalization/normalization-7.drawio.svg "ベース図")

この関係表では{受注番号 1}と決まれば、{商品 A, 商品 B}または{送り先 A, 送り先 B}と一意に決定する。つまり、{受注番号}が決まれば、独立して{商品名}と{送り先}が決まるため、次の関係が存在する。
また、{商品名}と{送り先}の間には関係が一切なく、それぞれ独立して決定する。

- {受注番号} $\rightarrow$$\rightarrow$ {商品名 | 送り先}

この関係を{受注番号} $\rightarrow$$\rightarrow$ {商品名}と{受注番号} $\rightarrow$$\rightarrow$ {送り先}
に分ける正規化を行う。

![イメージ図](/img/svg/Database/normalization/normalization-8.drawio.svg "第4正規形")

![イメージ図](/img/svg/Database/normalization/normalization-9.drawio.svg "イメージE-R図")

### 第 5 正規形

関係従属だけはなく、結合従属性に着目し正規化を行う正規化を`第5正規化`という。
結合従属性とは関係が 3 以上に分解可能な従属性のことを指し、n 個に分解できるとき
`n-分解可能`という。

![イメージ図](/img/svg/Database/normalization/normalization-10.drawio.svg "ベース図")

この関係表では{受注番号 1}が決まった際に、{材料名 A, 材料名 B}と決まるが、{商品名 A}が決まった際にも{材料名 A, 材料名 B}が決まる。
{受注番号,　商品名, 材料名}が独立していないため、この関係を分解する。

![イメージ図](/img/svg/Database/normalization/normalization-11.drawio.svg "第5正規化")

![イメージ図](/img/svg/Database/normalization/normalization-12.drawio.svg "イメージE-R図")