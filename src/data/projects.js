// Import images
import WebImage1 from '../images/web-project-1.jpg';
import WebImage2 from '../images/web-project-2.jpg';
import MobileImage1 from '../images/mobile-project-1.jpg';
import MobileImage2 from '../images/mobile-project-2.jpg';
import UIImage1 from '../images/ui-project-1.jpg';
import UIImage2 from '../images/ui-project-2.jpg';
import GamePortfolio from '../images/game-portfolio.jpg';
import RobotsRolodex from '../images/robots-rolodex.jpg';
import Tasks from '../images/todo-tasks.jpg';
import LambeLambe from '../images/lambe-lambe.jpg';
import WFlow from '../images/wflow-api.jpg';
import PenosasStrike from '../images/penosas-strike.jpg';
import Marioplan from '../images/marioplan.jpg';
import InscriSER from '../images/inscriser.jpg';
import OSAdesao from '../images/os-adesao.jpg';
import ObjAp from '../images/objap.jpg';

export const projectsData = [
	{
		id: 1,
		title: 'Meu Game Portfólio',
		category: 'Aplicação Web',
		img: GamePortfolio,
		techs: 'React',
		link: 'https://lucaszaranza.netlify.app/',
	},		
	{
		id: 2,
		title: 'WFlow API',
		category: 'API',
		img: WFlow,
		techs: '.NET',
		link: ''
	},
	{
		id: 3,
		title: "Penosa's Strike",
		category: 'Games',
		img: PenosasStrike,
		techs: 'Unity3D & C#',
		link: 'https://play.google.com/store/apps/details?id=com.SacroCuore.PenosasStrike'
	},
	
	{
		id: 4,
		title: "Colégio Christus InscriSER",
		category: 'Aplicação Web',
		img: InscriSER,
		techs: 'Blazor, .NET, PostgreSQL',
		link: 'https://inscriser999.azurewebsites.net/'
	},
	{
		id: 5,
		title: "Odonto System Adesão",
		category: 'Aplicação Web',
		img: OSAdesao,
		techs: 'JavaScript, HTML, SQL Server, .NET',
		link: 'https://www.odontosystem.com.br/osadesao/login.aspx'
	},
	{
		id: 6,
		title: "Unichristus Objetivos de Aprendizagem",
		category: 'Aplicação Web',
		img: ObjAp,
		techs: 'Blazor, .NET, PostgreSQL',
		link: 'https://objap999.azurewebsites.net/'
	},
	{
		id: 7,
		title: "Marioplan",
		category: 'Aplicação Web',
		img: Marioplan,
		techs: 'React',
		link: 'https://net-ninja-marioplan-c7114.web.app/'
	},
	{
		id: 8,
		title: 'Robots Rolodex',
		category: 'Aplicação Web',
		img: RobotsRolodex,
		techs: 'React',
		link: 'https://lucaspzaranza.github.io/robots-rolodex/'
	},
	{
		id: 9,
		title: 'App de Lista de Tarefas',
		category: 'Aplicação Mobile',
		img: Tasks,
		techs: 'React Native',
		link: 'https://github.com/lucaspzaranza/offline-react-native-tasks'
	},
	{
		id: 10,
		title: 'Lambe Lambe (clone Instagram)',
		category: 'Aplicação Mobile',
		img: LambeLambe,
		techs: 'React Native',
		link: 'https://github.com/lucaspzaranza/lambe-lambe'
	},
];
