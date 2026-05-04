import { destinations } from '../data/destinations';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SingleDest = () => {
	const slug = 'tokyo';

	const destination = destinations.find((d) => d.slug === slug);

	if (!destination) {
		return (
			<div className='flex flex-col min-h-screen'>
				<Navbar />
				<main className='container mx-auto px-4 py-8 mb-auto'>
					<div className='text-center py-20'>
						<h1 className='text-3xl font-bold text-error'>
							Destination Not Found
						</h1>
						<p className='text-base-content mt-2'>
							Sorry, we couldn't find the destination you're looking for.
						</p>
					</div>
				</main>
				<Footer />
			</div>
		);
	}
	return (
		<div className='flex flex-col min-h-screen'>
			<Navbar />
			<main className='container mx-auto px-4 py-8 mb-auto'>
				<div className='max-w-4xl mx-auto px-4 space-y-6'>
					<h1 className='text-4xl font-bold text-primary text-center'>
						{destination.title}
					</h1>
					<img
						src={destination.image}
						alt={destination.title}
						className='w-full h-80 object-cover rounded-box shadow-md'
					/>
					<p className='text-lg'>{destination.text}</p>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default SingleDest;
