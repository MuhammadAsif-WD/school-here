import React from "react";
import school from "../../assets/school.png";
import style from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <div className={style.header_container}>
        <div className={style.header_img}>
          <img src={school} alt="" />
        </div>
        <div className={style.header_middle}>
          <h1>
            <span>এখানে বাংলায় স্কুলের নাম হবে</span>
            <br />
            <span>School Name Here</span>
            <br />
            <span>Address</span>
            <span className={style.span_container}>
              <span>www.school.edu.bd</span>
              <span>Gmail: school@gmail.com</span>
            </span>
          </h1>
        </div>
        <div className={style.header_right_corner}>
          <div>
            <p>Established:15/8/2000</p>
            <p>EIIN: 5445</p>
            <p>SCHOOL CODE: 111113</p>
          </div>
        </div>
      </div>
      <div>
        <div className={style.news}>
          <h1>Latest News :</h1>
          <h1>Notic Rolling bar</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
