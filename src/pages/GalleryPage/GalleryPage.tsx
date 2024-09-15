import React, { useCallback, useState } from "react";
import "./GalleryPage.scss";
import ColumnLayout from "../../components/Layouts/ColumnLayout";
import Headline from "../../components/Text/Headline";
import RowLayout from "../../components/Layouts/RowLayout";
import Body from "../../components/Text/Body";
import threePhones from "../../assets/Three-Phones-Mockup.png";
import racingPhones from "../../assets/Racing-Mockup.png";
import dashboardMockup from "../../assets/Dashboard_mockup.png";
import step_one from "../../assets/step_one.png";
import step_two from "../../assets/step_two.png";
import step_three from "../../assets/step_three.png";
import step_four from "../../assets/step_four.png";
import step_five from "../../assets/step_five.png";
import step_six from "../../assets/step_six.png";
import step_seven from "../../assets/step_seven.png";
import step_eight from "../../assets/step_eight.png";
import step_nine from "../../assets/step_nine.png";
import sonar_login_1 from "../../assets/sonar_login_1.png";
import sonar_login_2 from "../../assets/sonar_login_2.png";
import sonar_login_3 from "../../assets/sonar_login_3.png";
import sonar_login_4 from "../../assets/sonar_login_4.png";
import sonar_login_5 from "../../assets/sonar_login_5.png";
import sonar_login_6 from "../../assets/sonar_login_6.png";
import sonar_login_7 from "../../assets/sonar_login_7.png";
import sonar_1 from "../../assets/sonar_1.png";
import sonar_2 from "../../assets/sonar_2.png";
import sonar_3 from "../../assets/sonar_3.png";
import sonar_4 from "../../assets/sonar_4.png";
import { Button } from "@mui/material";
import ModalComponent, { iModalComponentExport } from "../../components/Modal/ModalComponent";
import Icon from "../../components/Icon/Icon";
import Loading from "../../components/Loading/Loading";

interface iGalleryImage {
  src: string;
  label: string;
  description: string;
  galleryImages: iGalleryImage[];
}

const imageWidth = 320;
const imageHeight = 200;

const images: iGalleryImage[] = [
  {
    src: step_one,
    label: 'TikTok Campaign Workflow',
    description: 'A flow designed to distrbute campaigns using TikTok`s apis! This was the first step in the workflow. The user would fill out the campaign name, objective of the campaign, overall budget for the duration of the campaign, & any Special Industry requirements that denote special rules for targeting within TikTok.',
    galleryImages: [
      {
        src: step_two,
        label: 'TikTok Campaign Workflow: Step 2',
        description: 'Here the user adjusting the Ad Group, which is the next step in the Hierarchy of TikTok`s Advertising System. Here the user can edit Ad Group Name and Promition Type, which would adjust settings further down, based on selection.',
        galleryImages: []
      },
      {
        src: step_three,
        label: 'TikTok Campaign Workflow: Step 3',
        description: 'Here the user adjusts Targeting, we start with a single option, Audience Targeting Approach, which has two selections, Broad & Narrow. These selections effect options further down in the workflow.',
        galleryImages: []
      },
      {
        src: step_four,
        label: 'TikTok Campaign Workflow: Step 4',
        description: 'Here the user further adjusts Targeting through Demographics. This includes Gender, Age, Language, Househould Income, & Spending Power. All variables in the fields are generated via TikTok APIs. Some selections are disabled, due to selections made earlier in the workflow.',
        galleryImages: []
      },
      {
        src: step_five,
        label: 'TikTok Campaign Workflow: Step 5',
        description: 'Here the user Enables or Disables, Smart Interests & Behaviours. This is a setting that automatically adjusts settings to maximize your Ad.',
        galleryImages: []
      },
      {
        src: step_six,
        label: 'TikTok Campaign Workflow: Step 6',
        description: 'Here the user adjusts Targeting for Devices. Allowing them to target only users with certain devices and Operating Systems.',
        galleryImages: []
      },
      {
        src: step_seven,
        label: 'TikTok Campaign Workflow: Step 7',
        description: 'In this step, the User is able to add in the Creative for the Ad. They can adjust Ad Name, Disclaimer, Ad Text, the Call to Action button text, and the URL that the user will be sent to, when the Ad is clicked.',
        galleryImages: []
      },
      {
        src: step_eight,
        label: 'TikTok Campaign Workflow: Step 8',
        description: 'Here the user can add an Asset. This can be a Video, Image or Collection of Images. Each has it`s own troubleshooting flow to walk the user through adjusting it to match TikTok standards.',
        galleryImages: []
      },
      {
        src: step_nine,
        label: 'TikTok Campaign Workflow: Step 9',
        description: 'Finally, the user will be met by a Finalize screen. This will summarize all the settings and options they selected through the workflow and generate an Actual Ad Preview directly from TikTok.',
        galleryImages: []
      }
    ]
  },
  {
    src: sonar_1,
    label: 'Sonar Redesign',
    description: 'SONAR was a service that companies would put onto their websites and it would track companies and people who visited the site. The FOURTH slide, is what I recieved at the beginning of the week-long redesign.',
    galleryImages: [
      {
        src: sonar_2,
        label: 'Sonar Redesign - Customer Page',
        description: 'This page appears after a customer is selected from the previous page. It shows the user details of the company, HVP (High Value Pages) visited, metrics & a consolidated view of sessions that may be selected to see a timeline of the session. See next slide for timeline. ',
        galleryImages: []
      },
      {
        src: sonar_3,
        label: 'Sonar Redesign - Actionable Timeline',
        description: 'Here a user can view the timeline for a session selected on the datagrid in the previous screen. It gives insights on the visit and marks any HVP (High Value Pages) visited.',
        galleryImages: []
      },
      {
        src: sonar_4,
        label: 'Sonar Redesign - Received Code',
        description: 'This screen is what I recieved at the beginning of the redesign. The redesign took 1 week. The CEO during the redesign meeting, was quoted saying "I am finally proud of this project!"',
        galleryImages: []
      }
    ]
  },
  {
    src: sonar_login_1,
    label: 'Sonar Login',
    description: 'SONAR was a service that companies would put onto their websites and it would track companies and people who visited the site. This was the landing page to Login to the site',
    galleryImages: [
      {
        src: sonar_login_2,
        label: 'Sonar Login - Two Factor',
        description: 'Here the user would input their two factor authentication',
        galleryImages: []
      },
      {
        src: sonar_login_3,
        label: 'Sonar Login - Partner Selection',
        description: 'Here the user would select which Partner/Organization they would like to view upon login. Each login could have multiple Partners attached to the account',
        galleryImages: []
      },
      {
        src: sonar_login_4,
        label: 'Sonar Login - Single Sign On (SSO)',
        description: 'Here the user would use our SSO service to sign on to the platform',
        galleryImages: []
      },
      {
        src: sonar_login_5,
        label: 'Sonar Login - Forgot Password',
        description: 'Here the user would input their Email Address and click `Submit` to continue the process of recovering their account. An Email would be sent to the email attached to the login information',
        galleryImages: []
      },
      {
        src: sonar_login_6,
        label: 'Sonar Login - Email Sent',
        description: 'Here the user may see the Email associated with the account and a confirmation that the email was sent. Also are given a route back to login and the ability to send another email',
        galleryImages: []
      },
      {
        src: sonar_login_7,
        label: 'Sonar Login - Reset Password',
        description: 'After recieving the email, the user would adjust their password so that they could recover their account and login',
        galleryImages: []
      }
    ]
  },
  {
    src: dashboardMockup,
    label: 'TigerPistol Dashboard',
    description: 'This was a Dashboard redesign I designed for TigerPistol`s Meta, Amazon & TikTok Advertising Management system.',
    galleryImages: []
  },
  {
    src: racingPhones,
    label: 'Mobile Racing App',
    description: 'A mockup of mobile designs for a racing app!',
    galleryImages: []
  },
  {
    src: threePhones,
    label: 'Mobile Social App',
    description: 'A mockup of mobile designs for a social app!',
    galleryImages: []
  }
];

