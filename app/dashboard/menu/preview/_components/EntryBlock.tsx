import Popup from "./Popup";
import { useState } from "react";
import { Entry } from "@/types/menu";
import Image from "next/image";

export function EntryBlock({ item }: { item: Entry }) {
  const [popupState, setPopupState] = useState(false);
  console.log(popupState);

  return (
    <div>
      <div className="entry-container" key={item.ID} onClick={() => setPopupState(true)}>
        <div className="entry-content">
          <div>
            <span className="entry-title">{item.Name}</span>
            <span className="entry-description">{item.Description}</span>
          </div>
          <div className="entry-content-bottom-row">
            <div>
              {/* {item.labels.map((label, index) => (
                <div className={`label-container ${label.class_name}`} key={index}>
                  <div className="label-icon">{label.icon}</div>
                  <div className="label-text">{label.name}</div>
                </div>
              ))} */}
            </div>
            <span className="entry-price">฿ {item.BasePrice}</span>
          </div>
        </div>
        <div className="entry-image-container">
          <Image src={item.Photo} alt={item.Name} className="entry-image" />
        </div>
      </div>
      {/* {popupState && <Popup {...item} closePopup={() => setPopupState(!popupState)} />} */}
    </div>
  );
}
