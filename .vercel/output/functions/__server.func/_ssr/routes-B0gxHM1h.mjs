import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Moon, c as House, d as ChevronLeft, f as BookOpen, i as Search, l as FolderOpen, o as Mail, r as Sun, s as LifeBuoy, t as Volume2, u as Contrast } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B0gxHM1h.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Große und kleinere Orte in ganz Brandenburg. Keine erfundenen Telefonnummern. */
var CITIES = [
	{
		name: "Potsdam",
		plz: "14467",
		kreis: "kreisfrei"
	},
	{
		name: "Cottbus / Chóśebuz",
		plz: "03046",
		kreis: "kreisfrei"
	},
	{
		name: "Brandenburg an der Havel",
		plz: "14770",
		kreis: "kreisfrei"
	},
	{
		name: "Frankfurt (Oder)",
		plz: "15230",
		kreis: "kreisfrei"
	},
	{
		name: "Oranienburg",
		plz: "16515",
		kreis: "Oberhavel"
	},
	{
		name: "Falkensee",
		plz: "14612",
		kreis: "Havelland"
	},
	{
		name: "Eberswalde",
		plz: "16225",
		kreis: "Barnim"
	},
	{
		name: "Bernau bei Berlin",
		plz: "16321",
		kreis: "Barnim"
	},
	{
		name: "Königs Wusterhausen",
		plz: "15711",
		kreis: "Dahme-Spreewald"
	},
	{
		name: "Fürstenwalde/Spree",
		plz: "15517",
		kreis: "Oder-Spree"
	},
	{
		name: "Neuruppin",
		plz: "16816",
		kreis: "Ostprignitz-Ruppin"
	},
	{
		name: "Schwedt/Oder",
		plz: "16303",
		kreis: "Uckermark"
	},
	{
		name: "Blankenfelde-Mahlow",
		plz: "15827",
		kreis: "Teltow-Fläming"
	},
	{
		name: "Strausberg",
		plz: "15344",
		kreis: "Märkisch-Oderland"
	},
	{
		name: "Hennigsdorf",
		plz: "16761",
		kreis: "Oberhavel"
	},
	{
		name: "Hohen Neuendorf",
		plz: "16540",
		kreis: "Oberhavel"
	},
	{
		name: "Ludwigsfelde",
		plz: "14974",
		kreis: "Teltow-Fläming"
	},
	{
		name: "Teltow",
		plz: "14513",
		kreis: "Potsdam-Mittelmark"
	},
	{
		name: "Rathenow",
		plz: "14712",
		kreis: "Havelland"
	},
	{
		name: "Senftenberg",
		plz: "01968",
		kreis: "Oberspreewald-Lausitz"
	},
	{
		name: "Eisenhüttenstadt",
		plz: "15890",
		kreis: "Oder-Spree"
	},
	{
		name: "Wittenberge",
		plz: "19322",
		kreis: "Prignitz"
	},
	{
		name: "Luckenwalde",
		plz: "14943",
		kreis: "Teltow-Fläming"
	},
	{
		name: "Prenzlau",
		plz: "17291",
		kreis: "Uckermark"
	},
	{
		name: "Guben",
		plz: "03172",
		kreis: "Spree-Neiße"
	},
	{
		name: "Spremberg",
		plz: "03130",
		kreis: "Spree-Neiße"
	},
	{
		name: "Forst (Lausitz)",
		plz: "03149",
		kreis: "Spree-Neiße"
	},
	{
		name: "Lübbenau/Spreewald",
		plz: "03222",
		kreis: "Oberspreewald-Lausitz"
	},
	{
		name: "Templin",
		plz: "17268",
		kreis: "Uckermark"
	},
	{
		name: "Perleberg",
		plz: "19348",
		kreis: "Prignitz"
	},
	{
		name: "Bad Belzig",
		plz: "14806",
		kreis: "Potsdam-Mittelmark"
	},
	{
		name: "Kyritz",
		plz: "16866",
		kreis: "Ostprignitz-Ruppin"
	},
	{
		name: "Jüterbog",
		plz: "14913",
		kreis: "Teltow-Fläming"
	},
	{
		name: "Zossen",
		plz: "15806",
		kreis: "Teltow-Fläming"
	},
	{
		name: "Nauen",
		plz: "14641",
		kreis: "Havelland"
	},
	{
		name: "Werder (Havel)",
		plz: "14542",
		kreis: "Potsdam-Mittelmark"
	},
	{
		name: "Kleinmachnow",
		plz: "14532",
		kreis: "Potsdam-Mittelmark"
	},
	{
		name: "Stahnsdorf",
		plz: "14532",
		kreis: "Potsdam-Mittelmark"
	},
	{
		name: "Wandlitz",
		plz: "16348",
		kreis: "Barnim"
	},
	{
		name: "Hoppegarten",
		plz: "15366",
		kreis: "Märkisch-Oderland"
	},
	{
		name: "Neuenhagen bei Berlin",
		plz: "15366",
		kreis: "Märkisch-Oderland"
	},
	{
		name: "Schönefeld",
		plz: "12529",
		kreis: "Dahme-Spreewald"
	},
	{
		name: "Wildau",
		plz: "15745",
		kreis: "Dahme-Spreewald"
	},
	{
		name: "Erkner",
		plz: "15537",
		kreis: "Oder-Spree"
	},
	{
		name: "Grünheide (Mark)",
		plz: "15537",
		kreis: "Oder-Spree"
	},
	{
		name: "Angermünde",
		plz: "16278",
		kreis: "Uckermark"
	},
	{
		name: "Seelow",
		plz: "15306",
		kreis: "Märkisch-Oderland"
	},
	{
		name: "Beeskow",
		plz: "15848",
		kreis: "Oder-Spree"
	},
	{
		name: "Lübben (Spreewald)",
		plz: "15907",
		kreis: "Dahme-Spreewald"
	},
	{
		name: "Herzberg (Elster)",
		plz: "04916",
		kreis: "Elbe-Elster"
	},
	{
		name: "Finsterwalde",
		plz: "03238",
		kreis: "Elbe-Elster"
	},
	{
		name: "Elsterwerda",
		plz: "04910",
		kreis: "Elbe-Elster"
	},
	{
		name: "Lauchhammer",
		plz: "01979",
		kreis: "Oberspreewald-Lausitz"
	},
	{
		name: "Calau",
		plz: "03205",
		kreis: "Oberspreewald-Lausitz"
	},
	{
		name: "Pritzwalk",
		plz: "16928",
		kreis: "Prignitz"
	},
	{
		name: "Wittstock/Dosse",
		plz: "16909",
		kreis: "Ostprignitz-Ruppin"
	},
	{
		name: "Gransee",
		plz: "16775",
		kreis: "Oberhavel"
	},
	{
		name: "Zehdenick",
		plz: "16792",
		kreis: "Oberhavel"
	},
	{
		name: "Rheinsberg",
		plz: "16831",
		kreis: "Ostprignitz-Ruppin"
	},
	{
		name: "Bad Freienwalde",
		plz: "16259",
		kreis: "Märkisch-Oderland"
	},
	{
		name: "Werneuchen",
		plz: "16356",
		kreis: "Barnim"
	},
	{
		name: "Biesenthal",
		plz: "16359",
		kreis: "Barnim"
	},
	{
		name: "Velten",
		plz: "16727",
		kreis: "Oberhavel"
	},
	{
		name: "Kremmen",
		plz: "16766",
		kreis: "Oberhavel"
	},
	{
		name: "Glienicke/Nordbahn",
		plz: "16548",
		kreis: "Oberhavel"
	},
	{
		name: "Birkenwerder",
		plz: "16547",
		kreis: "Oberhavel"
	},
	{
		name: "Leegebruch",
		plz: "16767",
		kreis: "Oberhavel"
	},
	{
		name: "Rangsdorf",
		plz: "15834",
		kreis: "Teltow-Fläming"
	},
	{
		name: "Mittenwalde",
		plz: "15749",
		kreis: "Dahme-Spreewald"
	},
	{
		name: "Bestensee",
		plz: "15741",
		kreis: "Dahme-Spreewald"
	},
	{
		name: "Großbeeren",
		plz: "14979",
		kreis: "Teltow-Fläming"
	},
	{
		name: "Trebbin",
		plz: "14959",
		kreis: "Teltow-Fläming"
	},
	{
		name: "Michendorf",
		plz: "14552",
		kreis: "Potsdam-Mittelmark"
	},
	{
		name: "Beelitz",
		plz: "14547",
		kreis: "Potsdam-Mittelmark"
	},
	{
		name: "Bad Saarow",
		plz: "15526",
		kreis: "Oder-Spree"
	},
	{
		name: "Storkow (Mark)",
		plz: "15859",
		kreis: "Oder-Spree"
	},
	{
		name: "Fürstenberg/Havel",
		plz: "16798",
		kreis: "Oberhavel"
	},
	{
		name: "Lychen",
		plz: "17279",
		kreis: "Uckermark"
	},
	{
		name: "Luckau",
		plz: "15926",
		kreis: "Dahme-Spreewald"
	},
	{
		name: "Baruth/Mark",
		plz: "15837",
		kreis: "Teltow-Fläming"
	},
	{
		name: "Dahme/Mark",
		plz: "15936",
		kreis: "Teltow-Fläming"
	},
	{
		name: "Vetschau/Spreewald",
		plz: "03226",
		kreis: "Oberspreewald-Lausitz"
	},
	{
		name: "Großräschen",
		plz: "01983",
		kreis: "Oberspreewald-Lausitz"
	},
	{
		name: "Schwarzheide",
		plz: "01987",
		kreis: "Oberspreewald-Lausitz"
	},
	{
		name: "Peitz",
		plz: "03185",
		kreis: "Spree-Neiße"
	},
	{
		name: "Drebkau",
		plz: "03116",
		kreis: "Spree-Neiße"
	},
	{
		name: "Kolkwitz",
		plz: "03099",
		kreis: "Spree-Neiße"
	},
	{
		name: "Burg (Spreewald)",
		plz: "03096",
		kreis: "Spree-Neiße"
	},
	{
		name: "Doberlug-Kirchhain",
		plz: "03253",
		kreis: "Elbe-Elster"
	},
	{
		name: "Uebigau-Wahrenbrück",
		plz: "04938",
		kreis: "Elbe-Elster"
	},
	{
		name: "Ruhland",
		plz: "01945",
		kreis: "Oberspreewald-Lausitz"
	},
	{
		name: "Ortrand",
		plz: "01990",
		kreis: "Oberspreewald-Lausitz"
	},
	{
		name: "Schipkau",
		plz: "01998",
		kreis: "Oberspreewald-Lausitz"
	},
	{
		name: "Premnitz",
		plz: "14727",
		kreis: "Havelland"
	},
	{
		name: "Ketzin/Havel",
		plz: "14669",
		kreis: "Havelland"
	},
	{
		name: "Brieselang",
		plz: "14656",
		kreis: "Havelland"
	},
	{
		name: "Wustermark",
		plz: "14641",
		kreis: "Havelland"
	},
	{
		name: "Dallgow-Döberitz",
		plz: "14624",
		kreis: "Havelland"
	},
	{
		name: "Schönwalde-Glien",
		plz: "14621",
		kreis: "Havelland"
	},
	{
		name: "Fehrbellin",
		plz: "16833",
		kreis: "Ostprignitz-Ruppin"
	},
	{
		name: "Neustadt (Dosse)",
		plz: "16845",
		kreis: "Ostprignitz-Ruppin"
	},
	{
		name: "Wusterhausen/Dosse",
		plz: "16868",
		kreis: "Ostprignitz-Ruppin"
	},
	{
		name: "Niemegk",
		plz: "14823",
		kreis: "Potsdam-Mittelmark"
	},
	{
		name: "Ziesar",
		plz: "14793",
		kreis: "Potsdam-Mittelmark"
	},
	{
		name: "Treuenbrietzen",
		plz: "14929",
		kreis: "Potsdam-Mittelmark"
	},
	{
		name: "Nuthetal",
		plz: "14558",
		kreis: "Potsdam-Mittelmark"
	},
	{
		name: "Schwielowsee",
		plz: "14548",
		kreis: "Potsdam-Mittelmark"
	},
	{
		name: "Altlandsberg",
		plz: "15345",
		kreis: "Märkisch-Oderland"
	},
	{
		name: "Rüdersdorf bei Berlin",
		plz: "15562",
		kreis: "Märkisch-Oderland"
	},
	{
		name: "Woltersdorf",
		plz: "15569",
		kreis: "Oder-Spree"
	},
	{
		name: "Schöneiche bei Berlin",
		plz: "15566",
		kreis: "Oder-Spree"
	},
	{
		name: "Petershagen/Eggersdorf",
		plz: "15345",
		kreis: "Märkisch-Oderland"
	},
	{
		name: "Fredersdorf-Vogelsdorf",
		plz: "15370",
		kreis: "Märkisch-Oderland"
	},
	{
		name: "Müncheberg",
		plz: "15374",
		kreis: "Märkisch-Oderland"
	},
	{
		name: "Wriezen",
		plz: "16269",
		kreis: "Märkisch-Oderland"
	},
	{
		name: "Letschin",
		plz: "15324",
		kreis: "Märkisch-Oderland"
	},
	{
		name: "Neuhardenberg",
		plz: "15320",
		kreis: "Märkisch-Oderland"
	},
	{
		name: "Lebus",
		plz: "15326",
		kreis: "Märkisch-Oderland"
	},
	{
		name: "Müllrose",
		plz: "15299",
		kreis: "Oder-Spree"
	},
	{
		name: "Friedland",
		plz: "15848",
		kreis: "Oder-Spree"
	},
	{
		name: "Neuzelle",
		plz: "15898",
		kreis: "Oder-Spree"
	},
	{
		name: "Spreenhagen",
		plz: "15528",
		kreis: "Oder-Spree"
	},
	{
		name: "Joachimsthal",
		plz: "16247",
		kreis: "Barnim"
	},
	{
		name: "Oderberg",
		plz: "16248",
		kreis: "Barnim"
	},
	{
		name: "Chorin",
		plz: "16230",
		kreis: "Barnim"
	},
	{
		name: "Schorfheide",
		plz: "16244",
		kreis: "Barnim"
	},
	{
		name: "Panketal",
		plz: "16341",
		kreis: "Barnim"
	},
	{
		name: "Ahrensfelde",
		plz: "16356",
		kreis: "Barnim"
	},
	{
		name: "Gartz (Oder)",
		plz: "16307",
		kreis: "Uckermark"
	},
	{
		name: "Brüssow",
		plz: "17326",
		kreis: "Uckermark"
	},
	{
		name: "Passow",
		plz: "16306",
		kreis: "Uckermark"
	},
	{
		name: "Boitzenburger Land",
		plz: "17268",
		kreis: "Uckermark"
	},
	{
		name: "Nordwestuckermark",
		plz: "17291",
		kreis: "Uckermark"
	},
	{
		name: "Putlitz",
		plz: "16949",
		kreis: "Prignitz"
	},
	{
		name: "Meyenburg",
		plz: "16945",
		kreis: "Prignitz"
	},
	{
		name: "Lenzen (Elbe)",
		plz: "19309",
		kreis: "Prignitz"
	},
	{
		name: "Bad Wilsnack",
		plz: "19336",
		kreis: "Prignitz"
	},
	{
		name: "Karstädt",
		plz: "19357",
		kreis: "Prignitz"
	},
	{
		name: "Groß Pankow",
		plz: "16928",
		kreis: "Prignitz"
	},
	{
		name: "Welzow",
		plz: "03119",
		kreis: "Spree-Neiße"
	},
	{
		name: "Döbern",
		plz: "03159",
		kreis: "Spree-Neiße"
	},
	{
		name: "Schenkendöbern",
		plz: "03172",
		kreis: "Spree-Neiße"
	},
	{
		name: "Neuhausen/Spree",
		plz: "03058",
		kreis: "Spree-Neiße"
	},
	{
		name: "Lieberose",
		plz: "15868",
		kreis: "Dahme-Spreewald"
	},
	{
		name: "Heidesee",
		plz: "15754",
		kreis: "Dahme-Spreewald"
	},
	{
		name: "Zeuthen",
		plz: "15738",
		kreis: "Dahme-Spreewald"
	},
	{
		name: "Eichwalde",
		plz: "15732",
		kreis: "Dahme-Spreewald"
	},
	{
		name: "Schulzendorf",
		plz: "15732",
		kreis: "Dahme-Spreewald"
	},
	{
		name: "Schönefeld-Waltersdorf",
		plz: "12529",
		kreis: "Dahme-Spreewald"
	},
	{
		name: "Golßen",
		plz: "15938",
		kreis: "Dahme-Spreewald"
	},
	{
		name: "Sonnewalde",
		plz: "03249",
		kreis: "Elbe-Elster"
	},
	{
		name: "Mühlberg/Elbe",
		plz: "04931",
		kreis: "Elbe-Elster"
	},
	{
		name: "Schlieben",
		plz: "04936",
		kreis: "Elbe-Elster"
	},
	{
		name: "Bad Liebenwerda",
		plz: "04924",
		kreis: "Elbe-Elster"
	},
	{
		name: "Falkenberg/Elster",
		plz: "04895",
		kreis: "Elbe-Elster"
	},
	{
		name: "Plessa",
		plz: "04928",
		kreis: "Elbe-Elster"
	},
	{
		name: "Mühlenbecker Land",
		plz: "16567",
		kreis: "Oberhavel"
	},
	{
		name: "Oberkrämer",
		plz: "16727",
		kreis: "Oberhavel"
	},
	{
		name: "Löwenberger Land",
		plz: "16775",
		kreis: "Oberhavel"
	},
	{
		name: "Liebenwalde",
		plz: "16559",
		kreis: "Oberhavel"
	},
	{
		name: "Kremmen-Staffelde",
		plz: "16766",
		kreis: "Oberhavel"
	},
	{
		name: "Rehfelde",
		plz: "15345",
		kreis: "Märkisch-Oderland"
	},
	{
		name: "Buckow (Märkische Schweiz)",
		plz: "15377",
		kreis: "Märkisch-Oderland"
	},
	{
		name: "Neutrebbin",
		plz: "15320",
		kreis: "Märkisch-Oderland"
	},
	{
		name: "Podelzig",
		plz: "15326",
		kreis: "Märkisch-Oderland"
	},
	{
		name: "Golzow",
		plz: "15328",
		kreis: "Märkisch-Oderland"
	},
	{
		name: "Briesen (Mark)",
		plz: "15518",
		kreis: "Oder-Spree"
	},
	{
		name: "Steinhöfel",
		plz: "15518",
		kreis: "Oder-Spree"
	},
	{
		name: "Rietz-Neuendorf",
		plz: "15848",
		kreis: "Oder-Spree"
	},
	{
		name: "Tauche",
		plz: "15848",
		kreis: "Oder-Spree"
	},
	{
		name: "Storkow-Bugk",
		plz: "15859",
		kreis: "Oder-Spree"
	},
	{
		name: "Teupitz",
		plz: "15755",
		kreis: "Dahme-Spreewald"
	},
	{
		name: "Märkisch Buchholz",
		plz: "15748",
		kreis: "Dahme-Spreewald"
	},
	{
		name: "Halbe",
		plz: "15757",
		kreis: "Dahme-Spreewald"
	},
	{
		name: "Schönefeld Ort",
		plz: "12529",
		kreis: "Dahme-Spreewald"
	},
	{
		name: "Kloster Lehnin",
		plz: "14797",
		kreis: "Potsdam-Mittelmark"
	},
	{
		name: "Wiesenburg/Mark",
		plz: "14827",
		kreis: "Potsdam-Mittelmark"
	},
	{
		name: "Görzke",
		plz: "14828",
		kreis: "Potsdam-Mittelmark"
	},
	{
		name: "Planebruch",
		plz: "14822",
		kreis: "Potsdam-Mittelmark"
	},
	{
		name: "Seddiner See",
		plz: "14554",
		kreis: "Potsdam-Mittelmark"
	},
	{
		name: "Caputh",
		plz: "14548",
		kreis: "Potsdam-Mittelmark"
	},
	{
		name: "Fahrland",
		plz: "14476",
		kreis: "Potsdam"
	},
	{
		name: "Marquardt",
		plz: "14476",
		kreis: "Potsdam"
	},
	{
		name: "Groß Kreutz",
		plz: "14550",
		kreis: "Potsdam-Mittelmark"
	},
	{
		name: "Paulinenauer Land",
		plz: "14641",
		kreis: "Havelland"
	},
	{
		name: "Seeblick",
		plz: "14715",
		kreis: "Havelland"
	},
	{
		name: "Milower Land",
		plz: "14715",
		kreis: "Havelland"
	},
	{
		name: "Havelaue",
		plz: "14715",
		kreis: "Havelland"
	},
	{
		name: "Nennhausen",
		plz: "14641",
		kreis: "Havelland"
	},
	{
		name: "Stechow-Ferchesar",
		plz: "14715",
		kreis: "Havelland"
	},
	{
		name: "Kleßen-Görne",
		plz: "14728",
		kreis: "Havelland"
	},
	{
		name: "Märkisch Luch",
		plz: "14715",
		kreis: "Havelland"
	},
	{
		name: "Päwesin",
		plz: "14778",
		kreis: "Potsdam-Mittelmark"
	},
	{
		name: "Roskow",
		plz: "14778",
		kreis: "Potsdam-Mittelmark"
	},
	{
		name: "Beetzsee",
		plz: "14778",
		kreis: "Potsdam-Mittelmark"
	},
	{
		name: "Wenzlow",
		plz: "14778",
		kreis: "Potsdam-Mittelmark"
	},
	{
		name: "Planetal",
		plz: "14806",
		kreis: "Potsdam-Mittelmark"
	},
	{
		name: "Rabenstein/Fläming",
		plz: "14823",
		kreis: "Potsdam-Mittelmark"
	},
	{
		name: "Niederer Fläming",
		plz: "14913",
		kreis: "Teltow-Fläming"
	},
	{
		name: "Niedergörsdorf",
		plz: "14913",
		kreis: "Teltow-Fläming"
	},
	{
		name: "Nuthe-Urstromtal",
		plz: "14947",
		kreis: "Teltow-Fläming"
	},
	{
		name: "Am Mellensee",
		plz: "15838",
		kreis: "Teltow-Fläming"
	},
	{
		name: "Dahmetal",
		plz: "15936",
		kreis: "Teltow-Fläming"
	},
	{
		name: "Ihlow",
		plz: "15936",
		kreis: "Teltow-Fläming"
	},
	{
		name: "Steinreich",
		plz: "15938",
		kreis: "Dahme-Spreewald"
	},
	{
		name: "Schönwald",
		plz: "15910",
		kreis: "Dahme-Spreewald"
	},
	{
		name: "Unterspreewald",
		plz: "15910",
		kreis: "Dahme-Spreewald"
	},
	{
		name: "Bersteland",
		plz: "15936",
		kreis: "Dahme-Spreewald"
	},
	{
		name: "Krausnick-Groß Wasserburg",
		plz: "15910",
		kreis: "Dahme-Spreewald"
	},
	{
		name: "Schöneiche",
		plz: "15566",
		kreis: "Oder-Spree"
	},
	{
		name: "Rauen",
		plz: "15518",
		kreis: "Oder-Spree"
	},
	{
		name: "Grünheide Kagel",
		plz: "15537",
		kreis: "Oder-Spree"
	},
	{
		name: "Sieversdorf",
		plz: "15306",
		kreis: "Märkisch-Oderland"
	},
	{
		name: "Falkenberg (Mark)",
		plz: "16259",
		kreis: "Märkisch-Oderland"
	},
	{
		name: "Höhenland",
		plz: "16259",
		kreis: "Märkisch-Oderland"
	},
	{
		name: "Oberbarnim",
		plz: "15345",
		kreis: "Märkisch-Oderland"
	},
	{
		name: "Prötzel",
		plz: "15345",
		kreis: "Märkisch-Oderland"
	},
	{
		name: "Rehfelde-Werder",
		plz: "15345",
		kreis: "Märkisch-Oderland"
	},
	{
		name: "Vierlinden",
		plz: "15306",
		kreis: "Märkisch-Oderland"
	},
	{
		name: "Lindendorf",
		plz: "15306",
		kreis: "Märkisch-Oderland"
	},
	{
		name: "Zechin",
		plz: "15328",
		kreis: "Märkisch-Oderland"
	},
	{
		name: "Bleyen-Genschmar",
		plz: "15328",
		kreis: "Märkisch-Oderland"
	},
	{
		name: "Küstriner Vorland",
		plz: "15328",
		kreis: "Märkisch-Oderland"
	},
	{
		name: "Reitwein",
		plz: "15328",
		kreis: "Märkisch-Oderland"
	},
	{
		name: "Treplin",
		plz: "15236",
		kreis: "Märkisch-Oderland"
	},
	{
		name: "Jacobsdorf",
		plz: "15236",
		kreis: "Oder-Spree"
	},
	{
		name: "Brieskow-Finkenheerd",
		plz: "15295",
		kreis: "Oder-Spree"
	},
	{
		name: "Ziltendorf",
		plz: "15295",
		kreis: "Oder-Spree"
	},
	{
		name: "Wiesenau",
		plz: "15295",
		kreis: "Oder-Spree"
	},
	{
		name: "Groß Lindow",
		plz: "15295",
		kreis: "Oder-Spree"
	},
	{
		name: "Vogelsang",
		plz: "15890",
		kreis: "Oder-Spree"
	},
	{
		name: "Lawitz",
		plz: "15898",
		kreis: "Oder-Spree"
	},
	{
		name: "Neißemünde",
		plz: "15898",
		kreis: "Oder-Spree"
	},
	{
		name: "Ragow-Merz",
		plz: "15848",
		kreis: "Oder-Spree"
	},
	{
		name: "Grunow-Dammendorf",
		plz: "15299",
		kreis: "Oder-Spree"
	},
	{
		name: "Mixdorf",
		plz: "15299",
		kreis: "Oder-Spree"
	},
	{
		name: "Schlaubetal",
		plz: "15890",
		kreis: "Oder-Spree"
	},
	{
		name: "Siehdichum",
		plz: "15890",
		kreis: "Oder-Spree"
	},
	{
		name: "Schlaubetal-Kieselwitz",
		plz: "15890",
		kreis: "Oder-Spree"
	},
	{
		name: "Turnow-Preilack",
		plz: "03185",
		kreis: "Spree-Neiße"
	},
	{
		name: "Tauer",
		plz: "03185",
		kreis: "Spree-Neiße"
	},
	{
		name: "Jänschwalde",
		plz: "03197",
		kreis: "Spree-Neiße"
	},
	{
		name: "Heinersbrück",
		plz: "03185",
		kreis: "Spree-Neiße"
	},
	{
		name: "Teichland",
		plz: "03185",
		kreis: "Spree-Neiße"
	},
	{
		name: "Drewitz",
		plz: "03185",
		kreis: "Spree-Neiße"
	},
	{
		name: "Briesen Spree",
		plz: "03096",
		kreis: "Spree-Neiße"
	},
	{
		name: "Guhrow",
		plz: "03096",
		kreis: "Spree-Neiße"
	},
	{
		name: "Werben",
		plz: "03096",
		kreis: "Spree-Neiße"
	},
	{
		name: "Schmogrow-Fehrow",
		plz: "03096",
		kreis: "Spree-Neiße"
	},
	{
		name: "Byhleguhre-Byhlen",
		plz: "15913",
		kreis: "Dahme-Spreewald"
	},
	{
		name: "Straupitz",
		plz: "15913",
		kreis: "Dahme-Spreewald"
	},
	{
		name: "Neu Zauche",
		plz: "15913",
		kreis: "Dahme-Spreewald"
	},
	{
		name: "Alt Zauche-Wußwerk",
		plz: "15913",
		kreis: "Dahme-Spreewald"
	},
	{
		name: "Schwielochsee",
		plz: "15913",
		kreis: "Dahme-Spreewald"
	},
	{
		name: "Märkische Heide",
		plz: "15913",
		kreis: "Dahme-Spreewald"
	},
	{
		name: "Wittmannsdorf-Bückchen",
		plz: "15926",
		kreis: "Dahme-Spreewald"
	},
	{
		name: "Kasell-Golzig",
		plz: "15938",
		kreis: "Dahme-Spreewald"
	},
	{
		name: "Drahnsdorf",
		plz: "15938",
		kreis: "Dahme-Spreewald"
	},
	{
		name: "Rietzneuendorf-Staakow",
		plz: "15910",
		kreis: "Dahme-Spreewald"
	},
	{
		name: "Schönwald Dahme",
		plz: "15910",
		kreis: "Dahme-Spreewald"
	},
	{
		name: "Gorden-Staupitz",
		plz: "03238",
		kreis: "Elbe-Elster"
	},
	{
		name: "Crinitz",
		plz: "03246",
		kreis: "Elbe-Elster"
	},
	{
		name: "Massen-Niederlausitz",
		plz: "03238",
		kreis: "Elbe-Elster"
	},
	{
		name: "Lichterfeld-Schacksdorf",
		plz: "03238",
		kreis: "Elbe-Elster"
	},
	{
		name: "Heideland",
		plz: "03238",
		kreis: "Elbe-Elster"
	},
	{
		name: "Rückersdorf",
		plz: "03238",
		kreis: "Elbe-Elster"
	},
	{
		name: "Sallgast",
		plz: "03238",
		kreis: "Elbe-Elster"
	},
	{
		name: "Tröbitz",
		plz: "03253",
		kreis: "Elbe-Elster"
	},
	{
		name: "Schönborn",
		plz: "03253",
		kreis: "Elbe-Elster"
	},
	{
		name: "Schilda",
		plz: "03253",
		kreis: "Elbe-Elster"
	},
	{
		name: "Hohenbucko",
		plz: "04936",
		kreis: "Elbe-Elster"
	},
	{
		name: "Kremitzaue",
		plz: "04936",
		kreis: "Elbe-Elster"
	},
	{
		name: "Lebusa",
		plz: "04936",
		kreis: "Elbe-Elster"
	},
	{
		name: "Schönewalde",
		plz: "04916",
		kreis: "Elbe-Elster"
	},
	{
		name: "Uebigau",
		plz: "04938",
		kreis: "Elbe-Elster"
	},
	{
		name: "Herzberg Ortsteil",
		plz: "04916",
		kreis: "Elbe-Elster"
	},
	{
		name: "Falkenberg Ort",
		plz: "04895",
		kreis: "Elbe-Elster"
	},
	{
		name: "Mühlberg Ort",
		plz: "04931",
		kreis: "Elbe-Elster"
	},
	{
		name: "Gröden",
		plz: "04932",
		kreis: "Elbe-Elster"
	},
	{
		name: "Hirschfeld",
		plz: "04932",
		kreis: "Elbe-Elster"
	},
	{
		name: "Merzdorf",
		plz: "04932",
		kreis: "Elbe-Elster"
	},
	{
		name: "Großthiemig",
		plz: "04932",
		kreis: "Elbe-Elster"
	},
	{
		name: "Hohenleipisch",
		plz: "04934",
		kreis: "Elbe-Elster"
	},
	{
		name: "Gorden",
		plz: "03238",
		kreis: "Elbe-Elster"
	},
	{
		name: "Bronkow",
		plz: "03205",
		kreis: "Oberspreewald-Lausitz"
	},
	{
		name: "Lugau",
		plz: "03130",
		kreis: "Spree-Neiße"
	},
	{
		name: "Neu-Seeland",
		plz: "01983",
		kreis: "Oberspreewald-Lausitz"
	},
	{
		name: "Altdöbern",
		plz: "03229",
		kreis: "Oberspreewald-Lausitz"
	},
	{
		name: "Luckaitztal",
		plz: "03229",
		kreis: "Oberspreewald-Lausitz"
	},
	{
		name: "Frauendorf",
		plz: "01945",
		kreis: "Oberspreewald-Lausitz"
	},
	{
		name: "Tettau",
		plz: "01945",
		kreis: "Oberspreewald-Lausitz"
	},
	{
		name: "Hermsdorf",
		plz: "01945",
		kreis: "Oberspreewald-Lausitz"
	},
	{
		name: "Kroppen",
		plz: "01945",
		kreis: "Oberspreewald-Lausitz"
	},
	{
		name: "Lindenau",
		plz: "01945",
		kreis: "Oberspreewald-Lausitz"
	},
	{
		name: "Guteborn",
		plz: "01945",
		kreis: "Oberspreewald-Lausitz"
	},
	{
		name: "Hohenbocka",
		plz: "01945",
		kreis: "Oberspreewald-Lausitz"
	},
	{
		name: "Grünewald",
		plz: "01945",
		kreis: "Oberspreewald-Lausitz"
	},
	{
		name: "Schwarzbach",
		plz: "01945",
		kreis: "Oberspreewald-Lausitz"
	},
	{
		name: "Senftenberg Ort",
		plz: "01968",
		kreis: "Oberspreewald-Lausitz"
	},
	{
		name: "Großkoschen",
		plz: "01968",
		kreis: "Oberspreewald-Lausitz"
	},
	{
		name: "Schipkau Annahütte",
		plz: "01994",
		kreis: "Oberspreewald-Lausitz"
	},
	{
		name: "Klettwitz",
		plz: "01998",
		kreis: "Oberspreewald-Lausitz"
	},
	{
		name: "Hörlitz",
		plz: "01968",
		kreis: "Oberspreewald-Lausitz"
	},
	{
		name: "Meuro",
		plz: "01968",
		kreis: "Oberspreewald-Lausitz"
	},
	{
		name: "Brieske",
		plz: "01968",
		kreis: "Oberspreewald-Lausitz"
	},
	{
		name: "Sedlitz",
		plz: "01968",
		kreis: "Oberspreewald-Lausitz"
	},
	{
		name: "Kostebrau",
		plz: "01979",
		kreis: "Oberspreewald-Lausitz"
	},
	{
		name: "Ragow Lausitz",
		plz: "01979",
		kreis: "Oberspreewald-Lausitz"
	},
	{
		name: "Lichterfeld",
		plz: "03238",
		kreis: "Elbe-Elster"
	},
	{
		name: "Wittenberge Ort",
		plz: "19322",
		kreis: "Prignitz"
	},
	{
		name: "Weisen",
		plz: "19322",
		kreis: "Prignitz"
	},
	{
		name: "Breese",
		plz: "19322",
		kreis: "Prignitz"
	},
	{
		name: "Cumlosen",
		plz: "19322",
		kreis: "Prignitz"
	},
	{
		name: "Lanz",
		plz: "19309",
		kreis: "Prignitz"
	},
	{
		name: "Lenzerwische",
		plz: "19309",
		kreis: "Prignitz"
	},
	{
		name: "Plattenburg",
		plz: "19339",
		kreis: "Prignitz"
	},
	{
		name: "Gumtow",
		plz: "16866",
		kreis: "Prignitz"
	},
	{
		name: "Groß Pankow Ort",
		plz: "16928",
		kreis: "Prignitz"
	},
	{
		name: "Halenbeck-Rohlsdorf",
		plz: "16945",
		kreis: "Prignitz"
	},
	{
		name: "Kümmernitztal",
		plz: "16945",
		kreis: "Prignitz"
	},
	{
		name: "Marienfließ",
		plz: "16945",
		kreis: "Prignitz"
	},
	{
		name: "Triglitz",
		plz: "16949",
		kreis: "Prignitz"
	},
	{
		name: "Pirow",
		plz: "19348",
		kreis: "Prignitz"
	},
	{
		name: "Karstädt Ort",
		plz: "19357",
		kreis: "Prignitz"
	},
	{
		name: "Berge",
		plz: "19348",
		kreis: "Prignitz"
	},
	{
		name: "Gülitz-Reetz",
		plz: "19348",
		kreis: "Prignitz"
	},
	{
		name: "Heiligengrabe",
		plz: "16909",
		kreis: "Ostprignitz-Ruppin"
	},
	{
		name: "Zernitz-Lohm",
		plz: "16845",
		kreis: "Ostprignitz-Ruppin"
	},
	{
		name: "Stüdenitz-Schönermark",
		plz: "16845",
		kreis: "Ostprignitz-Ruppin"
	},
	{
		name: "Dreetz",
		plz: "16845",
		kreis: "Ostprignitz-Ruppin"
	},
	{
		name: "Sieversdorf-Hohenofen",
		plz: "16845",
		kreis: "Ostprignitz-Ruppin"
	},
	{
		name: "Temnitzquell",
		plz: "16818",
		kreis: "Ostprignitz-Ruppin"
	},
	{
		name: "Temnitztal",
		plz: "16818",
		kreis: "Ostprignitz-Ruppin"
	},
	{
		name: "Walsleben",
		plz: "16818",
		kreis: "Ostprignitz-Ruppin"
	},
	{
		name: "Dabergotz",
		plz: "16818",
		kreis: "Ostprignitz-Ruppin"
	},
	{
		name: "Storbeck-Frankendorf",
		plz: "16818",
		kreis: "Ostprignitz-Ruppin"
	},
	{
		name: "Märkisch Linden",
		plz: "16818",
		kreis: "Ostprignitz-Ruppin"
	},
	{
		name: "Herzberg (Mark)",
		plz: "16835",
		kreis: "Ostprignitz-Ruppin"
	},
	{
		name: "Lindow (Mark)",
		plz: "16835",
		kreis: "Ostprignitz-Ruppin"
	},
	{
		name: "Vielitzsee",
		plz: "16835",
		kreis: "Ostprignitz-Ruppin"
	},
	{
		name: "Rheinsberg Ort",
		plz: "16831",
		kreis: "Ostprignitz-Ruppin"
	},
	{
		name: "Flecken Zechlin",
		plz: "16837",
		kreis: "Ostprignitz-Ruppin"
	},
	{
		name: "Wusterhausen Ort",
		plz: "16868",
		kreis: "Ostprignitz-Ruppin"
	},
	{
		name: "Kyritz Ort",
		plz: "16866",
		kreis: "Ostprignitz-Ruppin"
	},
	{
		name: "Wittstock Ort",
		plz: "16909",
		kreis: "Ostprignitz-Ruppin"
	},
	{
		name: "Zehdenick Ort",
		plz: "16792",
		kreis: "Oberhavel"
	},
	{
		name: "Fürstenberg Ort",
		plz: "16798",
		kreis: "Oberhavel"
	},
	{
		name: "Himmelpfort",
		plz: "16798",
		kreis: "Oberhavel"
	},
	{
		name: "Stechlin",
		plz: "16775",
		kreis: "Oberhavel"
	},
	{
		name: "Sonnenberg",
		plz: "16775",
		kreis: "Oberhavel"
	},
	{
		name: "Schönermark",
		plz: "16775",
		kreis: "Oberhavel"
	},
	{
		name: "Großwoltersdorf",
		plz: "16775",
		kreis: "Oberhavel"
	},
	{
		name: "Gransee Ort",
		plz: "16775",
		kreis: "Oberhavel"
	}
];
function terminSearch(city) {
	return "https://www.google.com/search?q=" + encodeURIComponent(`Bürgeramt Termin ${city.name} Brandenburg`);
}
function citySiteSearch(city) {
	return "https://www.google.com/search?q=" + encodeURIComponent(`Stadt ${city.name} offizielle Website`);
}
function adviceSearch(city) {
	return "https://www.google.com/search?q=" + encodeURIComponent(`Migrationsberatung ${city.name} Brandenburg`);
}
var LANGS = [
	{
		code: "de",
		label: "Deutsch"
	},
	{
		code: "ru",
		label: "Русский"
	},
	{
		code: "uk",
		label: "Українська"
	},
	{
		code: "ar",
		label: "العربية"
	}
];
var t = (de, ru, uk, ar) => ({
	de,
	ru,
	uk,
	ar
});
var passport = {
	id: "passport",
	name: t("Reisepass oder Ausweis", "Загранпаспорт или удостоверение", "Закордонний паспорт або посвідчення", "جواز السفر أو بطاقة الهوية"),
	note: t("Original, noch gültig", "Оригинал, ещё действует", "Оригінал, ще чинний", "الأصل، وما زال ساريًا"),
	hint: t("Fehlt er, fragen Sie Konsulat oder Ausländerbehörde.", "Если нет — консульство или Ausländerbehörde.", "Якщо немає — консульство або Ausländerbehörde.", "إن لم يكن لديك، اسأل القنصلية أو دائرة الأجانب.")
};
var wohn = {
	id: "wohn",
	name: t("Wohnungsgeberbestätigung", "Подтверждение от арендодателя", "Підтвердження від орендодавця", "شهادة من مؤجر السكن"),
	note: t("Vom Vermieter ausgefüllt und unterschrieben", "Заполняет и подписывает арендодатель", "Заповнює і підписує орендодавець", "يملأها المؤجر ويوقّعها"),
	hint: t("Blanko gibt es auf der Website der Stadt. Kopie reicht oft nicht.", "Бланк на сайте города. Копии часто недостаточно.", "Бланк на сайті міста. Копії часто недостатньо.", "النموذج على موقع المدينة. النسخة غالبًا لا تكفي.")
};
var photo = {
	id: "photo",
	name: t("Biometrisches Passfoto", "Биометрическое фото", "Біометричне фото", "صورة بيومترية"),
	note: t("Nur wenn das Amt es verlangt", "Только если ведомство просит", "Лише якщо установа просить", "فقط إذا طلبها المكتب"),
	hint: t("Im Fotoatelier machen lassen und vorher nachfragen.", "Сделайте в фотоателье и заранее уточните.", "Зробіть у фотоательє і заздалегідь уточніть.", "صوّرها في استوديو واسأل قبل الموعد.")
};
var trans = {
	id: "trans",
	name: t("Beglaubigte Übersetzung", "Заверенный перевод", "Засвідчений переклад", "ترجمة معتمدة"),
	note: t("Wenn das Papier nicht auf Deutsch ist", "Если документ не на немецком", "Якщо документ не німецькою", "إذا لم تكن الوثيقة بالألمانية"),
	hint: t("Maschinenübersetzung gilt nicht. Suchen Sie eine vereidigte Person.", "Машинный перевод не примут. Нужен присяжный переводчик.", "Машинний переклад не приймуть. Потрібен присяжний перекладач.", "الترجمة الآلية لا تُقبل. ابحث عن مترجم محلف.")
};
var SERVICES = [
	{
		id: "ummeldung",
		title: t("Ummeldung", "Ummeldung — новый адрес", "Ummeldung — нова адреса", "تغيير العنوان"),
		sub: t("Adresse innerhalb Deutschlands ändern", "Смена адреса внутри Германии", "Зміна адреси всередині Німеччини", "تغيير العنوان داخل ألمانيا"),
		deadline: t("In der Regel 2 Wochen nach dem Einzug.", "Обычно 2 недели после переезда.", "Зазвичай 2 тижні після переїзду.", "عادةً خلال أسبوعين بعد الانتقال."),
		docs: [passport, wohn],
		steps: [
			t("Termin beim Bürgeramt suchen oder anrufen.", "Найдите запись в Bürgeramt или позвоните.", "Знайдіть запис у Bürgeramt або зателефонуйте.", "ابحث عن موعد في مكتب المواطنين أو اتصل."),
			t("Originale und die Wohnungsgeberbestätigung in eine Mappe legen.", "Положите оригиналы и подтверждение арендодателя в одну папку.", "Покладіть оригінали і підтвердження в одну теку.", "ضع الأصول وشهادة المؤجر في ملف واحد."),
			t("Im Amt den Satz unten sagen und die Papiere zeigen.", "В ведомстве скажите фразу ниже и покажите бумаги.", "В установі скажіть фразу нижче і покажіть папери.", "في المكتب قل الجملة أدناه وأظهر الأوراق.")
		]
	},
	{
		id: "anmeldung",
		title: t("Anmeldung", "Anmeldung — первая регистрация", "Anmeldung — перша реєстрація", "التسجيل الأول"),
		sub: t("Erste Adresse in der Gemeinde anmelden", "Первая регистрация адреса", "Перша реєстрація адреси", "تسجيل أول عنوان في البلدية"),
		deadline: t("In der Regel 2 Wochen nach dem Einzug.", "Обычно 2 недели после заселения.", "Зазвичай 2 тижні після заселення.", "عادةً خلال أسبوعين بعد السكن."),
		docs: [passport, wohn],
		steps: [
			t("Prüfen, welches Bürgeramt für Ihre neue Adresse zuständig ist.", "Уточните, какое Bürgeramt отвечает за новый адрес.", "Уточніть, яке Bürgeramt відповідає за нову адресу.", "تأكد أي مكتب مسؤول عن عنوانك الجديد."),
			t("Wohnungsgeberbestätigung vor dem Termin holen.", "Возьмите подтверждение арендодателя до визита.", "Візьміть підтвердження орендодавця до візиту.", "احصل على شهادة المؤجر قبل الموعد."),
			t("Nach der Anmeldung die Meldebescheinigung aufbewahren.", "После регистрации сохраните Meldebescheinigung.", "Після реєстрації збережіть Meldebescheinigung.", "بعد التسجيل احتفظ بشهادة السكن.")
		]
	},
	{
		id: "kindergeld",
		title: t("Kindergeld", "Kindergeld — пособие на ребёнка", "Kindergeld — допомога на дитину", "إعانة الطفل"),
		sub: t("Antrag bei der Familienkasse", "Заявление в Familienkasse", "Заява до Familienkasse", "طلب لدى صندوق الأسرة"),
		deadline: t("So bald wie möglich stellen. Rückwirkend nur begrenzt.", "Подавайте как можно скорее. Задним числом — ограниченно.", "Подавайте якнайшвидше. Заднім числом — обмежено.", "قدّم الطلب بأسرع ما يمكن. الرجوع للخلف محدود."),
		docs: [
			passport,
			{
				id: "birth",
				name: t("Geburtsurkunde des Kindes", "Свидетельство о рождении ребёнка", "Свідоцтво про народження дитини", "شهادة ميلاد الطفل"),
				note: t("Oft mit Übersetzung", "Часто с переводом", "Часто з перекладом", "غالبًا مع ترجمة"),
				hint: t("Fragen Sie die Familienkasse, welche Form sie braucht.", "Спросите Familienkasse, какая форма нужна.", "Запитайте Familienkasse, яка форма потрібна.", "اسأل صندوق الأسرة عن الصيغة المطلوبة.")
			},
			{
				id: "steuer",
				name: t("Steuer-ID", "Налоговый номер Steuer-ID", "Податковий номер Steuer-ID", "الرقم الضريبي"),
				note: t("Für Sie und das Kind, sobald vorhanden", "Для вас и ребёнка, когда будет", "Для вас і дитини, коли буде", "لك وللطفل عند توفره"),
				hint: t("Kommt per Brief vom Bundeszentralamt für Steuern.", "Приходит письмом от налогового ведомства.", "Надходить листом від податкового відомства.", "يصل برسالة من مكتب الضرائب الاتحادي.")
			},
			{
				id: "bank",
				name: t("Bankverbindung", "Банковские реквизиты", "Банківські реквізити", "بيانات الحساب البنكي"),
				note: t("IBAN eines Kontos auf Ihren Namen", "IBAN счёта на ваше имя", "IBAN рахунку на ваше ім’я", "آيبان لحساب باسمك"),
				hint: t("Ein Konto können Sie bei einer Bank mit Ausweis eröffnen.", "Счёт открывают в банке с удостоверением.", "Рахунок відкривають у банку з посвідченням.", "يمكن فتح حساب في بنك بوثيقة الهوية.")
			}
		],
		steps: [
			t("Familienkasse der Bundesagentur für Arbeit suchen.", "Найдите Familienkasse при Agentur für Arbeit.", "Знайдіть Familienkasse при Agentur für Arbeit.", "ابحث عن صندوق الأسرة لدى وكالة العمل."),
			t("Antrag online oder auf Papier stellen.", "Подайте заявление онлайн или на бумаге.", "Подайте заяву онлайн або на папері.", "قدّم الطلب عبر الإنترنت أو ورقيًا."),
			t("Fristen im Antwortbrief notieren.", "Запишите сроки из ответного письма.", "Запишіть строки з листа-відповіді.", "دوّن المهل في رسالة الرد.")
		]
	},
	{
		id: "krankenkasse",
		title: t("Krankenkasse", "Медицинская страховка", "Медичне страхування", "التأمين الصحي"),
		sub: t("Gesetzliche Krankenversicherung", "Государственная больничная касса", "Державна лікарняна каса", "تأمين صحي قانوني"),
		deadline: t("Ohne Versicherung keine reguläre Behandlung. Schnell klären.", "Без страховки обычное лечение недоступно. Решайте быстро.", "Без страховки звичайне лікування недоступне. Вирішуйте швидко.", "بدون تأمين لا يوجد علاج عادي. وضّح الأمر سريعًا."),
		docs: [
			passport,
			{
				id: "melde",
				name: t("Meldebescheinigung", "Справка о регистрации", "Довідка про реєстрацію", "شهادة التسجيل"),
				note: t("Nach Anmeldung beim Bürgeramt", "После Anmeldung в Bürgeramt", "Після Anmeldung у Bürgeramt", "بعد التسجيل في مكتب المواطنين"),
				hint: t("Beim Bürgeramt nach der Anmeldung mitnehmen.", "Возьмите в Bürgeramt после регистрации.", "Візьміть у Bürgeramt після реєстрації.", "احصل عليها من المكتب بعد التسجيل.")
			},
			{
				id: "job",
				name: t("Nachweis Arbeit oder Jobcenter", "Подтверждение работы или Jobcenter", "Підтвердження роботи або Jobcenter", "إثبات عمل أو مركز العمل"),
				note: t("Vertrag, Bescheid oder Mitgliedsbescheinigung", "Договор, решение или справка", "Договір, рішення або довідка", "عقد أو قرار أو شهادة عضوية"),
				hint: t("Die Kasse sagt, welcher Nachweis reicht.", "Касса скажет, какого подтверждения достаточно.", "Каса скаже, якого підтвердження достатньо.", "ستخبرك الشركة أي إثبات يكفي.")
			}
		],
		steps: [
			t("Eine gesetzliche Kasse wählen, zum Beispiel vor Ort.", "Выберите государственную кассу, например рядом с домом.", "Оберіть державну касу, наприклад поруч із домом.", "اختر شركة تأمين قانونية، مثلًا قريبة منك."),
			t("Fragen: Bin ich pflichtversichert oder über das Jobcenter?", "Спросите: я обязан страховаться или через Jobcenter?", "Запитайте: я зобов’язаний страхуватися чи через Jobcenter?", "اسأل: هل تأميني إلزامي أم عبر مركز العمل؟"),
			t("Karte und Schreiben aufbewahren.", "Храните карточку и письма.", "Зберігайте картку і листи.", "احتفظ بالبطاقة والرسائل.")
		]
	},
	{
		id: "jobcenter",
		title: t("Jobcenter", "Jobcenter — помощь на жизнь", "Jobcenter — допомога на життя", "مركز العمل"),
		sub: t("Bürgergeld und Unterstützung bei Arbeit", "Bürgergeld и помощь с работой", "Bürgergeld і допомога з роботою", "إعانة المعيشة والمساعدة في العمل"),
		deadline: t("Antrag stellen, sobald das Geld nicht reicht. Nicht warten.", "Подавайте, как только денег не хватает. Не ждите.", "Подавайте, щойно грошей не вистачає. Не чекайте.", "قدّم الطلب عندما لا يكفي المال. لا تنتظر."),
		docs: [
			passport,
			wohn,
			{
				id: "miete",
				name: t("Mietvertrag", "Договор аренды", "Договір оренди", "عقد الإيجار"),
				note: t("Zeigt Miete und Nebenkosten", "Показывает аренду и коммунальные", "Показує оренду і комунальні", "يبيّن الإيجار والتكاليف"),
				hint: t("Kopie vom Vermieter erbitten.", "Попросите копию у арендодателя.", "Попросіть копію в орендодавця.", "اطلب نسخة من المؤجر.")
			},
			{
				id: "konto",
				name: t("Kontoauszüge", "Выписки по счёту", "Виписки з рахунку", "كشوف الحساب"),
				note: t("Oft die letzten Monate", "Часто за последние месяцы", "Часто за останні місяці", "غالبًا للأشهر الأخيرة"),
				hint: t("Die Einladung sagt, wie viele Monate.", "В приглашении написано, за сколько месяцев.", "У запрошенні написано, за скільки місяців.", "رسالة الدعوة تحدد عدد الأشهر.")
			}
		],
		steps: [
			t("Zuständiges Jobcenter über die neue Adresse finden.", "Найдите Jobcenter по новому адресу.", "Знайдіть Jobcenter за новою адресою.", "اعثر على مركز العمل حسب عنوانك الجديد."),
			t("Antrag Bürgergeld stellen und Termin mitnehmen.", "Подайте заявление на Bürgergeld и сохраните дату.", "Подайте заяву на Bürgergeld і збережіть дату.", "قدّم طلب الإعانة واحفظ الموعد."),
			t("Jede Frist im Brief sofort notieren.", "Каждый срок в письме сразу запишите.", "Кожен строк у листі одразу запишіть.", "دوّن كل مهلة في الرسالة فورًا.")
		]
	},
	{
		id: "sprachkurs",
		title: t("Sprachkurs", "Языковой курс", "Мовний курс", "دورة اللغة"),
		sub: t("Integrationskurs und Deutsch lernen", "Интеграционный курс и немецкий", "Інтеграційний курс і німецька", "دورة الاندماج وتعلّم الألمانية"),
		deadline: t("Mit Berechtigung oder Verpflichtung nicht zu lange warten.", "Если есть направление или обязанность — не откладывайте.", "Якщо є направлення або обов’язок — не відкладайте.", "إذا كان لديك إذن أو التزام فلا تؤجل."),
		docs: [passport, {
			id: "bamf",
			name: t("Berechtigung oder Verpflichtung", "Направление или обязательство", "Направлення або зобов’язання", "إذن أو التزام بالدورة"),
			note: t("Vom BAMF, Jobcenter oder Ausländerbehörde", "От BAMF, Jobcenter или Ausländerbehörde", "Від BAMF, Jobcenter або Ausländerbehörde", "من المكتب الاتحادي أو مركز العمل أو دائرة الأجانب"),
			hint: t("Ohne Papier fragen diese Stellen zuerst.", "Без бумаги сначала спросите эти ведомства.", "Без паперу спочатку запитайте ці установи.", "بدون ورقة اسأل هذه الجهات أولًا.")
		}],
		steps: [
			t("Kursträger in der Stadt suchen (Volkshochschule und andere).", "Найдите школу в городе (Volkshochschule и другие).", "Знайдіть школу в місті (Volkshochschule та інші).", "ابحث عن جهة دورة في المدينة."),
			t("Einstufungstest machen.", "Пройдите тест на уровень.", "Пройдіть тест на рівень.", "أجرِ اختبار تحديد المستوى."),
			t("Zeiten und Fehlzeiten-Regeln aufschreiben.", "Запишите расписание и правила пропусков.", "Запишіть розклад і правила пропусків.", "دوّن المواعيد وقواعد الغياب.")
		]
	},
	{
		id: "fuehrerschein",
		title: t("Führerschein", "Водительские права", "Водійські права", "رخصة القيادة"),
		sub: t("Ausländischen Führerschein klären", "Иностранные права", "Іноземні права", "رخصة قيادة أجنبية"),
		deadline: t("Fristen hängen vom Herkunftsland ab. Amt fragen.", "Сроки зависят от страны выдачи. Спросите ведомство.", "Строки залежать від країни видачі. Запитайте установу.", "المهل تعتمد على بلد الإصدار. اسأل المكتب."),
		docs: [
			passport,
			{
				id: "license",
				name: t("Führerschein im Original", "Права, оригинал", "Права, оригінал", "الرخصة الأصلية"),
				note: t("Plus oft beglaubigte Übersetzung", "Часто ещё заверенный перевод", "Часто ще засвідчений переклад", "وغالبًا ترجمة معتمدة"),
				hint: t("Nicht selbst übersetzen.", "Не переводите сами.", "Не перекладайте самі.", "لا تترجمها بنفسك.")
			},
			photo,
			trans
		],
		steps: [
			t("Fahrerlaubnisbehörde des Landkreises oder der Stadt finden.", "Найдите Fahrerlaubnisbehörde города или района.", "Знайдіть Fahrerlaubnisbehörde міста або району.", "اعثر على دائرة رخص القيادة في المدينة أو المحافظة."),
			t("Fragen, ob Umschreibung, Prüfung oder nur Registrierung nötig ist.", "Спросите: переоформление, экзамен или только регистрация.", "Запитайте: переоформлення, іспит чи лише реєстрація.", "اسأل: تحويل أم امتحان أم تسجيل فقط."),
			t("Nichts unterschreiben, das Sie nicht verstehen. Hilfe mitnehmen.", "Не подписывайте то, чего не понимаете. Возьмите помощь.", "Не підписуйте те, чого не розумієте. Візьміть допомогу.", "لا توقّع ما لا تفهمه. اصطحب مساعدة.")
		]
	}
];
var PHRASES = [
	{
		de: "Guten Tag, ich möchte mich anmelden.",
		ru: "Здравствуйте, я хочу зарегистрироваться.",
		uk: "Добрий день, я хочу зареєструватися.",
		ar: "مرحبًا، أريد التسجيل."
	},
	{
		de: "Guten Tag, ich möchte mich ummelden.",
		ru: "Здравствуйте, я хочу сменить адрес.",
		uk: "Добрий день, я хочу змінити адресу.",
		ar: "مرحبًا، أريد تغيير عنواني."
	},
	{
		de: "Ich habe hier die Wohnungsgeberbestätigung.",
		ru: "Вот подтверждение от арендодателя.",
		uk: "Ось підтвердження від орендодавця.",
		ar: "هذه شهادة المؤجر."
	},
	{
		de: "Wann kann ich einen Termin bekommen?",
		ru: "Когда можно записаться?",
		uk: "Коли можна записатися?",
		ar: "متى يمكنني الحصول على موعد؟"
	},
	{
		de: "Können Sie das bitte wiederholen?",
		ru: "Повторите, пожалуйста.",
		uk: "Повторіть, будь ласка.",
		ar: "هل يمكنك الإعادة من فضلك؟"
	},
	{
		de: "Ich spreche wenig Deutsch. Gibt es jemanden für Englisch?",
		ru: "Я мало говорю по-немецки. Есть кто-то на английском?",
		uk: "Я мало говорю німецькою. Чи є хтось англійською?",
		ar: "أتكلم الألمانية قليلًا. هل يوجد من يتحدث الإنجليزية؟"
	},
	{
		de: "Bitte schreiben Sie das für mich auf.",
		ru: "Запишите это для меня, пожалуйста.",
		uk: "Запишіть це для мене, будь ласка.",
		ar: "من فضلك اكتب ذلك لي."
	}
];
var GLOSSARY = [
	{
		de: "Frist",
		ru: "Срок",
		uk: "Строк",
		ar: "مهلة",
		why: t("Bis zu diesem Tag müssen Sie antworten oder handeln.", "До этого дня нужно ответить или сделать действие.", "До цього дня треба відповісти або діяти.", "حتى هذا اليوم يجب أن ترد أو تتصرف.")
	},
	{
		de: "Termin",
		ru: "Назначенное время",
		uk: "Призначений час",
		ar: "موعد",
		why: t("Ein festes Datum für einen Besuch.", "Конкретные дата и время визита.", "Конкретні дата і час візиту.", "تاريخ محدد للزيارة.")
	},
	{
		de: "Anhörung",
		ru: "Запрос объяснений",
		uk: "Запит пояснень",
		ar: "طلب توضيح",
		why: t("Sie sollen antworten, bevor entschieden wird.", "Вас просят ответить до решения.", "Вас просять відповісти до рішення.", "يُطلب منك الرد قبل صدور القرار.")
	},
	{
		de: "Bescheid",
		ru: "Официальное решение",
		uk: "Офіційне рішення",
		ar: "قرار رسمي",
		why: t("Das Amt hat entschieden. Oft mit Rechtsbehelfsbelehrung.", "Ведомство решило. Часто есть инструкция, как оспорить.", "Установа вирішила. Часто є інструкція, як оскаржити.", "اتخذ المكتب قرارًا. غالبًا مع شرح كيفية الاعتراض.")
	},
	{
		de: "Widerspruch",
		ru: "Возражение",
		uk: "Заперечення",
		ar: "اعتراض",
		why: t("Ihr Nein gegen einen Bescheid, meist mit kurzer Frist.", "Ваше «нет» решению, обычно с коротким сроком.", "Ваше «ні» рішенню, зазвичай із коротким строком.", "رفضك للقرار، غالبًا بمهلة قصيرة.")
	},
	{
		de: "Gebühr",
		ru: "Пошлина",
		uk: "Збір",
		ar: "رسوم",
		why: t("Ein Betrag, den Sie zahlen sollen.", "Сумма, которую нужно заплатить.", "Сума, яку треба сплатити.", "مبلغ مطلوب دفعه.")
	},
	{
		de: "Nachweis",
		ru: "Подтверждающий документ",
		uk: "Підтвердний документ",
		ar: "إثبات",
		why: t("Ein Papier, das etwas belegt.", "Бумага, которая что-то доказывает.", "Папір, який щось підтверджує.", "ورقة تثبت أمرًا.")
	}
];
var UI = {
	app: t("Brandenburg Helfer", "Помощник Бранденбурга", "Помічник Бранденбургу", "مساعد براندنبورغ"),
	intro: t("Schritt für Schritt durch Behörden im Land Brandenburg. Keine Rechtsberatung.", "Шаг за шагом по ведомствам земли Бранденбург. Это не юридическая консультация.", "Крок за кроком установами землі Бранденбург. Це не юридична консультація.", "خطوة بخطوة في دوائر ولاية براندنبورغ. هذه ليست استشارة قانونية."),
	services: t("Was brauchen Sie?", "Что вам нужно?", "Що вам потрібно?", "ماذا تحتاج؟"),
	city: t("Ihre Stadt", "Ваш город", "Ваше місто", "مدينتك"),
	pickCity: t("Stadt oder PLZ suchen", "Город или индекс", "Місто або індекс", "ابحث عن مدينة أو رمز"),
	empty: t("Nichts gefunden", "Ничего не найдено", "Нічого не знайдено", "لا توجد نتائج"),
	change: t("Andere Stadt", "Другой город", "Інше місто", "مدينة أخرى"),
	have: t("Habe ich", "Есть", "Є", "لدي"),
	need: t("Brauche ich", "Нужно", "Потрібно", "مطلوب"),
	where: t("So bekommen Sie es", "Где взять", "Де взяти", "كيف تحصل عليه"),
	ready: t("Unterlagen beisammen", "Документы собраны", "Документи зібрані", "الوثائق جاهزة"),
	readyText: t("Nehmen Sie die Originale mit.", "Возьмите оригиналы с собой.", "Візьміть оригінали з собою.", "أحضر الأصول معك."),
	missing: t("Noch offen", "Ещё нет", "Ще немає", "ما زال ناقصًا"),
	book: t("Termin suchen", "Искать запись", "Шукати запис", "ابحث عن موعد"),
	site: t("Website der Stadt", "Сайт города", "Сайт міста", "موقع المدينة"),
	listen: t("Vorlesen", "Прослушать", "Прослухати", "استماع"),
	phrases: t("Sätze auf Deutsch", "Фразы по-немецки", "Фрази німецькою", "جمل بالألمانية"),
	letter: t("Brief", "Письмо", "Лист", "رسالة"),
	letterTitle: t("Brief vom Amt verstehen", "Понять письмо от ведомства", "Зрозуміти лист від установи", "فهم رسالة من المكتب"),
	letterHelp: t("Text einfügen. Wir markieren nur Wörter. Das ist keine Prüfung des Briefes.", "Вставьте текст. Мы только подсветим слова. Это не проверка письма.", "Вставте текст. Ми лише підсвітимо слова. Це не перевірка листа.", "الصق النص. نُبرز الكلمات فقط. هذا ليس فحصًا للرسالة."),
	placeholder: t("Text des Briefes hier einfügen", "Вставьте текст письма", "Вставте текст листа", "الصق نص الرسالة هنا"),
	found: t("Gefundene Wörter", "Найденные слова", "Знайдені слова", "كلمات وُجدت"),
	none: t("Keine der wichtigen Wörter gefunden. Trotzdem Fristen selbst prüfen.", "Важных слов не найдено. Сроки всё равно проверьте сами.", "Важливих слів не знайдено. Строки все одно перевірте самі.", "لم نجد الكلمات المهمة. تحقق من المهل بنفسك."),
	mail: t("In E-Mail öffnen", "Открыть в почте", "Відкрити в пошті", "فتح في البريد"),
	words: t("Wichtige Wörter", "Важные слова", "Важливі слова", "كلمات مهمة"),
	warn: t("Erklärung, keine Rechtsberatung. Bei wichtigen Briefen zur Migrationsberatung.", "Это объяснение, не консультация юриста. Важные письма — в Migrationsberatung.", "Це пояснення, не консультація юриста. Важливі листи — до Migrationsberatung.", "هذا شرح وليس استشارة قانونية. للرسائل المهمة توجه إلى استشارة الهجرة."),
	notes: t("Meine Notizen", "Мои заметки", "Мої нотатки", "ملاحظاتي"),
	notesHelp: t("Bleibt nur auf diesem Gerät. Kein Konto, keine Cloud.", "Только на этом устройстве. Без аккаунта и облака.", "Лише на цьому пристрої. Без акаунта і хмари.", "تبقى على هذا الجهاز فقط. بلا حساب ولا سحابة."),
	noteTitle: t("Überschrift", "Заголовок", "Заголовок", "عنوان"),
	noteBody: t("Notiz", "Заметка", "Нотатка", "ملاحظة"),
	add: t("Speichern", "Сохранить", "Зберегти", "حفظ"),
	photoAdd: t("Foto hinzufügen", "Добавить фото", "Додати фото", "إضافة صورة"),
	photoBig: t("Foto ist zu groß (max. 400 KB).", "Фото слишком большое (макс. 400 КБ).", "Фото завелике (макс. 400 КБ).", "الصورة كبيرة جدًا (400 ك.ب كحد أقصى)."),
	del: t("Löschen", "Удалить", "Видалити", "حذف"),
	help: t("Hilfe", "Помощь", "Допомога", "مساعدة"),
	helpText: t("Kostenlose Migrationsberatung: Caritas, Diakonie, AWO und andere. Suchen Sie mit Ihrer Stadt.", "Бесплатная Migrationsberatung: Caritas, Diakonie, AWO и другие. Ищите со своим городом.", "Безкоштовна Migrationsberatung: Caritas, Diakonie, AWO та інші. Шукайте зі своїм містом.", "استشارة هجرة مجانية: Caritas وDiakonie وAWO وغيرها. ابحث مع اسم مدينتك."),
	advice: t("Beratung suchen", "Искать консультацию", "Шукати консультацію", "ابحث عن استشارة"),
	move: t("Einzugsdatum", "Дата переезда", "Дата переїзду", "تاريخ الانتقال"),
	remind: t("Frist 14 Tage", "Срок 14 дней", "Строк 14 днів", "مهلة 14 يومًا"),
	daysLeft: t("Tage bis zum Stichtag", "дней до даты", "днів до дати", "أيام حتى الموعد"),
	late: t("Der übliche Zeitraum ist vorbei. Trotzdem zum Amt.", "Обычный срок прошёл. Всё равно идите в ведомство.", "Звичайний строк минув. Все одно йдіть до установи.", "انتهت المدة المعتادة. اذهب إلى المكتب رغم ذلك."),
	today: t("Heute ist der Stichtag.", "Сегодня контрольная дата.", "Сьогодні контрольна дата.", "اليوم هو الموعد."),
	size: t("Schrift", "Шрифт", "Шрифт", "الخط"),
	theme: t("Darstellung", "Вид", "Вигляд", "المظهر"),
	light: t("Hell", "Светлая", "Світла", "فاتح"),
	dark: t("Dunkel", "Тёмная", "Темна", "داكن"),
	contrast: t("Kontrast", "Контраст", "Контраст", "تباين"),
	home: t("Start", "Старт", "Старт", "البداية"),
	back: t("Zurück", "Назад", "Назад", "رجوع"),
	unverified: t("Telefon und genaue Adresse stehen auf der Stadtseite. Wir erfinden sie nicht.", "Телефон и точный адрес — на сайте города. Мы их не выдумываем.", "Телефон і точна адреса — на сайті міста. Ми їх не вигадуємо.", "الهاتف والعنوان الدقيق على موقع المدينة. نحن لا نخترعهما."),
	kreis: t("Landkreis", "Район", "Район", "المحافظة"),
	all: t("Alle Kreise", "Все районы", "Усі райони", "كل المحافظات"),
	count: t("Orte", "населённых пунктов", "населених пунктів", "أماكن"),
	clear: t("Fortschritt der Liste löschen", "Сбросить отметки", "Скинути позначки", "مسح علامات القائمة"),
	noNotes: t("Noch keine Notiz.", "Заметок пока нет.", "Нотаток поки немає.", "لا ملاحظات بعد."),
	disclaimer: t("Texte auf Arabisch, Russisch und Ukrainisch sind Hilfen, keine amtliche Übersetzung.", "Тексты на арабском, русском и украинском — подсказка, не официальный перевод.", "Тексти арабською, російською та українською — підказка, не офіційний переклад.", "النصوص بالعربية والروسية والأوكرانية مساعدة وليست ترجمة رسمية.")
};
var KEY = "bb-helfer-v1";
var empty = {
	lang: "de",
	size: "md",
	theme: "light",
	cityName: "Potsdam",
	service: null,
	checked: {},
	moveIn: "",
	notes: []
};
function load() {
	try {
		const raw = localStorage.getItem(KEY);
		if (!raw) return empty;
		return {
			...empty,
			...JSON.parse(raw)
		};
	} catch {
		return empty;
	}
}
function HomePage() {
	const [ready, setReady] = (0, import_react.useState)(false);
	const [s, setS] = (0, import_react.useState)(empty);
	const [tab, setTab] = (0, import_react.useState)("home");
	const [cityQuery, setCityQuery] = (0, import_react.useState)("");
	const [kreis, setKreis] = (0, import_react.useState)("all");
	const [picking, setPicking] = (0, import_react.useState)(false);
	const [letter, setLetter] = (0, import_react.useState)("");
	const [draftTitle, setDraftTitle] = (0, import_react.useState)("");
	const [draftBody, setDraftBody] = (0, import_react.useState)("");
	const [photoError, setPhotoError] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		setS(load());
		setReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		localStorage.setItem(KEY, JSON.stringify(s));
		document.documentElement.lang = s.lang;
		document.documentElement.dir = s.lang === "ar" ? "rtl" : "ltr";
		document.documentElement.dataset.size = s.size;
		document.documentElement.classList.toggle("dark", s.theme === "dark");
		document.documentElement.classList.toggle("contrast", s.theme === "contrast");
	}, [s, ready]);
	const L = s.lang;
	const city = CITIES.find((c) => c.name === s.cityName) ?? CITIES[0];
	const service = SERVICES.find((x) => x.id === s.service) ?? null;
	const kreise = (0, import_react.useMemo)(() => {
		return [...new Set(CITIES.map((c) => c.kreis))].sort((a, b) => a.localeCompare(b, "de"));
	}, []);
	const filtered = (0, import_react.useMemo)(() => {
		const q = cityQuery.trim().toLowerCase();
		return CITIES.filter((c) => {
			if (kreis !== "all" && c.kreis !== kreis) return false;
			if (!q) return true;
			return c.name.toLowerCase().includes(q) || c.plz.startsWith(q) || c.kreis.toLowerCase().includes(q);
		}).slice(0, 40);
	}, [cityQuery, kreis]);
	function patch(p) {
		setS((prev) => ({
			...prev,
			...p
		}));
	}
	const due = (0, import_react.useMemo)(() => {
		if (!s.moveIn) return null;
		const start = /* @__PURE__ */ new Date(s.moveIn + "T12:00:00");
		if (Number.isNaN(start.getTime())) return null;
		const end = new Date(start);
		end.setDate(end.getDate() + 14);
		const today = /* @__PURE__ */ new Date();
		today.setHours(12, 0, 0, 0);
		return {
			end,
			days: Math.round((end.getTime() - today.getTime()) / 864e5)
		};
	}, [s.moveIn]);
	const hits = (0, import_react.useMemo)(() => {
		const text = letter.toLowerCase();
		return GLOSSARY.filter((g) => text.includes(g.de.toLowerCase()));
	}, [letter]);
	function speak(text) {
		if (typeof window === "undefined" || !window.speechSynthesis) return;
		window.speechSynthesis.cancel();
		const u = new SpeechSynthesisUtterance(text);
		u.lang = "de-DE";
		u.rate = .9;
		window.speechSynthesis.speak(u);
	}
	function addNote(image) {
		const title = draftTitle.trim();
		const body = draftBody.trim();
		if (!title && !body && !image) return;
		patch({ notes: [{
			id: crypto.randomUUID(),
			title: title || UI.notes[L],
			body,
			image
		}, ...s.notes].slice(0, 30) });
		setDraftTitle("");
		setDraftBody("");
		setPhotoError("");
	}
	function onPhoto(file) {
		if (!file) return;
		if (file.size > 4e5) {
			setPhotoError(UI.photoBig[L]);
			return;
		}
		const reader = new FileReader();
		reader.onload = () => {
			addNote(typeof reader.result === "string" ? reader.result : "");
		};
		reader.readAsDataURL(file);
	}
	const checkedKey = (id) => service ? `${service.id}:${id}` : id;
	const missing = service ? service.docs.filter((d) => !s.checked[checkedKey(d.id)]) : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto min-h-screen max-w-xl px-4 pb-28 pt-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mb-5 flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-bold text-primary",
					children: UI.app[L]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold leading-tight",
					children: tab === "home" && service ? service.title[L] : tab === "home" ? UI.services[L] : labelFor(tab, L)
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sr-only",
						children: UI.app[L]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						className: "min-h-11 rounded-card border border-line bg-surface px-3 text-base font-bold",
						value: L,
						onChange: (e) => patch({ lang: e.target.value }),
						children: LANGS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: l.code,
							children: l.label
						}, l.code))
					})]
				})]
			}),
			tab === "home" && !service && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-4 text-muted",
					children: UI.intro[L]
				}),
				due && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: `mb-4 rounded-card px-4 py-3 text-sm font-bold ${due.days < 0 ? "bg-warn-bg text-warn" : "bg-soft text-primary"}`,
					children: [
						UI.remind[L],
						": ",
						due.end.toLocaleDateString(L === "ar" ? "ar" : L === "de" ? "de-DE" : L),
						" ·",
						" ",
						due.days < 0 ? UI.late[L] : due.days === 0 ? UI.today[L] : `${due.days} ${UI.daysLeft[L]}`
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CityBar, {
					city,
					L,
					onChange: () => setPicking(true)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid gap-3",
					children: SERVICES.map((sv) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "w-full rounded-card border border-line bg-surface px-4 py-4 text-start shadow-none",
						onClick: () => {
							patch({ service: sv.id });
							setTab("home");
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-lg font-bold",
							children: sv.title[L]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-sm text-muted",
							children: sv.sub[L]
						})]
					}) }, sv.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, {
					s,
					patch,
					L
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 text-sm text-muted",
					children: [
						CITIES.length,
						" ",
						UI.count[L],
						". ",
						UI.disclaimer[L]
					]
				})
			] }),
			tab === "home" && service && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "mb-4 inline-flex min-h-11 items-center gap-1 font-bold text-primary",
					onClick: () => patch({ service: null }),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
						className: "size-5",
						"aria-hidden": true
					}), UI.back[L]]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-muted",
					children: service.sub[L]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-4 rounded-card bg-warn-bg px-4 py-3 font-bold text-warn",
					children: service.deadline[L]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CityBar, {
					city,
					L,
					onChange: () => setPicking(true)
				}),
				(service.id === "ummeldung" || service.id === "anmeldung") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "mb-4 block rounded-card border border-line bg-surface p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-2 block font-bold",
							children: UI.move[L]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "date",
							className: "min-h-11 w-full rounded-lg border border-line bg-bg px-3",
							value: s.moveIn,
							onChange: (e) => patch({ moveIn: e.target.value })
						}),
						due && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-2 block text-sm",
							children: [
								UI.remind[L],
								": ",
								due.end.toLocaleDateString("de-DE"),
								due.days < 0 ? ` — ${UI.late[L]}` : due.days === 0 ? ` — ${UI.today[L]}` : ` — ${due.days} ${UI.daysLeft[L]}`
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-2 text-lg font-bold",
					children: missing.length === 0 ? UI.ready[L] : UI.missing[L]
				}),
				missing.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-ok",
					children: UI.readyText[L]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mb-4 grid gap-2",
					children: service.docs.map((d) => {
						const on = !!s.checked[checkedKey(d.id)];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: `w-full rounded-card border px-4 py-3 text-start ${on ? "border-primary bg-ok-bg" : "border-line bg-surface"}`,
							onClick: () => patch({ checked: {
								...s.checked,
								[checkedKey(d.id)]: !on
							} }),
							"aria-pressed": on,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-bold",
									children: [
										on ? UI.have[L] : UI.need[L],
										": ",
										d.name[L]
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block text-sm text-muted",
									children: d.note[L]
								}),
								!on && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-2 block text-sm",
									children: [
										UI.where[L],
										": ",
										d.hint[L]
									]
								})
							]
						}) }, d.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "mb-4 text-sm font-bold text-muted underline",
					onClick: () => {
						const next = { ...s.checked };
						service.docs.forEach((d) => delete next[checkedKey(d.id)]);
						patch({ checked: next });
					},
					children: UI.clear[L]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-2 text-lg font-bold",
					children: service.title[L]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mb-4 grid gap-2",
					children: service.steps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-card bg-surface px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-bold text-primary",
							children: [i + 1, ". "]
						}), step[L]]
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 grid gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "inline-flex min-h-12 items-center justify-center rounded-card bg-primary px-4 font-bold text-primary-fg",
						href: terminSearch(city),
						target: "_blank",
						rel: "noreferrer",
						children: UI.book[L]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "inline-flex min-h-12 items-center justify-center rounded-card border border-line bg-surface px-4 font-bold",
						href: citySiteSearch(city),
						target: "_blank",
						rel: "noreferrer",
						children: UI.site[L]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-4 text-sm text-muted",
					children: UI.unverified[L]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-2 text-lg font-bold",
					children: UI.phrases[L]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid gap-2",
					children: PHRASES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-card border border-line bg-surface px-4 py-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-bold",
								children: p.de
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: p[L]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "mt-2 inline-flex min-h-11 items-center gap-2 font-bold text-primary",
								onClick: () => speak(p.de),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, {
									className: "size-5",
									"aria-hidden": true
								}), UI.listen[L]]
							})
						]
					}, p.de))
				})
			] }),
			tab === "letter" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-muted",
					children: UI.letterHelp[L]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					className: "mb-3 min-h-40 w-full rounded-card border border-line bg-surface p-3",
					placeholder: UI.placeholder[L],
					value: letter,
					onChange: (e) => setLetter(e.target.value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-2 font-bold",
					children: UI.found[L]
				}),
				hits.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-4 text-sm text-muted",
					children: UI.none[L]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mb-4 grid gap-2",
					children: hits.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-card bg-warn-bg px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-bold text-warn",
							children: [
								g.de,
								" — ",
								g[L]
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm",
							children: g.why[L]
						})]
					}, g.de))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					className: "mb-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-card bg-primary font-bold text-primary-fg",
					href: `mailto:?subject=${encodeURIComponent("Rückfrage zu meinem Schreiben")}&body=${encodeURIComponent(letter)}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
						className: "size-5",
						"aria-hidden": true
					}), UI.mail[L]]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-2 text-lg font-bold",
					children: UI.words[L]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid gap-2",
					children: GLOSSARY.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-card border border-line bg-surface px-4 py-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-bold",
								children: g.de
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: g[L] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: g.why[L]
							})
						]
					}, g.de))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm font-bold text-warn",
					children: UI.warn[L]
				})
			] }),
			tab === "notes" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-muted",
					children: UI.notesHelp[L]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mb-4 grid gap-2 rounded-card border border-line bg-surface p-4",
					onSubmit: (e) => {
						e.preventDefault();
						addNote();
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "min-h-11 rounded-lg border border-line bg-bg px-3",
							placeholder: UI.noteTitle[L],
							value: draftTitle,
							onChange: (e) => setDraftTitle(e.target.value)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							className: "min-h-24 rounded-lg border border-line bg-bg p-3",
							placeholder: UI.noteBody[L],
							value: draftBody,
							onChange: (e) => setDraftBody(e.target.value)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "min-h-12 rounded-card bg-primary font-bold text-primary-fg",
							type: "submit",
							children: UI.add[L]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "inline-flex min-h-12 cursor-pointer items-center justify-center rounded-card border border-line font-bold",
							children: [UI.photoAdd[L], /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "file",
								accept: "image/*",
								capture: "environment",
								className: "sr-only",
								onChange: (e) => onPhoto(e.target.files?.[0])
							})]
						}),
						photoError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-bold text-warn",
							children: photoError
						})
					]
				}),
				s.notes.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted",
					children: UI.noNotes[L]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid gap-3",
					children: s.notes.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-card border border-line bg-surface p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-bold",
								children: n.title
							}),
							n.body && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 whitespace-pre-wrap",
								children: n.body
							}),
							n.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: n.image,
								alt: "",
								className: "mt-2 max-h-48 rounded-lg"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "mt-2 font-bold text-warn",
								onClick: () => patch({ notes: s.notes.filter((x) => x.id !== n.id) }),
								children: UI.del[L]
							})
						]
					}, n.id))
				})
			] }),
			tab === "help" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CityBar, {
					city,
					L,
					onChange: () => {
						setTab("home");
						setPicking(true);
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-4",
					children: UI.helpText[L]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					className: "mb-3 inline-flex min-h-12 w-full items-center justify-center rounded-card bg-primary font-bold text-primary-fg",
					href: adviceSearch(city),
					target: "_blank",
					rel: "noreferrer",
					children: [
						UI.advice[L],
						" · ",
						city.name
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: "inline-flex min-h-12 w-full items-center justify-center rounded-card border border-line bg-surface font-bold",
					href: citySiteSearch(city),
					target: "_blank",
					rel: "noreferrer",
					children: UI.site[L]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, {
					s,
					patch,
					L
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-sm text-muted",
					children: [
						UI.disclaimer[L],
						" ",
						UI.warn[L]
					]
				})
			] }),
			picking && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-20 flex items-end justify-center bg-fg/40 p-3",
				role: "dialog",
				"aria-modal": true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-h-[85vh] w-full max-w-xl overflow-auto rounded-card bg-bg p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-3 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-lg font-bold",
								children: UI.city[L]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "min-h-11 font-bold text-primary",
								onClick: () => setPicking(false),
								children: UI.back[L]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mb-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
								className: "pointer-events-none absolute start-3 top-3 size-5 text-muted",
								"aria-hidden": true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								autoFocus: true,
								className: "min-h-12 w-full rounded-card border border-line bg-surface ps-10 pe-3",
								placeholder: UI.pickCity[L],
								value: cityQuery,
								onChange: (e) => setCityQuery(e.target.value)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "mb-3 block text-sm",
							children: [UI.kreis[L], /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								className: "mt-1 min-h-11 w-full rounded-card border border-line bg-surface px-3",
								value: kreis,
								onChange: (e) => setKreis(e.target.value),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "all",
									children: UI.all[L]
								}), kreise.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: k,
									children: k
								}, k))]
							})]
						}),
						filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: UI.empty[L] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "grid gap-2",
							children: filtered.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "w-full rounded-card border border-line bg-surface px-4 py-3 text-start",
								onClick: () => {
									patch({ cityName: c.name });
									setPicking(false);
									setCityQuery("");
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold",
									children: c.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "block text-sm text-muted",
									children: [
										"PLZ ",
										c.plz,
										" · ",
										c.kreis
									]
								})]
							}) }, c.name + c.plz))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "fixed inset-x-0 bottom-0 z-10 border-t border-line bg-surface",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mx-auto grid max-w-xl grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavBtn, {
							active: tab === "home",
							onClick: () => setTab("home"),
							label: UI.home[L],
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavBtn, {
							active: tab === "letter",
							onClick: () => setTab("letter"),
							label: UI.letter[L],
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavBtn, {
							active: tab === "notes",
							onClick: () => setTab("notes"),
							label: UI.notes[L],
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderOpen, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavBtn, {
							active: tab === "help",
							onClick: () => setTab("help"),
							label: UI.help[L],
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LifeBuoy, { className: "size-5" })
						})
					]
				})
			})
		]
	});
}
function labelFor(tab, L) {
	if (tab === "letter") return UI.letterTitle[L];
	if (tab === "notes") return UI.notes[L];
	if (tab === "help") return UI.help[L];
	return UI.app[L];
}
function CityBar({ city, L, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-4 flex items-center justify-between gap-3 rounded-card bg-soft px-4 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: UI.city[L]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-bold",
				children: city.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm",
				children: ["PLZ ", city.plz]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			className: "min-h-11 font-bold text-primary",
			onClick: onChange,
			children: UI.change[L]
		})]
	});
}
function Settings({ s, patch, L }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-6 rounded-card border border-line bg-surface p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 font-bold",
				children: UI.size[L]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-4 flex gap-2",
				children: [
					"sm",
					"md",
					"lg"
				].map((size) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: `min-h-11 flex-1 rounded-lg border font-bold ${s.size === size ? "border-primary bg-primary text-primary-fg" : "border-line"}`,
					onClick: () => patch({ size }),
					children: size === "sm" ? "A" : size === "md" ? "A+" : "A++"
				}, size))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 font-bold",
				children: UI.theme[L]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: `inline-flex min-h-11 flex-1 items-center justify-center gap-1 rounded-lg border font-bold ${s.theme === "light" ? "border-primary bg-primary text-primary-fg" : "border-line"}`,
						onClick: () => patch({ theme: "light" }),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, {
								className: "size-4",
								"aria-hidden": true
							}),
							" ",
							UI.light[L]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: `inline-flex min-h-11 flex-1 items-center justify-center gap-1 rounded-lg border font-bold ${s.theme === "dark" ? "border-primary bg-primary text-primary-fg" : "border-line"}`,
						onClick: () => patch({ theme: "dark" }),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, {
								className: "size-4",
								"aria-hidden": true
							}),
							" ",
							UI.dark[L]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: `inline-flex min-h-11 flex-1 items-center justify-center gap-1 rounded-lg border font-bold ${s.theme === "contrast" ? "border-primary bg-primary text-primary-fg" : "border-line"}`,
						onClick: () => patch({ theme: "contrast" }),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contrast, {
								className: "size-4",
								"aria-hidden": true
							}),
							" ",
							UI.contrast[L]
						]
					})
				]
			})
		]
	});
}
function NavBtn({ active, onClick, label, icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		className: `flex min-h-16 w-full flex-col items-center justify-center gap-1 text-xs font-bold ${active ? "text-primary" : "text-muted"}`,
		onClick,
		children: [icon, label]
	}) });
}
//#endregion
export { HomePage as component };
