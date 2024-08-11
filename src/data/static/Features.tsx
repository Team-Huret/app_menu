import { MdRestaurantMenu } from "react-icons/md";
import { IoIosCalendar } from "react-icons/io";
import { BiParty } from "react-icons/bi";
import { MdOutlineDiscount } from "react-icons/md";
import { IoAnalytics } from "react-icons/io5";

export const features = [
  {
    feature_name: "menu",
    title: "Digital Menu",
    description: "Create, edit and publish a digital menu of your products.",
    icon: <MdRestaurantMenu style={{ fontSize: "24px" }} />,
  },
  {
    feature_name: "booking",
    title: "Online Booking",
    description: "Manage bookings of your business in one place.",
    icon: <IoIosCalendar style={{ fontSize: "24px" }} />,
  },
  {
    feature_name: "event",
    title: "Event Manager",
    description: "Organize all your events with ease, from planning to execution.",
    icon: <BiParty style={{ fontSize: "24px" }} />,
  },
  {
    feature_name: "discount",
    title: "Promotional Discounts",
    description: "Manage promotional discounts to attract more customers and boost sales.",
    icon: <MdOutlineDiscount style={{ fontSize: "24px" }} />,
  },
  {
    feature_name: "analytics",
    title: "Analytics",
    description: "Access valuable data and analytics to optimize your business strategies.",
    icon: <IoAnalytics style={{ fontSize: "24px" }} />,
  },
];
