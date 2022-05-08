import Link from "next/link"
import Head from 'next/head'

import type { NextPage } from 'next'

const Home: NextPage = () => (
  <>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <section>
      <Link href="/api/item/readAll">アイテム一覧</Link>
    </section>

    <br /> <br />

    <section>
      <h1>ログイン</h1>
      <form action="http://localhost:3000/api/user/login/" method="POST">
        メールアドレス : <input type="text" name="email" /> <br />
        パスワード : <input type="password" name="password" /> <br />
        <button type="submit">ログイン</button>
      </form>
    </section>

    <br /> <br />

    <section>
      <h1>アイテムを作成する</h1>
      <form action="http://localhost:3000/api/item/create" method="POST">
        タイトル <input type="text" name="title" /> <br />
        画像 <input type="text" name="image" /> <br />
        価格 <input type="text" name="price" /> <br />
        説明 <input type="text" name="description" /> <br />
        メールアドレス <input type="text" name="email" /> <br />
        <button type="submit">投稿</button>
      </form>
    </section>

    <section>
      <h1>アイテムを削除する</h1>
      <form action="http://localhost:3000/api/item/delete/627605a52835f61d149cab0e" method="POST">
        タイトル <input type="text" name="title" /> <br />
        画像 <input type="text" name="image" /> <br />
        価格 <input type="text" name="price" /> <br />
        説明 <input type="text" name="description" /> <br />
        メールアドレス <input type="text" name="email" /> <br />
        <button type="submit">投稿</button>
      </form>
    </section>

    <br /> <br />

    <section>
      <h1>ユーザーを作成する</h1>
      <form action="http://localhost:3000/api/user/register" method="POST">
        名前 : <input type="text" name="name" /> <br />

        メールアドレス : <input type="text" name="email" /> <br />

        パスワード : <input type="password" name="password" /> <br />

        <button type="submit">作成</button>
      </form>
    </section>
  </>
)

export default Home
