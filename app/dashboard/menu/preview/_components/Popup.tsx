import { useState } from "react";
import { Label, Option } from "@/plugin/menu/types/menu";
import { MdClose } from "react-icons/md";

interface PopupProps {
  name: string;
  description: string;
  base_price: number;
  photo: string;
  labels: Label[];
  options: Option[];
  closePopup: () => void;
}

export default function Popup({ name, description, base_price, photo, labels, options, closePopup }: PopupProps) {
  const [finalPrice, setFinalPrice] = useState(base_price);
  const [checkedOption, setCheckedOption] = useState<number | null>(null);

  const handleCheckboxChange = (event: any, index: number) => {
    if (event.target.checked) {
      setCheckedOption(index);
      setFinalPrice(event.target.value);
    } else {
      setCheckedOption(null);
      setFinalPrice(base_price);
    }
  };
  return (
    <>
      <div className="layer">
        <div className="popup-content">
          <MdClose onClick={() => closePopup()} className="close-icon" />

          <div className="popup-header">
            <div className="popup-left-col">
              <div className="popup-title">{name}</div>
              <div className="popup-price">฿ {finalPrice}</div>
              <div className="popup-description">{description}</div>
              <div className="popup-labels">
                {labels.map((label, index) => (
                  <div className={`label-container ${label.class_name}`} key={index}>
                    <div className="label-icon">{label.icon}</div>
                    <div className="label-text">{label.name}</div>
                  </div>
                ))}
              </div>
              <div className="popup-options-container">
                <div className="popup-options-title">Options</div>
                <div className="popup-options">
                  {options.map((option, index) => (
                    <div className="popup-option" key={index}>
                      <input
                        type="checkbox"
                        value={option.price}
                        className="checkbox"
                        checked={checkedOption === index}
                        onChange={(event) => handleCheckboxChange(event, index)}
                      />
                      <span className="popup-option-label">{option.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="popup-image-container">
              <img src={photo} alt={name} className="popup-image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
