import { useRouter } from 'next/router';
const Linked = () => {
	const link = useRouter();
	console.log(link.query);
	return <div>Linked </div>;
};

export default Linked;
