import { FC } from "react";
import { Carousel } from "nuka-carousel";
import Link from "next/link";
import Image from "next/image";

const Slider: FC = () => {
  return (
    <Carousel autoplay showDots>
      <Link href={""}>
        <Image src={""} alt={""} />
      </Link>
      <Link href={""}>
        <Image src={""} alt={""} />
      </Link>
      <Link href={""}>
        <Image src={""} alt={""} />
      </Link>
    </Carousel>
  );
};

export default Slider;
