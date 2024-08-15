import React, { useCallback } from "react";
import "./GalleryPage.scss";
import ColumnLayout from "../../components/Layouts/ColumnLayout";
import Headline from "../../components/Text/Headline";
import RowLayout from "../../components/Layouts/RowLayout";
import Body from "../../components/Text/Body";
import threePhones from "../../assets/Three-Phones-Mockup.png";
import racingPhones from "../../assets/Racing-Mockup.png";
import dashboardMockup from "../../assets/Dashboard_mockup.png";
import { Button } from "@mui/material";
import ModalComponent, { iModalComponentExport } from "../../components/Modal/ModalComponent";

interface iGalleryImage {
  src: string;
  label: string;
  description: string;
}

const imageWidth = 320;
const imageHeight = 200;

const images: iGalleryImage[] = [
  {
    src: dashboardMockup,
    label: 'TigerPistol Dashboard',
    description: ''
  },
  {
    src: racingPhones,
    label: 'Mobile Racing App',
    description: ''
  },
  {
    src: threePhones,
    label: 'Mobile Social App',
    description: ''
  }
];

const GalleryPage = () => {
  const {
    open,
    openModal,
    closeModal,
    Modal
  }: iModalComponentExport = ModalComponent();
  const openImageModal = useCallback((i: iGalleryImage) => {
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
          Hello WOrld
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