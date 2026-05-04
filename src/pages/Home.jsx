import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Search from '../components/Search';
import WhyBook from '../components/WhyBook';
import PopDests from '../components/PopDests';

const Home = () => {
	return (
		<div className='flex flex-col min-h-screen'>
			<Navbar />
			<main className='container mx-auto px-4 py-8 mb-auto'>
				<div className='space-y-16'>
					<Search />
					<WhyBook />
					<PopDests />
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default Home;
