import Link from "next/link";

const Links = () => {
  const links = [
    {
      name: "Homepage",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div>
      {links.map((link) => (
        <Link href={link.path} key={link.name}>
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Links;
