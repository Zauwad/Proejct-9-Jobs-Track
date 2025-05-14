import React from 'react';

const Footer = () => {
    return (
        <footer className="footer flex flex-col md:flex-row flex-wrap gap-10 justify-between bg-base-200 text-base-content p-10">
            <nav className="min-w-[200px]">
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>

            <nav className="min-w-[200px]">
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>

            <nav className="min-w-[200px]">
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>

            <form className="w-full md:w-auto">
                <h6 className="footer-title">Newsletter</h6>
                <fieldset className="w-full max-w-xs">
                    <label>Enter your email address</label>
                    <div className="join w-full">
                        <input
                            type="text"
                            placeholder="username@site.com"
                            className="input input-bordered join-item w-full" />
                        <button className="btn btn-primary join-item">Subscribe</button>
                    </div>
                </fieldset>
            </form>
        </footer>
    );
};

export default Footer;
