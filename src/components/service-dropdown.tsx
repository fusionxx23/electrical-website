import { MenuLink } from "./menu-link";

export const ServiceDropdown = (props: {}) => {
  return (
    <div className="relative inline-block text-left group">
      <div className="">
        <MenuLink href="#">
          <span>Services</span>
          <div className="flex justify-center items-center">
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </MenuLink>
      </div>
      <div className="absolute left-0 pt-1 w-40 origin-top-left   opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition duration-150 ease-in-out z-10">
        <div className="bg-white border border-gray-200 rounded-md shadow-lg">
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Option 1
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Option 2
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Option 3
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
