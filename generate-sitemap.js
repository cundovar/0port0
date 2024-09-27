const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

// URL de base de ton site
const sitemap = new SitemapStream({ hostname: 'https://varascundo.com' });

// Ajouter des URLs manuellement
sitemap.write({ url: '/', changefreq: 'yearly', priority: 1.0 });
sitemap.write({ url: '/apropos', changefreq: 'monthly', priority: 0.8 });
sitemap.write({ url: '/portfolio', changefreq: 'monthly', priority: 0.9 });
sitemap.write({ url: '/contact', changefreq: 'yearly', priority: 0.5 });
sitemap.write({ url: '/cv', changefreq: 'yearly', priority: 0.5 });

// Terminer l'écriture du sitemap
sitemap.end();

// Sauvegarder le fichier sitemap.xml dans le dossier public
streamToPromise(sitemap).then((data) =>
  createWriteStream('./public/sitemap.xml').write(data)
);
