# TypeScript

### TS を JS にコンパイル(変換)してブラウザ状に表示している

<br>

### メリット

- 型推論によりエラーを早い段階で気づくことができる

```s
function add(num1, num2) {
    return num1 + num2
}

console(add('2', '3'))
```

実行時に期待と異なる動さが発生する。<br>
具体的には add 関数の出力が期待しているのは数値の「５」だが、文字列の「23」が出力される。<br>
TypeScript のメリットの型推論は実行結果が出力されてからエラーがわかるのではなく、引数を入れる段階で<br>
正しい値かどうかを判断することが出来る。
<br><br>

### JS で型が number かどうかを判断する処理（TS では記載しなくていい）

```s
function add(num1, num2) {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2
  } else {
    return +num1 + +num2;
  }
}
```
