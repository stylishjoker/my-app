import { useRouter } from 'next/router';

const Index = () => {
	const link = useRouter();
	console.log(link.query);
	return <div>index ID</div>;
};

export default Index;
