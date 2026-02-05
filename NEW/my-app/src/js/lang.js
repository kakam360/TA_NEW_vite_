/* Travellers' Archive – simple trilingual i18n
   - Uses [data-key] for text nodes
   - Uses data-*-key for attribute strings
*/

(function () {
  const translations = {
    en: {
      // Global
      page_title: "Travellers' Archive",
      about_page_title: "Traveler's Archive",
      contact_page_title: "Traveler's Archive",
      meta_description: "Download the best Creative Portfolio HTML Template in 2025",
      loading: "wait, wait..",
      loading_centerline: "Loading",

      // Navigation
      home: "Home",
      projects: "Projects",
      about: "About",
      donate: "Donate",
      contact: "Contact",

      // Projects menu items
      by_boat: "By Boat, By Memory",
      archive: "Archive",
      proj_swiss_archival: "Swiss archival research — Helvetia on her travels",
      proj_nigerian_research: "Nigerian research — Looking back through the window",
      proj_digitisation: "Digitisation — Long Memory",
      proj_technical: "Technical infrastructure — Integrated Visual Systems",
      proj_workshops: "Workshops / Public programs — Nigeria and Switzerland",

      // Header
      lets_talk: "Let's Talk",
      menu: "Menu",

      // Homepage hero
      archive_title: "Travellers' Archive",
      hero_subtitle1: "An evolving archive of Swiss–Nigerian encounters",
      hero_subtitle2: "across film, memory, and research practices.",
      scroll_explore: "Scroll to Explore",

      // Language switcher labels
      en: "En",
      fr: "Fr",
      de: "De",

      // Homepage rotating title
      the_text: "The",
      is_a_text: "is a",
      rotator1: "multimodal",
      rotator2: "recontextualising",
      rotator3: "critical-archival",
      rotator4: "transnational",
      project_text: "project",

      // Homepage description + CTA
      project_description: "We use close viewing and digital annotation to study archival film and rebuild context around dispersed material.",
      read_more: "Read More",

      // Since section
      history_text: "Since the 1940s,  <br> Swiss travellers have documented <br> movement speed until <br> their journeys through  <br> Nigerian cities. <br>but much of the footage remains<br>in private archives, <br>disconnected from its original<br> context. The Archive seeks to <br>preserve this visual<br>memory before it fades away.",
      history_read_more: "Read more about the project's origins →",

      // Continue exploring
      continue_exploring: "Continue exploring our work collection",
      all_projects: "All Projects",
      all_projects_lower: "all projects",
      filter_research: "research",
      filter_video: "video",
      filter_photos: "photos",
      open_project: "OPEN",
      projects_page_title: "Projects \u2014 Travellers' Archive",
      by_boat_full: "By Boat, By Memory",
      artistic_outputs: "Artistic outputs",
      proj_by_boat_summary: "A short film project documenting the travels of a specific group. Currently in development.",
      project_in_development_note: "Project details are currently in development.",

      // Contact block
      address_text: "Hammerstrasse 115, 4057 Basel",
      address_label: "Address",
      phone_text: "+41 (0)79 744 91 63",
      phone_label: "Phone",
      contact_label: "Contact",
      email_text: "info@travellersarchive.org",
      copy_mail: "Copy Mail",
      copied: "Copied",

      // Contact form fields
      name_placeholder: "What's Your Name",
      email_placeholder: "Your Email",
      message_placeholder: "Tell Us About Your Project",
      captcha_label: "Captcha Validation",
      send_mail: "Send Mail",
      ready_to_work: "Ready to work together?",

      // Page navigation
      about_page: "about",

      // Footer
      back_top: "Back Top",
      site_name: "The Travellers' Archive",
      all_rights: "All rights reserved.",
      follow_us: "Follow Us",

      // About page
      about_title: "About",
      about_subtitle1: "The Story",
      about_subtitle2: "and who it is for.",

      // About page parallax text
      parallax_text1: "We are The Travellers' Archive",
      parallax_text2: "We work with archival film",
      parallax_text3: "data, and memory",
      parallax_text4: "to understand how personal footage",
      parallax_text5: "and institutional records that shaped Swiss–Nigerian relations",
      parallax_text6: "in the twentieth century",

      // Audience sections
      aud_families_title: "Families",
      aud_families_text: "Help families locate, understand, and safely share personal films and photographs.",
      aud_academics_title: "Academics",
      aud_academics_text: "Support scholarship with rigorous metadata, annotation, and transparent archival methods.",
      aud_communities_title: "Cultural & research communities",
      aud_communities_text: "Build shared access, dialogue, and public programs across Nigeria and Switzerland.",

      team_title: "Project Team",
      team_subtitle: "The researchers and practitioners behind The Travellers' Archive.",

      bio_femi: "Digital heritage specialist and research fellow at the Travellers' Archive. Femi works across digital imaging, archival reconstruction, and African cultural heritage. He has contributed to research and teaching at MOWAA Digital Lab, the University of Arts Hamburg, the University of Zurich, and the Swiss Benin Initiative. His work focuses on how images, data, and memory shape the stories we inherit and the ones we choose to tell.",
      bio_daniel: "Daniel serves as the managing director of the Travellers' Archive Foundation. A communicator and storyteller by training, he believes bold ideas need structures strong enough to carry them. He works with organisations to strengthen strategy, administration, and long-term impact.",
      bio_third_member: "Add biography and description for the third team member here. This section can be customized with specific details about their role, background, and contributions to the Travellers' Archive project.",

      // Partners section
      partners_title: "Our Partners",
      partners_text: "We are grateful for the support of our partners and collaborators.",

      // Donate page
      donate_page_title: "Donate — Travellers' Archive",
      donate_title: "Donate",
      donate_subtitle1: "Support the work",
      donate_subtitle2: "and help keep the archive alive.",
      donate_subtitle1_alt: "Support the Archive",
      donate_subtitle2_alt: "Keep our history alive",
      donate_how_title: "How to donate",
      donate_how_text: "Donation options will appear here. Add bank details, payment links, or a contact email for giving.",
      donate_use_title: "How your support helps",
      donate_use_text: "Donations help us care for fragile materials, document provenance, build open tools, and run public programs in Nigeria and Switzerland.",
      donate_account_label: "Account Name:",
      donate_bank_label: "Bank:",
      donate_account_number_label: "Account Number:",
      donate_swift_label: "SWIFT/BIC:",
      donate_thank_you: "Thank you for your support",

      // Project pages
      project_page_overview_title: "Projects",
      project_page_subtitle1: "Each module is a distinct strand",
      project_page_subtitle2: "of the Travellers' Archive.",

      p_swiss_title: "Swiss archival research",
      p_swiss_subtitle: "Helvetia on her travels",
      p_nigeria_title: "Nigerian research",
      p_nigeria_subtitle: "Looking back through the window",
      p_digitisation_title: "Digitisation",
      p_digitisation_subtitle: "Long Memory",
      p_technical_title: "Technical infrastructure",
      p_technical_subtitle: "Integrated Visual Systems",
      p_workshops_title: "Workshops / Public programs",
      p_workshops_subtitle: "Nigeria and Switzerland",

      proj_swiss_archival_title: "Swiss archival research",
      proj_swiss_archival_body: "Helvetia on her travels. This page is a placeholder for now. It will include aims, methods, current outputs, and how to engage.",
      proj_swiss_archival_summary: "Explore Swiss archival documents to understand cross-cultural encounters and their contexts.",
      proj_helvetia_line1: "Retracing Swiss travellers' journeys",
      proj_helvetia_line2: "Across film and photography",

      proj_nigerian_research_title: "Nigerian research",
      proj_nigerian_research_body: "Looking back through the window. This page is a placeholder for now. It will include aims, methods, current outputs, and how to engage.",
      proj_nigerian_research_summary: "Investigate Nigerian archives and personal histories to illuminate shared heritage.",
      proj_looking_back_summary: "A reflective visual essay built from archival fragments, inviting viewers to reconsider memory and perspective.",

      proj_digitisation_title: "Digitisation",
      proj_digitisation_body: "Long Memory. This page is a placeholder for now. It will include aims, methods, current outputs, and how to engage.",
      proj_digitisation_summary: "Digitise fragile films and photographs to preserve long-memory narratives.",
      proj_long_memory_line1: "Using long memory to connect past and present",
      proj_long_memory_line2: "Linking archival material across generations",

      proj_technical_title: "Technical infrastructure",
      proj_technical_body: "Integrated Visual Systems. This page is a placeholder for now. It will include aims, methods, current outputs, and how to engage.",
      proj_technical_summary: "Build technical infrastructure and tools for visual research and annotation.",

      proj_workshops_title: "Workshops / Public programs",
      proj_workshops_body: "Nigeria and Switzerland. This page is a placeholder for now. It will include aims, methods, current outputs, and how to engage.",
      proj_nigeria_switzerland_summary: "Connect archival records across Nigeria and Switzerland to reveal shared histories and foster dialogue.",

      project_stub: "This page is a placeholder for now. It will include aims, methods, current outputs, and how to engage.",

      // Additional contact page labels
      contact_subtitle1: "We'd love to hear from you",
      contact_subtitle2: "Join our journey"
    },

    fr: {
      // Global
      page_title: "Les Travellers' Archive",
      about_page_title: "Les Travellers' Archive",
      contact_page_title: "Les Travellers' Archive",
      meta_description: "Téléchargez le meilleur modèle HTML de portfolio créatif en 2025",
      loading: "attendez, attendez..",
      loading_centerline: "Chargement",

      // Navigation
      home: "Accueil",
      projects: "Projets",
      about: "À propos",
      donate: "Donner",
      contact: "Contact",

      // Projects menu items
      by_boat: "Par bateau, par mémoire",
      archive: "Archive",
      proj_swiss_archival: "Recherche archivistique suisse — Helvetia en voyage",
      proj_nigerian_research: "Recherche nigériane — Regarder par la fenêtre",
      proj_digitisation: "Numérisation — Longue Mémoire",
      proj_technical: "Infrastructure technique — Systèmes visuels intégrés",
      proj_workshops: "Ateliers / programmes publics — Nigéria et Suisse",

      // Header
      lets_talk: "Discutons",
      menu: "Menu",

      // Homepage hero
      archive_title: "Travellers' Archive",
      hero_subtitle1: "Un archive en évolution des rencontres Suisse–Nigéria",
      hero_subtitle2: "à travers le film, la mémoire et les pratiques de recherche.",
      scroll_explore: "Défiler pour explorer",

      // Language switcher labels
      en: "En",
      fr: "Fr",
      de: "De",

      // Homepage rotating title
      the_text: "Le",
      is_a_text: "est un",
      rotator1: "multimodal",
      rotator2: "recontextualisant",
      rotator3: "critique et archivistique",
      rotator4: "transnational",
      project_text: "projet",

      // Homepage description + CTA
      project_description: "Nous utilisons le visionnage rapproché et l'annotation numérique pour étudier des films d'archives et reconstruire le contexte autour de matériaux dispersés.",
      read_more: "Lire plus",

      // Since section
      history_text: "Depuis les années 1940,<br> des voyageurs suisses ont documenté<br> leurs parcours à travers<br> des villes nigérianes.<br> Mais une grande partie des images reste<br> dans des archives privées,<br> déconnectée de son contexte d'origine.<br> L'Archive cherche à préserver cette mémoire visuelle<br> avant qu'elle ne s'efface.",
      history_read_more: "En savoir plus sur l'origine du projet →",

      // Continue exploring
      continue_exploring: "Continuez à explorer notre collection",
      all_projects: "Tous les projets",
      all_projects_lower: "tous les projets",
      filter_research: "recherche",
      filter_video: "vid\u00e9o",
      filter_photos: "photos",
      open_project: "OUVRIR",
      projects_page_title: "Projets \u2014 Travellers' Archive",
      by_boat_full: "En bateau, par la m\u00e9moire",
      artistic_outputs: "Productions artistiques",
      proj_by_boat_summary: "Un projet de court m\u00e9trage documentant les d\u00e9placements d\u2019un groupe particulier. Actuellement en d\u00e9veloppement.",
      project_in_development_note: "Les d\u00e9tails du projet sont actuellement en cours de d\u00e9veloppement.",

      // Contact block
      address_text: "Hammerstrasse 115, 4057 Bâle",
      address_label: "Adresse",
      phone_text: "+41 (0)79 744 91 63",
      phone_label: "Téléphone",
      contact_label: "Contact",
      email_text: "info@travellersarchive.org",
      copy_mail: "Copier l'e-mail",
      copied: "Copié",

      // Contact form fields
      name_placeholder: "Quel est votre nom",
      email_placeholder: "Votre email",
      message_placeholder: "Parlez-nous de votre projet",
      captcha_label: "Validation Captcha",
      send_mail: "Envoyer le message",
      ready_to_work: "Prêt à travailler ensemble ?",

      // Page navigation
      about_page: "à propos",

      // Footer
      back_top: "Retour en haut",
      site_name: "Les Travellers' Archive",
      all_rights: "Tous droits réservés.",
      follow_us: "Suivez-nous",

      // About page
      about_title: "À propos",
      about_subtitle1: "L'histoire",
      about_subtitle2: "et à qui il s'adresse.",

      // About page parallax text
      parallax_text1: "Nous sommes Les Travellers' Archive",
      parallax_text2: "Nous travaillons avec des films d'archives",
      parallax_text3: "données, et mémoire",
      parallax_text4: "pour comprendre comment les images personnelles",
      parallax_text5: "et les archives institutionnelles ont façonné les relations Suisse–Nigéria",
      parallax_text6: "au vingtième siècle",

      // Audience sections
      aud_families_title: "Familles",
      aud_families_text: "Aider les familles à retrouver, comprendre et partager en toute sécurité des films et photographies personnels.",
      aud_academics_title: "Universitaires",
      aud_academics_text: "Soutenir la recherche grâce à des métadonnées rigoureuses, à l'annotation et à des méthodes archivistiques transparentes.",
      aud_communities_title: "Communautés culturelles et de recherche",
      aud_communities_text: "Construire un accès partagé, le dialogue et des programmes publics entre le Nigéria et la Suisse.",

      team_title: "Équipe du projet",
      team_subtitle: "Les chercheur·e·s et praticien·ne·s derrière Les Travellers' Archive.",

      bio_femi: "Spécialiste du patrimoine numérique et chercheur au sein des Travellers' Archive. Femi travaille à l'intersection de l'imagerie numérique, de la reconstruction archivistique et du patrimoine culturel africain. Il a contribué à la recherche et à l'enseignement au MOWAA Digital Lab, à l'Université des Arts de Hambourg, à l'Université de Zurich et à la Swiss Benin Initiative. Son travail porte sur la manière dont les images, les données et la mémoire façonnent les récits que nous héritons et ceux que nous choisissons de raconter.",
      bio_daniel: "Daniel dirige Pearl'n'Orange et est directeur général de la Fondation des Travellers' Archive. Communicant et conteur de formation, il estime que les idées audacieuses ont besoin de structures suffisamment solides pour les porter. Il accompagne des organisations dans le renforcement de leur stratégie, de leur administration et de leur impact à long terme.",
      bio_third_member: "Ajoutez la biographie et la description du troisième membre de l'équipe ici. Cette section peut être personnalisée avec des détails spécifiques sur son rôle, son parcours et ses contributions au projet Travellers' Archive.",

      // Partners section
      partners_title: "Nos partenaires",
      partners_text: "Nous sommes reconnaissants du soutien de nos partenaires et collaborateurs.",

      // Donate page
      donate_page_title: "Donner — Les Travellers' Archive",
      donate_title: "Donner",
      donate_subtitle1: "Soutenir le travail",
      donate_subtitle2: "et faire vivre l'archive.",
      donate_subtitle1_alt: "Soutenez l'archive",
      donate_subtitle2_alt: "Gardez notre histoire vivante",
      donate_how_title: "Comment donner",
      donate_how_text: "Les options de don apparaîtront ici. Ajoutez des coordonnées bancaires, des liens de paiement ou une adresse de contact.",
      donate_use_title: "À quoi sert votre soutien",
      donate_use_text: "Les dons nous aident à prendre soin de matériaux fragiles, documenter la provenance, construire des outils ouverts et organiser des programmes publics au Nigéria et en Suisse.",
      donate_account_label: "Nom du compte :",
      donate_bank_label: "Banque :",
      donate_account_number_label: "Numéro de compte :",
      donate_swift_label: "SWIFT/BIC :",
      donate_thank_you: "Merci pour votre soutien",

      // Project pages
      project_page_overview_title: "Projets",
      project_page_subtitle1: "Chaque module est un fil distinct",
      project_page_subtitle2: "des Travellers' Archive.",

      p_swiss_title: "Recherche archivistique suisse",
      p_swiss_subtitle: "Helvetia en voyage",
      p_nigeria_title: "Recherche nigériane",
      p_nigeria_subtitle: "Regarder par la fenêtre",
      p_digitisation_title: "Numérisation",
      p_digitisation_subtitle: "Longue Mémoire",
      p_technical_title: "Infrastructure technique",
      p_technical_subtitle: "Systèmes visuels intégrés",
      p_workshops_title: "Ateliers / programmes publics",
      p_workshops_subtitle: "Nigéria et Suisse",

      proj_swiss_archival_title: "Recherche archivistique suisse",
      proj_swiss_archival_body: "Helvetia en voyage. Cette page est un placeholder pour l'instant. Elle présentera les objectifs, les méthodes, les livrables en cours et les modalités de participation.",
      proj_swiss_archival_summary: "Explorer des documents d'archives suisses pour comprendre les rencontres interculturelles et leurs contextes.",
      proj_helvetia_line1: "Retracer les voyages des voyageurs suisses",
      proj_helvetia_line2: "À travers film et photographie",

      proj_nigerian_research_title: "Recherche nigériane",
      proj_nigerian_research_body: "Regarder par la fenêtre. Cette page est un placeholder pour l'instant. Elle présentera les objectifs, les méthodes, les livrables en cours et les modalités de participation.",
      proj_nigerian_research_summary: "Enquêter sur les archives nigérianes et les histoires personnelles pour éclairer notre patrimoine commun.",
      proj_looking_back_summary: "Un essai visuel réfléchi construit à partir de fragments d'archives, invitant à reconsidérer la mémoire et la perspective.",

      proj_digitisation_title: "Numérisation",
      proj_digitisation_body: "Longue Mémoire. Cette page est un placeholder pour l'instant. Elle présentera les objectifs, les méthodes, les livrables en cours et les modalités de participation.",
      proj_digitisation_summary: "Numériser des films et photographies fragiles pour préserver des récits de longue mémoire.",
      proj_long_memory_line1: "Utiliser la longue mémoire pour relier passé et présent",
      proj_long_memory_line2: "Relier des documents d'archives à travers les générations",

      proj_technical_title: "Infrastructure technique",
      proj_technical_body: "Systèmes visuels intégrés. Cette page est un placeholder pour l'instant. Elle présentera les objectifs, les méthodes, les livrables en cours et les modalités de participation.",
      proj_technical_summary: "Construire une infrastructure technique et des outils pour la recherche visuelle et l'annotation.",

      proj_workshops_title: "Ateliers / programmes publics",
      proj_workshops_body: "Nigéria et Suisse. Cette page est un placeholder pour l'instant. Elle présentera les objectifs, les méthodes, les livrables en cours et les modalités de participation.",
      proj_nigeria_switzerland_summary: "Connecter des archives du Nigéria et de la Suisse afin de révéler des histoires partagées et de favoriser le dialogue.",

      project_stub: "Cette page est un placeholder pour l'instant. Elle présentera les objectifs, les méthodes, les livrables en cours et les modalités de participation.",

      // Additional contact page labels
      contact_subtitle1: "Nous aimerions avoir de vos nouvelles",
      contact_subtitle2: "Rejoignez notre voyage"
    },

    de: {
      // Global
      page_title: "Das Travellers' Archive ",
      about_page_title: "Das Travellers' Archive",
      contact_page_title: "Das Travellers' Archive",
      meta_description: "Laden Sie das beste kreative Portfolio-HTML-Template im Jahr 2025 herunter",
      loading: "bitte warten..",
      loading_centerline: "Laden",

      // Navigation
      home: "Startseite",
      projects: "Projekte",
      about: "Über uns",
      donate: "Spenden",
      contact: "Kontakt",

      // Projects menu items
      by_boat: "Mit dem Boot, mit Erinnerung",
      archive: "Archiv",
      proj_swiss_archival: "Schweizer Archivforschung — Helvetia auf Reisen",
      proj_nigerian_research: "Nigerianische Forschung — Blick durchs Fenster",
      proj_digitisation: "Digitalisierung — Langes Gedächtnis",
      proj_technical: "Technische Infrastruktur — Integrierte visuelle Systeme",
      proj_workshops: "Workshops / öffentliche Programme — Nigeria und Schweiz",

      // Header
      lets_talk: "Kontakt aufnehmen",
      menu: "Menü",

      // Homepage hero
      archive_title: "Travellers' Archive ",
      hero_subtitle1: "Ein wachsendes Archiv Schweizerisch–Nigerianischer Begegnungen",
      hero_subtitle2: "über Film, Erinnerung und Forschungspraxis hinweg.",
      scroll_explore: "Scrollen zum Erkunden",

      // Language switcher labels
      en: "En",
      fr: "Fr",
      de: "De",

      // Homepage rotating title
      the_text: "Das",
      is_a_text: "ist ein",
      rotator1: "multimodales",
      rotator2: "rekontextualisierendes",
      rotator3: "kritisch-archivarisches",
      rotator4: "transnationales",
      project_text: "Projekt",

      // Homepage description + CTA
      project_description: "Wir nutzen genaue Betrachtung und digitale Annotation, um Archivfilm zu erforschen und Kontext um verstreutes Material wiederherzustellen.",
      read_more: "Mehr lesen",

      // Since section
      history_text: "Seit den 1940er Jahren,<br> haben Schweizer Reisende ihre Wege durch<br> nigerianische Städte dokumentiert.<br> Doch ein Großteil des Materials bleibt<br> in privaten Archiven,<br> vom ursprünglichen Kontext getrennt.<br> Das Archiv arbeitet daran,<br> dieses visuelle Gedächtnis zu bewahren,<br> bevor es verblasst.",
      history_read_more: "Mehr über die Entstehung des Projekts →",

      // Continue exploring
      continue_exploring: "Entdecken Sie unsere Sammlung weiter",
      all_projects: "Alle Projekte",
      all_projects_lower: "alle Projekte",
      filter_research: "Forschung",
      filter_video: "Video",
      filter_photos: "Fotos",
      open_project: "\u00d6FFNEN",
      projects_page_title: "Projekte \u2014 Travellers' Archive",
      by_boat_full: "Mit dem Boot, durch Erinnerung",
      artistic_outputs: "K\u00fcnstlerische Arbeiten",
      proj_by_boat_summary: "Ein Kurzfilmprojekt, das die Reisen einer bestimmten Gruppe dokumentiert. Derzeit in Entwicklung.",
      project_in_development_note: "Die Projektdetails befinden sich derzeit in Entwicklung.",

      // Contact block
      address_text: "Hammerstrasse 115, 4057 Basel",
      address_label: "Adresse",
      phone_text: "+41 (0)79 744 91 63",
      phone_label: "Telefon",
      contact_label: "Kontakt",
      email_text: "info@travellersarchive.org",
      copy_mail: "E-Mail kopieren",
      copied: "Kopiert",

      // Contact form fields
      name_placeholder: "Wie ist Ihr Name",
      email_placeholder: "Ihre E-Mail",
      message_placeholder: "Erzählen Sie uns von Ihrem Projekt",
      captcha_label: "Captcha-Validierung",
      send_mail: "Nachricht senden",
      ready_to_work: "Bereit zusammenzuarbeiten?",

      // Page navigation
      about_page: "Über",

      // Footer
      back_top: "Nach oben",
      site_name: "Das Travellers' Archive ",
      all_rights: "Alle Rechte vorbehalten.",
      follow_us: "Folgen Sie uns",

      // About page
      about_title: "Über uns",
      about_subtitle1: "Die Geschichte",
      about_subtitle2: "und für wen es gedacht ist.",

      // About page parallax text
      parallax_text1: "Wir sind Das Travellers' Archive",
      parallax_text2: "Wir arbeiten mit Archivfilm",
      parallax_text3: "Daten und Erinnerung",
      parallax_text4: "um zu verstehen, wie persönliches Filmmaterial",
      parallax_text5: "und institutionelle Aufzeichnungen die schweizerisch-nigerianischen Beziehungen prägten",
      parallax_text6: "im zwanzigsten Jahrhundert",

      // Audience sections
      aud_families_title: "Familien",
      aud_families_text: "Familien helfen, persönliche Filme und Fotografien zu finden, zu verstehen und sicher zu teilen.",
      aud_academics_title: "Wissenschaft",
      aud_academics_text: "Forschung unterstützen mit soliden Metadaten, Annotation und transparenten Archivmethoden.",
      aud_communities_title: "Kultur- und Forschungsgemeinschaften",
      aud_communities_text: "Gemeinsamen Zugang, Dialog und öffentliche Programme zwischen Nigeria und der Schweiz aufbauen.",

      team_title: "Projektteam",
      team_subtitle: "Die Forschenden und Praktiker hinter dem Travellers' Archive .",

      bio_femi: "Spezialist für digitales Kulturerbe und Research Fellow beim Travellers' Archive . Femi arbeitet an digitaler Bildgebung, archivischer Rekonstruktion und afrikanischem Kulturerbe. Er hat an Forschung und Lehre am MOWAA Digital Lab, an der Hochschule für Bildende Künste Hamburg, an der Universität Zürich und bei der Swiss Benin Initiative mitgewirkt. Seine Arbeit untersucht, wie Bilder, Daten und Erinnerung die Geschichten prägen, die wir erben, und die wir erzählen wollen.",
      bio_daniel: "Daniel leitet Pearl'n'Orange und ist Geschäftsführer der Travellers' Archive Foundation. Als Kommunikator und Storyteller glaubt er, dass mutige Ideen Strukturen brauchen, die stark genug sind, sie zu tragen. Er arbeitet mit Organisationen daran, Strategie, Administration und langfristige Wirkung zu stärken.",
      bio_third_member: "Fügen Sie hier die Biografie und Beschreibung des dritten Teammitglieds hinzu. Dieser Abschnitt kann mit spezifischen Details zu ihrer Rolle, ihrem Hintergrund und ihren Beiträgen zum Travellers' Archive-Projekt angepasst werden.",

      // Partners section
      partners_title: "Unsere Partner",
      partners_text: "Wir sind dankbar für die Unterstützung unserer Partner und Mitarbeiter.",

      // Donate page
      donate_page_title: "Spenden — Travellers' Archive ",
      donate_title: "Spenden",
      donate_subtitle1: "Unterstützen Sie die Arbeit",
      donate_subtitle2: "und helfen Sie, das Archiv lebendig zu halten.",
      donate_subtitle1_alt: "Unterstützen Sie das Archiv",
      donate_subtitle2_alt: "Halten Sie unsere Geschichte lebendig",
      donate_how_title: "So können Sie spenden",
      donate_how_text: "Spendenoptionen erscheinen hier. Fügen Sie Bankdaten, Zahlungslinks oder eine Kontaktadresse hinzu.",
      donate_use_title: "Wobei Ihre Unterstützung hilft",
      donate_use_text: "Spenden helfen uns, fragile Materialien zu sichern, Provenienzen zu dokumentieren, offene Werkzeuge zu bauen und öffentliche Programme in Nigeria und der Schweiz durchzuführen.",
      donate_account_label: "Kontoinhaber:",
      donate_bank_label: "Bank:",
      donate_account_number_label: "Kontonummer:",
      donate_swift_label: "SWIFT/BIC:",
      donate_thank_you: "Vielen Dank für Ihre Unterstützung",

      // Project pages
      project_page_overview_title: "Projekte",
      project_page_subtitle1: "Jedes Modul ist ein eigener Strang",
      project_page_subtitle2: "des Archivs der Reisenden.",

      p_swiss_title: "Schweizer Archivforschung",
      p_swiss_subtitle: "Helvetia auf Reisen",
      p_nigeria_title: "Nigerianische Forschung",
      p_nigeria_subtitle: "Blick durchs Fenster",
      p_digitisation_title: "Digitalisierung",
      p_digitisation_subtitle: "Langes Gedächtnis",
      p_technical_title: "Technische Infrastruktur",
      p_technical_subtitle: "Integrierte visuelle Systeme",
      p_workshops_title: "Workshops / öffentliche Programme",
      p_workshops_subtitle: "Nigeria und Schweiz",

      proj_swiss_archival_title: "Schweizer Archivforschung",
      proj_swiss_archival_body: "Helvetia auf Reisen. Diese Seite ist vorerst ein Platzhalter. Sie wird Ziele, Methoden, aktuelle Ergebnisse und Beteiligungsmöglichkeiten enthalten.",
      proj_swiss_archival_summary: "Erkunden Sie Schweizer Archivdokumente, um interkulturelle Begegnungen und ihre Zusammenhänge zu verstehen.",
      proj_helvetia_line1: "Die Reisen schweizerischer Reisender nachvollziehen",
      proj_helvetia_line2: "Mit Film und Fotografie",

      proj_nigerian_research_title: "Nigerianische Forschung",
      proj_nigerian_research_body: "Blick durchs Fenster. Diese Seite ist vorerst ein Platzhalter. Sie wird Ziele, Methoden, aktuelle Ergebnisse und Beteiligungsmöglichkeiten enthalten.",
      proj_nigerian_research_summary: "Untersuchen Sie nigerianische Archive und persönliche Geschichten, um das gemeinsame Erbe zu beleuchten.",
      proj_looking_back_summary: "Ein reflektierender visueller Essay aus Archivfragmenten, der dazu einlädt, Erinnerung und Perspektive neu zu betrachten.",

      proj_digitisation_title: "Digitalisierung",
      proj_digitisation_body: "Langes Gedächtnis. Diese Seite ist vorerst ein Platzhalter. Sie wird Ziele, Methoden, aktuelle Ergebnisse und Beteiligungsmöglichkeiten enthalten.",
      proj_digitisation_summary: "Digitalisieren Sie fragile Filme und Fotografien, um Langzeit-Erzählungen zu bewahren.",
      proj_long_memory_line1: "Das Langzeitgedächtnis nutzen, um Vergangenheit und Gegenwart zu verbinden",
      proj_long_memory_line2: "Archivmaterialien über Generationen hinweg verknüpfen",

      proj_technical_title: "Technische Infrastruktur",
      proj_technical_body: "Integrierte visuelle Systeme. Diese Seite ist vorerst ein Platzhalter. Sie wird Ziele, Methoden, aktuelle Ergebnisse und Beteiligungsmöglichkeiten enthalten.",
      proj_technical_summary: "Technische Infrastruktur und Werkzeuge für visuelle Forschung und Annotation aufbauen.",

      proj_workshops_title: "Workshops / öffentliche Programme",
      proj_workshops_body: "Nigeria und Schweiz. Diese Seite ist vorerst ein Platzhalter. Sie wird Ziele, Methoden, aktuelle Ergebnisse und Beteiligungsmöglichkeiten enthalten.",
      proj_nigeria_switzerland_summary: "Archivmaterial aus Nigeria und der Schweiz verbinden, um gemeinsame Geschichten zu offenbaren und den Dialog zu fördern.",

      project_stub: "Diese Seite ist vorerst ein Platzhalter. Sie wird Ziele, Methoden, aktuelle Ergebnisse und Beteiligungsmöglichkeiten enthalten.",

      // Additional contact page labels
      contact_subtitle1: "Wir würden gerne von Ihnen hören",
      contact_subtitle2: "Begleiten Sie uns auf unserer Reise"
    }
  };

  function t(lang, key) {
    return (translations[lang] && translations[lang][key]) || null;
  }

  function applyLanguage(lang, root = document) {
    // Update text nodes
    root.querySelectorAll('[data-key]').forEach((el) => {
      const key = el.getAttribute('data-key');
      const value = t(lang, key);
      if (value == null) return;

      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.value = value;
      } else if (el.hasAttribute('data-html')) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }

      // Keep hover effects in sync
      if (el.hasAttribute('data-hover')) {
        el.setAttribute('data-hover', value);
      }
    });

    // Translate selected attributes via *-key attributes
    document.querySelectorAll('[data-centerline-key]').forEach((el) => {
      const key = el.getAttribute('data-centerline-key');
      const value = t(lang, key);
      if (value) el.setAttribute('data-centerLine', value);
    });

    document.querySelectorAll('[data-hover-message-key]').forEach((el) => {
      const key = el.getAttribute('data-hover-message-key');
      const value = t(lang, key);
      if (value) el.setAttribute('data-hover-message', value);
    });

    document.querySelectorAll('[data-clicked-message-key]').forEach((el) => {
      const key = el.getAttribute('data-clicked-message-key');
      const value = t(lang, key);
      if (value) el.setAttribute('data-clicked-message', value);
    });

    root.querySelectorAll('[data-content-key]').forEach((el) => {
      const key = el.getAttribute('data-content-key');
      const value = t(lang, key);
      if (value) el.setAttribute('content', value);
    });

    document.querySelectorAll('[data-centerLine-key]').forEach((el) => {
      const key = el.getAttribute('data-centerLine-key');
      const value = t(lang, key);
      if (value) el.setAttribute('data-centerLine', value);
    });

    // Update html lang attribute
    document.documentElement.setAttribute('lang', lang);
    
    // Update page title if it has data-key
    const titleEl = document.querySelector('title[data-key]');
    if (titleEl) {
      const titleKey = titleEl.getAttribute('data-key');
      const titleValue = t(lang, titleKey);
      if (titleValue) {
        titleEl.textContent = titleValue;
      }
    }
    
    // Update meta description if it has data-content-key
    const metaDesc = document.querySelector('meta[name="description"][data-content-key]');
    if (metaDesc) {
      const descKey = metaDesc.getAttribute('data-content-key');
      const descValue = t(lang, descKey);
      if (descValue) {
        metaDesc.setAttribute('content', descValue);
      }
    }
  
    // Reveal content after initial translation pass
    if (root === document) {
      document.documentElement.removeAttribute('data-i18n-pending');
    }
}


