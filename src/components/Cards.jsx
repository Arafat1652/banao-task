import { Button, Container } from "react-bootstrap";
import { FaCalendarCheck, FaMapMarkerAlt, FaUsers } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";

const Cards = () => {
  return (
    <Container>
    <div className="row justify-content-center align-content-center gap-3 mt-5 mb-5">
      {/* Card 1 */}
      <div className="col-md-5">
        <div className="card custom-card1 p-4">
          <div className="card-body">
            <h5 className="card-title mb-3">
              <span className="me-3" style={{ color: "#8064A2" }}>
                <FaUsers size={30} />
              </span>
              People
            </h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <Button variant="" className='px-4' style={{border:'1px solid #8064A2', color: '#8064A2'}}>Connect</Button>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-md-5">
        <div className="card custom-card2 p-4">
          <div className="card-body">
            <h5 className="card-title mb-3">
              <span className="me-3" style={{ color: "#77933c" }}>
                <FaMapMarkerAlt size={30} />
              </span>
              Places
            </h5>
            <p className="card-text">
              Find a class, school, playground, auditorium, studio, shop, or
              an event venue. Book a slot at venues that allow booking through
              hobbycue.
            </p>
            <Button variant="" className='px-4' style={{border:'1px solid #8064A2', color: '#8064A2'}}>Meet up</Button>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col-md-5">
        <div className="card custom-card3 p-4">
          <div className="card-body">
            <h5 className="card-title mb-3">
              <span className="me-3" style={{ color: "#C0504D" }}>
                <TiShoppingCart size={30} />
              </span>
              Product
            </h5>
            <p className="card-text">
              Find  required for your hobby. Buy, rent,
              or borrow from shops, online stores, or community members.
            </p>
            <Button variant="" className='px-4' style={{border:'1px solid #8064A2', color: '#8064A2'}}>Get it</Button>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="col-md-5">
        <div className="card custom-card4 p-4">
          <div className="card-body">
            <h5 className="card-title mb-3">
              <span className="me-3" style={{ color: "#0096C8" }}>
                <FaCalendarCheck size={30} />
              </span>
              Program
            </h5>
            <p className="card-text">
              Find events, meetups, and workshops related to your hobby.
              Register or buy tickets online.
            </p>
            <Button variant="" className='px-4' style={{border:'1px solid #8064A2', color: '#8064A2'}}>Attend</Button>
          </div>
        </div>
      </div>
    </div>
  </Container>
  );
};

export default Cards;
