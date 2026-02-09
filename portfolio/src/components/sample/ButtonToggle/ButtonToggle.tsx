import React from "react";
import ButtonToggleProvider from "./ButtonToggleContext.tsx";
import { useButtonToggleContext } from "./useButtonToggleContext.ts";
import "./ButtonToggle.css";

type ButtonToggleTitlesProps = {
  items: {
    id: string;
    title: string;
  }[];
};

type ButtonToggleContentProps = {
  items: {
    id: string;
    content: React.ReactNode;
  }[];
};

type ButtonToggleComposition = {
  Titles: (props: ButtonToggleTitlesProps) => React.ReactNode;
  Contents: (props: ButtonToggleContentProps) => React.ReactNode;
};

type ButtonToggleProps = {
  children: React.ReactNode;
};

type ButtonToggleWrapper = (props: ButtonToggleProps) => React.ReactNode;

const ButtonToggle: ButtonToggleWrapper & ButtonToggleComposition = ({
  children,
}) => {
  return <ButtonToggleProvider>{children}</ButtonToggleProvider>;
};

ButtonToggle.Contents = ({ items }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { currentIndex } = useButtonToggleContext();
  const { id, content } = items[currentIndex];
  return (
    <div>
      <div
        key={id}
        id={`buttontoggle-content-${id}`}
        role="tabpanel"
        aria-labelledby={`buttontoggle-control-${id}`}
      >
        {content}
      </div>
    </div>
  );
};

ButtonToggle.Titles = ({ items }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { currentIndex, setCurrentIndex } = useButtonToggleContext();
  return (
    <div role="tablist" id="button-toggle">
      {items.map(({ id, title }, index) => (
        <button
          key={id}
          id={`buttontoggle-control-${id}`}
          role="tab"
          aria-controls={`buttontoggle-content-${id}`}
          aria-selected={currentIndex === index}
          onClick={() => {
            setCurrentIndex(index);
          }}
          className="button-toggle-item"
        >
          {title}
        </button>
      ))}
    </div>
  );
};

export default ButtonToggle;
