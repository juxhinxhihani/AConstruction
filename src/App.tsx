import { useState } from 'react';
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    ArrowRight,
    HardHat,
    Award,
    Globe2,
    Grid,
    Ruler,
    Hammer,
    Menu,
    X,
     Building2
} from 'lucide-react';

// Language content
const content = {
    en: {
        nav: {
            services: 'Services',
            projects: 'Projects',
            about: 'About',
            contact: 'Contact',
            getQuote: 'Get Quote'
        },
        hero: {
            title: "Premium Construction Installation Services",
            subtitle: "Expert Construction Services in Thassos, Greece",
            description: "Specializing in premium tile installation with over 20 years of experience",
            cta: {
                services: 'Our Services',
                projects: 'View Projects'
            }
        },
        features: {
            construction: {
                title: 'Expert Tiling',
                desc: 'Specialized in all types of tile installation, from ceramic to natural stone.'
            },
            expert: {
                title: 'Expert Team',
                desc: 'Highly skilled professionals with years of industry experience.'
            },
            quality: {
                title: 'Quality Assured',
                desc: 'Committed to delivering excellence in every project we undertake.'
            }
        },
        tileService: {
            title: 'Professional Construction Setting',
            subtitle: 'Your Trusted Construction Experts in Thassos',
            description: 'With decades of experience in tile installation, we deliver precision and beauty to every surface. From traditional Greek patterns to modern designs, we bring your vision to life.',
            features: [
                {
                    title: 'Custom Design',
                    desc: 'Personalized tile patterns and layouts tailored to your vision',
                    icon: Grid
                },
                {
                    title: 'Precision Installation',
                    desc: 'Meticulous attention to detail for perfect alignment and spacing',
                    icon: Ruler
                },
                {
                    title: 'Expert Craftsmanship',
                    desc: 'Skilled artisans with years of tile setting experience',
                    icon: Hammer
                }
            ]
        },
        projects: {
            title: 'Our Latest Projects',
            residential: {
                title: 'Villa Renovation',
                desc: 'Complete tile renovation for luxury villa in Thassos'
            },
            commercial: {
                title: 'Hotel Bathrooms',
                desc: 'Custom tile installation for 50 hotel bathrooms'
            },
            outdoor: {
                title: 'Pool Area',
                desc: 'Non-slip tile installation for resort pool area'
            }
        },
        contact: {
            title: 'Visit us',
            form: {
                name: 'Name',
                email: 'Email',
                message: 'Message',
                send: 'Send Message'
            }
        },
        footer: {
            quickLinks: 'Quick Links',
            newsletter: {
                title: 'Newsletter',
                desc: 'Subscribe to our newsletter for updates',
                placeholder: 'Enter your email',
                button: 'Subscribe'
            },
            copyright: '© 2025 AConstruction. All rights reserved.'
        }
    },
    gr: {
        nav: {
            services: 'Υπηρεσίες',
            projects: 'Έργα',
            about: 'Σχετικά',
            contact: 'Επικοινωνία',
            getQuote: 'Ζητήστε Προσφορά'
        },
        hero: {
            title: "Προηγμένες Υπηρεσίες Εγκαταστάσεων Κατασκευών",
            subtitle: "Εξειδικευμένες Υπηρεσίες Πλακιδίων στη Θάσο",
            description: "Εξειδίκευση στην τοποθέτηση πλακιδίων με πάνω από 20 χρόνια εμπειρίας",
            cta: {
                services: 'Οι Υπηρεσίες μας',
                projects: 'Δείτε τα Έργα μας'
            }
        },
        features: {
            construction: {
                title: 'Εξειδικευμένη Τοποθέτηση',
                desc: 'Εξειδίκευση σε όλους τους τύπους πλακιδίων, από κεραμικά έως φυσική πέτρα.'
            },
            expert: {
                title: 'Έμπειρη Ομάδα',
                desc: 'Εξειδικευμένοι επαγγελματίες με πολυετή εμπειρία.'
            },
            quality: {
                title: 'Εγγυημένη Ποιότητα',
                desc: 'Δέσμευση στην παράδοση έργων υψηλής ποιότητας.'
            }
        },
        tileService: {
            title: 'Επαγγελματική Τοποθέτηση Πλακιδίων',
            subtitle: 'Οι Έμπιστοι Ειδικοί Πλακιδίων στη Θάσο',
            description: 'Με δεκαετίες εμπειρίας στην τοποθέτηση πλακιδίων, προσφέρουμε ακρίβεια και ομορφιά σε κάθε επιφάνεια. Από παραδοσιακά ελληνικά μοτίβα έως μοντέρνα σχέδια, δίνουμε ζωή στο όραμά σας.',
            features: [
                {
                    title: 'Προσαρμοσμένος Σχεδιασμός',
                    desc: 'Εξατομικευμένα μοτίβα και διατάξεις πλακιδίων',
                    icon: Grid
                },
                {
                    title: 'Ακριβής Τοποθέτηση',
                    desc: 'Σχολαστική προσοχή στη λεπτομέρεια',
                    icon: Ruler
                },
                {
                    title: 'Έμπειρη Τεχνική',
                    desc: 'Εξειδικευμένοι τεχνίτες με πολυετή εμπειρία',
                    icon: Hammer
                }
            ]
        },
        projects: {
            title: 'Πρόσφατα Έργα',
            residential: {
                title: 'Ανακαίνιση Βίλας',
                desc: 'Πλήρης ανακαίνιση πλακιδίων σε πολυτελή βίλα στη Θάσο'
            },
            commercial: {
                title: 'Μπάνια Ξενοδοχείου',
                desc: 'Εξατομικευμένη τοποθέτηση πλακιδίων σε 50 μπάνια ξενοδοχείου'
            },
            outdoor: {
                title: 'Χώρος Πισίνας',
                desc: 'Τοποθέτηση αντιολισθητικών πλακιδίων σε χώρο πισίνας'
            }
        },
        contact: {
            title: 'Επισκεφθείτε το Εργαστήριό μας',
            form: {
                name: 'Όνομα',
                email: 'Email',
                message: 'Μήνυμα',
                send: 'Αποστολή'
            }
        },
        footer: {
            quickLinks: 'Γρήγοροι Σύνδεσμοι',
            newsletter: {
                title: 'Ενημερωτικό Δελτίο',
                desc: 'Εγγραφείτε για να λαμβάνετε τα νέα μας',
                placeholder: 'Εισάγετε το email σας',
                button: 'Εγγραφή'
            },
            copyright: '© 2025 AConstruction. Με επιφύλαξη παντός δικαιώματος.'
        }
    }
};

