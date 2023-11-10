"use client";

import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

export const CourseCard = () => {
  let tabs = [
    {
      id: "accounting",
      label: "會計學",
      content:
        "會計學是研究財務信息的科學，關注企業的財務狀況和經營成果。在這門課程中，我們將學習如何記錄企業的財務交易，編制財務報表並進行相應的分析。學生將學會解讀資產負債表、損益表和現金流量表，評估企業的經濟實力、風險和價值。這些知識和技能對於投資者、管理者和其他利害相關者都非常重要，幫助他們做出明智的決策和提供可靠的財務訊息。",
    },
    {
      id: "economic",
      label: "經濟學",
      content:
        "經濟學是研究人類經濟行為的社會科學。學習經濟學可以讓我們了解世界的運作、成為更聰明的參與者，並瞭解各種經濟政策的潛能和極限。課程涵蓋廣泛的主題，包括市場結構、價格理論、經濟增長、貨幣和銀行等。通過學習經濟學，我們能夠培養經濟思維和解決問題的能力，並做出更明智的決策。",
    },
    {
      id: "Finance",
      label: "財務管理",
      content:
        "資財營的課程中會教大家如何從生活中發現好的投資標的，透過觀察生活週遭發現有些東西已經默默的在改變！這些微小改變都很有可能成為未來的大趨勢！ 小米的創辦人說過「風口上的豬也能飛」，相信我們只要找到那個風口就已經成功一半了~ 除此之外，我們會教大家如何透過面線點分析法將一個大趨勢慢慢聚焦到一個產業鍊，再從產業鍊中找出最大利益者，最後再透過分析公司的營運狀況與財報等等找到好的投資標的。",
    },
    {
      id: "C++",
      label: "C++程式設計",
      content:
        "如果目標是一類組財務、金融、會計、企管的學員，一定要學會C++程式語言，資財營程式設計課程教授C++基礎的語法，並透過上機實作和專案開發，讓學生學以致用，更快速掌握這個世代「金融科技」的浪潮！",
    },
  ];

  return (
    <div className="flex w-full flex-col justify-center items-center ">
      <Tabs
        aria-label="Dynamic tabs"
        items={tabs}
        className="flex xl:w-full lg:w-full flex-col justify-center items-center "
      >
        {(item) => (
          <Tab
            key={item.id}
            title={item.label}
            className="flex w-full flex-col justify-center items-center xl:text-2xl lg:text-2xl xl:p-6 lg:p-6 "
          >
            <Card className="flex xl:w-[50%] lg:w-[50%]  text-lg">
              <CardBody className="xl:text-2xl lg:text-2xl xl:p-8 lg:p-8">{item.content}</CardBody>
            </Card>
          </Tab>
        )}
      </Tabs>
    </div>
  );
};
