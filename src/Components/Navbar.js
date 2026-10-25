import { Link } from "react-router-dom";

//ナビゲーションメニューのスタイル
const linkClassName =
  "text-white no-underline transition-all duration-300 hover:text-[#5f9ea0]";

export const Navbar = () => {
  return (
    <nav className= "bg-[#cb8454] flex justify-center items-center gap-[45px] h-[50px]">
      <Link className={linkClassName} to="/">
        ホーム
      </Link>
      <Link className={linkClassName} to="/CreatePost">
        記事投稿
      </Link>
      <Link className={linkClassName} to="/Login">
        ログイン
      </Link>
    </nav>
  )
}
