import React from 'react';
import { Button, Container } from 'react-bootstrap';

const Community = () => {
    return (
        <div className="mt-5" style={{background: '#F7FDFF',paddingTop:'80px'}}>
      <Container>
      <h1 className="fs-1 mb-5">
              Your <span className="passion"> Hobby</span>, Your{" "}
              <span className="hobby">Community...</span>
            </h1>
            <Button variant="" className='px-4 mb-5 bg-custom text-white'>Get Started</Button>
       
          
            <img className='img-fluid' src="/public/community.svg" alt="" srcset="" />

            
         
      </Container>
    </div>
    );
};

export default Community;