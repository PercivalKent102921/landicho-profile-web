import React, { useState } from 'react';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import SkillsPage from './components/SkillsPage'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

const App = () => {
    const [activeTab, setActiveTab] = useState('home');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'home':
                return <HomePage />;
            case 'about':
                return <AboutPage />;
            case 'skills':
                return <SkillsPage />;
            case 'contact':
                return <ContactPage />;
            default:
                return <HomePage />;
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center">MY PROFILE</h1>
            <div className="nav nav-tabs justify-content-center mb-4">
                <button className={`nav-link ${activeTab === 'home' ? 'active' : ''}`} onClick={() => setActiveTab('home')}>Home</button>
                <button className={`nav-link ${activeTab === 'skills' ? 'active' : ''}`} onClick={() => setActiveTab('skills')}>Skills</button>
                <button className={`nav-link ${activeTab === 'about' ? 'active' : ''}`} onClick={() => setActiveTab('about')}>About</button>
                <button className={`nav-link ${activeTab === 'contact' ? 'active' : ''}`} onClick={() => setActiveTab('contact')}>Contact</button>
            </div>
            <div className="tab-content">
                {renderTabContent()}
            </div>
        </div>
    );
}

export default App;