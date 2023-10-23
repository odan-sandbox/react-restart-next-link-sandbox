import { Button, NavItem } from "@restart/ui";
import Link from "next/link";

export default function Home() {
  const MyLink: React.ElementType = () => <div>link</div>;
  return (
    <div>
      {/* occurred type errors */}
      <Button as={Link}></Button>
      <Button as={MyLink}></Button>
      {/* not occurred type errors */}
      <NavItem as={Link}></NavItem>
      <NavItem as={MyLink}></NavItem>
    </div>
  );
}
