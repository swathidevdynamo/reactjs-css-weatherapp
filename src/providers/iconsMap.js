import wind from '../images/wind.png';
import sky from "../images/01d.png";
import rain from "../images/10d.png";
import few_clouds from "../images/02d.png";
import scattered_clouds from "../images/03d.png"
import showers_rain from "../images/09d.png";
import broken_clouds from "../images/04d.png";
import windySnow from "../images/13d.png";
import thunderstorms from "../images/11d.png";
import fog from "../images/50d.png";
import sunny from "../images/01n.png";
import cloudy from "../images/02n.png";
import scattered_cloudy from "../images/03n.png";
import broken_cloudy from "../images/04n.png";
import showers from "../images/09n.png";
import thunderstorms_night from "../images/11n.png";
import windySnow_night from "../images/13n.png";
import fog_night from "../images/50n.png";



const iconsMap = {
  '01d': sky,
  '02d': few_clouds,
  '03d': scattered_clouds,
  '04d': broken_clouds,
  '09d': showers_rain,
  '10d': rain,
  '11d': thunderstorms,
  '13d': windySnow,
  '50d': fog,
  '01n': sunny,
  '02n': cloudy,
  '03n': scattered_cloudy,
  '04n': broken_cloudy,
  '09n': showers,
  '10n': wind,
  '11n': thunderstorms_night,
  '13n': windySnow_night,
  '50n': fog_night,
};

export const getIcon = name => {
  if (iconsMap[name]) {
    return iconsMap[name];
  }
};