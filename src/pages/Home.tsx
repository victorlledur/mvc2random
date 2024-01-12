import { useState } from "react";
import akuma from "../assets/akuma.jpg"
import amingo from "../assets/amingo.jpg"
import anakaris from "../assets/anakaris.jpg"
import bbhood from "../assets/bbhood.jpg"
import bison from "../assets/bison.jpg"
import blackheart from "../assets/blackheart.jpg"
import cable from "../assets/cable.jpg"
import cammy from "../assets/cammy.jpg"
import captainamerica from "../assets/captainamerica.jpg"
import captaincommando from "../assets/captaincommando.jpg"
import charlie from "../assets/charlie.jpg"
import chunli from "../assets/chunli.jpg"
import colossus from "../assets/colossus.jpg"
import cyclops from "../assets/cyclops.jpg"
import dan from "../assets/dan.jpg"
import dhalsim from "../assets/dhalsim.jpg"
import drdoom from "../assets/drdoom.jpg"
import felicia from "../assets/felicia.jpg"
import gambit from "../assets/gambit.jpg"
import guile from "../assets/guile.jpg"
import hayato from "../assets/hayato.jpg"
import hulk from "../assets/hulk.jpg"
import iceman from "../assets/iceman.jpg"
import ironman from "../assets/ironman.jpg"
import jill from "../assets/jill.jpg"
import jin from "../assets/jin.jpg"
import juggernaut from "../assets/juggernaut.jpg"
import ken from "../assets/ken.jpg"
import magneto from "../assets/magneto.jpg"
import marrow from "../assets/marrow.jpg"
import megaman from "../assets/megaman.jpg"
import morrigan from "../assets/morrigan.jpeg"
import oemga from "../assets/oemga.jpg"
import psylocke from "../assets/psylocke.jpg"
import rogue from "../assets/rogue.jpg"
import roll from "../assets/roll.jpg"
import rubyheart from "../assets/rubyheart.jpg"
import ryu from "../assets/ryu.jpeg"
import sabretooth from "../assets/sabretooth.jpg"
import sakura from "../assets/sakura.jpg"
import sentinal from "../assets/sentinal.jpg"
import servbot from "../assets/servbot.jpg"
import shuma from "../assets/shuma.jpg"
import silversamurai from "../assets/silversamurai.jpg"
import sonson from "../assets/sonson.jpg"
import spidey from "../assets/spidey.jpg"
import spiral from "../assets/spiral.jpg"
import storm from "../assets/storm.jpg"
import strider from "../assets/strider.jpg"
import thanos from "../assets/thanos.jpg"
import tron from "../assets/tron.jpg"
import venom from "../assets/venom.jpg"
import warmachine from "../assets/warmachine.jpg"
import wolverineada from "../assets/wolverineada.jpg"
import wolviebone from "../assets/wolviebone.jpg"
import zangief from "../assets/zangief.jpg"
import title from "../assets/title.gif"
import "./Styles.css"

