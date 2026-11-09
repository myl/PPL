// templating this was getting pretty hard without a framework to generate with
import { createApp } from "https://cdn.jsdelivr.net/npm/vue@3.5.45/dist/vue.esm-browser.prod.js";

const types = ["Faculty", "Other Associated Faculty", "Postdocs", "Graduate students"];
const people = [
	{
		name: "Mark Liberman",
		image: "mark_liberman.png",
		href: "https://www.ling.upenn.edu/~myl/",
		bio: "Mark’s recent research areas include the phonology and phonetics of lexical tone, and its relationship to intonation; gestural, prosodic, morphological and syntactic ways of marking focus, and their use in discourse; formal models for linguistic annotation; information retrieval and information extraction from text.",
		type: "Faculty",
	},
	{
		name: "Jianjing Kuang",
		image: "jianjing_kuang.png",
		href: "https://www.sas.upenn.edu/~kuangj/Home.html",
		bio: "Jianjing’s recent research areas include the multidimensionality of tonal contrasts, phonation (production, perception and phonological representation), laryngeal articulations across languages, experimental fieldwork (Tibeto-Burman, Mayan, Hmong-Mien languages), computational modeling (mapping between production and perception), and prosody (intonation patterns and prosody in sentence processing).",
		type: "Faculty",
	},
	{
		name: "Sunghye Cho",
		image: "sunghye_cho.jpg",
		href: "https://www.sunghyecho.com/",
		bio: "Research Assistant Professor - Linguistic Data Consortium.",
		type: "Other Associated Faculty",
	},
	{
		name: "Noëmi Aepli",
		image: "noemi_aepli.png",
		href: "https://noe-eva.github.io/",
		bio: "Noëmi is interested in low-resource non-standardized dialects & language varieties and the challenges they pose for natural language processing (NLP).",
		type: "Postdocs",
	},
	{
		name: "Tifani Biro",
		image: "tifani_biro.png",
		href: "https://scholar.google.com/citations?user=ist8BfUAAAAJ",
		type: "Postdocs",
	},
	{
		name: "Martin Ho Kwan Ip",
		image: "martin_ho_kwan_ip.png",
		href: "https://scholar.google.com/citations?hl=en&user=j_pXF6MAAAAJ",
		bio: "Martin is interested in how speech processing can be shaped by both language-universal mechanisms as well as our experience with our native language. He addresses this question by adopting a cross-linguistic approach. At the Phonetics Lab, he studies how Cantonese listeners attend to the immediate intonation contour to predict the prosodic forms of upcoming words. In his second line of work, Martin also studies how speakers across languages prioritize different prosodic cues in sentence disambiguation.",
		type: "Postdocs",
	},
	{
		name: "Le Xuan Chan",
		image: "le_xuan_chan.jpg",
		href: "https://sites.google.com/view/lexuanchan/",
		bio: "Le Xuan is a first year Ph.D. student in Linguistics. His research interests are multilingualism, phonetics, and sociolinguistics. He is particularly interested in how the interaction of multiple languages at the individual level contributes to variation in multilingual societies, and exploring these topics through the lens of acoustic and articulatory phonetics.",
		type: "Graduate students",
	},
	{
		name: "May Chan",
		image: "may_chan.jpg",
		href: "https://www.ling.upenn.edu/~pikyu/",
		bio: "May’s research interests are in phonetics and phonology. Lately, May is particularly interested in articulatory and acoustic aspects of performative speech (such as singing), and their mapping to listeners’ perception.",
		type: "Graduate students",
	},
	{
		name: "Xin Gao",
		image: "xin_gao.jpeg",
		href: "https://www.ling.upenn.edu/people/xin-gao",
		type: "Graduate students",
	},
	{
		name: "Annika Heuser",
		href: "https://www.ling.upenn.edu/index.php/people/annika-heuser",
		type: "Graduate students",
	},
	{
		name: "Jonathan Lee",
		image: "jonathan_lee.jpg",
		href: "https://www.ling.upenn.edu/~jonhnlee/",
		bio: "Jonathan is interested in prosody (broadly construed) and its intersections with language acquisition, bilingualism, psychotherapy process, and social cognition",
		type: "Graduate students",
	},
	{
		name: "Danni Ma",
		href: "https://scholar.google.com/citations?hl=en&user=qZJA7DsAAAAJ",
		type: "Graduate students",
	},
	{
		name: "Hassan Munshi",
		image: "hassan_munshi.jpeg",
		href: "https://www.ling.upenn.edu/people/hassan-munshi",
		type: "Graduate students",
	},
	{
		name: "Nari Rhee",
		image: "nari_rhee.jpg",
		href: "https://live-sas-www-ling.pantheon.sas.upenn.edu/people/nari-rhee",
		bio: "Nari’s recent interests are in investigating the cross-linguistic similarities and differences in how the multidimensional phonetic cue space is shaped by the phonological structure of languages.",
		type: "Graduate students",
	},
	{
		name: "Hector J. Vazquez Martinez",
		image: "hector_j_vazquez_martinez.jpeg",
		href: "https://www.ling.upenn.edu/index.php/people/hector-vazquez-martinez",
		type: "Graduate students",
	},
];

document.addEventListener("DOMContentLoaded", () => {
	const app = createApp({
		data() {
			return { types, people };
		},
		computed: {
			groupedByType() {
				return Object.groupBy(this.people, ({ type }) => type);
			},
		},
	});
	app.mount("#people-container");
});
