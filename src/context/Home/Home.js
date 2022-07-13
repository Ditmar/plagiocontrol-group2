import React from 'react';
import { LastDocument } from '../../ui/components/lastDocuments.jsx/LastDocument';
import { CardHome } from '../../ui/components/cardhome/CardHome';
import './Homes.css'

export const Home = () => {
    return <div className="style">
        Home pages

            <CardHome />
            <LastDocument />

    </div>
}