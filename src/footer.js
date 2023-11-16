import './App.css';
import Nav from 'react-bootstrap/Nav';

function Fubar() {
  return (
    <>
      <Nav  className="fubar justify-content-center" activeKey="/home">
      <Nav.Item>
      <h6>SPACEX&copy;2023</h6>
      </Nav.Item>
          <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
          </Nav.Link>
          </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" className='link1' href="https://twitter.com/spacex" aria-label="SpaceX's Twitter Account" rel="noopener" target="_blank" >TWITTER</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  className='link1' href="https://www.youtube.com/spacex" aria-label="SpaceX's YouTube Account" rel="noopener" target="_blank" >YOUTUBE</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  className='link1' href="https://www.instagram.com/spacex/" aria-label="SpaceX's Instagram Account" rel="noopener" target="_blank" >INSTAGRAM</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" className='link1'  href="https://www.flickr.com/photos/spacex" aria-label="SpaceX'S Flickr Account" rel="noopener" target="_blank" >FLICKR</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" className='link1'  href="https://www.linkedin.com/company/spacex" aria-label="SpaceX's LinkedIn Account" rel="noopener" target="_blank">LINKED IN</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" className='link1' href="/media/privacy_policy_spacex.pdf" aria-label="SpaceX's Privacy Policy" target="_blank">PRIVACY POLICY</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" className='link1' href="/supplier/" aria-label="Information for SpaceX suppliers">SUPPLIES</Nav.Link>
        </Nav.Item>
        </Nav>
        
    </>
  );
}

export default Fubar;