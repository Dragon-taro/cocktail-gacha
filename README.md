# カクテルガチャ

katharsis での hacker's bar 用のカクテルガチャ

## 設計

### `/domain`

ビジネスロジックとエンティティ（型定義）をしている。（たぶん）テンプレートメソッドパターン。

サービスクラスとしてビジネスロジックを切り出すのが react/redux の思想に反していないかは不明。

### `/redux`

re-ducks パターンで実装。loading の timeout には redux-thunk を使ってる
