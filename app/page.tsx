import Link from "next/link";
import TopBarMenu from "./components/topbar";

export default function Home() {
  return (
    <div>
      <TopBarMenu/>
      <h1>Hello world, to my landig page, this is a qr code generate.</h1>
      <Link href="/generate">Generate page</Link>
      <Link href="/about"> About page</Link>
    </div>
  );
}
