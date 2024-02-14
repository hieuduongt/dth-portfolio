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
            <div className="my-cv">
                <a href="Duong_Thanh_Hieu_Software_Engineer.pdf" download="Duong_Thanh_Hieu_Software_Engineer" target='_blank'>
                    <Button icon={<FaDownload size={20} />} color="success-color">
                        Download my CV
                    </Button>
                </a>

            </div>
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
                                    Linux
                                </div>
                                <div className="level"><div className="progress level-progress-75"></div></div>
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
                                <div className="skill-name">SQL</div>
                                <div className="level"><div className="progress level-progress-90"></div></div>
                            </div>
                            <div className="skill">
                                <div className="skill-name">MySQL</div>
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
                                    3 years of software development experience including software
                                    requirement analysis, implementing and supporting, DevOps engineering
                                    for ensuring product quality.
                                </li>
                                <li>
                                    3 years experience in .NET Web application development.
                                </li>
                                <li>
                                    Experienced in .NET frameworks: MVC, NET core, Jquery, Bootstrap, MaterialUI,
                                    Reactjs, Angular 8, and relational/non-relational database systems.
                                </li>
                                <li>
                                    3 years experience in testing automation framework(selenium,
                                    puppeteer).
                                </li>
                                <li>
                                    Developer of the year 2022 of Nashtech.

                                </li>
                                <li>
                                    Top excellent developer of the year 2021 of Nashtech.
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
                                TBA Doncaster at Senior Software Engineer, Nashtech
                            </div>
                            <div className="project-date">
                                November 2023 — January 2024
                            </div>
                            <ul className="project-description">
                                <li>
                                    Project Description:
                                </li>
                                <ul>
                                    <li>
                                        TBA Doncaster is a seaport management application built on a Web
                                        application and Android/IOS application. It was used to manage the
                                        incoming and outgoing products in a stock area/terminal of the
                                        companies/terminal owners/stock area owners of the seaports!
                                    </li>
                                </ul>
                            </ul>
                            <ul className="project-technology">
                                <li>
                                    Project Technology:
                                </li>
                                <ul>
                                    <li>
                                        .NET, VueJS, MS SQL Server.
                                    </li>
                                </ul>
                            </ul>
                            <ul className="Responsibility">
                                <li>
                                    My Responsibility:
                                </li>
                                <ul>
                                    <li>
                                        Develop the new features and fix the issues of each seaport's
                                        products/machines management.
                                    </li>
                                </ul>
                            </ul>
                        </div>
                        <div className="project">
                            <div className="project-name">
                                eFundamentals at Senior Software Engineer, Nashtech
                            </div>
                            <div className="project-date">
                                November 2020 — November 2023
                            </div>
                            <ul className="project-description">
                                <li>
                                    Project Description:
                                </li>
                                <ul>
                                    <li>
                                        Crawling data from many big retailers in the world(about 800 big retailers and much more), synthesizing, and analyzing the data then giving the users the best choices about the price, promotion, and all the information of each product of all kinds.
                                    </li>
                                </ul>
                            </ul>
                            <ul className="project-technology">
                                <li>
                                    Project Technology:
                                </li>
                                <ul>
                                    <li>
                                        .NET, Selenium, Javascript - Mocha library(for testing), HTML, CSS Selector.
                                    </li>
                                </ul>
                            </ul>
                            <ul className="Responsibility">
                                <li>
                                    My Responsibility:
                                </li>
                                <ul>
                                    <li>
                                        Take care of the team and help all the team members of the project, take on many difficult tasks, and monitor the data and the system daily. Sharing knowledge about deeper technical and updating the new tech of the project for all the team members, training the new members.
                                    </li>
                                    <li>
                                        Crawl the data and help others to communicate, explain with the client, and help others to solve the problem with the client.
                                    </li>
                                </ul>
                            </ul>
                        </div>
                        <div className="project">
                            <div className="project-name">
                                Evo BPM at Software Engineer, Nashtech
                            </div>
                            <div className="project-date">
                                July 2020 — November 2020
                            </div>
                            <ul className="project-description">
                                <li>
                                    Project Description:
                                </li>
                                <ul>
                                    <li>
                                        Evo BPM is a system for digitizing and managing all the data about the projects of a company instead of using standard documents. All the information of each project such as bid, and client information will be digitized using the .net core 3.1 and reactjs 16.8, combined with the elastic system for searching and querying.
                                    </li>
                                </ul>
                            </ul>
                            <ul className="project-technology">
                                <li>
                                    Project Technology:
                                </li>
                                <ul>
                                    <li>
                                        C#(.NET Core 3.1), ReactJS(hook) + MaterialUI + Axios, Unit testing, Elasticsearch, Swagger, Keycloak, Microservices.
                                    </li>
                                </ul>
                            </ul>
                            <ul className="Responsibility">
                                <li>
                                    My Responsibility:
                                </li>
                                <ul>
                                    <li>
                                        Develop the new features of the project management system from business analysis.
                                    </li>
                                </ul>
                            </ul>
                        </div>
                        <div className="project">
                            <div className="project-name">
                                Merlin at Software Engineer, Nashtech
                            </div>
                            <div className="project-date">
                                December 2019 — June 2020
                            </div>
                            <ul className="project-description">
                                <li>
                                    Project Description:
                                </li>
                                <ul>
                                    <li>
                                        Merlin is a web application to manage all the marketing campaigns and all the types of products of each campaign as a branch of an extensive.
                                    </li>
                                </ul>
                            </ul>
                            <ul className="project-technology">
                                <li>
                                    Project Technology:
                                </li>
                                <ul>
                                    <li>
                                        C#(.NET core Framework), Angular 8, Unit testing, MongoDB + Microsoft SQL server, Swagger, Identity server, Microservices.
                                    </li>
                                </ul>
                            </ul>
                            <ul className="Responsibility">
                                <li>
                                    My Responsibility:
                                </li>
                                <ul>
                                    <li>
                                        Develop the campaign management system's new features based on business analysis requirements.
                                    </li>
                                </ul>
                            </ul>
                        </div>
                        <div className="project">
                            <div className="project-name">
                                AppsMe at Software Engineer, Fabbi
                            </div>
                            <div className="project-date">
                                May 2019 — November 2019
                            </div>
                            <ul className="project-description">
                                <li>
                                    Project Description:
                                </li>
                                <ul>
                                    <li>
                                        AppsMe is an application helping people to create the forming documents as the user-defined before, then the document will be auto-generated under pdf format.
                                    </li>
                                </ul>
                            </ul>
                            <ul className="project-technology">
                                <li>
                                    Project Technology:
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
            <Content theme={theme} className={`mobile window-content content ${theme} ${blur} br-1`} />
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
                name="Personal Info"
            >
                <Content theme={theme} blur={blur} />
            </Window>
        </>
    )
}

export default PersonalInfo;