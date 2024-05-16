import Svg, {Path, Rect} from 'react-native-svg';
import {ISvgProps} from '../MainBackgroundSvg/';

export function IconLeftSvg(props: ISvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={47}
      height={47}
      fill="none"
      {...props}>
      <Rect
        width={47}
        height={47}
        fill="#A4A9AE"
        fillOpacity={0.25}
        rx={23.5}
      />
      <Path
        fill="#8E949A"
        d="m15.25 24-.354-.354-.353.354.353.354.354-.354Zm15 .5a.5.5 0 0 0 0-1v1Zm-10.354-5.854-5 5 .708.708 5-5-.708-.708Zm-5 5.708 5 5 .708-.708-5-5-.708.708Zm.354.146h15v-1h-15v1Z"
      />
    </Svg>
  );
}
