import React from "react";
import { Icon } from "@iconify/react";
import man from "../../assets/man.jpg";
import style from "./Home.module.css";

const Home = () => {
  return (
    <div className={style.home_container}>
      <div className={style.home_main_container}>
        <div className={style.main_left}>
          <div>
            <span>
              <Icon
                style={{ fontSize: "28px", paddingRight: "6px" }}
                icon="clarity:home-solid"
              />
            </span>
            <span>Home</span>
          </div>
          <div>
            <span>
              <Icon
                style={{ fontSize: "28px", paddingRight: "6px" }}
                icon="emojione:man-in-tuxedo"
              />
            </span>
            <span>Administration</span>
          </div>
          <div>
            <span>
              <Icon
                style={{ fontSize: "28px", paddingRight: "6px" }}
                icon="emojione:man-in-suit-levitating"
              />
            </span>
            <span>President Massage</span>
          </div>
          <div>
            <span>
              <Icon
                style={{ fontSize: "28px", paddingRight: "6px" }}
                icon="noto:man-teacher"
              />
            </span>
            <span>Head Teacher Massage</span>
          </div>
          <div>
            <span>
              <Icon
                style={{ fontSize: "28px", paddingRight: "6px" }}
                icon="ant-design:history-outlined"
              />
            </span>
            <span>History</span>
          </div>
          <div>
            <span>
              <Icon
                style={{ fontSize: "28px", paddingRight: "6px" }}
                icon="icon-park:two-hands"
              />
            </span>
            <span>Donor & Founder</span>
          </div>
          <div>
            <span>
              <Icon
                style={{ fontSize: "28px", paddingRight: "6px" }}
                icon="ant-design:code-sandbox-circle-filled"
              />
            </span>
            <span>Mission & Vision</span>
          </div>
          <div>
            <span>
              <Icon
                style={{ fontSize: "28px", paddingRight: "6px" }}
                icon="eos-icons:service-plan"
              />
            </span>
            <span>Master Plan</span>
          </div>
          <div>
            <span>
              <Icon
                style={{ fontSize: "28px", paddingRight: "6px" }}
                icon="noto:woman-student"
              />
            </span>
            <span>Students</span>
          </div>
          <div>
            <span>
              <Icon
                style={{ fontSize: "28px", paddingRight: "6px" }}
                icon="carbon:result"
              />
            </span>
            <span>Result Summery</span>
          </div>
          <div>
            <span>
              <Icon
                style={{ fontSize: "28px", paddingRight: "6px" }}
                icon="clarity:computer-outline-alerted"
              />
            </span>
            <span>Online Activity</span>
          </div>
          <div>
            <span>
              <Icon
                style={{ fontSize: "28px", paddingRight: "6px" }}
                icon="clarity:image-gallery-line"
              />
            </span>
            <span>Gallery</span>
          </div>
          <div>
            <span>
              <Icon
                style={{ fontSize: "28px", paddingRight: "6px" }}
                icon="bx:cloud-download"
              />
            </span>
            <span>Download</span>
          </div>
          <div>
            <span>
              <Icon
                style={{ fontSize: "28px", paddingRight: "6px" }}
                icon="cil:contact"
              />
            </span>
            <span>Contact Us</span>
          </div>
          <div>
            <span>
              <Icon
                style={{ fontSize: "28px", paddingRight: "6px" }}
                icon="ant-design:bank-outlined"
              />
            </span>
            <span>Physical Infrastructure</span>
          </div>
          <div>
            <span>
              <Icon
                style={{ fontSize: "28px", paddingRight: "6px" }}
                icon="gridicons:share-computer"
              />
            </span>
            <span>ICT Lab/Facility</span>
          </div>
          <div>
            <span>
              <Icon
                style={{ fontSize: "28px", paddingRight: "6px" }}
                icon="eos-icons:science"
              />
            </span>
            <span>Science Lab Facility</span>
          </div>
          <div>
            <span>
              <Icon
                style={{ fontSize: "28px", paddingRight: "6px" }}
                icon="simple-line-icons:calender"
              />
            </span>
            <span>Academic Calender</span>
          </div>
        </div>
        <div className={style.main_middle}>
          <div className={style.main_middle_container}>
            <div className={style.main_middle_first}>
              <img src={man} alt="" />
            </div>
            <div className={style.main_middle_last}>
              <h1>Name</h1>
              <h1>Education</h1>
              <h1>Designation</h1>
              <h1>Form</h1>
              <h1>Phone Number</h1>
            </div>
          </div>
        </div>
        <div className={style.main_right}>
          <div className={style.main_right_button_style}>
            <div>
              <Icon
                style={{ fontSize: "28px", paddingRight: "6px" }}
                icon="fe:notice-active"
              />
            </div>
            <div>Notice</div>
          </div>
          <div className={style.main_right_button_style}>
            <div>
              <Icon
                style={{ fontSize: "28px", paddingRight: "6px" }}
                icon="ant-design:login-outlined"
              />
            </div>
            <div>Student Log in</div>
          </div>
          <div className={style.main_right_button_style}>
            <div>
              <Icon
                style={{ fontSize: "28px", paddingRight: "6px" }}
                icon="healthicons:i-training-class"
              />
            </div>
            <div>Class Routine</div>
          </div>
          <div style={{ width: "100%" }}>
            <b>
              <hr />
            </b>
          </div>
          <div className={style.main_right_button_style}>
            <div>Teacher & Staff's Info</div>
          </div>
          <div className={style.main_right_button_style}>
            <div>Old Teacher & Staff's Info</div>
          </div>
          <div className={style.main_right_button_style}>
            <div>Job & Vacancy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
