// Perdirbimo kelionės duomenys pagal daikto tipą
type JourneyItemType = {
  title: string;
  description: string;
  imageUrl?: string;
  stages: {
    [key: number]: {
      title: string;
      description: string;
      icon: string;
      moreInfo?: string;
      impact?: string;
    }
  }
};

type JourneyDataType = {
  [key: string]: JourneyItemType
};

const journeyData: JourneyDataType = {
  'buitinė technika': {
    title: 'Buitinės technikos antrasis gyvenimas',
    description: 'Jūsų pasenusi ar nebeveikianti buitinė technika gali tapti vertinga žaliava naujiems produktams.',
    imageUrl: '/images/buitine-technika.webp',
    stages: {
      1: {
        title: 'Paėmimas',
        description: 'Mes nemokamai paimsime jūsų nebenaudojamą buitinę techniką tiesiai iš namų.',
        icon: '🚚',
        moreInfo: 'Mūsų specialiai apmokyti darbuotojai saugiai išneš ir transportuos jūsų stambią buitinę techniką.'
      },
      2: {
        title: 'Rūšiavimas',
        description: 'Mūsų specialistai įvertina, ar prietaisą galima atnaujinti ir vėl naudoti, ar jį reikia išardyti.',
        icon: '🔍',
        moreInfo: 'Beveik 30% surinktos buitinės technikos gali būti atnaujinta ir padovanota nepasiturintiems žmonėms.'
      },
      3: {
        title: 'Išardymas',
        description: 'Profesionalūs technikai saugiai pašalina pavojingas medžiagas ir atskiria vertingus komponentus.',
        icon: '🧰',
        moreInfo: 'Iš šaldytuvų saugiai pašaliname freoną, kuris yra 1000 kartų pavojingesnis šiltnamio efektui nei CO2.'
      },
      4: {
        title: 'Medžiagų atgavimas',
        description: 'Metalai, plastikas ir kitos vertingos medžiagos atskiriamos ir paruošiamos perdirbimui.',
        icon: '♻️',
        moreInfo: 'Iš vienos skalbimo mašinos galime išgauti iki 30 kg metalo, kuris bus panaudotas naujų produktų gamyboje.'
      },
      5: {
        title: 'Nauja pradžia',
        description: 'Jūsų senos buitinės technikos medžiagos virsta naujais produktais, taupydamos gamtos išteklius.',
        icon: '🌍',
        impact: 'Perdirbdami savo seną šaldytuvą, jūs sumažinate CO2 išmetimą tiek, kiek automobilius išmestų nuvažiavęs 15 000 km.'
      }
    }
  },
  'elektronika': {
    title: 'Elektronikos transformacija',
    description: 'Jūsų nenaudojami elektroniniai prietaisai slepia daugybę vertingų medžiagų, kurios gali būti panaudotos iš naujo.',
    imageUrl: '/images/elektronika.webp',
    stages: {
      1: {
        title: 'Surinkimas',
        description: 'Patogiai paimsime visus jūsų nenaudojamus elektroninius įrenginius iš namų ar biuro.',
        icon: '🚚',
        moreInfo: 'Nuo telefonų ir kompiuterių iki televizorių – paimame visų dydžių ir tipų elektroniką.'
      },
      2: {
        title: 'Duomenų išvalymas',
        description: 'Visiškai sunaikinami visi asmens duomenys iš jūsų prietaisų, užtikrinant jūsų privatumą.',
        icon: '🔒',
        moreInfo: 'Naudojame specialią programinę įrangą, atitinkančią karinės klasės duomenų išvalymo standartus.'
      },
      3: {
        title: 'Išardymas',
        description: 'Rankinis ir automatizuotas išardymas leidžia atskirti vertingus komponentus ir pavojingas medžiagas.',
        icon: '🔧',
        moreInfo: 'Išimame akumuliatorius, ekranus, plokštes ir kitas dalis, kurios reikalauja specialaus apdorojimo.'
      },
      4: {
        title: 'Tauriųjų metalų išgavimas',
        description: 'Iš elektronikos spausdintinių plokščių išgauname auksą, sidabrą ir kitus vertingus metalus.',
        icon: '💎',
        moreInfo: 'Viename tone senų mobiliųjų telefonų yra iki 350g aukso, 3.5kg sidabro ir 130kg vario - daugiau nei daugelyje kasyklų išgaunamų rūdų.'
      },
      5: {
        title: 'Žaliavų atgimimas',
        description: 'Išgautos medžiagos grįžta į gamybą kaip nauji produktai, taupant gamtos išteklius.',
        icon: '🌱',
        impact: 'Perdirbdami savo seną nešiojamąjį kompiuterį, jūs sutaupote tiek vandens, kiek užtektų vieno žmogaus 6 mėnesių gėrimo poreikiams.'
      }
    }
  },
  'baldai': {
    title: 'Baldų atgimimas',
    description: 'Jūsų nereikalingi baldai gali įgyti naują paskirtį ir sumažinti medienos kirtimą bei atliekų kiekį.',
    imageUrl: '/images/baldai.webp',
    stages: {
      1: {
        title: 'Išvežimas',
        description: 'Mūsų komanda profesionaliai išneš ir išveš jūsų baldus, nesvarbu, kuriame aukšte gyvenate.',
        icon: '🚚',
        moreInfo: 'Mūsų stiprūs darbuotojai ir specializuotos transporto priemonės gali išvežti net pačius didžiausius baldus.'
      },
      2: {
        title: 'Potencialo įvertinimas',
        description: 'Kiekvienas baldas įvertinamas – ar jį galima atnaujinti, ar panaudoti medžiagas kitiems tikslams.',
        icon: '🔍',
        moreInfo: 'Apie 40% surinktų baldų galima restauruoti ir jie gauna antrą šansą naujuose namuose.'
      },
      3: {
        title: 'Restauravimas arba išmontavimas',
        description: 'Tinkamus baldus restauruojame, o kitus išardome į atskiras medžiagas perdirbimui.',
        icon: '🪑',
        moreInfo: 'Mūsų meistrai gali atnaujinti baldus iki tokios būklės, kad jie atrodo kaip nauji ir tarnauja dar daugelį metų.'
      },
      4: {
        title: 'Medžiagų perdirbimas',
        description: 'Mediena, metalas, audiniai ir kitos medžiagos apdorojamos ir paruošiamos naujam panaudojimui.',
        icon: '♻️',
        moreInfo: 'Medinis baldas gali būti perdirbtas į medžio drožlių plokštes naujiems baldams arba statybinėms medžiagoms.'
      },
      5: {
        title: 'Uždaras ratas',
        description: 'Perdirbtos ar atnaujintos baldų dalys grįžta į gamybą arba tiesiogiai pas naujus savininkus.',
        icon: '🌲',
        impact: 'Perdirbdami vieną medinį stalą, jūs išsaugote medį, kuris per savo gyvenimą sugeria 1 toną CO2 ir pagamina deguonies 4 žmonėms.'
      }
    }
  },
  'metalo laužas': {
    title: 'Metalo vertė',
    description: 'Metalas yra viena vertingiausių perdirbamų medžiagų, nes gali būti perdirbamas begalę kartų neprarandant savybių.',
    imageUrl: '/images/metalo-lauzas.webp',
    stages: {
      1: {
        title: 'Surinkimas',
        description: 'Paimame metalo laužą iš jūsų namų, kiemo, statybvietės ar įmonės teritorijos.',
        icon: '🚚',
        moreInfo: 'Nuo nedidelių metalo atliekų iki senų automobilių – mūsų įranga gali susidoroti su bet kokio dydžio metalo laužu.'
      },
      2: {
        title: 'Rūšiavimas',
        description: 'Metalas rūšiuojamas pagal tipą: juodieji metalai (geležis, plienas) ir spalvotieji (aliuminis, varis, žalvaris).',
        icon: '⚙️',
        moreInfo: 'Spalvotieji metalai yra ypač vertingi dėl savo retesnio paplitimo ir aukštesnės rinkos vertės.'
      },
      3: {
        title: 'Apdorojimas',
        description: 'Metalai supresuojami, supjaustomi ar susmulkinami, kad būtų paruošti perdirbimo procesui.',
        icon: '🔨',
        moreInfo: 'Industriniuose smulkintuvuose automobilis gali būti susmulkintas vos per 45 sekundes.'
      },
      4: {
        title: 'Lydymas ir valymas',
        description: 'Išlydytas metalas išvalomas nuo priemaišų ir paruošiamas naujai gamybai.',
        icon: '🔥',
        moreInfo: 'Perdirbant aliuminį sutaupoma 95% energijos, palyginti su naujo aliuminio gamyba iš boksitų rūdos.'
      },
      5: {
        title: 'Nauji produktai',
        description: 'Perdirbtas metalas virsta naujais automobiliais, dviračiais, konservų skardinėmis ir tūkstančiais kitų daiktų.',
        icon: '🏗️',
        impact: 'Perdirbdami vieną toną plieno, jūs sutaupote 1,5 tonos geležies rūdos ir sumažinate CO2 išmetimą 86% lyginant su nauja gamyba.'
      }
    }
  },
  'daiktas': {
    title: 'Daikto antrasis gyvenimas',
    description: 'Kiekvienas daiktas turi potencialą tapti kažkuo nauju. Pasirinkite daikto tipą ir sužinokite jo transformacijos kelionę.',
    stages: {
      1: {
        title: 'Atsisveikinimas',
        description: 'Jūsų nebereikalingas daiktas paimamas iš namų ir pradeda savo kelionę į naują gyvenimą.',
        icon: '👋'
      },
      2: {
        title: 'Įvertinimas',
        description: 'Specialistai nusprendžia, ar daiktas gali būti atnaujintas, ar jo medžiagos bus perdirbtos.',
        icon: '🔍'
      },
      3: {
        title: 'Transformacija',
        description: 'Daiktas išardomas ir jo vertingos dalys ar medžiagos paruošiamos naujam panaudojimui.',
        icon: '🔄'
      },
      4: {
        title: 'Atgimimas',
        description: 'Iš jūsų senų daiktų medžiagų gimsta nauji produktai, kurių jūs galbūt net neatpažintumėte.',
        icon: '✨'
      },
      5: {
        title: 'Teigiamas pėdsakas',
        description: 'Jūsų sprendimas perdirbti prisideda prie švaresnės ir tvaresnės planetos kūrimo.',
        icon: '🌍'
      }
    }
  }
};

export default journeyData;