// ---- Language switcher (instant, no reload) ----
const STORAGE_KEY = 'language';

function safeGetStoredLanguage() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch (e) {
    return null;
  }
}

function safeSetStoredLanguage(lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (e) {
    // Tracking prevention may block storage. We still apply language in-memory.
  }
}

function setActiveLanguageUI(lang) {
  document.querySelectorAll('.language-item').forEach((item) => {
    item.classList.toggle('active', item.getAttribute('data-lang') === lang);
  });
}

function initI18n() {
  const initialLang =
    (typeof window !== 'undefined' && window.__TA_LANG__) ||
    safeGetStoredLanguage() ||
    document.documentElement.getAttribute('data-lang') ||
    'en';

  // Apply immediately (this also reveals the page via data-i18n-pending removal)
  applyLanguage(initialLang);
  setActiveLanguageUI(initialLang);

  // Keep translations consistent for dynamically injected content (AJAX transitions, etc.)
  try {
    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        for (const node of m.addedNodes || []) {
          if (!(node instanceof HTMLElement)) continue;
          // translate the node itself if it has a key
          if (node.hasAttribute && node.hasAttribute('data-key')) {
            const key = node.getAttribute('data-key');
            const val = t(initialLang, key);
            if (val) node.textContent = val;
          }
          // translate descendants
          if (node.querySelectorAll) {
            applyLanguage(initialLang, node);
          }
        }
      }
    });

    if (document.body) {
      observer.observe(document.body, { childList: true, subtree: true });
    }
  } catch (e) {
    // MutationObserver not available – ignore
  }

  // Use event delegation so nested spans still work
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-set-lang]');
    if (!btn) return;
    e.preventDefault();
    const lang = btn.getAttribute('data-set-lang') || 'en';
    applyLanguage(lang);
    setActiveLanguageUI(lang);
    safeSetStoredLanguage(lang);

    // Keep in sync with pre-hide markers
    document.documentElement.lang = lang;
    document.documentElement.setAttribute('data-lang', lang);
    window.__TA_LANG__ = lang;
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initI18n);
} else {
  initI18n();
}
// Make functions available globally (useful for debugging or future UI)
window.TravellersArchiveI18n = {
  applyLanguage,
  getCurrentLang: () => safeGetStoredLanguage() || 'en',
  setLanguage: (lang) => {
    applyLanguage(lang);
    setActiveLanguageUI(lang);
    safeSetStoredLanguage(lang);
  }
};
})();