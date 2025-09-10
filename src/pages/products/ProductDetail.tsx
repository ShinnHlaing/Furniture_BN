import { useParams } from "react-router";
function ProductDetail() {
  const { productId } = useParams();
  return <div>ProductDetail - {productId}</div>;
}

export default ProductDetail;
