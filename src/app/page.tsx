import Blog from "@/ui/blog/Blog";
import Contacts from "@/ui/contacts/Contacts";
import Feedback from "@/ui/fedback/Feedback";
import Footer from "@/ui/footer/Footer";
import Header from "@/ui/header/Header";
import MainGrid from "@/ui/main-grid/MainGrid";
import Merch from "@/ui/merch/Merch";
import PreHeder from "@/ui/pre-header/PreHeader";
import MySlider from "@/ui/slider/MySlider";

export default function Home() {
  return (
    <div>
      <PreHeder />
      <Header />
      <MySlider />
      <MainGrid />
      <Merch />
      <Blog />
      <Feedback />
      <Contacts />
      <Footer />
    </div>
  );
}
