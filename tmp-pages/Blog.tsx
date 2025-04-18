import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Calendar, Share2, ExternalLink, ArrowLeft } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    slug: 'kaip-teisingai-utilizuoti-buitine-technika-kaune',
    title: 'Kaip teisingai utilizuoti buitinę techniką Kaune – nemokamo išvežimo galimybės',
    excerpt: 'Sužinokite, kaip saugiai ir legaliai utilizuoti buitinę techniką Kaune. Naudinga informacija apie nemokamą išvežimą ir teisingą atliekų tvarkymą.',
    date: '2024-03-15',
    imageUrl: '/images/straipsnis1.webp',
    content: `
      <h1>Kaip teisingai utilizuoti buitinę techniką Kaune – nemokamo išvežimo galimybės</h1>
      
      <h2>Įžanga</h2>
      <p>
        Kai keičiate šaldytuvą ar skalbimo mašiną, dažnai iškyla klausimas – kur padėti seną prietaisą?
        Šiame straipsnyje paaiškinsime, kaip saugiai ir legaliai utilizuoti buitinę techniką Kaune.
      </p>
      
      <h2>Kodėl svarbu utilizuoti teisingai?</h2>
      <ul>
        <li>Senas prietaisas gali turėti pavojingų medžiagų (freono, plastiko dalių, elektronikos)</li>
        <li>Netinkamas išmetimas gali būti baustinas (pagal LR atliekų tvarkymo įstatymą)</li>
        <li>Tvarkingai utilizavus – technika perdirbama, nekenkia aplinkai</li>
      </ul>

      <h2>Kaip užsakyti išvežimą?</h2>
      <div class="bg-green-50 p-6 rounded-lg my-6">
        <h3 class="font-bold mb-4">Užsakymo žingsniai:</h3>
        <ol class="space-y-2">
          <li>1. Užpildykite užklausos formą mūsų svetainėje</li>
          <li>2. Nurodykite prietaisų tipus ir kiekį</li>
          <li>3. Pasirinkite jums patogų laiką</li>
          <li>4. Mes susisieksime per 24 valandas</li>
        </ol>
        <div class="mt-6">
          <a href="/contact#contact-form" class="bg-green-600 text-white px-6 py-3 rounded-lg inline-flex items-center">
            <span>Užsakyti išvežimą</span>
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
      
      <h2>Dažniausiai išvežami prietaisai</h2>
      <ul>
        <li>✓ Šaldytuvai</li>
        <li>✓ Skalbimo mašinos</li>
        <li>✓ Viryklės, orkaitės</li>
        <li>✓ Indaplovės</li>
        <li>✓ Džiovyklės</li>
      </ul>
      
      <h2>Ką reikėtų žinoti prieš užsakant?</h2>
      <ul>
        <li>Prietaisas turi būti atjungtas nuo elektros / vandens</li>
        <li>Jei technika labai purvina – rekomenduojama ją nuvalyti</li>
        <li>Išvežimas nemokamas</li>
      </ul>
      
      <h2>Išvada</h2>
      <p>
        Atliekų tvarkymas prasideda nuo jūsų sprendimo. Pasirinkdami Transportuok.lt, jūs pasirenkate 
        greitą, patogų ir aplinkai draugišką sprendimą.
      </p>
    `,
    metaTitle: 'Kaip utilizuoti buitinę techniką Kaune | Transportuok.lt',
    metaDescription: 'Sužinokite, kaip teisingai ir nemokamai utilizuoti buitinę techniką Kaune. Transportuok.lt pasirūpins išvežimu nuo A iki Z.',
    ogImage: '/images/straipsnis1.webp',
  },
  {
    id: 2,
    slug: 'elektronikos-atlieku-perdirbimo-procesas',
    title: 'Elektronikos atliekų perdirbimas Kaune – kaip prisidėti prie švarios aplinkos',
    excerpt: 'Susipažinkite su elektronikos atliekų perdirbimo procesu ir sužinokite, kaip jūsų sena technika gauna antrą gyvenimą.',
    date: '2024-03-10',
    imageUrl: '/images/straipsnis2.webp',
    content: `
      <h1>Elektronikos atliekų perdirbimas Kaune – kaip prisidėti prie švarios aplinkos</h1>
      
      <h2>Įžanga</h2>
      <p>
        Elektronikos atliekų perdirbimas yra sudėtingas, bet būtinas procesas. Sužinokite, kaip jūsų 
        sena elektronika yra perdirbama ir kokią naudą tai teikia aplinkai.
      </p>

      <h2>Kaip užsakyti išvežimą?</h2>
      <div class="bg-green-50 p-6 rounded-lg my-6">
        <h3 class="font-bold mb-4">Užsakymo žingsniai:</h3>
        <ol class="space-y-2">
          <li>1. Užpildykite užklausos formą mūsų svetainėje</li>
          <li>2. Nurodykite prietaisų tipus ir kiekį</li>
          <li>3. Pasirinkite jums patogų laiką</li>
          <li>4. Mes susisieksime per 24 valandas</li>
        </ol>
        <div class="mt-6">
          <a href="/contact#contact-form" class="bg-green-600 text-white px-6 py-3 rounded-lg inline-flex items-center">
            <span>Užsakyti išvežimą</span>
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
      
      <h2>Perdirbimo etapai</h2>
      <h3>1. Surinkimas ir rūšiavimas</h3>
      <p>Pirmiausia atliekos yra surenkamos ir išrūšiuojamos pagal tipus:</p>
      <ul>
        <li>Buitinė technika</li>
        <li>Kompiuteriai ir jų dalys</li>
        <li>Mobilieji telefonai</li>
        <li>Televizoriai ir monitoriai</li>
      </ul>
      
      <h2>Perdirbimo nauda</h2>
      <ul>
        <li>Tausojami gamtos ištekliai</li>
        <li>Mažinama tarša</li>
        <li>Kuriamos naujos darbo vietos</li>
        <li>Gaunamos vertingos žaliavos</li>
      </ul>
      
      <h2>Ką galima perdirbti?</h2>
      <p>Beveik visa elektronika gali būti perdirbta:</p>
      <ul>
        <li>Metalai (varis, aliuminis, geležis)</li>
        <li>Plastikai</li>
        <li>Stiklas</li>
        <li>Taurieji metalai (auksas, sidabras)</li>
      </ul>
    `,
    metaTitle: 'Elektronikos atliekų perdirbimas Kaune | Transportuok.lt',
    metaDescription: 'Sužinokite apie elektronikos atliekų perdirbimo procesą Kaune. Nemokamas išvežimas ir atsakingas perdirbimas su Transportuok.lt.',
    ogImage: '/images/straipsnis2.webp',
  },
  {
    id: 3,
    slug: 'kaip-lengvai-ir-atsakingai-isvezti-senus-baldus-kaune',
    title: 'Kaip lengvai ir atsakingai išvežti senus baldus Kaune',
    excerpt: 'Sužinokite, kaip greitai ir patogiai atsikratyti senų baldų Kaune. Profesionalus išvežimas ir atsakingas utilizavimas.',
    date: '2024-03-05',
    imageUrl: '/images/straipsnis3.webp',
    content: `
      <h1>Kaip lengvai ir atsakingai išvežti senus baldus Kaune</h1>
      
      <h2>Įžanga</h2>
      <p>
        Keičiate baldus ar tvarkote namus? Sužinokite, kaip lengvai ir atsakingai išvežti senus baldus Kaune.
        Mūsų profesionalus aptarnavimas užtikrins sklandų ir greitą senų baldų išvežimą.
      </p>

      <h2>Kaip užsakyti baldų išvežimą?</h2>
      <div class="bg-green-50 p-6 rounded-lg my-6">
        <h3 class="font-bold mb-4">Užsakymo žingsniai:</h3>
        <ol class="space-y-2">
          <li>1. Užpildykite užklausos formą mūsų svetainėje</li>
          <li>2. Nurodykite baldų tipus ir kiekį</li>
          <li>3. Pasirinkite jums patogų laiką</li>
          <li>4. Mes susisieksime per 24 valandas</li>
        </ol>
        <div class="mt-6">
          <a href="/contact#contact-form" class="bg-green-600 text-white px-6 py-3 rounded-lg inline-flex items-center">
            <span>Užsakyti išvežimą</span>
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>

      <h2>Kokius baldus išvežame?</h2>
      <ul>
        <li>✓ Sofos ir foteliai</li>
        <li>✓ Lovos ir čiužiniai</li>
        <li>✓ Spintos ir komodos</li>
        <li>✓ Stalai ir kėdės</li>
        <li>✓ Virtuvės baldai</li>
        <li>✓ Biuro baldai</li>
      </ul>

      <h2>Mūsų paslaugos privalumai</h2>
      <ul>
        <li>Greitas ir patogus išvežimas</li>
        <li>Profesionalus aptarnavimas</li>
        <li>Baldų išnešimas iš bet kurio aukšto</li>
        <li>Atsakingas utilizavimas ir perdirbimas</li>
        <li>Konkurencingos kainos</li>
      </ul>

      <h2>Pasiruošimas baldų išvežimui</h2>
      <ul>
        <li>Ištuštinkite baldus nuo daiktų</li>
        <li>Jei įmanoma, išardykite didelius baldus</li>
        <li>Užtikrinkite laisvą priėjimą prie baldų</li>
        <li>Paruoškite liftą (jei yra) arba laiptinę</li>
      </ul>

      <h2>Dažniausiai užduodami klausimai</h2>
      <div class="space-y-4">
        <div>
          <h3 class="font-bold">Ar išnešite baldus iš buto/namo?</h3>
          <p>Taip, mūsų komanda profesionaliai išneš baldus iš bet kurio aukšto.</p>
        </div>
        <div>
          <h3 class="font-bold">Kiek kainuoja baldų išvežimas?</h3>
          <p>Kaina priklauso nuo baldų kiekio ir tipo. Susisiekite su mumis dėl tikslios kainos.</p>
        </div>
        <div>
          <h3 class="font-bold">Ar reikia išardyti baldus?</h3>
          <p>Nebūtina, bet jei galite – tai palengvins ir pagreitins išvežimo procesą.</p>
        </div>
      </div>

      <h2>Išvada</h2>
      <p>
        Senų baldų išvežimas su Transportuok.lt – tai patogus ir atsakingas sprendimas. 
        Mūsų profesionali komanda pasirūpins visu procesu nuo A iki Z, o jūs galėsite 
        mėgautis atnaujinta erdve be nereikalingų rūpesčių.
      </p>
    `,
    metaTitle: 'Senų baldų išvežimas Kaune | Transportuok.lt',
    metaDescription: 'Profesionalus senų baldų išvežimas Kaune. Greitas aptarnavimas, konkurencingos kainos ir atsakingas utilizavimas su Transportuok.lt.',
    ogImage: '/images/straipsnis3.webp',
  }
];