akuma as unknown as HTMLImageElement
function Home() {

    interface characterObject {
        Name: string,
        Imagem: any
    }

    const [character1AfretClick, setcharacter1AfretClick] = useState<characterObject>({ Name: "", Imagem: { akuma } });
    const [assist1AfretClick, setassist1AfretClick] = useState('');
    const [character2AfretClick, setcharacter2AfretClick] = useState<characterObject>({ Name: "", Imagem: { akuma } });
    const [assist2AfretClick, setassist2AfretClick] = useState('');
    const [character3AfretClick, setcharacter3AfretClick] = useState<characterObject>({ Name: "", Imagem: { akuma } });
    const [assist3AfretClick, setassist3AfretClick] = useState('');

    const characters = [{ Name: "Akuma", Imagem: akuma },
    { Name: "Amingo", Imagem: amingo },
    { Name: "Anakaris", Imagem: anakaris },
    { Name: "BB Hood", Imagem: bbhood },
    { Name: "Blackheart", Imagem: blackheart },
    { Name: "Cable", Imagem: cable },
    { Name: "Cammy", Imagem: cammy },
    { Name: "Captain America", Imagem: captainamerica },
    { Name: "Captain Commando", Imagem: captaincommando },
    { Name: "Charlie", Imagem: charlie },
    { Name: "Chun-Li", Imagem: chunli },
    { Name: "Colossus", Imagem: colossus },
    { Name: "Cyclops", Imagem: cyclops },
    { Name: "Dan", Imagem: dan },
    { Name: "Dhalsim", Imagem: dhalsim },
    { Name: "Doctor Doom", Imagem: drdoom },
    { Name: "Felicia", Imagem: felicia },
    { Name: "Gambit", Imagem: gambit },
    { Name: "Guile", Imagem: guile },
    { Name: "Hayato", Imagem: hayato },
    { Name: "Hulk", Imagem: hulk },
    { Name: "Iceman", Imagem: iceman },
    { Name: "Iron Man", Imagem: ironman },
    { Name: "Jill", Imagem: jill },
    { Name: "Jin", Imagem: jin },
    { Name: "Juggernaut", Imagem: juggernaut },
    { Name: "Ken", Imagem: ken },
    { Name: "M. Bison", Imagem: bison },
    { Name: "Magneto", Imagem: magneto },
    { Name: "Marrow", Imagem: marrow },
    { Name: "Mega Man", Imagem: megaman },
    { Name: "Morrigan", Imagem: morrigan },
    { Name: "Omega Red", Imagem: oemga },
    { Name: "Psylocke", Imagem: psylocke },
    { Name: "Rogue", Imagem: rogue },
    { Name: "Roll", Imagem: roll },
    { Name: "Ruby Heart", Imagem: rubyheart },
    { Name: "Ryu", Imagem: ryu },
    { Name: "Sabretooth", Imagem: sabretooth },
    { Name: "Sakura", Imagem: sakura },
    { Name: "Sentinel", Imagem: sentinal },
    { Name: "Servbot", Imagem: servbot },
    { Name: "Shuma-Gorath", Imagem: shuma },
    { Name: "Silver Samurai", Imagem: silversamurai },
    { Name: "SonSon", Imagem: sonson },
    { Name: "Spider-Man", Imagem: spidey },
    { Name: "Spiral", Imagem: spiral },
    { Name: "Storm", Imagem: storm },
    { Name: "Strider Hiryu", Imagem: strider },
    { Name: "Thanos", Imagem: thanos },
    { Name: "Tron", Imagem: tron },
    { Name: "Venom", Imagem: venom },
    { Name: "War Machine", Imagem: warmachine },
    { Name: "Wolverine Adamantium", Imagem: wolverineada },
    { Name: "Wolverine Bone", Imagem: wolviebone },
    { Name: "Zangief", Imagem: zangief }]

    const assists = ["Assist 1",
        "Assist 2",
        "Assist 3"]



    function randomCharacter1() {
        const randomElement = characters[Math.floor(Math.random() * characters.length)];
        const randomAssist = assists[Math.floor(Math.random() * assists.length)];
        console.log(randomElement);
        setcharacter1AfretClick(randomElement as any)
        setassist1AfretClick(randomAssist)
    }
    function randomCharacter2() {
        const randomElement = characters[Math.floor(Math.random() * characters.length)];
        const randomAssist = assists[Math.floor(Math.random() * assists.length)];
        console.log(randomElement);
        setcharacter2AfretClick(randomElement as any)
        setassist2AfretClick(randomAssist)
    }
    function randomCharacter3() {
        const randomElement = characters[Math.floor(Math.random() * characters.length)];
        const randomAssist = assists[Math.floor(Math.random() * assists.length)];
        console.log(randomElement);
        setcharacter3AfretClick(randomElement as any)
        setassist3AfretClick(randomAssist)
    }

    function randomTeam() {
        randomCharacter1()
        randomCharacter2()
        randomCharacter3()
    }

    return (
        <div>
            <div className="mainDiv">
                <div className="titleDiv">
                    <img className="banner" src={title} alt="title" />
                </div>
                <div className="cardsContainer">
                    <div className="cardsDiv">
                        <div className="elementsDiv">
                            <h2>{character1AfretClick.Name}</h2>
                            <img className="images" src={character1AfretClick.Imagem} alt={character1AfretClick.Name} />
                            <h3>{assist1AfretClick}</h3>
                            <button className="singleButtons" onClick={randomCharacter1}>Clique para selecionar personagem</button>
                        </div>
                        <div className="elementsDiv">
                            <h2>{character2AfretClick.Name}</h2>
                            <img className="images" src={character2AfretClick.Imagem} alt={character2AfretClick.Name} />
                            <h3>{assist2AfretClick}</h3>
                            <button className="singleButtons" onClick={randomCharacter2}>Clique para selecionar personagem</button>
                        </div>
                        <div className="elementsDiv">
                            <h2>{character3AfretClick.Name}</h2>
                            <img className="images" src={character3AfretClick.Imagem} alt={character3AfretClick.Name} />
                            <h3>{assist3AfretClick}</h3>
                            <button className="singleButtons" onClick={randomCharacter3}>Clique para selecionar personagem</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="teamDiv">
                        <button className="teamButton" onClick={randomTeam}>Clique para selecionar todo o time!</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;