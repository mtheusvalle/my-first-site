import Link from "next/link";

export default function Destaques({ data }) {
  return (
    <div className="container">
      {data.map((notice) => (
        <div>
          <Link href={"/post/" + notice.id} key={notice.id}>
            <a>
              <h2>{notice.title}</h2>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(`http://localhost:1337/noticias`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data,
    },
  };
}
