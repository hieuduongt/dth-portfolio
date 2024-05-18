import { useContext } from "react";
import { AppContext } from "../../App";
import { Button } from "../../components/Button";
import { BsPhone } from 'react-icons/bs';
import { FaMapLocationDot } from 'react-icons/fa6';
import { FaBirthdayCake, FaUser, FaDownload } from 'react-icons/fa';
import { GiSkills } from "react-icons/gi";
import { AiTwotoneMail } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';
import { TypeAnimation } from 'react-type-animation';
import { Window } from "../../Layouts/Window";
import { PiBagSimpleFill } from "react-icons/pi";
import { MdCastForEducation } from "react-icons/md";

const Content = (props) => {
    const { theme, className } = props;
    return (
        <div className={className}>
            <div className="avatar-content">
                <div>
                    <div className="avatar">
                        <img src="avatar.jpg" alt="Hieu dep trai" />
                    </div>

                    <div className="introduce-animated">
                        <IoIosArrowForward />
                        <div className="introduce-text">
                            <TypeAnimation
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                sequence={[
                                    'I am Hieu Duong',
                                    1000,
                                    'I am a web developer',
                                    1000,
                                    'If you are interested in',
                                    1000,
                                    'Feel free to contact me',
                                    1000
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="my-cv">
                <a href="Duong_Thanh_Hieu_Software_Engineer.pdf" download="Duong_Thanh_Hieu_Software_Engineer" target='_blank'>
                    <Button icon={<FaDownload size={20} />} color="success-color">
                        Download my CV
                    </Button>
                </a>

            </div> */}
            <div className="profile">
                <div className={`info ${theme} br-1 right-profile`}>
                    <div className="summary-info bd-b">
                        <Button icon={<BsPhone size={25} />} icononly="true" color="error-color" />
                        <div className="summary-text">
                            <div className="summary-text-title">
                                Phone
                            </div>
                            <div className="summary-text-content">
                                +84396346126
                            </div>
                        </div>
                    </div>
                    <div className="summary-info bd-b">
                        <Button icon={<FaMapLocationDot size={25} />} icononly="true" color="warning-color" />
                        <div className="summary-text">
                            <div className="summary-text-title">
                                Location
                            </div>
                            <div className="summary-text-content">
                                Ha Noi, Viet Nam
                            </div>
                        </div>
                    </div>
                    <div className="summary-info bd-b">
                        <Button icon={<AiTwotoneMail size={25} />} icononly="true" color="default-color" />
                        <div className="summary-text">
                            <div className="summary-text-title">
                                Email
                            </div>
                            <div className="summary-text-content">
                                hieu.developer.19@gmail.com
                            </div>
                        </div>
                    </div>
                    <div className="summary-info bd-b">
                        <Button icon={<FaBirthdayCake size={25} />} icononly="true" color="success-color" />
                        <div className="summary-text">
                            <div className="summary-text-title">
                                Birthday
                            </div>
                            <div className="summary-text-content">
                                19 Jan 1997
                            </div>
                        </div>
                    </div>
                    <div className="summary-info">
                        <div className="skills">
                            <div className="skill-title">
                                <Button icon={<GiSkills size={25} />} icononly="true" color="warning-color" />
                                <span>Skills</span>
                            </div>

                            <div className="skill">
                                <div className="skill-name">
                                    Linux/Windows
                                </div>
                                <div className="level"><div className="progress level-progress-90"></div></div>
                            </div>
                            <div className="skill">
                                <div className="skill-name">Node.js</div>
                                <div className="level"><div className="progress level-progress-90"></div></div>
                            </div>
                            <div className="skill">
                                <div className="skill-name">MongoDB</div>
                                <div className="level"><div className="progress level-progress-75"></div></div>
                            </div>
                            <div className="skill">
                                <div className="skill-name">React</div>
                                <div className="level"><div className="progress level-progress-90"></div></div>
                            </div>
                            <div className="skill">
                                <div className="skill-name">HTML & CSS</div>
                                <div className="level"><div className="progress level-progress-90"></div></div>
                            </div>
                            <div className="skill">
                                <div className="skill-name">MS SQL</div>
                                <div className="level"><div className="progress level-progress-90"></div></div>
                            </div>
                            <div className="skill">
                                <div className="skill-name">JavaScript</div>
                                <div className="level"><div className="progress level-progress-90"></div></div>
                            </div>
                            <div className="skill">
                                <div className="skill-name">C#</div>
                                <div className="level"><div className="progress level-progress-90"></div></div>
                            </div>

                        </div>


                    </div>
                </div>
                <div className={`info ${theme} br-1 left-profile`}>
                    <div className="summary-content">
                        <h1 className="summary-title">
                            <FaUser />Summary
                        </h1>
                        <div className="profile-content">
                            <ul>
                                <li>
                                    4 years of software development experience including software
                                    requirement analysis, implementing and supporting, DevOps engineering
                                    for ensuring product quality.
                                </li>
                                <li>
                                    4 years experience in .NET Web application development.
                                </li>
                                <li>
                                    3 years experience in testing automation framework(selenium,
                                    puppeteer).
                                </li>
                                <li>
                                    I am a developer of the year 2022 and also one of the top excellent developers of the year 2021 of Nashtech.
                                </li>
                                <li>
                                    Strong in problem-solving, analyzing requirements, troubleshooting skills,
                                    and logical thinking.
                                </li>
                                <li>
                                    Strong in sharing knowledge, taking on many tasks, helping others, and
                                    carrying teammates.
                                </li>
                                <li>
                                    Willing to learn new techniques, new tools, and new business areas.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="summary-content">
                        <h1 className="summary-title">
                            <PiBagSimpleFill />Employment History
                        </h1>
                        <div className="project">
                            <div className="project-name">
                                Engineer professionals, Vietinbank
                            </div>
                            <div className="project-date">
                                May 2024 - Current
                            </div>
                            <ul className="project-description">
                                <li>
                                    Description:
                                </li>
                                <ul>
                                    <li>
                                        Building and maintaining a financial management system related to the kinds of bank cards
                                    </li>
                                </ul>
                            </ul>
                            <ul className="project-technology">
                                <li>
                                    Technology:
                                </li>
                                <ul>
                                    <li>
                                        .NET
                                    </li>
                                </ul>
                            </ul>
                            <ul className="Responsibility">
                                <li>
                                    My Responsibility:
                                </li>
                                <ul>
                                    <li>
                                        Develop the new features and fix the related issues.
                                    </li>
                                </ul>
                            </ul>
                        </div>
                        <div className="project">
                            <div className="project-name">
                                Senior Software Engineer, Nashtech
                            </div>
                            <div className="project-date">
                                October 2019 — May 2024
                            </div>
                            <ul className="project-description">
                                <li>
                                    Description:
                                </li>
                                <ul>
                                    <li>
                                        Building up the management, and data crawling systems, outsourcing for customers from the UK, USA, Singapore, Japan, Ireland... based on latest technologies such as Cloud Computing, Microservices, Blockchain, AI Chatbots...
                                    </li>
                                </ul>
                            </ul>
                            <ul className="project-technology">
                                <li>
                                    Technology:
                                </li>
                                <ul>
                                    <li>
                                        .NET, VueJS, MS SQL Server, MongoDB, Selenium, Mocha library(for testing), ReactJS(hook), MaterialUI, AntDesign, Axios, Unit testing, Elasticsearch, Keycloak, Microservices, Swagger, Identity server.
                                    </li>
                                </ul>
                            </ul>
                            <ul className="Responsibility">
                                <li>
                                    My Responsibility:
                                </li>
                                <ul>
                                    <li>
                                        Take care of the team and help all the team members of the project, take on many difficult tasks. Sharing knowledge about deeper technical and updating the new tech of the project for all the team members, training the new members.
                                    </li>
                                    <li>
                                        Help others to communicate, explain and solve the problem with the client.
                                    </li>
                                    <li>
                                        Develop the new features and fix the related issues.
                                    </li>
                                </ul>
                            </ul>
                        </div>
                        <div className="project">
                            <div className="project-name">
                                Software Engineer, Fabbi
                            </div>
                            <div className="project-date">
                                May 2019 — October 2019
                            </div>
                            <ul className="project-description">
                                <li>
                                    Description:
                                </li>
                                <ul>
                                    <li>
                                        Building up a system helping people to create the forming documents as the user-defined before, then the document will be auto-generated under pdf format.
                                    </li>
                                </ul>
                            </ul>
                            <ul className="project-technology">
                                <li>
                                    Technology:
                                </li>
                                <ul>
                                    <li>
                                        APEX, salesforce DB, Lightning system design.
                                    </li>
                                </ul>
                            </ul>
                            <ul className="Responsibility">
                                <li>
                                    My Responsibility:
                                </li>
                                <ul>
                                    <li>
                                        Develop the new features of the document creating parts based on requirements from the business analysis.
                                    </li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                    <div className="summary-content">
                        <h1 className="summary-title">
                            <MdCastForEducation />Education
                        </h1>
                        <div className="project-name">
                            Information Technology Engineer, Viet Tri University of Industry, Viet Tri
                        </div>
                        <div className="project-date">
                            September 2015 — July 2019
                        </div>
                        <ul className="project-description project">
                            <li>
                                Specialized: Information on technology
                            </li>
                            <li>
                                Graduation classified pretty well
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    )
}

const PersonalInfo = (props) => {
    const { theme, blur, personalInfoStyle, setNewPersonalInfoStyle, zIndex, setNewZIndex } = useContext(AppContext);

    return (
        <>
            <Content theme={theme} className={`mobile window-content mobile-content ${theme} ${blur} br-1`} />
            <Window
                minHeight={430}
                minWidth={400}
                handleOnMouseDown={() => setNewZIndex("personal")}
                zIndex={zIndex.find(item => item.name === "personal").zIndex}
                className="personal-info desktop"
                defaultPosition={personalInfoStyle.defaultPosition}
                position={{
                    x: personalInfoStyle?.position?.x || "",
                    y: personalInfoStyle?.position?.y || ""
                }}
                size={{
                    height: personalInfoStyle?.size?.height || "",
                    width: personalInfoStyle?.size?.width || ""
                }}
                style={{ ...personalInfoStyle.style }}
                styleContext={personalInfoStyle}
                setStyleContext={setNewPersonalInfoStyle}
                windowName="personal"
                name="Personal Info"
            >
                <Content theme={theme} blur={blur} />
            </Window>
        </>
    )
}

export default PersonalInfo;