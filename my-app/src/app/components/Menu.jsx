import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { fetchDataFromUrl } from "../utils/api";

const data = [
  { id: 1, name: "Tops", subMenu: true },
  { id: 3, name: "Bottoms", subMenu: true },
  { id: 2, name: "About", url: "/about" },
  { id: 4, name: "Contact", url: "/contact" },
];

const subMenuDataTops = [
  { id: 1, name: "Shirts", doc_count: 11 },
  { id: 2, name: "Jackets", doc_count: 8 },
];
const subMenuDataBottoms = [
  { id: 1, name: "Shorts", doc_count: 11 },
  { id: 2, name: "Pants", doc_count: 8 },
];

const Menu = ({ showSubMenu, setShowSubMenu }) => {
  const [apiData, setApiData] = useState(null);

  const subMenuHandler = () => {
    setShowSubMenu(null);
    console.log("1");
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const fetchCategory = async () => {
    const res = await fetchDataFromUrl("/api/category", {
      cache: "force-cache",
    });
    const data = res.json();
    setApiData(data);
  };

  return (
    <ul className="hidden md:flex items-center gap-8 font-medium text-white">
      <h1>hello</h1>
      {data.map((item) => (
        <li
          key={item.id}
          className="relative group"
          onMouseEnter={() => setShowSubMenu(item.id)}
          onMouseLeave={() => setShowSubMenu(null)}
        >
          {item.subMenu ? (
            <div
              className={`group-hover:block  ${
                showSubMenu === item.id ? "block" : "hidden"
              } absolute top-full left-0 bg-primary-color rounded-lg w-48 py-3 shadow-lg px-3`}
            >
              {item.name === "Tops"
                ? subMenuDataTops.map((subItem, index) => (
                    <Link
                      key={subItem.id}
                      href={`/category/${subItem.name}`}
                      onClick={subMenuHandler}
                      className={`text-white py-3  flex justify-between items-center ${
                        index !== subMenuDataTops.length - 1
                          ? "border-b border-gray-300"
                          : ""
                      }`}
                    >
                      <span>{subItem.name}</span>
                      <span className="text-white">{subItem.doc_count}</span>
                    </Link>
                  ))
                : item.name === "Bottoms"
                ? subMenuDataBottoms.map((subItem, index) => (
                    <Link
                      key={subItem.id}
                      href={`/category/${subItem.name}`}
                      onClick={subMenuHandler}
                      className={`text-white py-3 flex justify-between items-center ${
                        index !== subMenuDataTops.length - 1
                          ? "border-b border-gray-300"
                          : ""
                      }`}
                    >
                      <span>{subItem.name}</span>
                      <span className="text-white">{subItem.doc_count}</span>
                    </Link>
                  ))
                : null}
            </div>
          ) : null}
          <div className="cursor-pointer flex items-center">
            {item.url ? (
              <Link href={item.url}>
                <span className="flex items-center">
                  {item.name}{" "}
                  {item.subMenu && <BsChevronDown className="ml-2" />}
                </span>
              </Link>
            ) : (
              <>
                {item.name} {item.subMenu && <BsChevronDown className="ml-2" />}
              </>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
