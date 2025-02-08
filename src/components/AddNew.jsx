import { Button, Container } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";

const AddNew = () => {
  return (
    <div className="mt-5" style={{background: '#F7FDFF',padding:'80px'}}>
      <Container>
        <div className="bg-white border " style={{}}>
          <div className="container p-5">
            <h3 className="d-flex gap-4 align-content-center mb-4">
              <span
                style={{
                  width: "30px", // Set a fixed width
                  height: "30px", // Set a fixed height
                  background: "#0096c8", // Set the background color
                }}
                className="rounded-circle d-flex justify-content-center align-items-center"
              >
                <FaPlus size={20} className="text-white" />
              </span>
              Add your own
            </h3>

            <p>
              Are you a teacher or expert? Do you sell or rent out equipment,
              venue or event tickets? Or, you know someone who should be on
              hobbycue? Go ahead and Add your Own page
            </p>
            <Button variant="" className='px-4 mt-3' style={{border:'1px solid #8064A2', color: '#8064A2'}}>Add New</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AddNew;
