import { BlogCard } from "@/types/interfaces";
import Link from "next/link";

function Card({ id, category, author, title, comments }: BlogCard) {
  return (
    <>
      <Link
        className="bg-[#162A34] rounded-sm p-4"
        style={{ boxShadow: "0px 1px 5px 1px #ECECEB33" }}
        href={`/blog/${id}`}
      >
        <img src="/blogImg.svg" alt="blog image" className="mb-3 w-full" />
        <div className="mb-8">
          <span className="text-[#398DED] block">{category}</span>
          <span>{title}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {/* <img src="" alt="" /> */}
            <span className="text-sm">{author}</span>
          </div>
          <div className="flex gap-2">
            {/* <img src="" alt="" /> */}
            <span className="text-sm">{comments.length} نظر</span>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Card;
