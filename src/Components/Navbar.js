import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav>
      <Link to="/">ホーム</Link>
      <Link to="/CreatePost">記事投稿</Link>
      <Link to="/Login">ログイン</Link>
    </nav>
  )
}
