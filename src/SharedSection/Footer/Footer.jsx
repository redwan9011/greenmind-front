import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";


const Footer = () => {
    return (
        <div>
            <footer className="  bg-cyan-200 text-base-content">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row px-4 md:px-7 lg:px-0 items-center justify-between py-10">
                    <aside className="flex items-center justify-center gap-24 mb-4 md:flex-col md:gap-0 md:mb-0">
                        <div>
                        <h1 className="font-mono text-xl font-semibold">GREENMIND</h1>
                        <p className="text-sm text-gray-500 my-2">We help you find <br /> your dream product</p>
                        </div>
                        <div className="flex items-center gap-2 pt-2 text-xl">
                            
                            <FaFacebook></FaFacebook>
                            <FaInstagram></FaInstagram>
                            <FaTwitter></FaTwitter>
                        </div>

                    </aside>
                    <div className="flex gap-3 md:gap-8">
                        <nav className="flex flex-col">
                            <h6 className="footer-title">Services</h6>
                           <div className="flex flex-col">
                           <a className="link link-hover">Branding</a>
                            <a className="link link-hover">Design</a>
                            <a className="link link-hover">Marketing</a>
                            <a className="link link-hover">Advertisement</a>
                           </div>
                        </nav>
                        <nav className="flex flex-col">
                            <h6 className="footer-title">Company</h6>
                          <div  className="flex flex-col">
                          <a className="link link-hover">About us</a>
                            <a className="link link-hover">Contact</a>
                            <a className="link link-hover">Jobs</a>
                            <a className="link link-hover">Press kit</a>
                          </div>
                        </nav>
                        <nav className="flex flex-col">
                            <h6 className="footer-title">Legal</h6>
                           <div className=" flex flex-col">
                           <a className="link link-hover">Terms of use</a>
                            <a className="link link-hover">Privacy policy</a>
                            <a className="link link-hover">Cookie policy</a>
                           </div>
                        </nav>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;