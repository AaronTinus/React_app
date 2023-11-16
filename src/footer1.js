import './foot.css';
import Nav from 'react-bootstrap/Nav';

function Fubar() {
  return (
    <>
      <Nav  className="fubar " activeKey="/home">
      <h6>SPACEX&copy;2023</h6>
      <ul>
        <li>
          <a  className='footlink' href="https://twitter.com/spacex"  rel="noopener" target="_blank" >TWITTER</a>
        </li>
        <li>
          <a  className='footlink' href="https://www.youtube.com/spacex"  rel="noopener" target="_blank" >YOUTUBE</a>
        </li>
        <li>
          <a  className='footlink' href="https://www.instagram.com/spacex/"  rel="noopener" target="_blank" >INSTAGRAM</a>
        </li>
        <li>
          <a  className='footlink'  href="https://www.flickr.com/photos/spacex"  rel="noopener" target="_blank" >FLICKR</a>
        </li>
        <li>
          <a  className='footlink'  href="https://www.linkedin.com/company/spacex"  rel="noopener" target="_blank">LINKED IN</a>
        </li>
        <li>
          <a  className='footlink' href="/media/privacy_policy_spacex.pdf"  target="_blank">PRIVACY POLICY</a>
        </li>
        <li>
          <a  className='footlink' href="/supplier/" >SUPPLIES</a>
        </li>
        </ul>
        </Nav>
        
    </>
  );
}

export default Fubar;