

export default function ProductDetails({ params }) {
  return (
    <div>
      <h1 className="text-4xl fond-bold text-center mb-12 mt-8">
        Details about product item {params.ProductId}
      </h1>
    </div>
  );
}
