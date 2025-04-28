import  {useRouter} from 'next/router';

export default function Home() {
    const router = useRouter();
    console.log(router); // { id: '123' }

    const { id } = router.query;


    return (
      <h1>Book {id}</h1>
    );
  }
  