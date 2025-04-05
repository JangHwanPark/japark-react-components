import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Tabs from "./Tabs";
import Tab from "./Tab";
import TabList from "./TabList";
import TabPanels from "./TabPanels";
import TabPanel from "./TabPanel";
import { TabItem } from "../../types/tabs";

// 테스트할 탭 데이터
const tabs: TabItem[] = [
  { key: "tab1", label: "Tab 1" },
  { key: "tab2", label: "Tab 2" },
  { key: "tab3", label: "Tab 3" },
];

describe("Tabs Component", () => {
  it("초기 렌더링 시 첫 번째 탭이 활성화되어야 한다", () => {
    render(
      <Tabs tabs={tabs} defaultTab="tab1">
        <TabList>
          {tabs.map((tab) => (
            <Tab key={tab.key} tabKey={tab.key}>
              {tab.label}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          <TabPanel tabKey="tab1">Tab 1 Content</TabPanel>
          <TabPanel tabKey="tab2">Tab 2 Content</TabPanel>
          <TabPanel tabKey="tab3">Tab 3 Content</TabPanel>
        </TabPanels>
      </Tabs>
    );

    // `aria-selected="true"`인 탭이 존재하는지 확인
    expect(screen.getByRole("tab", { selected: true })).toHaveTextContent("Tab 1");
    expect(screen.getByText("Tab 1 Content")).toBeInTheDocument();
  });

  it("탭을 클릭하면 해당 탭이 활성화되어야 한다", () => {
    render(
      <Tabs tabs={tabs} defaultTab="tab1">
        <TabList>
          {tabs.map((tab) => (
            <Tab key={tab.key} tabKey={tab.key}>
              {tab.label}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          <TabPanel tabKey="tab1">Tab 1 Content</TabPanel>
          <TabPanel tabKey="tab2">Tab 2 Content</TabPanel>
          <TabPanel tabKey="tab3">Tab 3 Content</TabPanel>
        </TabPanels>
      </Tabs>
    );

    const tab2Button = screen.getByText("Tab 2");
    fireEvent.click(tab2Button);

    expect(screen.getByRole("tab", { selected: true })).toHaveTextContent("Tab 2");
    expect(screen.getByText("Tab 2 Content")).toBeInTheDocument();
  });

  it("초기 `defaultTab`이 설정되지 않은 경우 첫 번째 탭이 기본 선택되어야 한다", () => {
    render(
      <Tabs tabs={tabs}>
        <TabList>
          {tabs.map((tab) => (
            <Tab key={tab.key} tabKey={tab.key}>
              {tab.label}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          <TabPanel tabKey="tab1">Tab 1 Content</TabPanel>
          <TabPanel tabKey="tab2">Tab 2 Content</TabPanel>
          <TabPanel tabKey="tab3">Tab 3 Content</TabPanel>
        </TabPanels>
      </Tabs>
    );

    expect(screen.getByRole("tab", { selected: true })).toHaveTextContent("Tab 1");
    expect(screen.getByText("Tab 1 Content")).toBeInTheDocument();
  });

  it("잘못된 `defaultTab`이 설정된 경우 첫 번째 탭이 기본 선택되어야 한다", () => {
    render(
      <Tabs tabs={tabs} defaultTab="invalidTab">
        <TabList>
          {tabs.map((tab) => (
            <Tab key={tab.key} tabKey={tab.key}>
              {tab.label}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          <TabPanel tabKey="tab1">Tab 1 Content</TabPanel>
          <TabPanel tabKey="tab2">Tab 2 Content</TabPanel>
          <TabPanel tabKey="tab3">Tab 3 Content</TabPanel>
        </TabPanels>
      </Tabs>
    );

    expect(screen.getByRole("tab", { selected: true })).toHaveTextContent("Tab 1");
    expect(screen.getByText("Tab 1 Content")).toBeInTheDocument();
  });
});