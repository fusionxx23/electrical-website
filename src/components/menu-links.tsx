import { MenuLink } from "./menu-link";
import { ServiceDropdown } from "./service-dropdown";

export const MenuLinks = (props: {}) => {
  return (
    <>
      <MenuLink href="/">About Us</MenuLink>
      <MenuLink href="/">Contact</MenuLink>
      <ServiceDropdown />
    </>
  );
};
