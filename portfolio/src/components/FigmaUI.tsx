import React, { useRef } from "react";
import ImageGallery from "react-image-gallery";
import type { GalleryItem, ImageGalleryRef } from "react-image-gallery";
import image1 from "../assets/login.png"
import image2 from "../assets/managementTable.png"
import image3 from "../assets/listing.png"
import image4 from "../assets/editingView.png"
import image5 from "../assets/missionLogin.png"
import image6 from "../assets/missionFlow.png"
import image7 from "../assets/missionFlowStatus.png"
import image8 from "../assets/missionEnding.png"
import image9 from "../assets/institutionLogin.png"
import image10 from "../assets/institutionLoginConfirm.png"
import image11 from "../assets/institutionLoginDropdown.png"


function FigmaUI() {
  const galleryRef = useRef<ImageGalleryRef>(null);
  const images: GalleryItem[] = [
    {
      original: image1,
      thumbnail: image1,
    },
    {
      original: image2,
      thumbnail: image2,
    },
    {
      original: image3,
      thumbnail: image3,
    },
    {
      original: image4,
      thumbnail: image4,
    },
  ];
  const missionImages: GalleryItem[] = [
    {
      original: image5,
      thumbnail: image5,
    },
    {
      original: image6,
      thumbnail: image6,
    },
    {
      original: image7,
      thumbnail: image7,
    },
    {
      original: image8,
      thumbnail: image8,
    },
  ];
  const institutionImages: GalleryItem[] = [
    {
      original: image9,
      thumbnail: image9,
    },
    {
      original: image10,
      thumbnail: image10,
    },
    {
      original: image11,
      thumbnail: image11,
    },
  ];

  return (
    <div className="flex flex-col w-full items-center">
      <span className="p-4">
        <h1 className="py-4">UI/UX Design Projects</h1>
        <p>
          Due to confidentiality of the data used in the original UI work, the
          data used in this project is mock data for viewability purposes.
        </p>
      </span>
      <span className="flex flex-col md:max-w-2xl max-w-md p-4">
        <h4 className="font-bold">SSO Reporting Tools Wireframes</h4>
        <p>
          This application was originally developed in Pearl and I maintained
          and developed the frontend of the application using Next.js with the
          backend being Springboot
        </p>
      </span>
      <div>
        <div style={{ width: "200", height: "200" }}>
          <ImageGallery ref={galleryRef} items={images} />
        </div>
      </div>

      <span
        className="flex flex-col md:max-w-2xl max-w-md p-4"
        id="mission-control"
      >
        <h4 className="font-bold">Mission Control Wireframes</h4>
        <p>
          This application uses React for the frontend and purpose is to keep
          status of different API flows.
        </p>
        <div style={{ width: "200", height: "200" }}>
          <ImageGallery ref={galleryRef} items={missionImages} />
        </div>
      </span>
      <span
        className="flex flex-col md:max-w-2xl max-w-md p-4"
        id="institution"
      >
        <h4 className="font-bold">Instituion Test Pad</h4>
        <p>
          Thi application utilized Next.js fron the frontend, SpringBoot for the
          backend and SAML to replicate a Single Sign-on Flow
        </p>
        <div style={{ width: "200", height: "200" }}>
          <ImageGallery ref={galleryRef} items={institutionImages} />
        </div>
      </span>
    </div>
  );
}

export default FigmaUI;
