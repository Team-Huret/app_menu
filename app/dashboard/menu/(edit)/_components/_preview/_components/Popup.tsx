import { useState } from "react";
import { Option } from "../_types/menu";
import { MdClose } from "react-icons/md";

interface PopupProps {
  Name: string;
  Description: string;
  Photo: string;
  BasePrice: number;
  Badge: string;
  closePopup: () => void;
}

export default function Popup({ Name, Description, BasePrice, Photo, closePopup }: PopupProps) {
  const [finalPrice, setFinalPrice] = useState(BasePrice);
  const [checkedOption, setCheckedOption] = useState<number | null>(null);

  const handleCheckboxChange = (event: any, index: number) => {
    if (event.target.checked) {
      setCheckedOption(index);
      setFinalPrice(event.target.value);
    } else {
      setCheckedOption(null);
      setFinalPrice(BasePrice);
    }
  };
  return (
    <>
      <div className="layer">
        <div className="popup-content">
          <MdClose onClick={() => closePopup()} className="close-icon" />

          <div className="popup-header">
            <div className="popup-left-col">
              <div className="popup-title">{Name}</div>
              <div className="popup-price">฿ {finalPrice}</div>
              <div className="popup-description">{Description}</div>
            </div>
            {Photo && (
              <div className="popup-image-container">
                <img src={Photo} alt={Photo} className="popup-image" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
