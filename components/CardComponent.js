import Link from "next/link";

const CardComponent = ({ type, list }) => {
  return (
    <div className="border-2 border-gray-300 rounded-lg p-6 w-70 bg-white shadow-xl">
      <h1 className="text-2xl text-center font-head font-semibold">{type} Conversions</h1>
      <ul className="list-disc list-inside mt-4 space-y-2 px-4">
        {list.map((item) => (
          <li key={item}>
            <Link
              href={`/convert/${type.toLowerCase()}/${item.toLowerCase()}`}
            >
              {type} to {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardComponent;
