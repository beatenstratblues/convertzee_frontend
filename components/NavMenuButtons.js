import Link from "next/link";

const NavMenuButtons = ({option, link}) => {
  return (
    <div>
      <Link href={link}>
        <button className="cursor-pointer hover:text-gray-700">{option}</button>
      </Link>
    </div>
  );
};

export default NavMenuButtons;
