"use client";

import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export const Question = () => {
  return (
    <Accordion variant="bordered" className="w-[50rem]">
      <AccordionItem
        key="1"
        aria-label="Accordion 1"
        title="1. 請問怎樣才算報名成功呢？"
      >
        如果有收到Google表單的自動回覆，就代表報名成功咯～還請已報名的學員留意一下自己的信箱!如果沒有收到請速速私訊粉專～
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="2. 請問額滿了嗎？">
        只要在12/18 23:59前完成報名表填寫都算是報名成功，錄取機會都相同喔！
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Accordion 3"
        title="3. 請問報名是先搶先贏嗎？"
      >
        不是，我們會篩選你們的履歷，所以請務必認真填寫喔！真的要認真填喔！
      </AccordionItem>
      <AccordionItem
        key="4"
        aria-label="Accordion 4"
        title="4. 請問要如何繳費呢？"
      >
        請於12/21(四)公布錄取名單時，密切注意粉絲團與email通知，會附上繳費資訊！
      </AccordionItem>
      <AccordionItem key="5" aria-label="Accordion 5" title="5. 該如何團報?">
        報名表單會有一個區段是「團報者姓名」，
        只需填入與你一起團報者的姓名即可， 不需要填入自己的名字喔！
        例如：ABC三個人一起團報參加資財營 A只需要填入BC，B只需要填入AC，以此類推
        〔三個人都要記得註明喔！〕 與你一起團報的朋友，也需要填報名表喔！！
        千萬不要忘記了！
      </AccordionItem>
      <AccordionItem
        key="6"
        aria-label="Accordion 6"
        title="6. 如果家裡住在新竹，一定要住宿嗎？"
      >
        營隊這邊是建議統一住宿舍，比較方便管理，如果有什麼特殊的需求，可以在報名表單備註讓我們知道～
      </AccordionItem>
      <AccordionItem
        key="7"
        aria-label="Accordion 7"
        title="7. 如果沒有程式、財金領域的底子，可以參加嗎?"
      >
        當然可以，歡迎大家報名~
      </AccordionItem>
      <AccordionItem key="8" aria-label="Accordion 8" title="8. 營隊交通方式?">
        交通方式有家長接送、高鐵(新竹高鐵站集合)、火車(新竹火車站集合)，詳細內容等最終結果出來粉專公布。
      </AccordionItem>
    </Accordion>
  );
};