const GalleryPage = () => {
  const {
    open,
    openModal,
    closeModal,
    Modal
  }: iModalComponentExport = ModalComponent();
  const [imageInfo, setImageInfo] = useState<iGalleryImage>(images[0]);
  const openImageModal = useCallback((i: iGalleryImage) => {
    setImageInfo(i);
    if (!open) openModal();
    else closeModal();
  }, [
    open,
    openModal,
    closeModal
  ]);
  return (
    <>
      <Modal>
        <GalleryImageSelector {...imageInfo} />
      </Modal>
      <ColumnLayout id="gallery-page" className="centerContent" style={{ marginTop: 80 }}>
          <Headline>Gallery</Headline>
          <Body style={{ maxWidth: 620 }}>
            Here is a collection of mockups and final renders from various projects. Click to enlarge and get further description of the project it was used on!
          </Body>
          <RowLayout gap={24} id="gallery-image-container">
            {images.map((i, index) => (
              <Button 
                key={i.label}
                onClick={() => openImageModal(i)}
              >
                <ColumnLayout
                  className="Down"
                  style={{
                      animationDelay: `${0.1
                        + (index * 0.1 )}s`
                  }}
                >
                  <img 
                    loading="lazy" 
                    className="galleryImage image" 
                    src={i.src}
                    alt={i.label}
                    style={{
                      width: imageWidth,
                      height: imageHeight
                    }}
                  />
                  <Headline size={3}>
                    {i.label}
                  </Headline>
                </ColumnLayout>
              </Button>
            ))}
          </RowLayout>
      </ColumnLayout>
    </>
  );
};
export default GalleryPage;

const GalleryImageSelector = (image: iGalleryImage) => {
  const [page, setPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [className, setClassName] = useState<string>('Left');
  const changePage = useCallback((nextPage: boolean) => {
    setLoading(true);
    // if !nextPage, the send to previous page
    setClassName(nextPage ? 'Left' : 'Right');
    setPage(prev => nextPage ? prev + 1 : prev - 1);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  const images: iGalleryImage[] = [image, ...image.galleryImages];
  const disablePrevious = page === 0 ? 'disabled' : '';
  const diableNext = page === images.length - 1 ? 'disabled' : '';
  const enableSelectors = images.length > 1;
  return (
    <ColumnLayout id="gallery-image-selector" gap={8} className={`${enableSelectors ? 'max-height' : ''}`}>
      <ColumnLayout style={{ maxHeight: '80%' }}>
        <Headline secondary size={3}>{images[page].label}</Headline>
        {loading ? <Loading useLoadingAnimation={0} /> : (
          <div className="image-container">
            <img
              src={images[page].src}
              alt={images[page].label}
              className={className}
            />
          </div>
        )}
      </ColumnLayout>
      <ColumnLayout>
        <Headline secondary size={5}>{images[page].description}</Headline>
        {enableSelectors && (
          <RowLayout id="button-layout" layoutClass="flexSB">
            <Button
              className={disablePrevious}
              onClick={() => changePage(false)}
            >
              <Icon icon="ChevronLeft" fontSize={64} />
            </Button>
            <Button
              className={diableNext}
              onClick={() => changePage(true)}
            >
              <Icon icon="ChevronRight" fontSize={64} />
            </Button>
          </RowLayout>
        )}
      </ColumnLayout>
    </ColumnLayout>
  );
};