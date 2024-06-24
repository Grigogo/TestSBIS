import Header from "@/ui/header/Header";
import MainGrid from "@/ui/main-grid/MainGrid";
import PreHeder from "@/ui/pre-header/PreHeader";
import MySlider from "@/ui/slider/MySlider";

export default function Home() {
  return (
    <div>
      <PreHeder />
      <Header />
      <MySlider />
      <MainGrid />
    </div>
  );
}