const BlogPost = () => {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;
  const slug = currentPath.split('/').pop();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <div>Straipsnis nerastas</div>;
  }

  React.useEffect(() => {
    document.title = post.metaTitle;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', post.metaDescription);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogImage = document.querySelector('meta[property="og:image"]');

    if (ogTitle) ogTitle.setAttribute('content', post.title);
    if (ogDescription) ogDescription.setAttribute('content', post.metaDescription);
    if (ogImage) ogImage.setAttribute('content', post.ogImage);
  }, [post]);

  const shareUrl = window.location.href;
  const shareText = post.title;

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareText)}`,
  };

  return (
    <article className="py-12" itemScope itemType="http://schema.org/BlogPosting">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Grįžti į straipsnių sąrašą
          </button>
        </div>

        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg mb-8"
          loading="lazy"
          itemProp="image"
        />
        
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <Calendar className="w-4 h-4 mr-2" />
          <time itemProp="datePublished" dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('lt-LT')}
          </time>
        </div>

        <div 
          className="prose prose-lg max-w-none"
          itemProp="articleBody"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-8 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Dalintis straipsniu:</h3>
          <div className="flex space-x-4">
            {Object.entries(shareLinks).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-green-600"
              >
                <Share2 className="w-5 h-5 mr-2" />
                {platform.charAt(0).toUpperCase() + platform.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

const BlogList = () => {
  React.useEffect(() => {
    document.title = 'Naujienos ir patarimai | Transportuok.lt';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Naujausia informacija apie atliekų tvarkymą ir perdirbimą Kaune. Naudingos žinios apie buitinės technikos ir elektronikos utilizavimą.');
    }
  }, []);

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Naujienos ir patarimai</h1>
          <p className="text-xl text-gray-600">Naujausia informacija apie atliekų tvarkymą ir perdirbimą</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              itemScope 
              itemType="http://schema.org/BlogPosting"
            >
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-48 object-cover"
                loading="lazy"
                itemProp="image"
              />
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <time itemProp="datePublished" dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('lt-LT')}
                  </time>
                </div>
                <h2 className="text-xl font-bold mb-3" itemProp="headline">{post.title}</h2>
                <p className="text-gray-600 mb-4" itemProp="description">{post.excerpt}</p>
                <Link 
                  to={`/blog/${post.slug}`}
                  className="text-green-600 font-semibold hover:text-green-700"
                >
                  Skaityti daugiau →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  const currentPath = window.location.pathname;
  return currentPath === '/blog' ? <BlogList /> : <BlogPost />;
};

export default Blog;