import React from "react";
import "./Reasons.css";
import { AiOutlineAlert } from "react-icons/ai";
import { GiFootprint } from "react-icons/gi";
import { IoSparklesOutline } from "react-icons/io5";

const Reasons = () => {
  return (
    <div className="reasons">
      <span className="anchor" id="reasons"></span>
      <div className="reasons-l">
        <span><IoSparklesOutline />Podsticanje razvoja motorike i koordinacije</span>
        <span><IoSparklesOutline />Poboljšanje snage i fleksibilnosti mišića</span>
        <span><IoSparklesOutline />Razvoj ravnoteže i telesne svesti</span>
        <span><IoSparklesOutline />Unapredjenje finih motoričkih veština</span>
        <span><IoSparklesOutline />Smanjenje simptoma kolike i nelagodnosti</span>
        <span><IoSparklesOutline />Poboljšanje cirkulacije i opuštanje mišića</span>
        <span><IoSparklesOutline />Smanjenje stresa i anksioznosti kod beba</span>
        <span><IoSparklesOutline />Jačanje emocionalne povezanosti izmedju roditelja i beba</span>
      </div>
      <div className="reasons-r relative">
        <div className="important container relative">
          <h3>Važno</h3>
          <span className="alert icon"><AiOutlineAlert /></span>
          <p>
            Pružamo sigurno i opuštajuće okruženje za bebe i roditelje, uz tretmane hidroterapije i masaže zasnovane na međunarodnim standardima. Naša usluga omogućava roditeljima da se povežu sa svojom bebom, usavrše tehnike masaže i dobiju stručnu podršku, dok istovremeno obezbeđujemo najviše higijenske standarde i individualizovanu brigu prilagođenu svakoj bebi.
          </p>
        </div>
        <div className="babyFoot"><GiFootprint /></div>
      </div>
    </div>
  );
};

export default Reasons;
