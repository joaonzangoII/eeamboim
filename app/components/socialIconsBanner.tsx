// import Image from "next/image";
import React from "react";

// Define the props type for your component
type MyComponentProps = {
    styles: { [key: string]: string };  // Define the structure of 'items'
};

const SocialIconsBanner: React.FC<MyComponentProps> = ({ styles}) => {

return (
    <div className={`${styles.socialIconsBanner} `}>
        <a href=""><i className={`fab fa-facebook-f ${styles.iconsBanner} ${styles.padding14}`} aria-hidden="true"></i></a>
        <a href=""><i className={`fab fa-whatsapp ${styles.iconsBanner}`} aria-hidden="true"></i></a>
    </div>
)
}

export default SocialIconsBanner