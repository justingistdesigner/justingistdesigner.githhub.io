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
  },
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