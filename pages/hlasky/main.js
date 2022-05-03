let arr = document.getElementsByClassName('temp');

console.log(arr);


for (let i = 0; i < arr.length; i++) {
    arr[i].setAttribute('onclick', 'clicked(this.id)');
}


let content = document.getElementById('content');


function clicked(id) {
    let clear = document.getElementById('content');
    while (clear.firstChild) {
        clear.removeChild(clear.lastChild);
    }

    //document.getElementById(id).innerHTML = `${id}`;

    for (let index = 0; index < objects[`${id}`].length; index++) {
        let text = document.createElement('li');
        text.innerHTML = objects[`${id}`][index];
        text.setAttribute('class', 'content');
        content.appendChild(text);
    }



}

let objects = {
        Blek: [
            '„Plačko smrdí jak jeho staré knihy v škole" (2017)',
            '„Pošli mi ten nožík a potom ťa scamnem a blocknem si ťa" (2017)',
            '„Však so mnou rankupneš tak so mnou derankneš" (2020)',
        ],
        Godly: ['„Idem na long, veď ale v smoku v smoku! naľavo, naľavo!" (2017)',
            '„Za výhru derank nie je" (2017)',
            '„A z toho žĺtka bolo hnedko" (2019)',
            '„Skús si mať penis" (2019)',
            '„Pepky sa sypú jak jablká na jeseň" (2019)',
            '„Písať poznámky je viac usuless ako mužské bradavky" (2019)',
            '„Čo keby sa ti cuketa zlomila v zadku" (2019)',
            '„Zvolen, to je najvýchodnejšie ako sa dá" (2019)',
            '„Kebyže ja mám dieťa a zapne mi Fortnite, tak letí do koša" (2019)',
            '„Spánok je strata času" (2020)',
            '„Ak máš tehla = 1 + 0,5tehla" (2020)',
            '„Tak ty si oica" (2020)',
            '„ska" (2020)',
            '„Za koľko si kúpil tú powerbabku?" (2020)',
            '„Jouble dumb" (2020)',
            '„Ako sa volá ten medveď z Disney? Jáj, Micky Mouse" (2020)',
            '„Ja tu mám normálne, že bije srdce" (2020)',
            '„Oni sa zobúdzajú jak medvede na jar" (2020)',
            '„Blek nikoho nezaujíma" (2020)',
            '„Say yes to sprchovat a no to sprechovat" (2020)',
            '„-9°, ale freezing je pod nulou ty pepega" (2020)',
            '„Predbieha ma malé autíčko, to ma dokáže nasrať" (2020)',
            '„To vyzerá tak čínsko" (2020)',
            '„Ja som zabudol kde mám predok auta" (2021)',
            '„Ja pôjdem spať o dvanástej.... Akože zajtra o dvanástej" (2021)',
            '„Takže ak zoberiem Bukkit, tak to zoberie Bukkitové deti ale tam žiadne nie sú" (2022)'
        ],
        Bukkit: [
            '„Horím, chyť ma" (2017)',
            '„Keď nehrám, tak nehrám" (2017)',
            '„Žiješ, či dožívaš?" (2017)',
            '„Som si zlomil klávesnicu" (2019)',
            '„Tá pomlčka ma bije" (2019)',
            '„Hej ja tu mám normálne už že zlomenú hlavu" (2019)',
            '„Idem si umyť rozkrok" (2019)',
            '„Vrm vrm Bystrica?" (2019)',
            '„Bol to muž a chlap" (2019)',
            '„Napil som sa klobásky" (2019)',
            '„Ideme zo zadu do Osla" (2019)',
            '„Mne zamrzol motor" (2019)',
            '„Ja nemám kolesá, mne išli na prechádzku" (2019)',
            '„Bežne jem pri obede" (2019)',
            '„Kúpil som nám traktor a vec na oranie, aby sme si spravili aj vlastnú farmu" (2020)',
            '„10/3 = 2.6" (2020)',
            '„Lížem si slúchatká" (2020)',
            '„Trhá ma kôň" (2020)',
            '„Aj tvoja diera na hajzli je už meh" (2020)',
            '„Ako sa volá tá srnka, Daniel?" (2020)',
            '„V Fiona tit kingdom majú ako posunutý čas?" (2021)',
            '„Nemáš ten digestor do čoho si fúkneš?" (2021)',
            '„Nestrielaj, potrebujem kompletné ticho" (2021)',
            '„Mám nohy na stovke" (2022)',
            '„Od vchodu až po vonku vchod po obchod" (2022)'
        ],
        Dragon: [
            '„Ja nehúkam!" (2017)',
            '„Si dokúrený?" (2019)',
            '„Ó, ten vták dáva damage" (2020)',
            '„Mi tečie vlas z predkožky" (2020)',
            '„Blisebe kužšie" (2020)',
            '„No mne je hnus" (2020)',
            '„Ale musela by mať v hlave seno aby s tebou začala chodiť" (2020)',
            '„Help step impostor i got stuck in vent" (2020)',
            '„Ako zapnem diaľkové svetlá na koni?" (2020)',
            '„Aký mám dlhý krk? Pravítko musím vytiahnúť" (2022)',
            '„Kamaráti mi otvorili okno a zima vedľa mňa afkovala" (2022)'
        ],
        Teri: ['„Prvýkrát v živote som videla pipík" (2020)',
            'Kokoti. 😄'
        ],
        Plačko: [
            '„S tým tlmičom iba také tlmené" (2016)',
            '„El Truco to je môj friend a neviem odkiaľ ho mám" (2019)',
            '   „Ty normálne otvoríš Huga" (2019)',
            '            „A ide to rýchlosťou veľa" (2020)',
            '            „Mi tečie vlas z podložky" (2020)',
            '    „Je tam slanina ale není tam burger" (2020)',
            '   „Ferda Mravec je dobrý človek" (2020)',
            '     „Gibraltárske vodopády" (2020)',
            '     „Za to ti dám riť do riti" (2020)',
            '       „Kokot pussy" (2020)',
            '  „Ečko for amazing" (2021)',
            '  „A čo, aj keby som sa narodil pred minútou, tak čo?" (2021)',
            '„Dnes bol tak na hovno deň, že aj keď som si robil párky, tak mi jedna padla na zem" (2022)',
            '    „Godlyho plné vajca neexistujú" (2022)'
        ],
        Tron: [
            '    „Uvízla mi jachta na železnici" (2019)',
            '„Já jdu srdíčka moje" (2020)',
            '„Ten cápek mě normálně kláti" (2020)',
            '„Postavil se mi z toho kámen" (2020)',
            '„To mi zlomilo mozek toto" (2020)',
            '„Tobě se ti určite nastěhovala do pokoje babička" (2020)',
            '„To je ťávo" (2020)',
            '„Svět je jedno velký monopoly" (2020)',
            '„On má 5 IQ na metr krychlovej" (2021)',
            '„Ukážu ti, pokud nebudu v ohrožení" (2021)',
            '„9 až 1 minuta sekund" (2021)',
            '„On switchuje aggro častěji jak ponožky" (2021)',
            '„Ona má maximálně tak damage na mozku" (2021)'
        ],
        Goblleen: ['„Počúvaj, mne tu padá okno" (2022)'],
        Rico: [
            '„Podľa štatistiky: ľudia, čo píšu ľavou rukou stihnú dopísať test skôr ako ľudia bez rúk" (2017)',
            '„Že toasty sú ako rodičia.. keď sú čierni, nemáš čo jesť" (2017)'
        ],
        Impakt: [
            '„Palacinky bez šľahačky je jak sex ale s chlapcom" (2019)',
            '„Mi dýchyme čo rastliny vyserú" (2019)',
            '„Koľko gramov vzduchu denne zjem?" (2019)'
        ],
        Simox: [
            '„Majky ide, ale asi nejde" (2017)',
            '„Prečo horím? Chyť ma!" (2017)',
            '„Kuchyňa, papiere a tak ďalej" (2017)'
        ],
        Japan: [
            '„Mám skype na mobile, ale nemám mobil" (2017)',
            "„Hi Steam, I was play CS:GO and I was win and after win I got warning: member of group was VAC banned.\n And I didnt was play with hacker and I got de-rank after win help me please I want my rank back\" (2017)",
            '„I was say your is bfy" (2017)',
            '„I\'m like Africa, no money I have" (2021)'
        ],
        Dialogy: [
            `            Bkt: Kam to ideš Trone?\
            Tron: Po free kill. Jo aha, zhonye! (2017)`,

            `Bkt: Japan, vieš čo je kastrácia?
            Japan: Holenie (2017)`,

            `Godly: Dajte pauzu
            Bkt: Načo?
            Godly: Musím sa ísť napiť
            Bkt: Kvôli takýmto blbostiam nebudeme dávať pauzu...
            Godly: Dobre, tak budem hrať dehydrovaný (2017)`,

            `Simox: Ale mohli by ste aj vystreliť, keď už rushujeme
            Itachi: Ja som strelil 4 náboje do steny, aby som sa necítil trápne (2017)`,

            `Bkt: Prečo nejdeme tadiaľ?
            Simox: Lebo tam sú plienky (2017)`,

            `Bkt: Trone, máš ofinku?
            Tron: Asi jo.
            Bkt: Dobre, máš vlasy. (2019)`,

            `Bkt: *full flash*
            Plačko: Bukkit, zastri. (2021)`
        ],
    }
    // console.log(objects['blek']);

// content



function insertContent(arr) {

}