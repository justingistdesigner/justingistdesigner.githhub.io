import React from "react";
import "./ResumePage.scss";
import tacoImage from "../../assets/taco.avif";
import hallowImage from "../../assets/hallow.avif";
import threePhones from "../../assets/Three-Phones-Mockup.png";
import racingPhones from "../../assets/Racing-Mockup.png";
import dashboardMockup from "../../assets/Dashboard_mockup.png";
import { GlobalThemes } from "../../ThemeManager";
import ColumnLayout from "../../components/Layouts/ColumnLayout";
import Headline from "../../components/Text/Headline";
import Icon from "../../components/Icon/Icon";
import Body from "../../components/Text/Body";
import RowLayout from "../../components/Layouts/RowLayout";
import SubHeadline from "../../components/Text/SubHeadline";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import OverlayControl from "../../../components/OverlayControl/OverlayControl";

// const ThreeDComponentLazy = React.lazy(() => import("./GlobeElement"));

const experienceList: any[] = [
  "Designed, developed & animated Forms, Dashboards, Components and Walkthroughs that interfaced with Facebook, Instagram, Amazon & TikTok Advertising APIs, utilizing the data provided to allow the user to adjust & create Advertising Campaigns for clients to distribute to local chains around the world.",
  `Refactored old Meta Advertising Campaign Editor from KnockoutJS to React, while also improving the user experience, visual design & animating each of the sections.`,
  `Designed Figma Prototypes of the entire UI, creating variations of styles & themes, to present to the product team & give presentations to the CEO.`,
  "Formalized TigerPistol’s design standards across three Apps, by creating a convenient component library for all three apps to utilize. Also did design reviews before each piece of code was sent into production for the entire team, assisting with coding where needed.",
  "Developed using SyncFusion and C#, I created a Tax Document generator for a Livanta, a Global Medical Company, saving the CFO a week of time every month and was used in Government Audits."
];
const languagesList: string[] = [
  "JavaScript",
  "TypeScript",
  "HTML5",
  "SCSS",
  "SASS",
  "CSS",
  "C#",
  "SQL",
  "XAML",
  ".Net Core",
  "C++"
];
const techList: string[] = [
  "React",
  "React-Native",
  "Angular",
  "Vue.js",
  "Node.js",
  "Three.js",
  "D3.js",
  "WebGL",
  "ASP.NET",
  "Redis",
  "Docker",
  "WPF",
  "Material-Ui",
  "SSMS",
  "AWS",
  "Microsoft Suite",
  "Xamarin",
  "Xamarin-Forms",
  "MySQL",
  "Ableton Live",
  "Google API",
  "Chart.js",
  "Syncfusion",
  "PDF.js",
  "Azure",
  "XlsIO",
  "PostgreSQL",
  "Storybook",
  "KnockoutJS",
  "KefirJS",
  "MongoDB",
  ".Net Framework",
  "Figma",
  "Kubernetes",
  "PGAdmin",
  "Compose",
  "Unity",
  "Unreal Engine"
];

const ResumePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <ColumnLayout gap={156} style={{ alignItems: 'center', padding: '32px', flexWrap: 'nowrap' }}>
        <ColumnLayout gap={32} className="titleContainer">
          <Headline
            id="title"
            data-walkthrough-step="1"
            data-walkthrough-label="My Name"
            data-walkthrough-description="This On-Boarding component will help you traverse the different parts of my website!"
          >
            Justin Gist
          </Headline>
          <Headline
            id="designer"
            size={2}
            data-walkthrough-step="2"
            data-walkthrough-label="Career"
            data-walkthrough-description="Over the course of my professional tenure, I have devoted myself to the practice of UI/UX design, steadily refining my abilities to cultivate a versatile and holistic proficiency that empowers me to produce meaningful and captivating user interfaces."                  
          >
            UI & UX Developer
          </Headline>
          {/* <Suspense fallback={<OverlayControl />}>
            <ThreeDComponentLazy />
          </Suspense> */}
        </ColumnLayout>
        
        {/* Experience */}
        <ColumnLayout gap={24} isCard
          id="experience"
          data-walkthrough-step="3"
          data-walkthrough-label="Years of expertise"
          data-walkthrough-description="This section highlights select projects that I have conceptualized and executed among many others."
        >
          <Icon 
              icon={'ShootingStar'} 
              className={'float-top-right resume-card-icon'}
          />
          <Headline secondary size={3}>Experience</Headline>
          {experienceList.map((experience, i) => (
            <Body key={`${i}-experience`} style={{ textAlign: 'left' }}>{experience}</Body>
          ))}
        </ColumnLayout>

        {/* Languages */}
        <ColumnLayout gap={16} isCard
          id="languages"
          data-walkthrough-step="4"
          data-walkthrough-label="List of Languages"
          data-walkthrough-description="This section details my proficiency in prominent programming and markup languages."
        >
          <Icon 
              icon={'Languages'} 
              className={'float-top-right resume-card-icon'}
          />
          <Headline secondary size={3}>Languages</Headline>
          <RowLayout className="resume-list-container">
            {languagesList.map(lang => (
              <Body key={lang}>{lang}</Body>
            ))}
          </RowLayout>
        </ColumnLayout>

        {/* Technology */}
        <ColumnLayout gap={16} isCard
          id="technology"
          data-walkthrough-step="5"
          data-walkthrough-label="List of technologies"
          data-walkthrough-description="This section outlines various technologies I have utilized to effectively execute numerous tasks and designs."
        >
          <Icon 
              icon={'Tech'} 
              className={'float-top-right resume-card-icon'}
          />
          <Headline secondary size={3}>Technology</Headline>
          <RowLayout className="resume-list-container">
            {techList.map(tech => (
              <Body key={tech}>{tech}</Body>
            ))}
          </RowLayout>
        </ColumnLayout>
        <ColumnLayout>
          <Headline
            id="mockups"
            data-walkthrough-step="6"
            data-walkthrough-label="Mockups"
            data-walkthrough-description="This section provides an overview of diverse mobile and web design mockups."
          >
            Mockups
          </Headline>
          <RowLayout className="centerContent">
            <Headline
              size={5}
            >
              This is a small sample of mockups, visit the
            </Headline>
            <Link to="/Gallery">
              <Headline
                size={5}
              >
                Gallery
              </Headline>
            </Link>
            <Headline
              size={5}
            >
              to view more!
            </Headline>
          </RowLayout>
        </ColumnLayout>
        <img 
          loading="lazy" 
          className="dashboardImage image" 
          src={threePhones}
        />
        <img 
          loading="lazy" 
          className="dashboardImage image" 
          src={racingPhones} 
        />
        <img 
          loading="lazy" 
          className="dashboardImage image" 
          src={dashboardMockup} 
        />
        <Headline
          id="projects"
          data-walkthrough-step="7"
          data-walkthrough-label="Projects"
          data-walkthrough-description="This section provides an account of my prior project experience."
        >
          Projects
        </Headline>

        {/* Tacopocalypse */}
        <ColumnLayout 
          gap={16} 
          isCard 
          className="game-project-card"
          onClick={() => {
            window.open('https://store.steampowered.com/app/416530/Tacopocalypse/', "_blank");
          }}
        >
          <RowLayout layoutClass="flexSB">
            <Headline secondary size={3}>Tacopocalypse</Headline>
            <SubHeadline>2016</SubHeadline>
          </RowLayout>
          <Body>Contract Game project with Cherry Pie Games. Produced Foley Sound Design, Mixed and Edited all tracks. Mixed in Ableton Live and recorded using a range of field microphones.</Body>
          <img 
            loading="lazy" 
            className="dashboardImage image"  
            src={tacoImage}
          />
        </ColumnLayout>

        {/* Hallow */}
        <ColumnLayout 
          gap={16} 
          isCard 
          className="game-project-card"
          onClick={() => {
            window.open('https://killerham.itch.io/hollow', "_blank");
          }}
        >
          <RowLayout layoutClass="flexSB">
            <Headline secondary size={3}>Hallow</Headline>
            <SubHeadline>2015</SubHeadline>
          </RowLayout>
          <Body>48 Hour Spooky Game Jam Winner using Leap Motion Controller from UltraLeap. Created immersive screams and haunting sounds. Mixed in Ableton Live and recorded using a range of field microphones.</Body>
          <img 
            loading="lazy" 
            className="dashboardImage image"  
            src={hallowImage}
          />
        </ColumnLayout>

        <ColumnLayout gap={16} style={{ alignItems: 'center' }}
          id="contact"
          data-walkthrough-step="7"
          data-walkthrough-label="Contact Me"
          data-walkthrough-description="This button will take you to my contact page! Thanks for looking through this On-Boarding Experience!"
        >
          <Headline size={2} className="text-headline">Like my designs?</Headline>
          <button
            className={"button secondary"}
            onClick={() => {
              navigate(`/${GlobalThemes.Contact}`);
            }}
          >
            Contact
          </button>
        </ColumnLayout>
      </ColumnLayout>
    </>
    
  );
};
export default ResumePage;
