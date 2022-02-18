import Color from "./Color.js";
import { colorData } from "./colorData.js";

function AllColors() {
  return Object.keys(colorData).map((key) => {
    return (
      <Color name={key} allHexCodes={colorData[key]} className={"all-colors"} />
    );
  });
}

export default AllColors;
