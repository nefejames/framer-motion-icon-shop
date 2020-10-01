import React from "react";
import { motion } from "framer-motion";
import { Container } from "./Styles";

import { ReactComponent as AddIcon } from "./assets/add.svg";
import { ReactComponent as AirplaneIcon } from "./assets/airplane.svg";
import { ReactComponent as AlarmIcon } from "./assets/alarm.svg";
import { ReactComponent as AlbumIcon } from "./assets/album.svg";
import { ReactComponent as BowlIcon } from "./assets/bowl.svg";
import { ReactComponent as BriefcaseIcon } from "./assets/briefcase.svg";
import { ReactComponent as BrowserIcon } from "./assets/browser.svg";
import { ReactComponent as CalculatorIcon } from "./assets/calculator.svg";
import { ReactComponent as CalendarIcon } from "./assets/calendar.svg";
import { ReactComponent as CameraIcon } from "./assets/camera.svg";
import { ReactComponent as CaptionsIcon } from "./assets/captions.svg";
import { ReactComponent as CardClubsIcon } from "./assets/card-clubs.svg";
import { ReactComponent as CarouselIcon } from "./assets/carousel.svg";
import { ReactComponent as DollarIcon } from "./assets/dollar.svg";
import { ReactComponent as DribbleIcon } from "./assets/dribbble.svg";
import { ReactComponent as EraseIcon } from "./assets/erase.svg";
import { ReactComponent as EthernetIcon } from "./assets/ethernet.svg";
import { ReactComponent as EuroIcon } from "./assets/euro.svg";
import { ReactComponent as EyeIcon } from "./assets/eye.svg";
import { ReactComponent as FlagIcon } from "./assets/flag.svg";

import Card from "./Card";

const icons = [
  <AddIcon />,
  <AirplaneIcon />,
  <AlarmIcon />,
  <AlbumIcon />,
  <BowlIcon />,
  <BriefcaseIcon />,
  <BrowserIcon />,
  <CalculatorIcon />,
  <CalendarIcon />,
  <CameraIcon />,
  <CaptionsIcon />,
  <CardClubsIcon />,
  <CarouselIcon />,
  <DollarIcon />,
  <DribbleIcon />,
  <EraseIcon />,
  <EthernetIcon />,
  <EuroIcon />,
  <EyeIcon />,
  <FlagIcon />,
];

const CardContainer = () => {
  return (
    <Container initial={{ x: -1000 }} animate={{ x: 0 }}>
      {icons.map((icon) => (
        <Card icon={icon} />
      ))}
    </Container>
  );
};

export default CardContainer;
