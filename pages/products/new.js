import ProductForm from "@/components/productForm";
import Layout from "@/components/layout";

export default function NewProduct() {
  return (
    <Layout>
      <h1>Add New Product</h1>
      <ProductForm />
    </Layout>
  );
}