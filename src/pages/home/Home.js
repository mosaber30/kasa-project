import React from "react";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import imgHomeBanner from "../../assets/images/banner/homeBanner.png";
import Grid from "../../components/LogementDetails/Grid";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <Banner texte="Chez vous, partout et ailleurs" image={imgHomeBanner} />
        <Grid />
      </main>
      <Footer />
    </div>
  );
};

export default Home;