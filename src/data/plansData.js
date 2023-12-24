import { FaAward } from "react-icons/fa";
import { FaChessQueen } from "react-icons/fa";
import { FaEnvira } from "react-icons/fa";

const plansData = [ 
    {
        image: <FaAward/>,
        name: 'Basic plan',
        price: '2900 rsd',
        features: [
            '30 minuta kvalitetnog programa :)',
            'Besplatna konsultacija sa fizioterapeutom',
            'Ulaz u prostorije spa centra'
        ]
    },
    {
        image: <FaChessQueen/>,
        name: 'Premium plan',
        price: '4900 rsd',
        features: [
            '45 minuta kvalitetnog programa :)',
            'Besplatna konsultacija sa fizioterapeutom',
            'Besplatno koricenje nasih proizvoda'
        ]
    },
    {
        image: <FaEnvira/>,
        name: 'Pro plan',
        price: '7900 rsd',
        features: [
            '1h kvalitetnog programa :)',
            '24/7 pristup za konsultacije',
            'Besplatna kafa dok traje tretman'
        ]
    }
];

export default plansData;