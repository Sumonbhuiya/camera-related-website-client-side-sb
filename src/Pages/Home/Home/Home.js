import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import ClintFeedback from '../ClientFeedback/ClintFeedback';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeTopBanner from '../HomeTopBanner/HomeTopBanner';
import Products from '../Products/Products/Products';

const Home = () => {
    return (
        <div>
            <Navigation />
            <HomeTopBanner />
            <HomeBanner />
            <Products />
            <ClintFeedback />
            <Footer />
        </div>
    );
};

export default Home;