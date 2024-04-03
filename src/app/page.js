import Banner from "@/components/ui/Banner";
import New from "@/components/ui/New";
import Pricing from "@/components/ui/Pricing";
import ReadyToProfit from "@/components/ui/ReadyToProfit";
import Services from "@/components/ui/Services";

const Home = () => {
  return (
    <main>
      <article className="container">
        <New />
        <Banner />
        <Services />
        <Pricing />
        <ReadyToProfit />
      </article>
    </main>
  );
};

export default Home;
