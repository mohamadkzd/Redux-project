import { RiAlarmAddLine, RiHome2Line, RiHome4Line, RiProductHuntLine } from "@remixicon/react";

const sidebar = [
  {
    id: 1,
    name: "صفحه ی اصلی",
    linkAddress: "/",
    icon: <RiHome4Line className="w-[20px] h-[20px] fill-neutral-900"  />,
  },
  {
    id: 2,
    name: " محصولات ",
    linkAddress: "/products",
    icon: <RiProductHuntLine className="w-[20px] h-[20px] fill-neutral-900" />,
  },
  {
    id: 3,
    name: "درباره ما",
    linkAddress: "/about-us",
    icon: <RiAlarmAddLine className="w-[20px] h-[20px] fill-neutral-900" />,
  },
  {
    id: 4,
    name: "تماس با ما",
    linkAddress: "/contact-us",
    icon: <RiHome4Line className="w-[20px] h-[20px] fill-neutral-900"  />,
  },
];

export default sidebar;