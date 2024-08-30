import { useState } from "react";
import { Entry } from "@/types/menu";

export function EntryBlock({ item }: { item: Entry }) {
  const [popupState, setPopupState] = useState(false);
  console.log(popupState);

  return (
    <div>
      <div className="entry-container" key={item.ID} onClick={() => setPopupState(true)}>
        <div className="entry-content">
          <div className="entry-content-top-row">
            <span className="entry-title">{item.Name}</span>
            <span className="entry-price">฿ {item.BasePrice}</span>
          </div>
          {item.Description && <span className="entry-description">{item.Description}</span>}
          <div className="entry-content-bottom-row">
            <div>
              {/* {item.labels.map((label, index) => (
                <div className={`label-container ${label.class_name}`} key={index}>
                  <div className="label-icon">{label.icon}</div>
                  <div className="label-text">{label.name}</div>
                </div>
              ))} */}
            </div>
          </div>
        </div>
        {item.Photo && (
          <div className="entry-image-container">
            <img src={item.Photo} alt={item.Name} className="entry-image" />
          </div>
        )}
      </div>
      {/* {popupState && <Popup {...item} closePopup={() => setPopupState(!popupState)} />} */}
    </div>
  );
}
