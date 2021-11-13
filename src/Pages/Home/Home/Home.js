import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import ClintFeedback from '../ClientFeedback/ClintFeedback';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeTopBanner from '../HomeTopBanner/HomeTopBanner';
import OurPolicy from '../OurPolicy/OurPolicy';
import Products from '../Products/Products/Products';

const Home = () => {
    return (
        <div>
            {/* call all home page components */}
            <Navigation />
            <HomeTopBanner />
            <HomeBanner />
            <Products />
            <OurPolicy />
            <ClintFeedback />
            <Footer />
        </div>
    );
};

export default Home;