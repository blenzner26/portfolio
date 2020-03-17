import React from "react"
 
function Footer(props) {
  return (
    <div className="footer">
        <div className="footer-content">
            <p>&copy; {(new Date().getFullYear())} Brendan Lenzner</p>
        </div>
    </div>
  )
}
 
export default Footer;