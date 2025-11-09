import Link from "next/link";

const NavMenuButtons = ({ option, link }) => {
  return (
    <div>
      <Link href={link}>
        <button className="cursor-pointer hover:bg-gray-200 py-2 px-4 rounded-4xl transition-all">
          {option}
        </button>
      </Link>
    </div>
  );
};

export default NavMenuButtons;
