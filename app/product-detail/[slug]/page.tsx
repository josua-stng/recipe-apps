import Image from "next/image";
import Link from "next/link";

const ProductDetail = async ({ params: { slug } }: any) => {
    const response = await fetch(`https://api.spoonacular.com/food/products/${slug}?apiKey=${process.env.APIKEY}`)
    const product = await response.json()
    console.log(product);
    return (
        <div>
        <p>test</p>
        <p>no id {slug}</p>
        </div>
    )
}
export default ProductDetail

