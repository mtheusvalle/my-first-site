import Link from "next/link";

export default function Home({ data }) {
  return (
    <div className="container mt-5">
      {data.map((notice) => (
        <div className="row align-items-center card-notice" key={notice.id}>
          <div className="card-body col-md-6">
            <Link href={"/post/" + notice.id}>
              <a>
                <h5 className="card-title">{notice.title}</h5>
              </a>
            </Link>
            <p className="card-text">{notice.description}</p>
            <Link href={"/post/" + notice.id}>
              <a className="btn btn-primary">LEIA MAIS</a>
            </Link>
            <div className="mt-2">
              <span className="card-subtitle text-muted">
                Criado por {notice.create_by}
              </span>
            </div>
          </div>
          <div className="card-image col-md-6">
            <Link href={"/post/" + notice.id}>
              <img
                src={"http://localhost:1337" + notice.image[0].url}
                alt={notice.title}
                width="100%"
                style={{ padding: 20, cursor: "pointer" }}
              />
            </Link>
          </div>
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
    };
  }

  return {
    props: {
      data,
    },
  };
}
