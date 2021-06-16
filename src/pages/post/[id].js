const Details = ({ details }) => {
  return (
    <div className="container">
      <div className="banner">
        <img src={"http://localhost:1337" + details.image[0].url} alt={details.title} />
      </div>
      <div className="title">
        <h1>{details.title}</h1>
      </div>
      <div className="content">
        <p>{details.description}</p>
      </div>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`http://localhost:1337/noticias/${id}`);
  const data = await res.json();

  return {
    props: { details: data },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:1337/noticias`);
  const data = await res.json();

  const paths = data.map((details) => {
    return {
      params: { id: details.id.toString() },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export default Details;
