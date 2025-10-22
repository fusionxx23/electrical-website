export const MenuLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex justify-center">
      <a
        href={href}
        className="flex  justify-center items-centerr w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white  hover:bg-gray-50 focus:outline-none"
      >
        {children}
      </a>
    </div>
  );
};
