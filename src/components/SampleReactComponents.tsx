import { useState } from "react";
import ReactTabs from "../assets/ReactTabs.jpg";
import ReactChips from "../assets/ReactChips.jpg";
import Card from "./Card";
import { Pill } from "./sample/Pill/Pill";
import { Box, Modal } from "@mui/material";

export const SampleReactComponents = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openTabsModal, setOpenTabsModal] = useState(false)
  const handleClose = () => {
    setOpenModal(false);
  };
  const handleCloseTabs = () => {
    setOpenTabsModal(false)
  }
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "auto",
    bgcolor: "background.paper",
    borderRadius: 8,
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <div
        id="samplereactcomponents"
        className="bg-primary text-cyan-700 px-5 py-32 pl-5 flex flex-row items-center not-lg:flex-wrap not-xl:flex-wrap not-2xl:flex-wrap"
      >
        <div className="about-info mb-5 p-6">
          <h2 className="text-4xl font-bold mb-5">
            Sample React TypeScript Components
          </h2>
          <p className="pb-5">
            {" "}
            These are some components include the following technologies to
            develop them: React, Typescript, Tailwind CSS, Storybook and Javascript. Each
            of these components are mockups of components that I have created in
            a previous role as a Technical Associate at TIAA. Also, most recent development of a Pill component during my role as a Software Engineer at CapTech.
          </p>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4 col-span-full mx-auto">
          <Card handleClick={() => setOpenTabsModal(!openTabsModal)}>
            <img src={ReactTabs} alt="React Tabs" />
          </Card>
          <Card handleClick={() => setOpenModal(!openModal)}>
            <img src={ReactChips} alt="React Chips" />
          </Card>
          <Card>
            <div className="flex flex-row gap-1 flex-wrap">
              <Pill variant="neutral">Neutral Pill</Pill>
              <Pill variant="accent">Accent Pill</Pill>
              <Pill variant="success">Success Pill</Pill>
              <Pill variant="error">Error Pill</Pill>
              <Pill variant="info">Info Pill</Pill>
              <Pill variant="warning">Warning Pill</Pill>
            </div>
          </Card>
        </div>
      </div>
      <Modal open={openTabsModal} onClose={handleCloseTabs}>
        <Box sx={style}>
          <img
            src={ReactTabs}
            alt="React Tabs"
            className="h-50 sm:h-40 md-56 lg:h-72 xl:h-96 max-w-[320px]"
          />
        </Box>
      </Modal>
      <Modal open={openModal} onClose={handleClose}>
        <Box sx={style}>
          <img
            src={ReactChips}
            alt="React Chips"
            className="h-50 sm:h-40 md-56 lg:h-72 xl:h-96 max-w-[320px]"
          />
        </Box>
      </Modal>
    </>
  );
};
