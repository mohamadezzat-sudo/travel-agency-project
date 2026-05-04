import { destinations } from '../data/destinations';
import DestCard from '../components/DestCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Destinations = () => {
	return (
		<div className='flex flex-col min-h-screen'>
			<Navbar />
			<main className='container mx-auto px-4 py-8 mb-auto'>
				<div className='space-y-10 px-4 max-w-7xl mx-auto'>
					<section className='text-center space-y-2'>
						<h1 className='text-4xl font-bold text-primary'>
							Explore All Destinations
						</h1>
						<p className='text-lg text-base-content'>
							Discover exciting and affordable travel spots curated just for
							software engineering students.
						</p>
					</section>
					<section className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
						{destinations.map(({ title, image, text, slug }) => (
							<DestCard
								key={slug}
								title={title}
								image={image}
								text={text}
								slug={slug}
							/>
						))}
					</section>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default Destinations;
