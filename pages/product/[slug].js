import React from "react";

export default function ProductDetail(props) {
  return (
    <div>
      <h1>Product Id</h1>
      <h2>{props.id}</h2>
    </div>
  );
}

export async function getStaticProps({ params }) {
    const id = params.slug;
    return {
        props: {
            id: id
        }
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { slug: '12' } },
        ],
        fallback: true,
    };
}
