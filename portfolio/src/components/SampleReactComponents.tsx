import ButtonToggle from "./sample/ButtonToggle/ButtonToggle";
import Tabs from "./sample/Tabs/Tabs";
import Chips from "./sample/Chips/Chips";
import SearchFeature from "./sample/SearchFeature/SearchFeature";
export const SampleReactComponents = () => {
  const tabData = [
    { id: "tab1_unique_id", title: "Tab 1", content: "Content for Tab 1" },
    { id: "tab2_unique_id", title: "Tab 2", content: "Content for Tab 2" },
    { id: "tab3_unique_id", title: "Tab 3", content: "Content for Tab 3" },
  ];
  const buttonData = [
    { id: "button1_unique_id", title: "Button 1" },
    { id: "button2_unique_id", title: "Button 2" },
    { id: "button3_unique_id", title: "Button 3" },
  ];

  return (
    <div
      id="samplereactcomponents"
      className="w-full flex-col flex gap-[0.4rem]"
    >
      <h1>Sample React TypeScript Components</h1>
      <p className="wrap-break-word pl-0">
        {" "}
        All of these components include the following technologies to develop
        them: React, Typescript, Tailwind CSS and Javascript. Each of these
        components are mockups of components that I have created in my current
        role as a Technical Associate. But you can see a screenshot of some
        components in my company's development environment.
      </p>
      <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-4 col-span-full mx-auto">
        <div>
          <h2 className=" text-xl font-bold text-[#bc8f8f]">Tabs</h2>
          <Tabs>
            <Tabs.Titles
              items={tabData.map(({ id, title }) => ({ id, title, icon: null }))}
            />
            <Tabs.Contents
              items={tabData.map(({ id, content }) => ({
                id,
                content: <p>{content}</p>,
              }))}
            />
          </Tabs>
        </div>
        <div>
          <h2 className=" text-xl font-bold text-[#bc8f8f]">Button Toggle</h2>
          <ButtonToggle>
            <ButtonToggle.Titles
              items={buttonData.map(({ id, title }) => ({ id, title }))}
            />
            <ButtonToggle.Contents
              items={buttonData.map(({ id, title }) => ({
                id,
                content: <p>{title}</p>,
              }))}
            />
          </ButtonToggle>
        </div>
        <div>
          <h2 className=" text-xl font-bold text-[#bc8f8f]">Chips</h2>
          <div
          className="grow flex flex-col items-start w-full pl-[12.5]"
          >
            <Chips />
          </div>
        </div>
        <div>
          <h2 className=" text-xl font-bold text-[#bc8f8f]">Search Manager Names Component</h2>
          <SearchFeature />
        </div>
      </div>
    </div>
  );
};
