import React from "react";
import { Button, Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { IoMdLock } from "react-icons/io";

const Banner = () => {
  return (
    <div className="" style={{ background: "#f7f5f9", paddingTop: "100px" }}>
      <Container>
        <div
          style={{ gap: "100px" }}
          className="d-flex justify-content-between"
        >
          <div className="w-50">
            <h1 className="fs-1 mb-5">
              Explore your <span className="hobby"> hobby</span> or{" "}
              <span className="passion">passion</span>
            </h1>
            <p className="text-justify">
              Sign-in to interact with a community of fellow hobbyists and an
              eco-system of experts, teachers, suppliers, classes, workshops,
              and places to practice, participate or perform. Your hobby may be
              about visual or performing arts, sports, games, gardening, model
              making, cooking, indoor or outdoor activities…
              <br />
              <br /> If you are an expert or a seller, you can Add your Listing
              and promote yourself, your students, products, services or events.
              Hop on your hobbyhorse and enjoy the ride.
            </p>
            <img className="mt-5" src="/public/vector.svg" alt="" />
          </div>
          {/* sign in part */}
          <div className="w-50">
            <div className="underline-tabs mb-5">
              <ul className="nav nav-tabs" id="underlineTabs" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="home-tab2"
                    data-bs-toggle="tab"
                    data-bs-target="#home2"
                    type="button"
                    role="tab"
                  >
                    Sign In
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="profile-tab2"
                    data-bs-toggle="tab"
                    data-bs-target="#profile2"
                    type="button"
                    role="tab"
                  >
                    Join In
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="underlineTabsContent">
                {/* Sign In content  */}
                <div
                  className="tab-pane fade show active"
                  id="home2"
                  role="tabpanel"
                >
                  {/*  */}
                  <div className="">
                    <div className="row justify-content-center mt-5">
                      <div className="col-md-9">
                        <div className="">
                          <div className="card-body">
                            <div className="d-grid gap-2 mb-3">
                              <button className="google-btn rounded-2">
                                <img
                                  width={40}
                                  height={40}
                                  style={{ marginRight: "50px" }}
                                  src="https://img.icons8.com/color/48/000000/google-logo.png"
                                  alt="Google Logo"
                                />
                                <span className="">Continue with Google</span>
                              </button>

                              <button className="facebook-btn rounded-2">
                                <img
                                  width={40}
                                  height={40}
                                  style={{ marginRight: "40px" }}
                                  src="https://themayanagari.com/wp-content/uploads/2020/09/Facebook-Logo-Png-Image-Free-Download.jpg"
                                  alt="Google Logo"
                                />
                                <span className="">Continue with Facebook</span>
                              </button>
                            </div>
                            <div className="d-flex align-items-center my-4">
                              <hr className="flex-grow-1" />
                              <span className="mx-2 text-muted">
                                Or connect with
                              </span>
                              <hr className="flex-grow-1" />
                            </div>
                            <form>
                              <div className="mb-3">
                                <input
                                  type="email"
                                  className="form-control"
                                  id="email"
                                  required
                                />
                              </div>
                              <div className="mb-3">
                                <input
                                  type="password"
                                  className="form-control"
                                  id="password"
                                  required
                                />
                              </div>
                              <div className="d-flex gap-5 mb-3 form-check">
                                <div>
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="rememberMe"
                                  />
                                  <label
                                    className="form-check-label"
                                    for="rememberMe"
                                  >
                                    Remember me
                                  </label>
                                </div>
                                <div className="">
                                  <a
                                    href="#"
                                    className="text-decoration-none text-black"
                                  >
                                    <IoMdLock /> Forgot password?
                                  </a>
                                </div>
                              </div>
                              <div className="d-grid">
                                <button type="submit" className="p-2 rounded-2">
                                  <span className="">
                                    Continue with Facebook
                                  </span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* join content */}
                <div className="tab-pane fade" id="profile2" role="tabpanel">
                  <h4>Profile Content</h4>
                  <p>This is the profile tab content with underline style.</p>
                </div>
                <div className="tab-pane fade" id="contact2" role="tabpanel">
                  <h4>Contact Content</h4>
                  <p>This is the contact tab content with underline style.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
