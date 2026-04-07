import { notFound } from "next/navigation";

export default async function ProductReview(
    // productRev এর জায়গায় শুধু params লিখতে হবে
    { params }: { params: Promise<{ productId: string; reviewId: string }>; }
) 
{
    // এখানেও params কে await করতে হবে
    const { productId, reviewId } = await params;
    
    if(parseInt(reviewId) > 5) {
        notFound();
    };

    return (
        <div>
            <h1>Product Review : Product Number {productId}</h1>
            <p>This is a review of review {reviewId} for the product.</p>
        </div>
    );
}