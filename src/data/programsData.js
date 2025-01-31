import { MdBabyChangingStation } from "react-icons/md";
import { FaBaby } from "react-icons/fa";
import { MdOutlineBedroomBaby } from "react-icons/md";
import { GiBabyBottle } from "react-icons/gi";

const programsData = [ 
    {
        image: <MdBabyChangingStation/>,
        title: 'Baby Masaža - Nežnost koja povezuje',
        description: 'Baby masaža pruža blage i umirujuće dodire koji jačaju emocionalnu povezanost između roditelja i deteta. Ova tehnika pomaže u opuštanju, poboljšava san i ublažava grčeve. Roditelji kroz sesije uče veštine koje mogu primenjivati kod kuće, pružajući bebi ljubav i podršku kroz dodir.'
    },
    {
        image: <FaBaby/>,
        title: 'Hidroterapija - Sloboda pokreta i razvoj motorike',
        description: 'Hidroterapija u toploj, sterilnoj vodi omogućava bebama sigurno istraživanje pokreta, jačanje mišića i razvoj motorike. Naši bazeni su prilagođeni najmlađima, pružajući im osećaj sigurnosti i udobnosti tokom svakog tretmana.'
    },
    {
        image: <MdOutlineBedroomBaby/>,
        title: 'Relaks Tretmani za Mame - Trenutak za Vas',
        description: 'Dok vaša beba uživa u svojim tretmanima, vi možete iskoristiti vreme za opuštanje. U ponudi su masaže tela koje smanjuju stres, osvežavaju energiju i pružaju vam zasluženi trenutak mira.'
    },
    {
        image: <GiBabyBottle/>,
        title: 'Obuka za Roditelje - Dodir koji jača vezu',
        description: 'Naša obuka za roditelje osmišljena je da vas nauči kako da svojim dodirom pružite podršku i sigurnost vašoj bebi. Kroz praktične vežbe i savete, stičete znanja o tehnikama masaže koje pomažu u smirivanju, opuštanju i razvoju vašeg deteta. Obuka vam omogućava da kod kuće nastavite da negujete bliskost i poverenje kroz svakodnevni kontakt.'
    },
    {
        image: <GiBabyBottle/>,
        title: 'Higijena - Sigurnost na prvom mestu',
        description: 'U Little One Baby Spa primenjujemo najviše higijenske standarde. Sve površine, oprema i voda dezinfikuju se nakon svake upotrebe, uz upotrebu UV sterilizatora i ozonatora. Vaša beba je u sigurnim rukama.'
    }
];

export default programsData;