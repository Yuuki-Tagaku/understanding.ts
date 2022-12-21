# TypeScript

### TSをJSにコンパイル(変換)してブラウザ状に表示している
<br>

### メリット
* 型推論によりエラーを早い段階で気づくことができる

```s
function add(num1, num2) {
    return num1 + num2
}

console(add('2', '3'))
```
実行時に期待と異なる動さが発生する。<br>
具体的にはadd関数の出力が期待しているのは数値の「５」だが、文字列の「23」が出力される。<br>
TypeScriptのメリットの型推論は実行結果が出力されてからエラーがわかるのではなく、引数を入れる段階で<br>
正しい値かどうかを判断することが出来る。
<br><br>

### JSで型がnumberかどうかを判断する処理（TSでは記載しなくていい）
```s
function add(num1, num2) {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2
  } else {
    return +num1 + +num2;
  }
}
```
