import React from "react";
import "./Contact.css";

const Contact = props => <div className="contact">{props.children}

<h1>
    Contact
</h1>
<p> 
    You can give me a call on +1 832 293 5128, or send me an email on
    <a class="email" href="mailto:aramideeichie@yahoo.com">aramideeichie@yahoo.com</a>
    
    Or you can check me out on <a class="facebook" href="https://www.facebook.com/aramide.ogedengbe"> Facebook</a>
    
    I’m on <a class="instagram"         href="https://www.instagram.com/aramideogedengbe/">Instagram</a> too
    
    Or you may want to go to my <a class="instagram" href="https://www.instagram.com/aramideogedengbe/">LinkedIn </a> page
</p>
</div>;

export default Contact;
