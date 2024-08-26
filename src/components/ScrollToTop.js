import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = (props) => {
    const { pathname, hash } = useLocation();
    
    useEffect(() => {
        if (hash) {
            // Scroll to the element with the matching id
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Scroll to the top if there's no hash
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }
    }, [pathname, hash]);
  
    return <>
        {props.children}
    </>;
};

export default ScrollToTop;
