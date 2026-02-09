import React from "react";
import "./Tabs.css";
import TabsProvider, { useTabsContext } from "./TabsContext";
import EditIcon from "@mui/icons-material/Edit";

type TabTitlesProps = {
  items: {
    id: string;
    title: string;
    icon: React.ReactNode;
  }[];
};

type TabContentProps = {
  items: {
    id: string;
    content: React.ReactNode;
  }[];
};

type TabsComposition = {
  Titles: (props: TabTitlesProps) => React.ReactNode;
  Contents: (props: TabContentProps) => React.ReactNode;
};

type TabsProps = {
  children: React.ReactNode;
};

type TabsWrapper = (props: TabsProps) => React.ReactNode;

const Tabs: TabsWrapper & TabsComposition = ({ children }) => {
  return <TabsProvider>{children}</TabsProvider>;
};

Tabs.Titles = ({ items }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { currentIndex, setCurrentIndex } = useTabsContext();
  return (
    <div role="tablist" id="tabs">
      {items.map(({ id, title, icon }, index) => (
        <button
          key={id}
          id={`tab-control-${id}`}
          role="tab"
          aria-controls={`tab-content-${id}`}
          aria-selected={currentIndex === index}
          onClick={() => {
            setCurrentIndex(index);
          }}
          className={`tab ${currentIndex === index ? 'active': ''}`}
        >
          <div className="icon">
            <EditIcon />
            {icon}
          </div>
          {title}
        </button>
      ))}
    </div>
  );
};

Tabs.Contents = ({ items }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { currentIndex } = useTabsContext();
  const currentItem = items[currentIndex];
  if (!currentItem) return null;
  const { id, content } = currentItem;
  return (
    <div
      key={id}
      id={`tab-content-${id}`}
      role="tabpanel"
      aria-labelledby={`tab-control-${id}`}
    >
      {content}
    </div>
  );
};

export default Tabs;
