import React from "react";

function Footer(){

    const currentYear = new Date().getFullYear();

    return <footer className="keeper-footer">
        
        Copyright &copy; {currentYear}
        
        <p>Created by Family'sHome</p>
    </footer>
}

export default Footer;