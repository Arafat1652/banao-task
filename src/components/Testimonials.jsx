import React from "react";
import { Button, Container } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { PiCommandThin } from "react-icons/pi";

const Testimonials = () => {
  return (
    <Container>
      <div className=" border mt-5" style={{ background: "#F7F5F9" }}>
        <div className="container px-5 pt-5">
          <h4 className="d-flex gap-4 align-content-center mb-4">
            <span
              style={{
                width: "30px",
                height: "30px",
                background: "#8064A2",
              }}
              className="rounded-circle d-flex justify-content-center align-items-center"
            >
              <PiCommandThin size={20} className="text-white" />
            </span>
            Testimonials
          </h4>

          <p>
            In a fast growing and ever changing city like Bangalore, it
            sometimes becomes very difficult to find or connect with like minded
            people. Websites like hobbycue.com is a great service which helps me
            get in touch with, communicate, connect, and exchange ideas with
            other dancers. It also provides the extra benefit of finding
            products and services that I can avail, which I can be assured is
            going to be of great quality as it comes recommended by people of
            the hobbycue community. To have discussions, to get visibility, and
            to be able to safely explore various hobbies and activities in my
            city, all under one roof, is an excellent idea and I highly
            recommend it.
          </p>
        </div>
        <div>
          <div className="testimonial-card px-4 position-relative mx-3">
            <div className="row align-items-center">
              <div className="col-md-8 p-4">
                <audio
                  src="/audio.mp3"
                  controls
                  className="w-75"
                 
                  style={{
                    paddingBottom:'20px',
                    width: "776px", // Match the width
                    height: "100px", // Match the height
                    borderRadius: "8px", // Rounded corners
                    backgroundColor: "rgb(204, 193, 218)", // Background color
                    outline: "none", // Remove default outline (optional)
                  }}
                ></audio>
              </div>
              <div className="col-md-4 text-center d-flex justify-content-center gap-4 align-items-center">
                <img
                  width={100}
                  height={100}
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjEZKd4E36NAIuPaTAiIZYJLbHiMrimoYvfBIebRwt1pLH7rZpKHTncdZckdXoxBP4LN34o8hYZ3sldDGchMhBLDpV-BeH8ccEffYzChAPm6Ln6CYfZI51Ftzl5h9eFI7xA9t59XDGUMgh5/s1600/Indian+culture+dance+bharatha+natyam+18-Aug-13+9-46-59+AM.jpg"
                  className="avatar mb-3 rounded-circle"
                  alt="User Avatar"
                />
                <div>
                  <h6 className="mb-1" style={{ color: "#8064A2" }}>
                    Sarah Johnson
                  </h6>
                  <p className="mb-0 text-primary">Product Designer</p>
                </div>
                {/* <audio controls></audio> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Testimonials;
