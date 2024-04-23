
'use client'

import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ContentTabContent from "./ContentTabContent";
import ImagesTabContent from "./ImagesTabContent";
import IterneraryTabContent from "./IterneraryTabContent";
import QuestionsTabContent from "./QuestionsTabContent";

const Index = () => {
  const tabs = [
    {
      label: "Content",
      labelNo: 1,
      content: <ContentTabContent />,
    },
    {
      label: "Images",
      labelNo: 2,
      content: <ImagesTabContent imageType={"Slide"}  category= {"Activity"} />,
    },
    {
      label: "Itinerary",
      labelNo: 3,
      content: <IterneraryTabContent />,
    },
    {
      label: "Questions & Answers",
      labelNo: 4,
      content: <QuestionsTabContent />,
    },
  ];

  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Tabs
      className="tabs -underline-2 js-tabs"
      selectedIndex={tabIndex}
      onSelect={(index) => setTabIndex(index)}
    >
      <TabList className="tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20">
        {tabs.map((tab, index) => (
          <Tab key={index} className="col-auto">
            <button  aria-label="Close" className="tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button">
              {tab.labelNo}. {tab.label}
            </button>
          </Tab>
        ))}
      </TabList>

      <div className="tabs__content pt-30 js-tabs-content">
        {tabs.map((tab, index) => (
          <TabPanel
            key={index}
            className={`-tab-item-${index + 1} ${
              tabIndex === index ? "is-tab-el-active" : ""
            }`}
          >
            {tab.content}
          </TabPanel>
        ))}
      </div>
    </Tabs>
  );
};

export default Index;
