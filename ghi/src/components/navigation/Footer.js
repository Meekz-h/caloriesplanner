import { Typography } from "@material-tailwind/react";
import { vector } from "../../assets/static";

function Footer() {
  return (
    <footer className="w-full bg-white">
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <img src={vector} alt="logo-ct" className="object-contain h-8" />
        <div className="w-full max-w-screen-xl mx-auto">
          <Typography
            color="black"
            className="mx-auto text-center md:justify-between font-normal items-center"
          >
            &copy; 2023 Foodies™. All rights reserved.
          </Typography>
        </div>

        <ul className="flex flex-wrap items-center gap-y-2 gap-x-6 mr-2 mb-4">
          <li>
            <Typography
              as="a"
              href="/about"
              color="black"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="/contact"
              color="black"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
