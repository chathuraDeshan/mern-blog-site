import { Footer } from "flowbite-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const FooterCom = () => {
    return (
        <Footer container className="bg-white text-blue-700 border-t border-gray-200">
      <div className="w-full py-8 px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Site Name */}
        <div className="md:col-span-1 dark:text-white">
          <h2 className="text-2xl font-bold">TEC TALK</h2>
          <p className="text-sm mt-2">The Technology Is Arrival</p>
        </div>

        {/* About Section */}
        <div>
          <Footer.Title className="text-blue-700 uppercase text-lg font-semibold">
            About
          </Footer.Title>
          <Footer.LinkGroup col>
            <Footer.Link href="#" className="hover:underline">
              Learn more about TEC TALK
            </Footer.Link>
            <Footer.Link href="#" className="hover:underline">
              Contact Us
            </Footer.Link>
          </Footer.LinkGroup>
        </div>

        {/* Legal Section */}
        <div>
          <Footer.Title className="text-blue-700 uppercase text-lg font-semibold">
            Legal
          </Footer.Title>
          <Footer.LinkGroup col>
            <Footer.Link href="#" className="hover:underline">
              Privacy Policy
            </Footer.Link>
            <Footer.Link href="#" className="hover:underline">
              Terms & Conditions
            </Footer.Link>
          </Footer.LinkGroup>
        </div>

        {/* Follow Us Section */}
        <div>
          <Footer.Title className="text-blue-700 uppercase text-lg font-semibold">
            Follow Us
          </Footer.Title>
          <div className="flex gap-4 mt-2">
            <Footer.Link href="https://linkedin.com" className="hover:text-blue-500 dark:text-white">
              <FaLinkedin className="w-6 h-6 " />
            </Footer.Link>
            <Footer.Link href="https://twitter.com" className="hover:text-blue-500 dark:text-white">
              <FaTwitter className="w-6 h-6" />
            </Footer.Link>
            <Footer.Link href="https://github.com" className="hover:text-blue-500 dark:text-white">
              <FaGithub className="w-6 h-6" />
            </Footer.Link>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-gray-300 py-4 px-4 flex flex-col sm:flex-row justify-between items-center text-sm">
        <span>
          © 2025{" "}
          <a href="/" className="font-semibold hover:underline">
            TEC TALK™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </Footer>
      );
}

export default FooterCom