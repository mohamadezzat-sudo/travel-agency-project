import { Search, WhyBook, PopDests } from '@/components';
export const Home = () => {
	return (
		<main className='container mx-auto px-4 py-8 mb-auto'>
			<div className='space-y-16'>
				<Search />
				<WhyBook />
				<PopDests />
				</div>
			</main>
	);
};


