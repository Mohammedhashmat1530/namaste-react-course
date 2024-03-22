  import { LINKEDIN } from "../utils/links";
  
  // Footer component for footer section
  const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <div className="footer">
        Created By 💓
        
        <a className='linkedin' href={LINKEDIN} target="_blank">
          Md Hashmat
        </a>
        ©️
        {year}
        <strong>
          Food<span>Express</span>
        </strong>
      </div>
    );
  };


  export default Footer;