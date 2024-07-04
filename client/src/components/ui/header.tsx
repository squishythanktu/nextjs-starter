import { ModeToggle } from "@/components/ui/toggle-theme";
import { PATH } from "@/constants/path.constant";
import Link from "next/link";

export default function header() {
  return (
    <div>
      <ul>
        <li>
          <Link href={PATH.login}>Đăng nhập</Link>
        </li>
        <li>
          <Link href={PATH.register}>Đăng ký</Link>
        </li>
      </ul>
      <ModeToggle />
    </div>
  );
}
