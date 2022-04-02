import { Link } from "react-router-dom";
import { useState } from "react";


const data = [
{
    displayname: "Home",
    path: "/",
},
{
    displayname: "Product",
    path: "/product",
},
{
    displayname: "Contact",
    path: "/Contact",
},
{
    displayname: "Blog",
    path: "/blog",
},
];

const NavBar = (props) => {
    const {classLink, classUl, onClickShow} = props;
    const [show, setShow] = useState(true);
    // Show menu
    const handleShow = (e) => {
        setShow(!show);
    };
    return ( 
        <>
        <ul className={classUl}>
            {data.map((item, i) => (
              <Link
                onClick={() => {
                    if(onClickShow){
                        handleShow();
                    }
                    }}
                to={item.path}
                key={i}
                className={classLink}
              >
                <li>{item.displayname}</li>
              </Link>
            ))}
          </ul>
        </>
     );
}
 
export default NavBar;