function App() {
    const [lang, setLang] = useState('en');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const t = content[lang as keyof typeof content];

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section with Background */}
            <header className="relative bg-gray-900 text-white">
                <div className="absolute inset-0 z-0">
                    <img
                        //src="https://images.unsplash.com/photo-1594844181208-dea2c4cfc0bf"
                        src="../src/assets/construction.jpg"
                        alt="Tiling Background"
                        className="w-full h-full object-cover opacity-20"
                    />
                </div>

                <nav className="relative z-20 container mx-auto px-4 py-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <Building2 className="h-8 w-8 text-blue-500" />
                            <span className="text-xl font-bold">AConstruction</span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex space-x-8">
                            <a href="#services" className="text-gray-300 hover:text-white">{t.nav.services}</a>
                            <a href="#projects" className="text-gray-300 hover:text-white">{t.nav.projects}</a>
                            <a href="#contact" className="text-gray-300 hover:text-white">{t.nav.contact}</a>
                        </div>

                        <div className="hidden md:flex items-center space-x-4">

                            {/*<button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">*/}
                            {/*    {t.nav.getQuote}*/}
                            {/*</button>*/}
                            <button
                                onClick={() => setLang(lang === 'en' ? 'gr' : 'en')}
                                className="flex items-center space-x-1 text-gray-300 hover:text-white"
                            >
                                <Globe2 className="h-5 w-5" />
                                <span>{lang.toUpperCase()}</span>
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center space-x-4">
                            <button
                                onClick={() => setLang(lang === 'en' ? 'gr' : 'en')}
                                className="flex items-center space-x-1 text-gray-300 hover:text-white"
                            >
                                <Globe2 className="h-5 w-5" />
                                <span>{lang.toUpperCase()}</span>
                            </button>
                            <button
                                onClick={toggleMobileMenu}
                                className="text-white hover:text-gray-300"
                            >
                                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <div className={`md:hidden absolute top-full left-0 right-0 bg-gray-900 transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                        <div className="px-4 py-6 space-y-4">
                            <a href="#services" className="block text-gray-300 hover:text-white py-2" onClick={toggleMobileMenu}>{t.nav.services}</a>
                            <a href="#projects" className="block text-gray-300 hover:text-white py-2" onClick={toggleMobileMenu}>{t.nav.projects}</a>
                            <a href="#contact" className="block text-gray-300 hover:text-white py-2" onClick={toggleMobileMenu}>{t.nav.contact}</a>
                            <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                                {t.nav.getQuote}
                            </button>
                        </div>
                    </div>
                </nav>

                <div className="relative z-10 container mx-auto px-4 py-20">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            {t.hero.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-4">
                            {t.hero.subtitle}
                        </p>
                        <p className="text-lg text-gray-400 mb-8">
                            {t.hero.description}
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <a href="#services" className="inline-block w-full sm:w-auto">
                                <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 flex items-center justify-center w-full">
                                    {t.hero.cta.services} <ArrowRight className="ml-2 w-4 h-4" />
                                </button>
                            </a>
                            <a href="#projects" className="inline-block w-full sm:w-auto">
                                <button className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-gray-900 flex items-center justify-center w-full">
                                    {t.hero.cta.projects}
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            {/* Features Section */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        <div className="bg-gray-50 p-6 md:p-8 rounded-lg">
                            <Grid className="w-12 h-12 text-blue-600 mb-4" />
                            <h3 className="text-xl font-bold mb-3">{t.features.construction.title}</h3>
                            <p className="text-gray-600">{t.features.construction.desc}</p>
                        </div>
                        <div className="bg-gray-50 p-6 md:p-8 rounded-lg">
                            <HardHat className="w-12 h-12 text-blue-600 mb-4" />
                            <h3 className="text-xl font-bold mb-3">{t.features.expert.title}</h3>
                            <p className="text-gray-600">{t.features.expert.desc}</p>
                        </div>
                        <div className="bg-gray-50 p-6 md:p-8 rounded-lg">
                            <Award className="w-12 h-12 text-blue-600 mb-4" />
                            <h3 className="text-xl font-bold mb-3">{t.features.quality.title}</h3>
                            <p className="text-gray-600">{t.features.quality.desc}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tile Setting Service Section */}
            <section className="py-16 md:py-20 bg-gray-50" id="services">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.tileService.title}</h2>
                        <p className="text-lg md:text-xl text-gray-600">{t.tileService.subtitle}</p>
                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto px-4">{t.tileService.description}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {t.tileService.features.map((feature, index) => {
                            const IconComponent = feature.icon;
                            return (
                                <div key={index} className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                    <IconComponent className="w-12 h-12 text-blue-600 mb-4" />
                                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8">
                        <div className="aspect-w-16 aspect-h-9 rounded-lg shadow-xl overflow-hidden">
                            <img
                                src="../src/assets/construction.jpg"
                                alt="Tile Setting Example"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="aspect-w-16 aspect-h-9 rounded-lg shadow-xl overflow-hidden">
                            <img
                                src="../src/assets/background.jpg"
                                alt="Tile Setting Example"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="aspect-w-16 aspect-h-9 rounded-lg shadow-xl overflow-hidden">
                            <img
                                src="../src/assets/tiler.jpg"
                                alt="Tile Setting Example"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>                </div>
            </section>

            {/* Projects Section */}
            <section className="py-2 md:py-10 bg-white" id="projects">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">{t.projects.title}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        <div className="bg-white rounded-lg overflow-hidden shadow-md">
                            <img
                                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Villa Renovation"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="font-bold text-xl mb-2">{t.projects.residential.title}</h3>
                                <p className="text-gray-600">{t.projects.residential.desc}</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden shadow-md">
                            <img
                                src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Hotel Bathrooms"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="font-bold text-xl mb-2">{t.projects.commercial.title}</h3>
                                <p className="text-gray-600">{t.projects.commercial.desc}</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden shadow-md">
                            <img
                                src="https://images.unsplash.com/photo-1572331165267-854da2b10ccc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Pool Area"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="font-bold text-xl mb-2">{t.projects.outdoor.title}</h3>
                                <p className="text-gray-600">{t.projects.outdoor.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="bg-gray-50" id="contact">
                <div className="container ">
                    <div className="flex flex-wrap -mx-4">
                        {/* Left Column: Contact Information */}
                        <div className="w-full md:w-1/2 pl-16 pt-16  md:mb-0 ">
                            <h2 className="text-2xl md:text-3xl font-bold mb-6">{t.contact.title}</h2>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <Phone className="w-5 h-5 text-blue-600 mr-3" />
                                    <a href={`tel:+306948577668`} style={{ textDecoration: 'none' }}>
                                        <span>+30 694 857 7668</span>
                                    </a>
                                </div>
                                <div className="flex items-center">
                                    <Mail className="w-5 h-5 text-blue-600 mr-3" />
                                    <a href={`mailto:aconstruction.gr@gmail.com`} style={{ textDecoration: 'none' }}>
                                        aconstruction.gr@gmail.com
                                    </a>
                                </div>
                                <div className="flex items-center">
                                    <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                                    <a
                                        href="https://www.google.com/maps/search/?api=1&query=Limenaria 640 02, Thassos, Greece"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: 'none'}}
                                    >
                                        <span>Limenaria 640 02, Thassos, Greece</span>
                                    </a>
                                </div>
                                <div className="flex items-center">
                                    <Clock className="w-5 h-5 text-blue-600 mr-3" />
                                    <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Map */}
                        <div className="w-full md:w-1/2 p-4">
                            <div className="rounded-lg overflow-hidden shadow-lg">
                                <iframe
                                    src="https://www.openstreetmap.org/export/embed.html?bbox=24.5652,40.6262,24.5799,40.6303&layer=mapnik&marker=40.62622,24.573158"
                                    width="100%"
                                    height="400"
                                    frameBorder="0"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    aria-hidden="false"
                                    tabIndex={0}
                                    title="Location Map"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Footer */}

            <footer className="bg-gray-900 text-white py-8"> {/* Reduced padding */}
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Logo Section */}
                        <div className="text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
                                <Building2 className="h-8 w-8 text-blue-500" />
                                <span className="text-xl font-bold">AConstruction</span>
                            </div>
                        </div>

                        {/* Quick Links Section */}
                        <div className="text-center md:text-left">
                            <h4 className="text-lg font-bold mb-4">{t.footer.quickLinks}</h4>
                            <ul className="flex flex-wrap justify-center md:justify-start space-x-4">
                                <li><a href="#services" className="text-gray-400 hover:text-white">{t.nav.services}</a></li>
                                <li><a href="#projects" className="text-gray-400 hover:text-white">{t.nav.projects}</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Copyright Section */}
                    <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400"> {/* Adjusted margin and padding */}
                        <p>{t.footer.copyright}</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
