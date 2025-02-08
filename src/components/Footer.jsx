import React from "react";
import { Button, Form } from "react-bootstrap";
import { IoSearch } from "react-icons/io5";

const Footer = () => {
  return (
    <div>
      <footer className="footer pt-5 mt-5">
        <div className="container">
          <div className="row g-4">
            {/* <!-- Company Info --> */}
            <div className="col-lg-4 col-md-6">
              <h3 className="footer-title">Hobbycue</h3>
              <p className="mb-4">
                We're dedicated to delivering innovative solutions that empower
                businesses to thrive in the digital age.
              </p>
              <div className="social-links mb-4">
                <a href="#">
                  <i className="fab fa-facebook-f ms-2"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter ms-2"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram ms-2"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in ms-2"></i>
                </a>
                <a href="#">
                  <i className="fab fa-youtube ms-2"></i>
                </a>
              </div>
            </div>

            {/* <!-- Quick Links --> */}
            <div className="col-lg-2 col-md-6">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links text-black">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>

            {/* <!-- Support --> */}
            <div className="col-lg-2 col-md-6">
              <h3 className="footer-title">Support</h3>
              <ul className="footer-links">
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Community</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
                <li>
                  <a href="#">Cookie Policy</a>
                </li>
              </ul>
            </div>

            {/* <!-- Newsletter --> */}
            <div className="col-lg-4 col-md-6">
              <h3 className="footer-title">Newsletter</h3>
              <p className="mb-4">
                Subscribe to our newsletter for updates, news, and exclusive
                offers
              </p>
              <Form className="d-flex ms-3">
                <Form.Control
                  type="search"
                  placeholder="SEARCH HEAR"
                  className="rounded-end-0 bg-gray"
                  aria-label="Search"
                />
                <Button
                  variant=""
                  className="bg-custom  rounded-0 rounded-end-3 text-white"
                >
                  Invite
                </Button>
              </Form>
            </div>
          </div>
        </div>

        {/* <!-- Footer Bottom --> */}
        <div className="footer-bottom mt-5" style={{ background: "#F7F5F9" }}>
          <div className="container">
            <div className="row py-3">
              <div className="col-md-6 text-center text-md-center">
                <p className="mb-0">
                  &copy; 2024 Your Company. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
