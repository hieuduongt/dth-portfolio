import { useContext, useEffect } from "react";
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
import { contents } from "../../Helpers/Content";

const Content = (props) => {
    const { theme, className, content, language } = props;
    useEffect(() => {
        sequence = [
            language === "en" ?
                'I am Hieu Duong'
                : "Tôi là Hiếu (HieuDuongIT)",
            1000,
            language === "en" ?
                'I am a web developer'
                : "Tôi là một nhà phát triển Web",
            1000,
            language === "en" ?
                'If you are interested in'
                : "Nếu bạn quan tâm đến tôi",
            1000,
            language === "en" ?
                'Feel free to contact me'
                : "Hãy liên hệ với tôi",
            1000
        ];
    }, [language]);
    let sequence = [
        language === "en" ?
            'I am Hieu Duong'
            : "Tôi là Hiếu (HieuDuongIT)",
        1000,
        language === "en" ?
            'I am a web developer'
            : "Tôi là một nhà phát triển Web",
        1000,
        language === "en" ?
            'If you are interested in'
            : "Nếu bạn quan tâm đến tôi",
        1000,
        language === "en" ?
            'Feel free to contact me'
            : "Hãy liên hệ với tôi",
        1000
    ];
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
                                sequence={sequence}
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
                                {content.inside.personal_info.content.find(s => s.name === "phone").label[language]}
                            </div>
                            <div className="summary-text-content">
                                {content.inside.personal_info.content.find(s => s.name === "phone").content[language]}
                            </div>
                        </div>
                    </div>
                    <div className="summary-info bd-b">
                        <Button icon={<FaMapLocationDot size={25} />} icononly="true" color="warning-color" />
                        <div className="summary-text">
                            <div className="summary-text-title">
                                {content.inside.personal_info.content.find(s => s.name === "location").label[language]}
                            </div>
                            <div className="summary-text-content">
                                {content.inside.personal_info.content.find(s => s.name === "location").content[language]}
                            </div>
                        </div>
                    </div>
                    <div className="summary-info bd-b">
                        <Button icon={<AiTwotoneMail size={25} />} icononly="true" color="default-color" />
                        <div className="summary-text">
                            <div className="summary-text-title">
                                {content.inside.personal_info.content.find(s => s.name === "email").label[language]}
                            </div>
                            <div className="summary-text-content">
                                {content.inside.personal_info.content.find(s => s.name === "email").content[language]}
                            </div>
                        </div>
                    </div>
                    <div className="summary-info bd-b">
                        <Button icon={<FaBirthdayCake size={25} />} icononly="true" color="success-color" />
                        <div className="summary-text">
                            <div className="summary-text-title">
                                {content.inside.personal_info.content.find(s => s.name === "birthday").label[language]}
                            </div>
                            <div className="summary-text-content">
                                {content.inside.personal_info.content.find(s => s.name === "birthday").content[language]}
                            </div>
                        </div>
                    </div>
                    <div className="summary-info">
                        <div className="skills">
                            <div className="skill-title">
                                <Button icon={<GiSkills size={25} />} icononly="true" color="warning-color" />
                                <span>{content.inside.personal_info.content.find(s => s.name === "skill").label[language]}</span>
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
                            <FaUser />{content.inside.summary_info.label[language]}
                        </h1>
                        <div className="profile-content">
                            <ul>
                                {
                                    content.inside.summary_info.content.map(c => (
                                        <li>
                                            {
                                                c[language]
                                            }
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    <div className="summary-content">
                        <h1 className="summary-title">
                            <PiBagSimpleFill />{content.inside.employment_history.label[language]}
                        </h1>
                        {
                            content.inside.employment_history.content[0].content.map(c => (
                                <div className="project">
                                    <div className="project-name">
                                        {c.label[language]}
                                    </div>
                                    <div className="project-date">
                                        {c.date.label[language]}
                                    </div>
                                    <ul className="project-description">
                                        <li>
                                            {c.description.label[language]}
                                        </li>
                                        <ul>
                                            {
                                                c.description.content.map(c => (
                                                    <li>
                                                        {c[language]}
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </ul>
                                    <ul className="project-technology">
                                        <li>
                                            {c.technology.label[language]}
                                        </li>
                                        <ul>
                                            {
                                                c.technology.content.map(c => (
                                                    <li>
                                                        {c[language]}
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </ul>
                                    <ul className="Responsibility">
                                        <li>
                                            {c.responsibility.label[language]}
                                        </li>
                                        <ul>
                                            {
                                                c.responsibility.content.map(c => (
                                                    <li>
                                                        {c[language]}
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </ul>
                                </div>
                            ))
                        }
                        {/* <div className="project">
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
                        </div> */}
                    </div>
                    <div className="summary-content">
                        <h1 className="summary-title">
                            <MdCastForEducation />{content.inside.education.label[language]}
                        </h1>
                        {
                            content.inside.education.content.map(c => (
                                <div className="project">
                                    <div className="project-name">
                                        {c.label[language]}
                                    </div>
                                    <div className="project-date">
                                        {c.date[language]}
                                    </div>
                                    <ul className="project-description project">
                                        {
                                            c.content.map(cc => (
                                                <li>
                                                    {cc[language]}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))
                        }

                    </div>
                </div>

            </div>

        </div>
    )
}

const PersonalInfo = (props) => {
    const { theme, blur, personalInfoStyle, setNewPersonalInfoStyle, zIndex, setNewZIndex, language } = useContext(AppContext);
    const content = contents.layouts.find(c => c.name === "personal_information_application");
    return (
        <>
            <Content theme={theme} className={`mobile window-content mobile-content ${theme} ${blur} br-1`} language={language} content={content} />
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
                name={content.content[language]}
            >
                <Content theme={theme} blur={blur} language={language} content={content} />
            </Window>
        </>
    )
}

export default PersonalInfo;