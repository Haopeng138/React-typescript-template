import ThemeSwitch from "@/components/ThemeSwitch";
import { NavLink } from "react-router-dom";

export default function Home(): JSX.Element {
  return (
    <>
      <h1>Home Page </h1>

      <ThemeSwitch />
    </>
  );
}
