import { FaAward } from "react-icons/fa";
import { FaChessQueen } from "react-icons/fa";
import { FaEnvira } from "react-icons/fa";

const plansData = [ 
    {
        image: <FaAward/>,
        name: 'Basic paket',
        price: '3000 rsd',
        time: '30 minuta',
        description: 'Basic paket pruža umirujuće i blagotvorno iskustvo kroz hidromasažnu kupku koja osvežava i opušta vašu bebu. Ovaj paket takođe uključuje blage vežbe u vodi za podsticanje motoričkog razvoja, uz savete roditeljima o tome kako hidroterapija može doprineti opuštanju i razvoju bebe.',
        bestFor: 'Prvu posetu spa centru i kratko, umirujuće iskustvo'
    },
    {
        image: <FaChessQueen/>,
        name: 'Standard paket',
        price: '4500 rsd',
        time: '60 minuta',
        description: 'Standard paket kombinuje hidromasažnu kupku sa kompletnom masažom za bebu, pružajući sveobuhvatnu relaksaciju i stimulaciju. Nakon kupke, sledi opuštajuća masaža koja pomaže bebi u osećaju sigurnosti i bliskosti. Takođe, roditelji dobijaju obuku o osnovama masaže koje mogu primenjivati kod kuće.',
        bestFor: 'Dublju relaksaciju i dodatnu stimulaciju bebinog razvoja, kao i edukaciju roditelja.'
    },
    {
        image: <FaEnvira/>,
        name: 'Premium paket',
        price: '5500 rsd',
        time: '90 minuta',
        description: 'Premium paket nudi luksuzno spa iskustvo za vašu bebu i wellness tretman za vas kao roditelja. Ovaj paket obuhvata masažu prilagođenu bebinim potrebama, opuštajuću hidromasažnu kupku, i poseban tretman za mamu (masaža vrata, ruku ili lica). Pored ovoga, naše stručno lice pruža personalizovane konsultacije za roditelje o masaži beba i tehnikama koje mogu koristiti kod kuće.',
        bestFor: 'Zajedničko opuštanje, dodatnu negu za mamu i bebu, i obuku o tehnikama za nastavak masaže kod kuće.'
    }
];

export default plansData;